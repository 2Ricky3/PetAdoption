const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // To handle token creation for login
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

// User Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('User not found');

  // Check if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  // Generate a token (assuming JWT is used for authentication)
  const token = jwt.sign({ id: user._id, role: user.role }, 'jwtSecretKey', { expiresIn: '1h' });

  res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
});

module.exports = router;
