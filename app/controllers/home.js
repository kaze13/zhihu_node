/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('home/index', {
    title: 'Zhihu restful service'
  });
};

