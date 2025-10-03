import "../CSS/airfreight.css";
import '../components/freight_hover.css';
import {Link} from 'react-router-dom';
const RoadFreight = () => {
  const navigate = useNavigate();
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
              <source src="road" alt="road image" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="video-overlay"></div>
            Hero Content
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white head_text">
              {/* sSKIDE HEAD*/}
              <h1 id="" className="slidetext fw-bold">
                Road Freight
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
                {/* image */}
                <div className="colum_two_image">
                <img
                  src="https://images.pexels.com/photos/9716225/pexels-photo-9716225.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="img-fluid"
                />
                </div>
                <p className="text-start mt-2">Transport of cargo by road using motor vehicles is called road freight.  </p>
                <p className="text-start mt-3 mt-lg-5"> A route/lane connects the point of departure with the point of destination. When it comes to transporting goods to rural areas, the road always wins.</p>
                <h3 className="text-start mt-3 mt-lg-5">ROAD FREIGHT IS SECURE AND SAFE</h3>
                <p className="text-start mt-2">For delivery, dispatch, and pick up of goods, we provide effective and efficient transport services. Our fleet of well-maintained trucks ensures the delivery of consignments within the specified timeframe. Loading and unloading are handled carefully by trained workers using various materials handling equipment. Our personalized approach and attention to detail ensure safe transit.</p>
                <h4 className="">Transport Services</h4>
                <p>As one of the reliable service providers, we provide our clients with highly efficient Transportation Services. We are able to ensure the safe and quick pickup, dispatch, and delivery of our clients’ consignments with the support of experienced drivers. In addition to our well-maintained trucks, we also have material handling equipment that enables us to deliver your consignments within given time frames in a safe and timely manner.</p>
                <h3>Characteristics</h3>
                <ul>
                  <li>Trustworthiness</li>
                  <li>Keeping you safe and secure</li>
                  <li>One focal point with global reach.</li>
                  <li>Effortless service</li>
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


                <div id="desktop" className="colum_two_image">
                  <img className=" mt-4 mt-lg-5 d-none d-lg-block" src="https://images.pexels.com/photos/8994766/pexels-photo-8994766.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadFreight;
