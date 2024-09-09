const {check, validationResult} = require('express-validator');

exports.registerRules = () => [
  check('name', 'this filed is required').notEmpty(),
  check('email', 'this field is required').notEmpty(),
  check('email', 'this field should be a valid email').isEmail(),
  check('password', 'this field should contain at least 6 characters').isLength(
    {min: 6}
  ),
];

exports.loginRules = () => [
  check('email', 'this field is required').notEmpty(),
  check('email', 'this field should be a valid email').isEmail(),
  check('passowrd', 'this field is required').notEmpty(),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({errors: errors.array()});
};
