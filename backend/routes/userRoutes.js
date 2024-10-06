const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).send('User already exists');

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save new user
  const user = new User({ username, email, password: hashedPassword });
  await user.save();

  res.status(201).send('User registered successfully');
});

// Other routes like login can remain here as well

module.exports = router;
