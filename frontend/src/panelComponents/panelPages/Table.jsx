
const Table = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Recent Orders</h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>01/03/2025</td>
                <td><span className="badge bg-success">Completed</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>28/02/2025</td>
                <td><span className="badge bg-warning">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
