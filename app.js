// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/beautyCRM', { useNewUrlParser: true });

// Routes
   //appointment route
const appointmentRoutes = require('./routes/appointment');
app.use('/appointment', appointmentRoutes);

   // login and home route
const loginRouttes = require('./routes/login');
app.use('/',loginRouttes); 


// Start server
app.listen(3000,'0.0.0.0', () => console.log('CRM app running on port 3000'));
