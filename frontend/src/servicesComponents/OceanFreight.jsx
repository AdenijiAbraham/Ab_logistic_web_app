import "../CSS/airfreight.css";
import {Link} from 'react-router-dom'
const OceanFreight = () => {
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
              <source src="ship" alt="ship image" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="video-overlay"></div>
            Hero Content
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white head_text">
              {/* sSKIDE HEAD*/}
              <h1 id="" className="slidetext fw-bold">
                Ocean Freight
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
                  src="https://images.pexels.com/photos/3278012/pexels-photo-3278012.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="img-fluid"
                />
                <p className="text-start mt-2">Sea freight refers to the method of transporting large loads of cargo by water – placing cargo </p>
                <p className="text-start mt-3 mt-lg-5"> in large containers that are loaded onto ships. Generally speaking, shipments weighing more than 100kg or consisting of multiple cartons will be sent by sea freight. Simple restrictions vary by country, but most items are allowed.</p>
                <h3 className="text-start mt-3 mt-lg-5">Shipping (Ocean) Freight Forwarding</h3>
                <p className="text-start mt-2">We offer a full range of ocean freight forwarding services. We provide ocean freight forwarding services for full container loads (FCL) and less than a container load (LCL) to and from most regions of the world. Using our ocean freight services, we can handle a wide variety of cargo, from Personal/Household Effects, to fast-moving consumer products, to Industrial/Construction/Engineering equipment, and Ships spare parts.</p>
                <p className="mt-3 mt-lg-5">The network of our associates and agents in more than 200 countries ensures timely customs clearance and delivery.</p>
                <h3 className="">The following are some of the services we offer for sea freight forwarding</h3>
                <ul>
                  <li>Forwarder of sea freight</li>
                  <li>Services related to warehousing, distribution, and delivery</li>
                  <li>Delivery from door to door</li>
                  <li>Brokerage tailored to your needs</li>
                  <li>The L.C.L. Consolidation</li>
                  <li>System for tracking follow-up orders</li>
                  <li>System for tracking supply chains</li>
                  <li>Manufacturer’s Stuffing</li>
                  <li>Transport operators with multiple models</li>
                  <li>All seaports have infrastructure and services facilities and dry parts warehouses.</li>
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

export default OceanFreight;
