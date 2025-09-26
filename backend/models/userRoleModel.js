const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String,  
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  password: { type: String, required: true, minlength: 6 },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

// Hash password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if password changed

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Add a method to compare passwords (for login)
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);







// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true }, // Name of the user
//     email: { type: String, required: true, unique: true }, // Unique email
//     password: { type: String, required: true }, // Encrypted password
//     role : {
//         type : String,
//         enum : ['user', 'admin'],
//         default : 'user'
//     }
// })

// // Hash password before saving the user to the database
// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next(); // If password is not changed, skip hashing

//     const salt = await bcrypt.genSalt(10); // Generate salt for hashing
//     this.password = await bcrypt.hash(this.password, salt); // Hash password
//     next(); // Move to next middleware
// });

// module.exports = mongoose.model('User', userSchema); // Export User model