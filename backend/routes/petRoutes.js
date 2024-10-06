const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();

// Create a new pet
router.post('/', async (req, res) => {
  const { name, age, breed, description, postedBy } = req.body;

  const newPet = new Pet({ name, age, breed, description, postedBy });
  await newPet.save();

  res.status(201).send('Pet added');
});

// Get all pets
router.get('/', async (req, res) => {
  const pets = await Pet.find().populate('postedBy', 'username');
  res.status(200).json(pets);
});

module.exports = router;
