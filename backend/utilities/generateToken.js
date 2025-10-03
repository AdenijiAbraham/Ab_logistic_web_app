// backend/utilities/generateToken.js
const jwt = require('jsonwebtoken'); // Import JWT for token generation

// Function to generate a JWT token for authentication
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' }); // Token expires in 30 days
};
 
module.exports = generateToken; // Export function to use in authentication
 