// frontend/src/authComponents/AuthRegister.js
import { auth } from "../firebase/firebase.config";

const isRegister = false;
const AuthPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Fix: Correct validation condition
    if (!formData.email || !formData.password || (isRegister && !formData.name)) {
      setError("All fields are required!");
      return;
    }

    console.log("Submitted Data:", formData);
    alert(isRegister ? "Registration Successful" : "Login Successful");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">{isRegister ? "Register" : "Login"}</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          {isRegister && (
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select className="form-select" name="role" value={formData.role} onChange={handleChange}>
                <option value="user">user</option>
                {/* <option value="admin">Admin</option> */}
                <option value="vendor">Vendor</option>
              </select>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <div className="text-center mt-3">
          {isRegister ? (
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          ) : (
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
