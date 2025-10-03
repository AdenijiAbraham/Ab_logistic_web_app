// frontend/src/registerLogComponents/LogAsAdmin.jsx

import logo from "../assets/zormo-logo (2).png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password }); 

    // Simulating authentication
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials!");
    }
  };

  return (
    <div className="container mt-5">
        <Link to="/" className="d-flex align-items-center gap-3 reg_link">
     <i className="fa-solid fa-arrow-left mb-2"></i>
     <h5>Back to Home</h5>
     </Link>
    <div className="container d-flex justify-content-center mt-5 ">
         
      <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
      <div className="d-flex flex-column align-items-center gep-3">
                            <img
                                id="company_logo"
                                src={logo}
                                alt=""
                              />
                            <h4 className="text-center mt-2 mb-4">Login As Admin</h4>
                            
                            </div>

        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login As Admin
        </button>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;

