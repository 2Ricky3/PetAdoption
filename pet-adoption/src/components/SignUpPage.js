import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";



const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/users/register`, {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSignUp}>
        <h1 className="form-title">Pen Pets</h1>

        <div className="flex-column">
          <label>Username </label>
        </div>
        <div className="inputForm">
          <input 
            type="text" 
            className="input" 
            placeholder="Enter your Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <input 
            type="email" 
            className="input" 
            placeholder="Enter your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <input
            type="password"
            className="input"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button-submit">Sign Up</button>

        <p className="p">
          Already have an account? <Link to="/login" className="span">Login</Link> 
        </p>

        <p className="small-text">Terms and Conditions apply.</p>
        <p className="small-text">Based in South Africa</p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #2c2c2c;
  position: relative;

  /* Background image with a larger logo */
  background-image: url(${process.env.PUBLIC_URL}/assets/logo.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 300px 300px;
  background-blend-mode: overlay;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 600px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .form-title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #151717;
  }

  .flex-column label {
    font-weight: bold;
    font-size: 14px;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: all 0.3s ease-in-out;
  }

  .inputForm:focus-within {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 100%;
    background: transparent;
    outline: none;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  }

  .button-submit:hover {
    background-color: #808080;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.7), 0 0 15px rgba(128, 128, 128, 0.5), 0 0 20px rgba(128, 128, 128, 0.4);
    color: white;
  }

  .p {
    text-align: center;
    color: grey;
    font-size: 14px;
    margin: 5px 0;
  }

  .span {
    font-size: 14px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
  }

  .small-text {
    text-align: center;
    font-size: 12px;
    color: grey;
    margin-top: 5px;
  }
`;

export default SignUpPage;
