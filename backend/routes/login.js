const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/Employee');

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
                    res.json({ message: 'login successful' });
                } else {
                    res.status(401).json({ message: 'invalid'+user.password });
                }
            } else {
                res.status(401).json({ message: 'invalid'});
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'server error' });
        });
});

module.exports = router; // Export the router
