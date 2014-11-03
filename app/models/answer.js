/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function Answer(answer) {
  this._id = answer._id;
  this.username = answer.username;
  this.url = answer.url;
  this.ask_title = answer.ask_title;
  this.ask_url = answer.ask_url;
  this.agree_num = answer.agree_num;
  this.summary = answer.summary;
  this.content = answer.content;
  this.comment_num = answer.comment_num;
  this.last_update_time = answer.last_update_time;
}

/**
 * Answer schema
 */

var AnswerSchema = new Schema({
  _id: { type: String },
  username: { type: String, default: '' },
  url: { type: String, default: '' },
  ask_title: { type: String, default: '' },
  ask_url: { type: String, default: '' },
  agree_num: { type: Number, default: '' },
  summary: { type: String, default: '' },
  content: { type: String, default: '' },
  comment_num: { type: Number, default: '' },
  last_update_time: { type: String, default: '' }
}, {
  collection: 'zh_answer'
});

/**
 * Register
 */

var answerModel = mongoose.model('Answer', AnswerSchema);

/**
 * Methods
 */

Answer.get = function(id, callback) {
  answerModel.findOne({_id: id}, function(err, answer) {
    callback(err, answer);
  })
};

Answer.getMulitiple = function(page, count, callback) {
  answerModel.count({}, function(err, total) {
    answerModel.find().limit(count).skip((page - 1) * count)
      .exec(function(err, answers) {
        callback(err, answers, total);
      })
  })
};

Answer.getMulitipleTitle = function(page, count, callback) {
  answerModel.count({}, function(err, total) {
    answerModel.find().select('_id ask_title agree_num summary').limit(count).skip((page - 1) * count).sort({agree_num: -1})
      .exec(function(err, titles) {
        callback(err, titles, total);
      })
  })
};

Answer.findInTitle = function(keyword, callback){
  answerModel.find()
};

module.exports = Answer;




