import "../CSS/airfreight.css";
import {Link} from 'react-router-dom'
const AirFreight = () => {
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
              <source src="plane image" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="video-overlay"></div>
            Hero Content
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white head_text">
              {/* sSKIDE HEAD*/}
              <h1 id="" className="slidetext fw-bold">
                Air Freight
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
                  src="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?b=1&s=612x612&w=0&k=20&c=E68ksW1MTzGZGHOxSYHu-y9I2Nv0iqbJCkER9e3K7TM="
                  alt=""
                  className="img-fluid"
                />
                <p className="text-start mt-2">Transporting goods by air is called air freight or air cargo. </p>
                <p className="text-start mt-3 mt-lg-5">Zormo Logistics LLP transport goods is an efficient way by Air Cargo..</p>
                <h3 className="text-start mt-3 mt-lg-5">Air Freight Forwarding</h3>
                <p className="text-start mt-2">When logistics challenges are urgent or time-critical, air freight can reduce the cost. Combining the speed of air with the cost savings of other modes will allow you to reduce inventory and improve service offerings through a fast response time at an affordable price.</p>
                <h4 className="">We offer you the following benefits when you choose our Air Freight services:</h4>
                <ul>
                  <li>It’s the most efficient way to ship freight to many destinations around the world.</li>
                  <li>Transportation to places where the lack of infrastructure makes it impossible to reach by other means.</li>
                  <li>One focal point with global reach.</li>
                  <li>Increasing flexibility while reducing inventory costs.</li>
                  <li>Arrival and departure times that are highly reliable.</li>
                  <li>We ensure uplift at the best conditions worldwide through our core carrier program.</li>
                </ul>
                <h3>Travel safely and securely to your destination</h3>
                <p>We are concerned about the safety of your valuable cargo. Maersk Stations are either certified by TAPA A and/or C-TPAT or are in the process of achieving these certifications.</p>
           
                <ul>
                  <li>At our stations, we prefer to handle cargo physically.</li>
                  <li>Security and cargo protection are of the utmost importance to us.</li>
                  <li>Weights are checked at both origin and destination.</li>
                  <li>CCTV is used to monitor storage and handling. </li>
                  <li>During ULD build-up, we record the seal number and ULD number.</li>
                  <li>Checklists are used to monitor cargo condition and quantity.</li>
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

export default AirFreight;
 