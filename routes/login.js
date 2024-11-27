// routes/appointments.js
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.render('index');
// Add a new appointment
router.post('/login', (req, res) => {
  const { username,password } = req.body;

  if (username === 'admin' && password === 'password'){
     res.redirect('/home');}
  else {
     res.status(401).send('Invalid credentials');}
});

module.exports = router;
