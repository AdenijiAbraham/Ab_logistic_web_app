const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
console.log('MONGO_URI:', uri); // Add this line to debug

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('DB connected');
  } catch (error) {
    console.log('Db is not connected error occurred', error);
  } 
};

module.exports = connectDB;