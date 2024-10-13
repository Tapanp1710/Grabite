const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlReviews = require('../controllers/reviews'); // Ensure reviews controller exists

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo); // Check if locationInfo is properly exported
router.get('/drinks', ctrlLocations.juices);
router.get('/softdrinks', ctrlLocations.softdrink); // Ensure "softdrink" matches the exported function
router.get('/contact', ctrlLocations.contact);
router.get('/location/review/new', ctrlReviews.getReviews); // Ensure this is exported correctly
router.post('/location/review', ctrlReviews.submitReview);

/* Cart routes */
router.get('/cart', ctrlLocations.cart);
router.post('/cart/add', ctrlLocations.addToCart);
router.get('/cart/remove/:id', ctrlLocations.removeFromCart);

/* Other pages */
router.get('/about', ctrlOthers.about);

/* Reviews API */
router.get('/api/reviews', ctrlReviews.getReviews);
router.post('/api/reviews', ctrlReviews.submitReview);

module.exports = router;
