//routes/adminRoutes.js
const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddlewares');
const {registerUser, loginUser} = require('../controllers/authController');
const { getAllUsers, getAllVendors } = require('../controllers/adminController');

const router = express.Router();

router.get('/admin-dashboard', protect, adminOnly, (req, res) => {
    res.json({ message: 'Welcome Admin' });
});
// get all users 
router.get('/admin-getusers', protect, adminOnly, getAllUsers)

// get all users 
router.get('/admin-getvendors', protect, adminOnly, getAllVendors)

module.exports = router;