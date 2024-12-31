const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/Employee');
const session = require('express-session');

router.get('/', (req, res) => {
    console.log('hello');
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
                    res.json({ message: 'login successful' });
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

// for logout
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).json({ message: 'Error logging out' });
        } else {
            res.json({ message: 'logout successful' });
        }
    });
});

module.exports = router; // Export the router

