/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('index', {
    title: 'Zhihu restful service'
  });
};

exports.answer = function(req, res){
  res.render('answer');
}

