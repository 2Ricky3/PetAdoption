import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logging out...');
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">
        <img
          src="/assets/logo.png" // Ensure this path is correct
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        {' Pen Pets'}
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/publish">Publish</Nav.Link> {/* Link to /publish */}
        <Nav.Link href="/home">Browse</Nav.Link>
        <Nav.Link href="/centres">Centres</Nav.Link>
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
