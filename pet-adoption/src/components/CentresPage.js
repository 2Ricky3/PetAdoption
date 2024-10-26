import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import the reusable Navbar
import './HomePage.css'; // You can add additional styling here if needed

// Importing the images
import fisherCentreImage from '../assets/download (5).jpg';
import pawsCentreImage from '../assets/download (6).jpg';
import triCityCentreImage from '../assets/download (7).jpg';

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
    <div style={{ backgroundColor: '#2c2c2c', minHeight: '100vh' }}> {/* Background color */}
      <NavbarComponent /> {/* Reusable Navbar component */}

      {/* Centre Cards */}
      <Container className="mt-5">
        <Row>
          {centres.map((centre, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={centre.image}
                  style={{ borderRadius: '20px', height: '250px', objectFit: 'cover' }}
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
