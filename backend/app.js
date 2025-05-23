// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cookie-parser'));
// Session Configuration
app.use(
    session({
        secret: "hola",
        resave: false,
        saveUninitialized:true ,
        cookie:{secure:false},    
        store: MongoStore.create({
            mongoUrl: 'mongodb://localhost:27017/crmesteic',
            collectionName: 'sessions',
        }),
    })
);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crmesteic');

//Routes
const loginRoutes = require('./routes/login');
console.log('login',loginRoutes);
//app.use('/api/login', loginRoutes);

const accountRoutes = require('./routes/account');
//
//app.use('/api/account',accountRoutes);

const appointmentRoutes = require('./routes/appointment'); 

//app.use('/appointment', appointmentRoutes);


// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`CRM app running on port ${PORT}`));
