import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  const login = async (credentials, userType = 'user') => {
    try {
      let userData;
      if (userType === 'vendor') {
        userData = await authService.loginVendor(credentials);
      } else {
        userData = await authService.loginUser(credentials);
      }
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData, userType = 'user') => {
    try {
      let newUser;
      if (userType === 'vendor') {
        newUser = await authService.registerVendor(userData);
      } else {
        newUser = await authService.registerUser(userData);
      }
      setUser(newUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isLoggedIn: !!user,
    userRole: user?.role || null
  };

  return (
    <AuthContext.Provider value={value}> 
      {!loading && children}
    </AuthContext.Provider>
  );
};   