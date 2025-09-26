import "../CSS/airfreight.css";
import {Link} from 'react-router-dom'
const WareHousing = () => {
  return (
    <>
      <section id="air_freight" className="services_content">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold mb-4">OUR SERVICES</h2>
            {/* <h1 className='text-center mb-0 pb-0'>AIR FREIGHT</h1> */}
          </div>
        </div>

        <div className="video_container">
          <section className="position-relative mt-0 pt-0 hero vh-100 overflow-hidden">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
            >
              <source src="ship3 image" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="video-overlay"></div>
            Hero Content
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white head_text">
              {/* sSKIDE HEAD*/}
              <h1 id="" className="slidetext fw-bold">
              Ware Housing
              </h1>
              <p className="lead">Experience the Best</p>
              <button
                className="btn btn-primary btn-lg text-center hero-button"
                id="getstarted"
              >
                <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2">
                  {" "}
                  Get Started{" "}
                  <span>
                    <i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i>
                  </span>
                </div>
              </button>
            </div>
          </section>
        </div>

        <div className="air_contents mt-4 mt-lg-5 mb-4 mb-lg-5">
          <div className="container">
            <div className="row row-cols-1  row-cols-lg-2">
              <div className="col">
                <img
                  src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="img-fluid"
                />
                <p className="text-start mt-2">Stocking physical inventory for distribution or sale is the definition of warehousing. </p>
                <p className="text-start mt-3 mt-lg-5">Typically, warehouses are used to temporarily store products before shipping them to other locations or delivering them individually to end consumers.</p>
                <h3 className="text-start mt-3 mt-lg-5">Distribution & Warehousing</h3>
                <p className="text-start mt-2">We provide our clients with integrated logistics solutions, which include warehousing facilities. The layout of our warehouses is well thought out, and inventory management, security, and specialized storage systems are in place. The facility offers modern storage systems and material handling equipment, enabling the client to perform operations at high levels of efficiency..</p>
               
               <p className="mt-3 mt-lg-5">We have state-of-the-art warehouses that offer us large storage and packaging spaces. Our warehouse occupies a lot of space and is equipped with sophisticated security, inventory management, and storage systems. Through the deployment of the latest material handling equipment and sophisticated storage systems, we are able to provide reliable and safe warehousing services.</p>
                <h3>Characteristics</h3>
                
                <ul>
                  <li>Trustworthiness</li>
                  <li>Protected and safe</li>
                  <li>Effortless service. </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div className="col mt-4 mt-lg-0">
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed no-arrow "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <Link to="/air">AIR FREIGHT</Link>
                      </button>
                    </h2>
                 
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed no-arrow"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <Link to="/ocean">OCEAN FREIGHT</Link>
                      </button>
                    </h2>
                 
                  </div>
          
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed no-arrow"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <Link to="/road">ROAD FREIGHT</Link>
                      </button>
                    </h2>
                 
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed no-arrow"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        
                        <Link to="/cargomarineinsurance">CARGO MARINE INSURANCE</Link>
                      </button>
                    </h2>
                 
                  </div>


                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed no-arrow"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        
                        <Link to="/warehousing">WARE HOUSING</Link>
                      </button>
                    </h2>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed no-arrow"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        
                        <Link to="/customclearance">CUSTOM CLEARANCE</Link>
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WareHousing;
