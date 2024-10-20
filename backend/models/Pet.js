const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  image: String, // Path to the image file
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
