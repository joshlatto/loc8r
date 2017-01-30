/* GET 'home' page */
module.exports.homeList = function(req, res, next) {
  res.render('locations-list', { title: 'Loc8r Home', content: 'Welcome to the home page! This is where a list of locations will eventually go. Thanks for visiting!' });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res, next) {
  res.render('index', { title: 'Location info', content: 'This is a placeholder for the information page of a specific location.' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res, next) {
  res.render('index', { title: 'Add review', content: 'This is the placeholder for the page you\'ll use to add a review of a location' });
};
