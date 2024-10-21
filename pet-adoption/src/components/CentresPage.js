import React, { useState } from 'react';
import { Navbar, Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './HomePage.css'; // Use similar styling as HomePage

// Importing the images
import fisherCentreImage from '../assets/download (5).jpg';
import pawsCentreImage from '../assets/download (6).jpg';
import triCityCentreImage from '../assets/download (7).jpg';
import logo from '../assets/logo.png'; // Import the logo image

const CentresPage = () => {
  const initialCentres = [
    {
      name: 'Fisher Centre',
      description: 'A modern and spacious facility with a dedicated play area for animals, offering a welcoming environment for adopting pets.',
      distance: 12, 
      image: fisherCentreImage, 
    },
    {
      name: 'Paws Centre',
      description: 'A vibrant and lively center, filled with large displays of adorable pets waiting to be adopted.',
      distance: 18, 
      image: pawsCentreImage, 
    },
    {
      name: 'Tri-City Centre',
      description: 'A cosy and charming adoption centre nestled in a quiet area, offering a variety of pets looking for loving homes.',
      distance: 25, 
      image: triCityCentreImage, 
    },
  ];

  const [centres] = useState(initialCentres); 

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            src={logo} // Use the imported logo image
            width="50"
            height="50"
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

      {/* Centre Cards */}
      <Container className="mt-5">
        <Row>
          {centres.map((centre, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={centre.image} 
                  style={{ borderRadius: '20px', height: '250px', objectFit: 'cover' }} // Consistent image size
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
