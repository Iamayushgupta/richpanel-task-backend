const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// User login
router.post('/login', passport.authenticate('facebook', { failureRedirect: '/login-failed' }), (req, res) => {
  res.send('Login Successful');
});


// New user creation
router.post('/signup', async (req, res) => {
  try {
    const { facebookId, name, email, accessToken } = req.body;

    let user = await User.findOne({ facebookId });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ facebookId, name, email, accessToken });
    
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
