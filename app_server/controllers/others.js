
/* GET About page */
module.exports.about  = function(req, res, next) {
  res.render('generic-text', { title: 'About' , content: 'This is the place holder for the about page! Huzzah!.'});
}; 
