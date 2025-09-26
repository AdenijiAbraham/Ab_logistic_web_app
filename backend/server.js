//backend/server.js
require('dotenv').config({ path: './.env' });

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./dbConfig/db');

// route files
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5001;

app.use(cors({
    origin: [
        'http://localhost:5173',
    ],
    credentials: true,
}));

// routing
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/vendor', vendorRoutes);
app.use('/api/user', userRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});






// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./dbConfig/db')
// const dotenv = require('dotenv')
// //route files
// const authRoutes = require('./routes/authRoutes')
// const adminRoutes = require('./routes/adminRoutes')
// const vendorRoutes = require('./routes/vendorRoutes')
// const userRoutes = require('./routes/userRoutes')
 
// dotenv.config()

// // express app
// const app = express()
// app.use(express.json())
// app.use(cors())

// //port
// const port = 5001 || process.env.PORT;

// // routing
// app.use('/api/auth', authRoutes)
// app.use('/api/auth', adminRoutes)
// app.use('/api/auth', vendorRoutes)
// app.use('/api/auth', userRoutes)




// // Db configuration
// connectDB().then(()=>{
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`)
//     }) 
// })
// .catch((err)=>{
//     console.log(err)
// })

// // app is actively listening
// app.listen(()=>{
//     console.log('App is listening on', port)
// })





