import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logging out...');
    navigate('/login');
  };

  return (
    <Navbar className="custom-navbar">
      <Navbar.Brand href="/home" className="navbar-brand-custom">
        <img
          src={logo}
          width="70"
          height="70"
          className="d-inline-block align-top logo-image"
          alt="Logo"
        />
        <span className="brand-text">Pen Pets</span>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/publish" className={location.pathname === '/publish' ? 'active-link' : ''}>Publish</Nav.Link>
        <Nav.Link href="/home" className={location.pathname === '/home' ? 'active-link' : ''}>Browse</Nav.Link>
        <Nav.Link href="/centres" className={location.pathname === '/centres' ? 'active-link' : ''}>Centres</Nav.Link>
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
