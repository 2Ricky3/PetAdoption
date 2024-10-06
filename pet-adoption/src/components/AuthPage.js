import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import './AuthPage.css'; // Still have the custom CSS for minor adjustments

const AuthPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="auth-box p-4 bg-light shadow rounded">
        <div className="d-flex justify-content-center mb-4">
          <label className="mr-3">
            <input
              type="radio"
              value="login"
              checked={!showSignUp}
              onChange={() => setShowSignUp(false)}
              className="mr-1"
            />
            Login
          </label>
          <label>
            <input
              type="radio"
              value="signup"
              checked={showSignUp}
              onChange={() => setShowSignUp(true)}
              className="mr-1"
            />
            Sign Up
          </label>
        </div>
        {showSignUp ? <SignUpPage /> : <LoginPage />}
      </div>
    </div>
  );
};

export default AuthPage;
