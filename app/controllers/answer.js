var Answer = require('../models/answer.js');

exports.get = function(req, res) {
  Answer.get(req.params.id, function(err, answer) {
    res.json(answer);
  });
};

exports.getMulitiple = function(req, res){
  Answer.getMulitiple(req.params.page, req.params.count, function(err,answers){
    res.json(answers);
  })
};

exports.getMulitipleTitle = function(req, res){
  Answer.getMulitipleTitle(req.params.page, req.params.count, function(err, titles){
    res.json(titles);
  })
};