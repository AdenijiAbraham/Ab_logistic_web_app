//frontend/src/panelComponents/panelPages/Vender.jsx
const VendorPanel = () => {
  return (
    <div className="container">
      <h2 className="mt-4">Vendor Dashboard</h2>
      <button className="btn btn-primary">Add Product</button>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body"> 
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Status: In Stock</p>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPanel;
