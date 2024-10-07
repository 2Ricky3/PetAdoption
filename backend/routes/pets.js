const express = require('express');
const multer = require('multer');
const path = require('path');
const Pet = require('../models/Pet');  // Assuming you have a Pet model

const router = express.Router();

// Set up multer storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Directory for saving uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Unique filename with timestamp
  }
});

const upload = multer({ storage: storage });

// POST route to handle publishing pets with images
router.post('/api/pets', upload.single('image'), async (req, res) => {
  try {
    const { name, age, breed } = req.body;

    const pet = new Pet({
      name,
      age,
      breed,
      image: req.file.filename  // Save the filename of the image
    });

    await pet.save();
    res.status(201).json({ message: 'Pet published successfully', pet });
  } catch (error) {
    console.error('Error publishing pet:', error);
    res.status(500).json({ message: 'Failed to publish pet' });
  }
});

// GET route to retrieve the list of pets
router.get('/api/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ message: 'Failed to fetch pets' });
  }
});

module.exports = router;
