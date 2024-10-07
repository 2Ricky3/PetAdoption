const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Route to get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
