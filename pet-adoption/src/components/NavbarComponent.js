import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication token or session data
    localStorage.removeItem('authToken');
    
    alert('Logging out...');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home" className="navbar-brand-custom">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span className="brand-text"> Pen Pets</span>
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
