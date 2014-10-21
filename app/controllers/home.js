/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('index', {
    title: 'Zhihu restful service'
  });
};

