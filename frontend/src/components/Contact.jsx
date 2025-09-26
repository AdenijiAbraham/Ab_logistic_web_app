import { useState } from "react";
import "../CSS/contact.css";
import image from '../assets/con_img.jpeg'
const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Valid email is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          setErrors(newErrors);
        }
      };



  return (
   <>
   <div className="container cont">
        <h2 className="mt-5 fw-bold">CONTACT US</h2>
        <h1 className="text-center">Request a free quote </h1>
        <p className="text-danger text-center fs-5">
            Submit Your Deatails
        </p>
       </div>
    <section className="contact">
        <img className="d-none d-lg-block" src={image} alt="" />
        <img id="mob" src="https://images.pexels.com/photos/1554648/pexels-photo-1554648.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-md-done" alt="" />
       <div className="form_container">
       <div className="contact-container">
      <h2 className="text-danger fw-bold">CONTACT US</h2>
      {submitted && <p className="success-message">Message Sent Successfully! ✅</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <label>Select A Freight</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* <div className="input-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div> */}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
       </div>

    </section>
   </>
  );
};

export default Contact;
