// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');



// Import routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
const petRoutes = require('./routes/petRoutes'); // Import pet routes
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Set Content Security Policy headers to secure the app
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com");
  next();
});


// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/admin', adminRoutes);

// Serve static files from the 'uploads' directory for image or file uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve static files from the React frontend build folder

app.use(express.static(path.join(__dirname,'build')));

// Catch-all handler to serve React frontend for unknown routes

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
