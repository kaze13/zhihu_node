
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var home = require('home');
var question = require('question');
var answer = require('answer');

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);

  app.get('/answer/:id', home.answer);

  app.get('/get/question/:id', question.get);

  app.get('/get/answer/:id', answer.get);

  app.get('/get/answers/:page/:count/', answer.getMulitipleTitle);

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
