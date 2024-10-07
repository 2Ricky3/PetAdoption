import React from 'react';
import { Navbar, Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css'; // Use similar styling as HomePage

const CentresPage = () => {
  const centres = [
    {
      name: 'Fisher Centre',
      description: 'A modern and spacious facility with a dedicated play area for animals, offering a welcoming environment for adopting pets.',
      distance: '12 Km',
      image: 'url-to-image-fisher', // Replace with actual image URL
    },
    {
      name: 'Paws Centre',
      description: 'A vibrant and lively center, filled with large displays of adorable pets waiting to be adopted.',
      distance: '18 Km',
      image: 'url-to-image-paws', // Replace with actual image URL
    },
    {
      name: 'Tri-City Centre',
      description: 'A cosy and charming adoption centre nestled in a quiet area, offering a variety of pets looking for loving homes.',
      distance: '25 Km',
      image: 'url-to-image-tri-city', // Replace with actual image URL
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
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
          <Nav.Link href="/publish">Publish</Nav.Link>
          <Nav.Link href="/home">Browse</Nav.Link>
          <Nav.Link href="/centres">Centres</Nav.Link>
          <Button variant="outline-light">Logout</Button>
        </Nav>
      </Navbar>

      {/* Filter Buttons */}
      <Container className="text-center my-3">
        <Button variant="outline-secondary">A-Z</Button>{' '}
        <Button variant="outline-secondary">Nearby</Button>
      </Container>

      {/* Centre Cards */}
      <Container>
        <Row>
          {centres.map((centre, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={centre.image} />
                <Card.Body>
                  <Card.Title>{centre.name}</Card.Title>
                  <Card.Text>{centre.description}</Card.Text>
                  <Button variant="secondary" disabled>{centre.distance}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CentresPage;
