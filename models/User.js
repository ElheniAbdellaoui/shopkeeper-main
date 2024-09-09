const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  password: String,
  registerDate: {
    type: Date,
    default: Date.now,
  },
  // cart: {
  //   type: Array,
  //   default: [],
  // },
  userRole: {
    type: String,
    default: 'User',
    roles: ['User', 'Admin'],
  },
});

module.exports = User = mongoose.model('User', userSchema);
