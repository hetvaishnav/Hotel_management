const mongoose = require('mongoose');
require('./roommodel')
const studentSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
