// routes/health.js
const express = require('express');
const router = express.Router();

router.get('/form', (req, res) => {
  res.render('healthForm');
});

router.post('/form', (req, res) => {
  // Save health form data to DB
  res.redirect('/thank-you');
});

module.exports = router;
