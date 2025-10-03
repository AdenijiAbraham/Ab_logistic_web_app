//frontend/src/App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "../src/media.css";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import AbouUs from "./components/AbouUs";
import Contact from "./components/Contact"; 
import Services from "./components/Services";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

import AirFreight from "../src/servicesComponents/AirFreight";
import OceanFreight from "../src/servicesComponents/OceanFreight";
import RoadFreight from "../src/servicesComponents/RoadFreight";
import CustomClearance from "./servicesComponents/CustomClearance";
import WareHousing from "./servicesComponents/WareHousing";
import CargoMarine from "./servicesComponents/CargoMarine";
import Dashboard from "./panelComponents/panelPages/Dashboard";
import AdminPanel from "./panelComponents/panelPages/Admin";
import VendorPanel from "./panelComponents/panelPages/Vender";
import UserPanel from "./panelComponents/panelPages/User";
import Register from "./Register";
import VendorRegister from './registerLogComponents/VendorRegister';
import Login from './registerLogComponents/Login';
import UserRegister from "./registerLogComponents/UserRegister";
import AdminLogin from "./registerLogComponents/LogAsAdmin";
import BlogPostCreator from "./components/CreateBlog";
import ScrollToTop from "./ScrollToTop";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { useAuth } from "../contexts/AuthContext";
// import { AuthProvider } from '../contexts/AuthContext';
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";





function App() {
  const location = useLocation();

  return (
     <AuthProvider>
      {location.pathname !== "/" &&
      location.pathname !== "/roles/admin" &&
      location.pathname !== "/user-register" &&
      location.pathname !== "/admin-login" &&
      location.pathname !== "/vendor-register" &&
      location.pathname !== "/login" && <Header />}
      <div
        style={{ marginTop: location.pathname === "/" || 
          location.pathname === "/register" ||
          location.pathname === "/user-register" ||
          location.pathname === "/admin-login" ||
          location.pathname === "/vendor-register" ||
          location.pathname === "/login" ? "0px" : "130px"  }}
      ></div>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AbouUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AbouUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/create-blog" element={<BlogPostCreator />} />

        {/* SERVICES PAGES */}
        <Route path="/air" element={<AirFreight />} />
        <Route path="/ocean" element={<OceanFreight />} />
        <Route path="/road" element={<RoadFreight />} />
        <Route path="/customclearnace" element={<CustomClearance />} />
        <Route path="/warehousing" element={<WareHousing />} />
        <Route path="/cargomarine" element={<CargoMarine />} />


        {/* PANELS */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roles/admin" element={<AdminPanel />} />
        <Route path="/roles/vender" element={<VendorPanel />} />
        <Route path="/roles/user" element={<UserPanel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
        
      </Routes>


      {location.pathname !== "/" && 
      location.pathname !== "/roles/admin" &&
      location.pathname !== "/roles/vender" && 
      location.pathname !== "/roles/user" && 
      location.pathname !== "/dashboard" && 
      location.pathname !== "/register" && 
      location.pathname !== "/user-register" && 
      location.pathname !== "/vendor-register" && 
      location.pathname !== "/admin-login" &&
      location.pathname !== "/login" && <Footer />}
    </AuthProvider>
  );
}

export default App;
