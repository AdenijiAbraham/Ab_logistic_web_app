//middlewares/authMiddlewares.js
const jwt = require('jsonwebtoken');
const userRoleModel = require('../models/userRoleModel');
const vendorModel = require('../models/vendorModel');

// Middleware to verify JWT and attach user/vendorModel to request
const protect = async (req, res, next) => {
    let token = req.headers.authorization; // Get token from request header

    if (token && token.startsWith('Bearer')) { // Check if token exists and starts with 'Bearer'
        try {
            const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Decode token

            // Check if user is a regular user/admin
            const user = await userRoleModel.findById(decoded.id).select('-password');
            if (user) {
                req.user = user; // Attach user to request
                return next(); // Continue to the next middleware
            }

            // Check if user is a vendorModel
            const vendorModel = await vendorModel.findById(decoded.id).select('-password');
            if (vendorModel) {
                req.vendorModel = vendorModel; // Attach vendorModel to request
                return next(); // Continue to the next middleware
            }

            res.status(401).json({ message: 'Not authorized, user/vendorModel not found' });
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// Middleware to allow only admins
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') { // Check if logged-in user is admin
        next(); // Continue if admin
    } else {
        res.status(403).json({ message: 'Access denied, admin only' });
    }
};

// Middleware to allow only vendorModels
const vendorModelOnly = (req, res, next) => {
    if (req.vendorModel) { // Check if logged-in user is vendorModel
        next(); // Continue if vendorModel
    } else {
        res.status(403).json({ message: 'Access denied, vendorModel only' });
    }
};

// Middleware to allow only regular users
const userOnly = (req, res, next) => {
    if (req.user && req.user.role === 'user') { // Check if logged-in user is a normal user
        next(); // Continue if user
    } else {
        res.status(403).json({ message: 'Access denied, users only' });
    }
};

module.exports = { protect, adminOnly, vendorModelOnly, userOnly }; 