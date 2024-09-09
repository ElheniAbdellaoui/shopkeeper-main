const express = require('express');
const router = express.Router();

// fetch the orders of a specific user
router.get('/get_order/:id');

// make a new order
router.post('/post_order/:id');
