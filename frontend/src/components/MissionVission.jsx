import '../CSS/mission.css';
const MissionVission = () => {
  return (
    <>

    <section id="mission">
    <div className="container"><h2 className='fw-bold'>VISION AND MISSION </h2></div>
    <h1 className='text-center mt-3 mt-lg-4'> <span className='text-danger'>Ab</span>Logistic's MISSION</h1>
    <p className="text-danger text-center mt-4 fs-5">Our Mission And Vission</p>
       
    <div className="container accordian_container">
        <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
                <img src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNoaXB8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="col mt-3 mt-lg-0">
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Why Choose <span className='fw-bold ms-1'> Ab Logistics</span> ?
      </button> 
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        They offers a host of logistic management services and supply chain . We provide innovative solutions with the best. tempor incididunt ut labore et dolor empor tempor incididunt innovative solutions
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Is It Costly
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We offers a host of logistic management services and supply chain . We provide innovative solutions with the best. tempor incididunt ut labore et dolor empor tempor incididunt innovative solutions
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       When Usually Product Reach?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We offer a host of logistic management services and supply chain . We provide innovative solutions with the best. tempor incididunt ut labore et dolor empor tempor incididunt innovative solutions
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
    </section>
    <br />
    </>
  )
}

export default MissionVission