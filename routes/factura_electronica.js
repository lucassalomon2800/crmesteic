// routes/invoices.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('invoiceForm');
});

router.post('/generate', (req, res) => {
  const invoiceData = req.body;
  // Generate and save invoice
  res.redirect('/invoices');
});

module.exports = router;
