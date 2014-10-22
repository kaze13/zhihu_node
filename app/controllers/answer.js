var Answer = require('../models/answer.js');

exports.get = function(req, res) {
  Answer.get(req.params.id, function(err, answer) {
    res.json(answer);
  });
};

exports.getMuliple = function(req, res){
  Answer.getMuliple(req.params.page, req.params.count, function(err,answers){
    res.json(answers);
  })
};