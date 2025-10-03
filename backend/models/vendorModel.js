// backend/models/vendorModel.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    businessType: { type: String, required: true },
    role: { type: String, default: "vendor" },
  },
  { timestamps: true }
);

// Hash password before save
vendorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
vendorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Vendor", vendorSchema);
















// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const vendorSchema = new mongoose.Schema({ 
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   companyName: { type: String, required: true },
//   businessType: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ['vendor'],
//     default: 'vendor'
//   }
// });

// // Hash password before saving
// vendorSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next(); 
// });

// // Compare entered password with hashed password in DB
// vendorSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('Vendor', vendorSchema);








// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const vendorSchema = new mongoose.Schema({
//     name: { type: String, required: true }, 
//     email: { type: String, required: true, unique: true }, 
//     password: { type: String, required: true }, 
//     companyName: { type: String, required: true }, 
//     businessType: { type: String, required: true }, 
//     role: {
//         type: String,
//         enum: ['vendor'],
//         default: 'vendor'
//     }
// });

// // Hash password before saving
// vendorSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next(); 

//     const salt = await bcrypt.genSalt(10); 
//     this.password = await bcrypt.hash(this.password, salt); 
//     next();
// });

// module.exports = mongoose.model('Vendor', vendorSchema);