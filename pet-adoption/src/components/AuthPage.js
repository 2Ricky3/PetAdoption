import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to switch between login and signup
  const navigate = useNavigate();

  const handleSwitchToSignUp = () => {
    setIsLogin(false);
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="auth-container">
      <div className="auth-card card">
        <div className="card-body">
          <h2 className="text-center">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <div className="form-switch-container">
            <button 
              className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-secondary'}`} 
              onClick={() => setIsLogin(true)}>
              Login
            </button>
            <button 
              className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-secondary'}`} 
              onClick={() => setIsLogin(false)}>
              Sign Up
            </button>
          </div>
          {isLogin ? <LoginPage /> : <SignUpPage />}
          <p className="text-center">
            Don't have an account? <span onClick={handleSwitchToSignUp}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
