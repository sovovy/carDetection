const mongoose = require('mongoose');

const DetectionnSchema = new mongoose.Schema({
  date: String,
  hour: Number,
  car: Number,
  suv: Number,
  truck: Number
});

module.exports = mongoose.model('detection', DetectionnSchema);