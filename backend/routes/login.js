const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/Employee');
const session = require('express-session');

router.get('/', (req, res) => {

    res.send('Login Get route');
});

// POST route for handling login
router.post('/', (req, res) => {
    const { username, password } = req.body;

    // Check the user and the password
    EmployeeModel.findOne({ name: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    req.session.username = username;
                    req.session.views = 1;
                    res.json({ message: 'login successful'});
                    res.redirect('/');
                } else {
                    res.status(401).json({ message: 'invalid password' });
                }
            } else {
                res.status(401).json({ message: 'invalid username' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error' });
        });
});


router.post('/check', (req, res) => {
  EmployeeModel.findOne({ name: req.session.username })
        .then(user => {
       if (user) {
    res.status(200).json({ message: 'its login' + req.session.username });
  } else {
    res.status(401).json({ message: 'false' });
  }});
});


// for logout
router.post('/logout', (req, res) => {


    req.session.destroy(err => {
        if (err) {
            res.status(500).json({ message: 'Error logout' });
        } else {
            res.clearCookie('connect.sid'); 
            res.status(200).json({ message: 'logout successful' });
                   
        }
    });
});

module.exports = router; // Export the router

