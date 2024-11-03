const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Pet = require('../models/Pet');

// Use environment variable for admin password
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Admin Login Route
router.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        return res.status(200).json({ message: 'Admin access granted' });
    } else {
        return res.status(401).json({ message: 'Incorrect password' });
    }
});

// Fetch all users (Admin access)
router.get('/users', (req, res) => {
    const { password } = req.query;
    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(500).json({ error: 'Failed to fetch users' }));
});

// Fetch all pets (Admin access)
router.get('/pets', (req, res) => {
    const { password } = req.query;
    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    Pet.find()
        .then(pets => res.json(pets))
        .catch(error => res.status(500).json({ error: 'Failed to fetch pets' }));
});

// Delete User (Admin Access)
router.delete('/users/:id', (req, res) => {
    const { password } = req.query;
    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: 'User deleted successfully' }))
        .catch(err => res.status(500).json({ message: 'Error deleting user' }));
});

// Delete Pet (Admin Access)
router.delete('/pets/:id', (req, res) => {
    const { password } = req.query;
    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    Pet.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: 'Pet deleted successfully' }))
        .catch(err => res.status(500).json({ message: 'Error deleting pet' }));
});

module.exports = router;
