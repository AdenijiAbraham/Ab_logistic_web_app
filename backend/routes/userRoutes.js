//routes/userRoutes.js
const express = require('express'); 
const { protect, userOnly } = require('../middlewares/authMiddlewares');
const { registerUser } = require('../controllers/authController');

const router = express.Router();


router.get('/user-dashboard', protect, userOnly, (req, res) => {
    res.json({ message: 'Welcome user' });
});

module.exports = router;
