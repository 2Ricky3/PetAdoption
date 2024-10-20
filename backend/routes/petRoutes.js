const express = require('express');
const multer = require('multer');
const router = express.Router();
const Pet = require('../models/Pet');

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/publish', upload.single('image'), async (req, res) => {
  try {
    const newPet = new Pet({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      image: req.file.path // Save the image path
    });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: 'Failed to publish pet' });
  }
});

router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch pets' });
  }
});

module.exports = router;
