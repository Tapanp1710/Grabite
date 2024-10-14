const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');// Ensure reviews controller exists

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo); // Check if locationInfo is properly exported
router.get('/drinks', ctrlLocations.juices);
router.get('/soda', ctrlLocations.soda); // Ensure "softdrink" matches the exported function
router.get('/contact', ctrlLocations.contact);// Ensure this is exported correctly
router.get('/location/review/new', ctrlLocations.addReview);

/* Cart routes */
router.get('/cart', ctrlLocations.cart);
router.post('/cart/add', ctrlLocations.addToCart);
router.get('/cart/remove/:id', ctrlLocations.removeFromCart);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
