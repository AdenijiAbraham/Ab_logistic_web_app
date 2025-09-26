//routes/vendorRoutes.js 
const express = require('express');
const { protect, vendorModelOnly } = require('../middlewares/authMiddlewares');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();


router.get('/vendor-dashboard', protect, vendorModelOnly, (req, res) => {
    res.json({ message: 'Welcome Vendor' });
});

module.exports = router;
