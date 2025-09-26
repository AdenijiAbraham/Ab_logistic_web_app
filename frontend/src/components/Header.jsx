import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS (for modals, dropdowns, etc.)

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo";
const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <header id="header_part" className="position-fixed z-3 w-100">
        {/* <div className="logo_top">
          <img
            id="logo"
            src="http://zormologistics.com/wp-content/uploads/2022/02/zormo-logo.png"
            alt=""
          />
        </div> */}
        <nav className="navbar navbar-expand-lg navbar-light p-lg-3 ">
          <div className="container container_lg">
            <a className="navbar-brand" href="#">
               {/* <img
                id="logo2"
                src="http://zormologistics.com/wp-content/uploads/2022/02/zormo-logo.png"
                alt=""
              />  */}
               <a className="navbar-brand" href="#">
             <BrandLogo />
             </a> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav_items m-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li> */}

                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${
                      activeTab === "/" ? "active-tab" : "inactive-tab"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown" id="services_dropdown">
                  <Link
                    to="/services"
                    className={`nav-link dropdown-toggle ${
                      activeTab === "/services" ? "active-tab" : "inactive-tab"
                    }`}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/air" className="nav-link text-center">
                        AIR FREIGHT
                      </Link>
                    </li>
                    <li>
                      <Link to="/road" className="nav-link text-center">
                        ROAD FREIGHT
                      </Link>
                    </li>
                    <li>
                      <Link to="/ocean" className="nav-link text-center">
                        OCEAN FREIGHT
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/cargomarine" className="nav-link text-center">
                        CARGO MARINE INSURANCE
                      </Link>
                    </li>
                    <li>
                      <Link to="/warehousing" className="nav-link text-center">
                        WARE HOUSING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/customclearnace"
                        className="nav-link text-center"
                      >
                        CUSTOM CLEARANCE
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className={`nav-link ${
                      activeTab === "/blog" ? "active-tab" : "inactive-tab"
                    }`}
                  >
                    blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link ${
                      activeTab === "/about" ? "active-tab" : "inactive-tab"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={`nav-link ${
                      activeTab === "/contact" ? "active-tab" : "inactive-tab"
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                {/* DAHBOARD SECTION FOR TABLET / MOBILE*/}
                <div className="search gap-3 align-items-center d-flex d-lg-none ">
                  <li className="nav-item dropdown ">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-user user-icon cursor-pointer "></i>
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/login" className="nav-link ps-lg-3">
                          LOG IN
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" className="nav-link ps-lg-3">
                          {/* REGISTER FOR ADMIN/USER/VENDER */}

                          <li className="nav-item dropdown position-relative">
                            <button
                              className="nav-link dropdown-toggle bg-transparent border-0"
                              onClick={toggleDropdown}
                            >
                              Register
                            </button>
                          </li>

                          {/* -------------------------------------- */}
                        </Link>
                      </li>
                      <li>
                        <Link to="/warehousing" className="nav-link ps-lg-3">
                          LOG AS ADMIN
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <i className="fa-solid fa-magnifying-glass user-icon "></i>
                </div>
              </ul>
            </div>

            <div className="search gap-3 align-items-center d-lg-flex  d-none">
              {/* DAHBOARD SECTION */}
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user user-icon cursor-pointer "></i>
                </Link>
                <ul
                  className="dropdown-menu"
                  id="register_dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to="/login" className="nav-link ps-lg-3">
                      LOG IN
                    </Link>
                  </li>

                  {/* REGISTER FOR VENDOR / ADMIN */}
                  <li>
                    <Link to="/vendor-register" className="nav-link ps-lg-3">
                      REGISTER AS VENDOR
                    </Link>
                  </li>
                  <li>
                    <Link to="/user-register" className="nav-link ps-lg-3">REGISTER AS USER</Link>
                  </li>
                  <li>
                    <Link to="/admin-login" className="nav-link ps-lg-3">
                      LOG AS ADMIN
                    </Link>
                  </li>
                </ul>
              </li>

              <i className="fa-solid fa-magnifying-glass user-icon "></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
