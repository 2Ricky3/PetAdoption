import React, { useState } from 'react';
import { Navbar, Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css'; // Use similar styling as HomePage

const CentresPage = () => {
  const initialCentres = [
    {
      name: 'Fisher Centre',
      description: 'A modern and spacious facility with a dedicated play area for animals, offering a welcoming environment for adopting pets.',
      distance: 12, // Store distance as a number for sorting
      image: '/assets/download (5).jpg', // Correct path to Fisher Centre image
    },
    {
      name: 'Paws Centre',
      description: 'A vibrant and lively center, filled with large displays of adorable pets waiting to be adopted.',
      distance: 18, // Store distance as a number for sorting
      image: '/assets/download (6).jpg', // Correct path to Paws Centre image
    },
    {
      name: 'Tri-City Centre',
      description: 'A cosy and charming adoption centre nestled in a quiet area, offering a variety of pets looking for loving homes.',
      distance: 25, // Store distance as a number for sorting
      image: '/assets/download (7).jpg', // Correct path to Tri-City Centre image
    },
  ];

  const [centres, setCentres] = useState(initialCentres); // Use state to store centres

  // Sorting Centres alphabetically (A-Z)
  const sortAlphabetically = () => {
    const sortedCentres = [...centres].sort((a, b) => a.name.localeCompare(b.name));
    setCentres(sortedCentres);
  };

  // Sorting Centres by distance (nearest first)
  const sortByDistance = () => {
    const sortedCentres = [...centres].sort((a, b) => a.distance - b.distance);
    setCentres(sortedCentres);
  };

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
        <Button variant="outline-secondary" onClick={sortAlphabetically}>A-Z</Button>{' '}
        <Button variant="outline-secondary" onClick={sortByDistance}>Nearby</Button>
      </Container>

      {/* Centre Cards */}
      <Container>
        <Row>
          {centres.map((centre, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={centre.image} 
                  style={{ borderRadius: '20px' }} // Adding border-radius to the images
                />
                <Card.Body>
                  <Card.Title>{centre.name}</Card.Title>
                  <Card.Text>{centre.description}</Card.Text>
                  <Button variant="secondary" disabled>{`${centre.distance} Km`}</Button>
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
