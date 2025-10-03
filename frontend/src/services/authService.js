// frontend/src/services/authService.js
import API from './api';

class AuthService {
  // User Registration
  async registerUser(userData) {
    try {
      const response = await API.post('/auth/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Registration failed' };
    }
  }
  

  // User Login
  async loginUser(credentials) {
    try {
      const response = await API.post('/auth/login', credentials);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Login failed' };
    }
  }

  // Vendor Registration
  async registerVendor(vendorData) {
    try {
      const response = await API.post('/auth/vendor/register', {
        name: vendorData.contactPerson,
        email: vendorData.email,
        password: vendorData.password,
        companyName: vendorData.companyName,
        businessType: vendorData.businessType
      });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Vendor registration failed' };
    }
  }

  // Vendor Login
  async loginVendor(credentials) {
    try {
      const response = await API.post('/auth/vendor/login', credentials);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Vendor login failed' };
    }
  }

  // Dashboard Services
  async getUserDashboard() {
    return API.get('/user/user-dashboard');
  }

  async getAdminDashboard() {
    return API.get('/admin/admin-dashboard');
  }

  async getVendorDashboard() {
    return API.get('/vendor/vendor-dashboard');
  }

  async getAllUsers() {
    return API.get('/admin/admin-getusers');
  }

  async getAllVendors() {
    return API.get('/admin/admin-getvendors');
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Get current user
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (error) {
      return null;
    }
  }

  // Check if logged in
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}

export default new AuthService();