// frontend/src/registerLogComponents/VendorRegister.jsx
import logo from "../assets/zormo-logo (2).png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './vendor.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const VendorRegister = () => { 
  const { register } = useAuth();
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    registrationNumber: "",
    country: "",
    address: "",
    website: "",
    contactPerson: "",
    email: "",
    phone: "",
    altPhone: "",
    services: [],
    experience: "",
    regions: "",
    license: null,
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      services: checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value),
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, license: e.target.files[0] });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted", formData);
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    await register(formData, 'vendor');
    
    alert("Vendor registration successful!"); 
    navigate("/roles/vender");
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
      <div className="row justify-content-center mt-5 mt-lg-2">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <div className="d-flex flex-column align-items-center gep-3">
            <img
                id="company_logo"
                src={logo}
                alt=""
              />
            <h2 className="text-center mt-2 mb-4">Registration For Vendor</h2>
            
            </div>
            <form onSubmit={handleSubmit}>
              {/* Company Information */}
              <h4>Company Information</h4>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" name="companyName" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Business Type</label>
                <select className="form-control" name="businessType" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Importer">Importer</option>
                  <option value="Exporter">Exporter</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Registration Number</label>
                <input type="text" className="form-control" name="registrationNumber" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" name="country" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" name="address" onChange={handleChange} required></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Website</label>
                <input type="url" className="form-control" name="website" onChange={handleChange} />
              </div>
              
              {/* Contact Details */}
              <h4>Contact Details</h4>
              <div className="mb-3">
                <label className="form-label">Contact Person</label>
                <input type="text" className="form-control" name="contactPerson" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Alternate Phone</label>
                <input type="text" className="form-control" name="altPhone" onChange={handleChange} />
              </div>
              
              {/* Services */}
              <h4>Service Details</h4>
              <div className="mb-3">
                <label className="form-label">Services Offered</label><br />
                {['Air Freight', 'Sea Freight', 'Customs Clearance', 'Warehousing'].map((service) => (
                  <div className="form-check form-check-inline" key={service}>
                    <input className="form-check-input" type="checkbox" value={service} onChange={handleCheckboxChange} />
                    <label className="form-check-label">{service}</label>
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <label className="form-label">Upload License & Certifications</label>
                <input type="file" className="form-control" name="license" onChange={handleFileChange} required />
              </div>
              
              {/* Account Details */}
              <h4>Account Details</h4>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" name="username" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} required />
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Register</button>
              {/* Register Link */}
        <p className="text-center mt-3">
          Do not have an account? <Link className="reg" to="/login">Login</Link>
        </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
