import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PublishPage from './components/PublishPage';
import CentresPage from './components/CentresPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; // Add your SignUpPage
import AdminPage from './components/AdminPage';
import AdminLogin from './components/AdminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{ backgroundColor: '#2c2c2c', minHeight: '100vh' }}> {/* Page background */}
    <Router>
      <Routes>
        {/* Default route to login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Ensure SignUpPage works */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
