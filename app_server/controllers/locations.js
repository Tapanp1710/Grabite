// app_server/controllers/locations.js

const homelist = (req, res) => {
   res.render('home', { title: 'Home' });
};

const locationInfo = (req, res) => {
   res.render('menu', { title: 'Menu' }); 
}; // Added closing brace

const soda = (req, res) => { // Changed to camelCase
   res.render('soda', { title: 'Softdrinks' }); 
};

const juices = (req, res) => {
   res.render('drinks', { title: 'Juices' }); 
};

const addReview = (req, res) => {
   res.render('newReview', { title: 'Add review' });
};

const contact = (req, res) => {
   res.render('contact', { title: 'Contact Us' });
};

const cart = (req, res) => {
   const cartItems = req.session.cart || []; // Ensure you are getting cart items
   res.render('cart', { title: 'Your Cart', cartItems }); // Pass title and cart items
};

const addToCart = (req, res) => {
   const item = req.body; // Assuming item data is sent in request body
   req.session.cart = req.session.cart || [];
   req.session.cart.push(item); // Add the item to the cart
   res.redirect('/cart');
};

const removeFromCart = (req, res) => {
   const itemId = req.params.id;
   req.session.cart = req.session.cart.filter(item => item.id !== itemId); // Remove item from cart
   res.redirect('/cart');
};

// Export the methods
module.exports = {
   homelist,
   locationInfo,
   addReview,
   contact,
   cart,
   addToCart,
   removeFromCart,
   soda, // Changed to match the new name
   juices
};
