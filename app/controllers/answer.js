var Answer = require('../models/answer.js');

exports.get = function(req, res) {
  console.log('get');
  Answer.get(req.params.id, function(err, answer) {
    res.json(answer);
  })
};