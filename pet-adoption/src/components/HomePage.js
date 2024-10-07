import React, { useState } from 'react';
import { Navbar, Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css'; // Custom CSS for additional styling

const HomePage = () => {
  const [pets, setPets] = useState([
    {
      name: 'Jason',
      description: 'A tiny, caramel-colored puppy with a soft, fluffy coat and big, curious eyes.',
      age: 1,
      image: 'url-to-image-jason', // Replace with actual image URL
    },
    {
      name: 'Ruby',
      description: 'Ruby is a snow-white fluffball, radiating joy as she sticks out her little pink tongue.',
      age: 2,
      image: 'url-to-image-ruby', // Replace with actual image URL
    },
    {
      name: 'Luls',
      description: 'Luls, with his stout body and charming beagle-like look, confidently tilts his head upward.',
      age: 3,
      image: 'url-to-image-luls', // Replace with actual image URL
    },
  ]);

  const sortByName = () => {
    const sorted = [...pets].sort((a, b) => a.name.localeCompare(b.name));
    setPets(sorted);
  };

  const sortByAge = () => {
    const sorted = [...pets].sort((a, b) => a.age - b.age);
    setPets(sorted);
  };

  const handleLogout = () => {
    // Clear any session or token here
    window.location.href = '/';
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.png" // Ensure the logo path is correct
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' Pen Pets'}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#publish">Publish</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
          <Nav.Link href="/centres">Centres</Nav.Link>
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </Nav>
      </Navbar>

      {/* Filter Buttons */}
      <Container className="text-center my-3">
        <Button variant="outline-secondary" onClick={sortByName}>A-Z</Button>{' '}
        <Button variant="outline-secondary" onClick={sortByAge}>Age</Button>{' '}
        <Button variant="outline-secondary">Filter</Button>
      </Container>

      {/* Pet Cards */}
      <Container>
        <Row>
          {pets.map((pet, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={pet.image} />
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>{pet.description}</Card.Text>
                  <Button variant="success" className="mr-2 mb-2">Like</Button>
                  <Button variant="primary" className="mb-2">Adopt</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
