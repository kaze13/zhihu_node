/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function Question(question) {
  this._id = question._id;
  this.username = question.username;
  this.url = question.url;
  this.view_num = question.view_num;
  this.title = question.title;
  this.comment_count = question.comment_count;
  this.recent_active_time = question.recent_active_time;
  this.answer_num = question.answer_num;
  this.follower_num = question.follower_num;
}

/**
 * Question schema
 */

var QuestionSchema = new Schema({
  _id: { type: String },
  username: { type: String, default: '' },
  url: { type: String, default: '' },
  view_num: { type: Number, default: '' },
  title: { type: String, default: '' },
  comment_count: { type: Number, default: '' },
  recent_active_time: { type: String, default: '' },
  answer_num: { type: Number, default: '' },
  follower_num: { type: Number, default: '' }
}, {
  collection: 'zh_ask'
});

/**
 * Register
 */

var questionModel = mongoose.model('Question', QuestionSchema);

/**
 * Methods
 */

Question.get = function(id, callback) {
  questionModel.findOne({_id: id}, function(err, question) {
    callback(err, question);
  })
};

module.exports = Question;




