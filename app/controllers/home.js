var Answer = require('../models/answer.js');

exports.index = function(req, res) {
  res.render('index', {
    title: 'Zhihu restful service'
  });
};

exports.answer = function(req, res) {
  Answer.get(req.params.id, function(err, answer) {
    console.log(answer)
    res.render('answer', {
      answer: answer
    });
  })

};

