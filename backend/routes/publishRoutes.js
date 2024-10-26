const express = require('express');
const multer = require('multer'); // For handling file uploads
const Pet = require('../models/petModel'); // Assuming you have a Pet model
const router = express.Router();
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/uploads'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Save file with unique name
  }
});

const upload = multer({ storage });

// POST route for publishing pets
router.post('/publish', upload.single('image'), async (req, res) => {
  try {
    const { name, age, breed } = req.body;
    const pet = new Pet({
      name,
      age,
      breed,
      image: `/uploads/${req.file.filename}` // Save the image path in the database
    });
    
    await pet.save();
    res.status(201).json({ message: 'Pet published successfully', pet });
  } catch (error) {
    res.status(500).json({ message: 'Failed to publish pet', error });
  }
});

module.exports = router;
