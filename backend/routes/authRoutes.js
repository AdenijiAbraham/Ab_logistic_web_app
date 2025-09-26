const express = require('express');
const { registerUser, loginUser,registerVendor, loginVendor} = require('../controllers/authController');

const router = express.Router();


// Admin and User Registration and Login
router.post('/register', registerUser, (req, res)=>{
    res.json({ message: 'User Registered' });
});
router.post('/login', loginUser, (req, res)=>{
    res.json({ message: 'User logged in' });
});

// Vendor Registration
router.post('/vendor/register', registerVendor);
router.post('/vendor/login', loginVendor);

module.exports = router;