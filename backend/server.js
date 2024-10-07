const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://admin:2003@cluster0.nwsv0.mongodb.net/petAdoptionDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
