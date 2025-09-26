import "../CSS/footer.css";
import logo from "../assets/zormo-logo (2).png";
import sjtech from "../assets/sj.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer" className="">
        {/* <div className="container">
            <div className="row">
                <img src="http://zormologistics.com/wp-content/uploads/2022/02/zormo-logo.png" alt="" />
            </div>
        </div>
    </section>
    <section id='footer_two'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, vitae. */}

        <footer className="bg-dark text-light pt-4">
          <div className="container">
            <div className="footer_img pt-5">
              <img src={logo} alt="" />
            </div>
            <div className="row">
              {/* Brand Section */}
              <div className="col-md-4">
                <h4>
                  <span className="text-danger mt-2">Ab</span>
                  <span id="llp">Logistics LTD</span>
                </h4>
                {/* <div className="footer_img">
                <img src={logo} alt="" />
                </div> */}
                <p>Building quality services with love & passion.</p>
              </div>

              {/* Quick Links */}
              {/* <div className="col-md-4">
                <h5 className="text_footer">Quick Links</h5>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </div> */}

              
            {/* Quick Links */}
            <div className="col-md-4 capitalize">
              <h5 className="text_footer">Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink to="/" end className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
              </ul>
            </div>

              {/* Social Media */}
              <div className="col-md-4">
                <h5 className="text_footer">Follow Us</h5>
                <div className="d-flex gap-3 mt-1 mt-g-4">
                  <i className="fa-brands fa-facebook text-white"></i>
                  <i className="fa-brands fa-whatsapp text-white"></i>
                  <i className="fa-brands fa-linkedin-in text-white"></i>
                  <i className="fa-brands fa-twitter text-white"></i>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="text-center d-flex align-items-center justify-content-center pb-5 copyight mt-4">
              <img src={sjtech} alt="" />
              <p className="mb-0 ms-2">
                {" "}
                <span className="fw-bold">AbTech_99</span>.   All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
