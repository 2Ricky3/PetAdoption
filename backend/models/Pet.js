const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  breed: { type: String, required: true },
  image: { type: String, required: true }  // Store the image filename
});

module.exports = mongoose.model('Pet', PetSchema);
