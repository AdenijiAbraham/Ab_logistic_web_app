
import AOS from "aos";
import Ab_video_ship from'../../assets/Ab_video_ship.mp4'
import { useEffect } from "react";


const HeroTwo = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <section className="position-relative hero vh-100 overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="road" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Dark Overlay */}
              <div className="video-overlay"></div>

              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="slidetext fw-bold">
                  Welcome to <span id="zormotext">Ab</span>
                  <span id="logistics">LOGISTICS LTD</span>
                </h1>
                <p className="lead">Experience The Best</p>
                <button
                  className="btn btn-primary btn-lg text-center hero-button"
                  id="getstarted" data-aos="fade-right"
                  
                >
                  <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>
          {/* AIR FREIGHT */}
          <div className="carousel-item">
            <section className="position-relative hero vh-100 overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="plane" type="video/mp4" />
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
                  <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>

          {/* ROAD FREIGHT */}


          {/* OCEAN FREIGHT */}
          <div className="carousel-item">
            <section className="position-relative vh-100 hero overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="Ab_video_ship" type="video/mp4" />
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
                <p className="lead">Experience The Best With Us</p>
                <button
                  className="btn btn-primary btn-lg text-center hero-button hero-button"
                  id="getstarted"
                >
                   <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>

                  {/* ROAD FREIGHT */}
                  <div className="carousel-item">
            <section className="position-relative hero vh-100 overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="road" type="video/mp4" />
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
                  <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>
          






          <div className="carousel-item">
            <section className="position-relative hero vh-100 overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="ship2" type="video/mp4" />
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
                    <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section className="position-relative hero vh-100 overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="ship3" type="video/mp4" />
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
                  <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section className="position-relative hero vh-100 overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle"
              >
                <source src="customclear" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Dark Overlay */}
              <div className="video-overlay"></div>
              
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white head_text">
                {/* sSKIDE HEAD*/}
                <h1 id="" className="slidetext fw-bold">
                Customer Clearance
                </h1>
                <p className="lead">Experience the Best</p>
                <button
                  className="btn btn-primary btn-lg text-center hero-button"
                  id="getstarted"
                >
                   <div className="pb-0 arrow_class text-center justify-content-center d-flex align-items-center gap-2"> Get Started <span><i className="fa-solid fa-chevron-right text-white mb-lg-2 ms-1 arrow_right"></i></span></div> 
                </button>
              </div>
            </section>
          </div>
        </div>
        <button 
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroTwo;
