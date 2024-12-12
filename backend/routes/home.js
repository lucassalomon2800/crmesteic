const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home');
});


router.get('/customers', (req, res) => {
  res.send('<h1>Add Customer Data Page (Under Construction)</h1>');
});

// Schedule Appointment Page
router.get('/appointment', (req, res) => {
  res.send('<h1>Schedule Appointment Page (Under Construction)</h1>');
});

// View Information Page
router.get('/view-info', (req, res) => {
  res.send('<h1>View Information Page (Under Construction)</h1>');
});


module.exports = router;  // Export the router
