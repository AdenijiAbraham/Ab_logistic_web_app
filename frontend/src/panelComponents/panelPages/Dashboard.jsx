//frontend/src/panelComponents/panelPages/Dashboard.jsx
//frontend/src/panelComponents/panelPages/Dashboard.jsx
import { useAuth } from '../../contexts/AuthContext';
import authService from '../../services/authService';
import { useEffect } from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("user");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/'); // Navigate to home page
    };

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await authService.getAllUsers();
            setUsers(response.data.users || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchVendors = async () => {
        try {
            setLoading(true);
            const response = await authService.getAllVendors();
            setVendors(response.data.vendors || []);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === "admin" && user?.role === 'admin') {
            fetchUsers();
            fetchVendors();
        }
    }, [activeTab, user]);

    return (
        <div className="container dashboard-container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Dashboard - Welcome {user?.name}</h2>
                <button className="btn btn-outline-danger" onClick={handleLogout}
                >Logout</button>
            </div>
            
            <div className="d-flex justify-content-center gap-5 mb-4">
                <button 
                    className={`btn ${activeTab === "admin" ? "btn-primary" : "btn-outline-secondary"}`}
                    style={activeTab !== "admin" ? { color: '#212529', borderColor: '#212529' } : {}}
                    onClick={() => setActiveTab("admin")}
                >
                    Admin
                </button>
                <button 
                    className={`btn ${activeTab === "user" ? "btn-primary" : "btn-outline-secondary"}`}
                    style={activeTab !== "user" ? { color: '#212529', borderColor: '#212529' } : {}}
                    onClick={() => setActiveTab("user")}
                >
                    User
                </button>
                <button 
                    className={`btn ${activeTab === "vendor" ? "btn-primary" : "btn-outline-secondary"}`}
                    style={activeTab !== "vendor" ? { color: '#212529', borderColor: '#212529' } : {}}
                    onClick={() => setActiveTab("vendor")}
                >
                    Vendor
                </button>
            </div>
            
            <div className="tab-content mt-4">
                {activeTab === "admin" && user?.role === 'admin' && (
                    <div className="card p-4">
                        <h3 className="section-title">Admin Panel</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Users ({users.length})</h4>
                                {loading ? <p>Loading...</p> : (
                                    <ul className="list-group">
                                        {users.map(user => (
                                            <li key={user._id} className="list-group-item">
                                                {user.name} - {user.email}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="col-md-6">
                                <h4>Vendors ({vendors.length})</h4>
                                {loading ? <p>Loading...</p> : (
                                    <ul className="list-group">
                                        {vendors.map(vendor => (
                                            <li key={vendor._id} className="list-group-item">
                                                {vendor.name} - {vendor.companyName}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "user" && (
                    <div className="card p-4">
                        <h3 className="section-title">User Dashboard</h3>
                        <p>View your orders, profile, and settings.</p>
                    </div>
                )}
                {activeTab === "vendor" && (
                    <div className="card p-4">
                        <h3 className="section-title">Vendor Portal</h3>
                        <p>Manage your products, track orders, and view earnings.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard; 




// import { useAuth } from '../../contexts/AuthContext';
// import authService from '../../services/authService';
// import { useEffect } from 'react';
// import { useState, react } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";


// const Dashboard = () => {
//     const [activeTab, setActiveTab] = useState("user");
//     const [users, setUsers] = useState([]);
//     const [vendors, setVendors] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const { user, logout } = useAuth();

//     const fetchUsers = async () => {
//         try {
//             setLoading(true);
//             const response = await authService.getAllUsers();
//             setUsers(response.data.users || []);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchVendors = async () => {
//         try {
//             setLoading(true);
//             const response = await authService.getAllVendors();
//             setVendors(response.data.vendors || []);
//         } catch (error) {
//             console.error('Error fetching vendors:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (activeTab === "admin" && user?.role === 'admin') {
//             fetchUsers();
//             fetchVendors();
//         }
//     }, [activeTab, user]);

//     return (
//         <div className="container dashboard-container mt-5">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h2>Dashboard - Welcome {user?.name}</h2>
//                 <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
//             </div>
            
//             {/* Keep your existing nav pills JSX */}
//             <ul className="nav nav-pills justify-content-center gap-5 text-dark">
//                 <li className="nav-item text-dark ">
//                     <button 
//                         className={`nav-link text-dark ${activeTab === "admin" ? "active" : ""}`} 
//                         onClick={() => setActiveTab("admin")}
//                     >
//                         Admin
//                     </button>
//                 </li>
//                 <li className="nav-item"> 
//                     <button 
//                         className={`nav-link ${activeTab === "user" ? "active" : ""}`} 
//                         onClick={() => setActiveTab("user")}
                        
//                     >
//                         User
//                     </button>
//                 </li>
//                 <li className="nav-item">
//                     <button 
//                         className={`nav-link ${activeTab === "vendor" ? "active" : ""}`} 
//                         onClick={() => setActiveTab("vendor")}
//                     >
//                         Vendor
//                     </button>
//                 </li>
//             </ul>
            
//             <div className="tab-content mt-4">
//                 {activeTab === "admin" && user?.role === 'admin' && (
//                     <div className="card p-4">
//                         <h3 className="section-title">Admin Panel</h3>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <h4>Users ({users.length})</h4>
//                                 {loading ? <p>Loading...</p> : (
//                                     <ul className="list-group">
//                                         {users.map(user => (
//                                             <li key={user._id} className="list-group-item">
//                                                 {user.name} - {user.email}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                             <div className="col-md-6">
//                                 <h4>Vendors ({vendors.length})</h4>
//                                 {loading ? <p>Loading...</p> : (
//                                     <ul className="list-group">
//                                         {vendors.map(vendor => (
//                                             <li key={vendor._id} className="list-group-item">
//                                                 {vendor.name} - {vendor.companyName}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {activeTab === "user" && (
//                     <div className="card p-4">
//                         <h3 className="section-title">User Dashboard</h3>
//                         <p>View your orders, profile, and settings.</p>
//                     </div>
//                 )}
//                 {activeTab === "vendor" && (
//                     <div className="card p-4">
//                         <h3 className="section-title">Vendor Portal</h3>
//                         <p>Manage your products, track orders, and view earnings.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default Dashboard;






