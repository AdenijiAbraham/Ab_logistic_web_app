//controllers/authController.js
const User = require("../models/userRoleModel");
const Vendor = require("../models/vendorModel");
const generateToken = require("../utilities/generateToken");

// Register new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id, user.role),
      msg: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while registering user" });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role),
        msg: "User logged in successfully",
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while logging in user" });
  }
};

// Vendor registration
const registerVendor = async (req, res) => {
  try {
    const { name, email, password, companyName, businessType } = req.body;

    const vendorExists = await Vendor.findOne({ email });
    if (vendorExists) return res.status(400).json({ message: "Vendor already exists" });

    const vendor = await Vendor.create({ name, email, password, companyName, businessType });
    res.status(201).json({
      _id: vendor.id,
      name: vendor.name,
      email: vendor.email,
      companyName: vendor.companyName,
      businessType: vendor.businessType,
      role: vendor.role,
      token: generateToken(vendor.id, vendor.role),
      msg: "Vendor registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while registering vendor" });
  }
};

// Login Vendor
const loginVendor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const vendor = await Vendor.findOne({ email });

    if (vendor && (await vendor.matchPassword(password))) {
      res.json({
        _id: vendor.id,
        name: vendor.name,
        email: vendor.email,
        companyName: vendor.companyName,
        businessType: vendor.businessType,
        role: vendor.role,
        token: generateToken(vendor.id, vendor.role),
        msg: "Vendor logged in successfully",
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while logging in vendor" });
  }
};

// Register Admin
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Admin already exists" });

    const admin = await User.create({ name, email, password, role: "admin" });
    res.status(201).json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin.id, admin.role),
      msg: "Admin registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while registering admin" });
  }
};

module.exports = { registerUser, loginUser, registerVendor, loginVendor, registerAdmin };











// const User = require('../models/userRoleModel');
// const Vendor = require('../models/vendorModel');
// const generateToken = require('../utilities/generateToken');

// // Register new user
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const user = await User.create({ name, email, password });

//     if (user) {
//       res.status(201).json({
//         _id: user.id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         token: generateToken(user.id),
//         msg: 'User registered successfully',
//       });
//     } else {
//       res.status(400).json({ message: 'Invalid user data' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error while registering user' });
//   }
// };

// // Login user
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user.id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         token: generateToken(user.id),
//         msg: 'User logged in successfully',
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error while logging in user' });
//   }
// };

// // Vendor registration
// const registerVendor = async (req, res) => {
//   try {
//     const { name, email, password, companyName, businessType } = req.body;

//     const vendorExists = await Vendor.findOne({ email });
//     if (vendorExists) return res.status(400).json({ message: 'Vendor already exists' });

//     const vendor = await Vendor.create({ name, email, password, companyName, businessType });

//     if (vendor) {
//       res.status(201).json({
//         _id: vendor.id,
//         name: vendor.name,
//         email: vendor.email,
//         companyName: vendor.companyName,
//         businessType: vendor.businessType,
//         role: vendor.role,
//         token: generateToken(vendor.id),
//         msg: 'Vendor registered successfully',
//       });
//     } else {
//       res.status(400).json({ message: 'Invalid vendor data' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error while registering vendor' });
//   }
// };

// // Register Admin (temporary route for development)
// const registerAdmin = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const admin = await User.create({ 
//       name, 
//       email, 
//       password,
//       role: 'admin' // Set role as admin
//     });

//     if (admin) {
//       res.status(201).json({
//         _id: admin.id,
//         name: admin.name,
//         email: admin.email,
//         role: admin.role,
//         token: generateToken(admin.id),
//         msg: 'Admin registered successfully',
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error while registering admin' });
//   }
// };



// // Login Vendor
// const loginVendor = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const vendor = await Vendor.findOne({ email });

//     if (vendor && (await vendor.matchPassword(password))) {
//       res.json({
//         _id: vendor.id,
//         name: vendor.name,
//         email: vendor.email,
//         companyName: vendor.companyName,
//         businessType: vendor.businessType,
//         role: vendor.role,
//         token: generateToken(vendor.id),
//         msg: 'Vendor logged in successfully',
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error while logging in vendor' });
//   }
// };

// module.exports = { registerUser, loginUser, registerVendor, loginVendor, registerAdmin };





// const userRoleModel = require('../models/userRoleModel'); // Import User model
// const bcrypt = require('bcryptjs'); // Import bcrypt for password comparison
// const generateToken = require('../utilities/generateToken'); // Import function to generate JWT
// const vendorModel = require('../models/vendorModel');

// // Register new user
// const registerUser = async (req, res) => {
//    try {
//     const { name, email, password } = req.body; // Extract details from request body

//     // Check if the email is already in use
//     const userExists = await userRoleModel.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     // Create new user in the database
//     const user = await userRoleModel.create({ name, email, password });

//     if (user) {
//         res.status(201).json({ 
//             _id: user.id, 
//             name: user.name, 
//             email: user.email, 
//             token: generateToken(user.id) // Generate JWT for authentication
//         });
//     } else {
//         res.status(400).json({ message: 'Invalid user data' }); // Error handling
//     }
//    } catch (error) {
//     console.log(error)
//    }
// };

// // vendor registration
// const registerVendor = async (req, res) => {
//    try {
//     const { name, email, password, companyName, businessType } = req.body;

//     // Check if vendor already exists
//     const vendorExists = await vendorModel.findOne({ email });
//     if (vendorExists) return res.status(400).json({ message: 'Vendor already exists' });

//     // Create new vendor
//     const vendor = await vendorModel.create({ name, email, password, companyName, businessType });

//     if (vendor) {
//         res.status(201).json({ 
//             _id: vendor.id, 
//             name: vendor.name, 
//             email: vendor.email, 
//             companyName: vendor.companyName,
//             businessType: vendor.businessType,
//             role: vendor.role,
//             token: generateToken(vendor.id)
//         });
//     } else {
//         res.status(400).json({ message: 'Invalid vendor data' });
//     }
//    } catch (error) {
//     console.log(error)
//    }
// };

// // Login user
// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body; // Extract credentials from request body
//         const user = await userRoleModel.findOne({ email }); // Find user by email
    
//         // Compare passwords and check if the user exists
//         if (user && (await bcrypt.compare(password, user.password))) {
//             res.json({ 
//                 _id: user.id, 
//                 name: user.name, 
//                 email: user.email, 
//                 token: generateToken(user.id) // Generate JWT for authentication
//             });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' }); // Unauthorized response
//         }
//     } catch (error) {
//         console.log(error)
//     }
// };


// // Login Vendor
// const loginVendor = async (req, res) => {
//    try {
//     const { email, password } = req.body;
//     const vendor = await vendorModel.findOne({ email });

//     if (vendor && (await bcrypt.compare(password, vendor.password))) {
//         res.json({ 
//             _id: vendor.id, 
//             name: vendor.name, 
//             email: vendor.email, 
//             companyName: vendor.companyName,
//             businessType: vendor.businessType,
//             role: vendor.role,
//             token: generateToken(vendor.id),
//             msg: "Vendor logged in successfully",
//         });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
//    } catch (error) {
//     console.log(error)
//    }
// };



// module.exports = { registerUser, loginUser, registerVendor, loginVendor}; // Export functions