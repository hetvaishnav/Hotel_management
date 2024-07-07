const mongoose = require('mongoose');

const roomschema = new mongoose.Schema({
  roomNo: {
    type: String,
    required: true,
    trim: true,
  },
  floorNo: {
    type: Number,
    required: true,
  },
  
});

const Room = mongoose.model('room', roomschema);

module.exports = Room;
