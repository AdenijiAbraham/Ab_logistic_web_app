import { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className={`sidebar bg-dark ${collapsed ? 'collapsed' : ''}`}>
      <button className="btn btn-light m-2 d-lg-none" onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>
      <h4 className={`text-white text-center mt-3 ${collapsed ? 'd-none' : ''}`}>Admin Panel</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Users</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Vendors</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Analytics</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
