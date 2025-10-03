// import AllUsers from './AllUsers';
// import AllVendors from './AllVendors';

// import DeleteUser from './DeleteUser';
// import DeleteVendor from './DeleteVendor';
// import EditUser from './EditUser';
// import EditVendor from './EditVendor';
// import BlogPost from './BlogPost';

//frontend/src/panelComponents/panelPages/Admin.jsx
import React from 'react';
import './admin.css'
import Dashboard from './Dashboard';

const AdminPanel = () => {
  return (
    <>
    <section id='admin'>
    <Dashboard/>
    </section>
    </>
  );
};

export default AdminPanel;
