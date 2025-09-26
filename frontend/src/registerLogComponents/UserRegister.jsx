// frontend/src/registerLogComponents/UserRegister.jsx
import logo from "../assets/zormo-logo (2).png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/register.css";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const { register } = useAuth();
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

// const handleRegister = (e) => {
//   e.preventDefault();
//   console.log({ fullName, address, email, phone, whatsapp, password, role });
//   alert("Registration successful!");
//   navigate("/login"); 
// };
  const handleRegister = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    await register({
      name: fullName,
      email: email,
      password: password
    }, 'user');
    
    alert("Registration successful!");
    navigate("/dashboard");
  } catch (error) {
    setError(error.message || 'Registration failed');
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
      <div className="container register mt-5 mt-lg-3 d-flex justify-content-center ">
        <div className="card p-4 shadow-lg">
          <div className="d-flex flex-column align-items-center gep-3">
            <img id="company_logo" src={logo} alt="" />
            <h2 className="text-center mt-2">Login To Ab LOGISTICS</h2>
            <p className="text_as_user mb-4">Login As User</p>
          </div>

          <form onSubmit={handleRegister}>
            {error && <div className="alert alert-danger">{error}</div>} 
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">WhatsApp Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter WhatsApp number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
              />
            </div>

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

            <div className="mb-3">
              <label className="form-label">Select Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
