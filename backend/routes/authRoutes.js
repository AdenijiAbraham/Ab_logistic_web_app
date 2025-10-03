//backend/routes/authRoutes.js
const express = require("express");
const {
  registerUser,
  loginUser,
  registerVendor,
  loginVendor,
  registerAdmin,
} = require("../controllers/authController");

const router = express.Router();

// User
router.post("/register", registerUser);
router.post("/login", loginUser);

// Vendor
router.post("/vendor/register", registerVendor);
router.post("/vendor/login", loginVendor);

// Admin (only for setup/dev)
router.post("/admin/register", registerAdmin);

module.exports = router;






// const express = require('express');
// const { registerUser, loginUser,registerVendor, loginVendor} = require('../controllers/authController');

// const router = express.Router();


// // Admin and User Registration and Login
// router.post('/register', registerUser, (req, res)=>{
//     res.json({ message: 'User Registered' });
// });
// router.post('/login', loginUser, (req, res)=>{
//     res.json({ message: 'User logged in' });
// });

// // Vendor Registration
// router.post('/vendor/register', registerVendor);
// router.post('/vendor/login', loginVendor);

// // Admin Registration (for development/setup)
// //router.post('/admin/register', registerAdmin);

// module.exports = router;