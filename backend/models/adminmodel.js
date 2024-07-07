const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const admin = mongoose.model('admin', adminschema);

module.exports = admin;
