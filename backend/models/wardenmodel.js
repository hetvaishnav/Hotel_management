const mongoose = require('mongoose');

const wardenschema = new mongoose.Schema({
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
  acno:{
    type:Number,
    required:true,
  },
  salary: {
    type: Number,
    required: true,
  },
  password:{
    type:String,
    require:true,
  }
 
});

const warden = mongoose.model('warden', wardenschema);

module.exports = warden;
