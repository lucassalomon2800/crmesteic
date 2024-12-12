const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('hello');
    res.send('Login Get route');
});


// POST route for handling login
router.post('/', (req, res) => {
  const { username, password } = req.body;  
  if (username === 'admin' && password === 'password') {
    res.redirect('/home');
  } else {
    res.render('index',{ check :'Credenciales invalidas'});
  }
});

module.exports = router;  // Export the router
