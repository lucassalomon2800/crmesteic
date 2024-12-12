// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware 
// app.use(bodyParser.json());
app.use(cors());

// Serve static files from 'public' directory
 app.use(express.static(path.join(__dirname, '../frontend/build')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/beautyCRM', { useNewUrlParser: true });

// Dummie api endpoint
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../frontend/build','index.html')); // Render the 'index.ejs' file
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('CRM app running on port 3000'));
