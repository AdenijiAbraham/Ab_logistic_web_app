// frontend/src/registerLogComponents/LogAsAdmin.jsx
import logo from "../assets/zormo-logo (2).png";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext";



const Login = () => {
  const { login } = useAuth();
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
  const [role, setRole] = useState("user"); // Default role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log({ role, email, password });

  //   // Simulating authentication
  //   if (email === "admin@example.com" && password === "admin123" && role === "admin") {
  //     navigate("/admin-dashboard");
  //   } else if (email === "vendor@example.com" && password === "vendor123" && role === "vendor") {
  //     navigate("/vendor-dashboard");
  //   } else if (email === "user@example.com" && password === "user123" && role === "user") {
  //     navigate("/user-dashboard");
  //   } else {
  //     alert("Invalid credentials or role!");
  //   }
  // };

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const userType = role === 'vendor' ? 'vendor' : 'user';
    const userData = await login({ email, password }, userType);

    // Redirect based on role
    if (userData.role === 'admin') {
      navigate("/roles/admin");
    } else if (userData.role === 'user') {
      navigate("/roles/user");
    } else if (userData.role === 'vendor') {
      navigate("/roles/vender");
    }
  } catch (error) {
    setError(error.message || 'Login failed');
  } finally {
    setLoading(false);
  }
};
  return (
   <div className="container mt-5">
     <Link to="/" className="d-flex align-items-center gap-3 reg_link ">
    <i className="fa-solid fa-arrow-left mb-2"></i>
    <h5>Back to Home</h5>
    </Link>
    <div className="container d-flex justify-content-center mt-5 mt-lg-3">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        
        <div className="d-flex flex-column align-items-center gep-3">
                    <img
                        id="company_logo"
                        src={logo}
                        alt=""
                      />
                    <h4 className="text-center mt-2 mb-4">Login To Ab LOGISTICS</h4>
                    
                    </div>

        {/* Role Selection */}
        <div className="mb-3">
          <label className="form-label">Select Role</label>
          <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
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
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-3">
          Do not have an account? <Link className="reg"  to="/vendor-register">Register</Link>
        </p>
      </div>
    </div>
   </div>
  );
};

export default Login;
