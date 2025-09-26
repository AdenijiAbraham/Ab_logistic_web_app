import "../CSS/aboutus.css";
const AbouUs = () => {
  return (
    <>
      <section id="aboutus">
        <div className="container mb-lg- ">
          <h2 className="fw-bold ">ABOUT US</h2>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <h1 className="text-center mt-2 mt-lg-4">WE ARE Ab_LOGISTICS</h1>
            <p className="text-danger mb-5 fs-5 text-center">
              Certified Company
            </p>
            <div className="col-lg-6 contact_img">
              <div className="textdiv  px-5 ">
                {/* <p className="mt-lg-5 mt-2 px-3 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, laboriosam?
                 </p> */}
                <div className="we_are_certified">
                  <div className="truck_plane_text_con">
                    <i className="fa-solid fa-truck-plane text-white"></i>
                    <h2 className="mb-2 mb-lg-5 mt-3 text-white">ABOUT US</h2>
                    <hr />
                    <p>
                      We are a ISO 9001:2025 Certified company, complying with
                      all the national and international freight norms.
                      Operating out of the Delhi office, we extend our logistic
                      services not only within the perimeter of the nation, but
                      also to some of the renowned corporates across the globe.
                      International Freight Forwarding & Logistic Services have
                      been appreciated by our overseas clients. It is only a
                      matter of pride that we have been able to retain almost
                      95% of our clients. Credit this to our effective
                      management, smooth workflow, personalized solutions and
                      quality assurance.
                    </p>
                  </div>
                </div>

                <img
                  id="sign"
                  src="https://zormologistics.com/wp-content/uploads/2022/03/signature_white.png"
                  alt=""
                />
                <p>
                  <span className="fw-bold mt-lg-4 fs-5">Atanda Oba</span>{" "}
                  <br />
                  Partner
                </p>
              </div>
            </div>
            {/* RIGHT */}
            <div className="col-lg-6 px-5 about">
              <div className="center_texts">
                <div className="shadow-box ">
                  <h6 className="pt-5 fw-bold text-danger">
                    COST EFFECTIVE SOLUTIONS
                  </h6>
                  <hr className="mb-3" />
                  <p>
                    By matching inbound and outbound customer freight flows, we
                    deliver the power of overlapping networks, satisfying
                    carriers by reducing empty miles, which helps you avoid
                    seasonal rate spikes for freight.
                  </p>
                </div>

                <div className="shadow-box ">
                  <h6 className="pt-5 fw-bold text-danger">
                    COST EFFECTIVE SOLUTIONS
                  </h6>
                  <hr className="mb-3" />
                  <p>
                    By matching inbound and outbound customer freight flows, we
                    deliver the power of overlapping networks, satisfying
                    carriers by reducing empty miles, which helps you avoid
                    seasonal rate spikes for freight.
                  </p>
                </div>

                <div className="shadow-box ">
                  <h6 className="pt-5 fw-bold text-danger">
                    COST EFFECTIVE SOLUTIONS
                  </h6>
                  <hr className="mb-3" />
                  <p>
                    By matching inbound and outbound customer freight flows, we
                    deliver the power of overlapping networks, satisfying
                    carriers by reducing empty miles, which helps you avoid
                    seasonal rate spikes for freight.
                  </p>
                </div>

                <div className="shadow-box ">
                  <h6 className="pt-5 fw-bold text-danger">
                    COST EFFECTIVE SOLUTIONS
                  </h6>
                  <hr className="mb-3" />
                  <p>
                    By matching inbound and outbound customer freight flows, we
                    deliver the power of overlapping networks, satisfying
                    carriers by reducing empty miles, which helps you avoid
                    seasonal rate spikes for freight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbouUs;
