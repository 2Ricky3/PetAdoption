import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavbarComponent.css'; // Ensure this CSS file contains the navbar styles

const NavbarComponent = () => {
  const navigate = useNavigate();

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
          width="70"   // Increase width
          height="70"  // Increase height
          className="d-inline-block align-top logo-image"
          alt="Logo"
        />
        <span className="brand-text">Pen Pets</span>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/publish">Publish</Nav.Link>
        <Nav.Link href="/home">Browse</Nav.Link>
        <Nav.Link href="/centres">Centres</Nav.Link>
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
