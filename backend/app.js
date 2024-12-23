// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend:true}));

// Routes
const loginRoutes = require('./routes/login');
app.use('/api/login', loginRoutes);
// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/crmestei', { useNewUrlParser: true });

// Serve React fronted in production

if (process.env.NODE_ENV === 'production') {
 app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}


// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('CRM app running on port 5000'));
