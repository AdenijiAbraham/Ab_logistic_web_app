// adminController.js
const userRoleModel = require('../models/userRoleModel');
const vendorModel = require('../models/vendorModel'); // Vendor Model

// Get All Users (Admin Only)
const getAllUsers = async (req, res) => {
    try {
        const users = await userRoleModel.find({}, '-password'); // Exclude passwords
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get All  Vendors (Admin Only)
const getAllVendors = async (req, res) => {
    try {
        const vendors = await vendorModel.find({}, '-password'); // Exclude passwords
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { getAllUsers, getAllVendors };
