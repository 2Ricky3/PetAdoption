const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
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

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/pets', petRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
