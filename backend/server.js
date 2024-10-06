const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());  
app.use(cors());  

mongoose.connect('mongodb+srv://admin:2003@cluster0.nwsv0.mongodb.net/petAdoptionDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => console.error('Connection error', err));


app.listen(5000, () => {
  console.log('Server running on port 5000');
});

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

const petRoutes = require('./routes/petRoutes');

app.use('/api/pets', petRoutes);
