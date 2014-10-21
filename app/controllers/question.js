var Question = require('../models/question.js');

exports.get = function(req, res) {
  console.log('get');
  Question.get(req.params.id, function(err, question) {
    res.json(question);
  })
};