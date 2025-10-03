// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCKdc1dYcj80Dfpx_D5Mo1Z2Qb651Ppmuw",
//   authDomain: "ab-logistics-c8be3.firebaseapp.com",
//   projectId: "ab-logistics-c8be3",
//   storageBucket: "ab-logistics-c8be3.firebasestorage.app",
//   messagingSenderId: "393127437647",
//   appId: "1:393127437647:web:41a6b549a3f76fdcd7513a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);