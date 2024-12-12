// routes/appointments.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find();
  res.render('appointment', { appointments });
});

// Add a new appointment
router.post('/add', async (req, res) => {
  const { clientName, date, service, notes } = req.body;
  const appointment = new Appointment({ clientName, date, service, notes });
  await appointment.save();
  res.redirect('/appointment');
});

module.exports = router;
