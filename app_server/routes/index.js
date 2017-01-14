var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


/* Routes for locations pages. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Routes for other pages. */
router.get('/about', ctrlOthers.about);

module.exports = router;
