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
    <Router>
      <Routes>
        {/* Default route to login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Ensure SignUpPage works */}
      </Routes>
    </Router>
  );
}

export default App;
