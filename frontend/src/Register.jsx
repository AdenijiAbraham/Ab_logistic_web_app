// frontend/src/Register.jsx
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/register.css'
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const {registerUser, SignInWithGoogle} = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "", 
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


      const handleGoogleSignIn = async () =>{
       try {
           await SignInWithGoogle()
           alert("Login successful")
           navigate("/")
       } catch (error) {
         setMessage("provide a valid email and password")
        console.error(error)
       }
  }


  return (
    <div id="register" className="reg">
      <div  className="register-container d-flex align-items-center justify-content-center">
      <div className="register-card p-4">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Register As</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <button type="submit" className="btn btn-secondary w-100">Register</button>
        </form>
                                      {/* google sign in*/} 
<div className='mt-4'>
  <div className='row'>
    <div className='col-6'>
      <button onClick={handleGoogleSignIn}
       className='btn btn-secondary w-100 d-flex align-items-center justify-content-center'>
        <FaGoogle className='me-2' />
        Sign in with google
      </button>
    </div>
    <div className='col-6'>
      <button onClick={() => navigate("/login")}
       className='btn btn-secondary w-100 d-flex align-items-center justify-content-center'>
        <MdEmail className='me-2' />
        Login with Email
      </button>
    </div>
  </div>
</div>
                
      </div>
    </div>
    </div>
  );
};

export default Register;
