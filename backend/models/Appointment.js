// models/Appointment.js
const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
  clientName: String,
  date: Date,
  service: String,
  notes: String,
});
module.exports = mongoose.model('Appointment', AppointmentSchema);
