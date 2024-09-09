const express = require('express');
const {
  delete_item,
  add_cart_item,
  get_cart_items,
} = require('../controllers/cart.controller');
const isAuth = require('../middleware/auth');

const router = express.Router();

// fetch the items in the cart of a particular user
router.get('/get_cart/:id', isAuth, get_cart_items);

// add items to the user's cart
router.post('/add_cart/:id', isAuth, add_cart_item);

// delete a specific item from a specific user's cart
router.delete('/delete_cart/:userId/:itemId', isAuth, delete_item);

module.exports = router;
