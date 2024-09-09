const express = require('express');
const {Register, Login, getUser} = require('../controllers/user.controller');
const isAuth = require('../middleware/auth');
const {
  registerRules,
  validator,
  loginRules,
} = require('../middleware/validator');
const router = express.Router();

router.post('/register', registerRules(), validator, Register);
router.post('/login', loginRules(), Login);
router.get('/get_user', isAuth, getUser);
module.exports = router;
