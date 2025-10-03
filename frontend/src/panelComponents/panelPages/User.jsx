//frontend/src/panelComponents/panelPages/User.jsx
const UserPanel = () => {
  return (
    <div className="container">
      <h2 className="mt-4">User Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order History</h5>
              <p className="card-text">You have 2 pending orders.</p>
              <button className="btn btn-success">View Orders</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
