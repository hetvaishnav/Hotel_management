const mongoose = require('mongoose');

const empschema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  emptype: {
    type: String,
    required: true,
  },
  acno:{
    type:Number,
    required:true,
  },
  salary: {
    type: Number,
    required: true,
  },
 
 
});

const employee = mongoose.model('employee', empschema);

module.exports = employee;
