
const Widgets = () => {
  return (
    <div className="row mt-4">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card widget-card">
          <div className="card-body">
            <h5>Total Users</h5>
            <h3>1,245</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card widget-card">
          <div className="card-body">
            <h5>New Orders</h5>
            <h3>320</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card widget-card">
          <div className="card-body">
            <h5>Revenue</h5>
            <h3>$15,230</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card widget-card">
          <div className="card-body">
            <h5>Support Tickets</h5>
            <h3>45</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
