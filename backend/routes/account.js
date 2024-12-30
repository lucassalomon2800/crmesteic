const express = require('express');
const router = express.Router();
const db = require('../models/Employee'); // Assume this is your database connection

// Route to get account data
router.get('/account', async (req, res) => {
  try {
    const accountData = await db.getAccountData(); // Replace with your actual database query
    res.json(accountData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve account data' });
  }
});

module.exports = router;
