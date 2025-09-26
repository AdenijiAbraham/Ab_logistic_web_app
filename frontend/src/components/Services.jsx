import "../CSS/servicestwo.css";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>OUR SERVICES</h2>
        <h1 className=" mb-2 mt-4 text-center">WHAT WE PROVIDE</h1>
        <p className="text-danger text-center mb-lg-5 fs">Explore The Best Services</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

            <div className="col position-relative">
                <div className="animate_box">
                <img src="   https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFBMQU5FfGVufDB8fDB8fHww" alt="" className="w-100 imgc" />
                <div  className="img_hover_div position-absolute m-5"></div>
                <div className="position-absolute text_before_hover">
               <i className="fa-solid fa-plane-departure text-white  text-center"></i>
                <hr/>
                <h2>AIR FREIGHT</h2>
               </div>
               {/* /////// */}
                <div className="position-absolute overlay_text">
                <i className="fa-solid fa-plane-departure text-white  text-center"></i>
                <hr/>
                <h2>AIR FREIGHT</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod!</p>
                  </div>
                </div>
            </div>  
            <div className="col position-relative">
                <div className="animate_box">
                {/* <img src="https://plus.unsplash.com/premium_photo-1661884711981-b92c6755af7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXB8ZW58MHx8MHx8fDA%3D" alt="" className="w-100 imgc" /> */}
                <img src="https://plus.unsplash.com/premium_photo-1661884711981-b92c6755af7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXB8ZW58MHx8MHx8fDA%3D " alt="" className="w-100 imgc" />

               <div  className="img_hover_div position-absolute m-5"></div>
               <div className="position-absolute text_before_hover">
               <i className="fa-solid fa-ship text-white  text-center"></i>
                <hr/>
                <h2>OCEAN FREIGHT</h2>
               </div>
               {/* /////// */}
                <div className="position-absolute overlay_text">
                <i className="fa-solid fa-ship text-white  text-center"></i>
                <hr/>
                <h2>OCEAN FREIGHT</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod!</p>
                  </div>
                </div>
            </div>  
            <div className="col position-relative">
                <div className="animate_box">
                <img src="https://plus.unsplash.com/premium_photo-1663950995744-f35598ae8cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJ1Y2slMjByb2FkfGVufDB8fDB8fHww " alt="" className="w-100 imgc" />
                <div  className="img_hover_div position-absolute m-5"></div>
                <div className="position-absolute text_before_hover">
               <i className="fa-solid fa-truck-fast text-white  text-center"></i>
                <hr/>
                <h2>ROAD FREIGHT</h2>
               </div>
               {/* /////// */}
                <div className="position-absolute overlay_text">
                <i className="fa-solid fa-truck-fast text-white  text-center"></i>
                <hr/>
                <h2> ROAD FREIGHT</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod!</p>
                  </div>
                </div>
            </div>  
            <div className="col position-relative">
                <div className="animate_box">
                <img src="https://images.unsplash.com/photo-1590497008432-598f04441de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyZ298ZW58MHx8MHx8fDA%3D" alt="" className="w-100 imgc" />
                <div className="position-absolute text_before_hover">
               <i className="fa-solid fa-truck-plane text-white  text-center"></i>
                <hr/>
                <h2>CARGO MARINE INSURANCE</h2>
               </div>
               {/* /////// */}
                <div  className="img_hover_div position-absolute m-5"></div>
                <div className="position-absolute overlay_text">
                <i className="fa-solid fa-truck-plane text-white  text-center"></i>
                <hr/>
                <h2> CARGO MARINE INSURANCE</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod!</p>
                  </div>
                </div>
            </div>  
            <div className="col position-relative">
                <div className="animate_box">
                <img src="https://img.freepik.com/free-photo/container-operation-port-series_1150-8369.jpg?semt=ais_hybrid" alt="" className="w-100 imgc" />
               <div className="position-absolute text_before_hover">
               <i className="fa-solid fa-anchor-circle-check text-white  text-center"></i>
                <hr/>
                <h2>WARE HOUSING</h2>
               </div>
               {/* /////// */}
                <div  className="img_hover_div position-absolute m-5"></div>
                <div className="position-absolute overlay_text">
                <i className="fa-solid fa-anchor-circle-check text-white  text-center"></i>
                <hr/>
                <h2>WARE HOUSING</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod!</p>
                  </div>
                </div>
            </div>  
            <div className="col position-relative">
                <div className="animate_box">
                <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcmdvfGVufDB8fDB8fHww" alt="" className="w-100 imgc" />
                <div className="position-absolute text_before_hover">
                <i className="fa-solid fa-truck-plane text-white  text-center"></i>
                <hr/>
                <h2>CUSTOM CLEARANCE</h2>
               </div>
               {/* /////// */}
                <div  className="img_hover_div position-absolute m-5"></div>
                <div className="position-absolute overlay_text">
                <i className="fa-solid fa-truck-plane text-white  text-center"></i>
                <hr/>
                <h2>CUSTOM CLEARANCE </h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod!</p>
                  </div>
                </div>
            </div>  
        </div>
      </div>
    </section>
    
  );
};

export default Services;
