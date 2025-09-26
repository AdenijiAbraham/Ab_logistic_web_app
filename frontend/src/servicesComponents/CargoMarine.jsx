import "../CSS/airfreight.css";
import Ab_video_ship from "../../assets/Ab_video_ship.mp4";
import {Link} from 'react-router-dom'
const CargoMarine = () => {
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
              <source src={Ab_video_ship} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="video-overlay"></div>
            Hero Content
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white head_text">
              {/* sSKIDE HEAD*/}
              <h1 id="" className="slidetext fw-bold">
              Cargo Marine Insurance
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
                  src="https://images.pexels.com/photos/7693153/pexels-photo-7693153.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="img-fluid"
                />
                <p className="text-start mt-2">In marine cargo insurance, loss or damage to marine cargo during transit is covered.  </p>
                <p className="text-start mt-3 mt-lg-5">Cargo owners and cargo are protected from any loss or damage caused by delay in the voyage, ship accident, or unloading.</p>
                <h3 className="text-start mt-3 mt-lg-5">INSURANCE FOR MARINE CARGO</h3>
                <p className="text-start mt-2">We offer cargo insurance services for a variety of goods that we transport. A cargo insurance policy protects against loss of or damage to your goods during transportation. The policy covers you in case of loss or damage to your cargo.</p>
               
                <h3 className="text-start mt-3 mt-lg-5">Maritime Insurance for Cargo</h3>
                <p className="text-start mt-2">In addition, we provide insurance for the consignment that we deliver. Our insurance facility can be used to recover the loss that was caused to the client by mishandling or destruction of the consignments during transportation.</p>

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

export default CargoMarine;
