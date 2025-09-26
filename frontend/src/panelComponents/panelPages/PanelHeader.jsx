

const PanelHeader = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <h3 className="navbar-brand">Dashboard</h3>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#" className="nav-link">Profile</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default PanelHeader;
  