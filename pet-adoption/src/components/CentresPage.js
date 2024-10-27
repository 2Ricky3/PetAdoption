import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import the reusable Navbar
import './CentresPage.css'; // CSS file for CentresPage styling

// Importing the images
import fisherCentreImage from '../assets/download (5).jpg';
import pawsCentreImage from '../assets/download (6).jpg';
import triCityCentreImage from '../assets/download (7).jpg';

const CentresPage = () => {
  const initialCentres = [
    {
      name: 'Fisher Centre',
      description:
        'A modern and spacious facility with a dedicated play area for animals, offering a welcoming environment for adopting pets. Our expert staff is here to help you find the perfect companion.',
      services: 'Pet training, grooming, health checkups',
      contact: 'fisher@example.com | 087 0956 2334',
      distance: 12,
      image: fisherCentreImage,
    },
    {
      name: 'Paws Centre',
      description:
        'A vibrant and lively center, filled with large displays of adorable pets waiting to be adopted. Join our community events and educational programs.',
      services: 'Adoption events, pet behavior workshops',
      contact: 'paws@example.com | 082 555 6432',
      distance: 18,
      image: pawsCentreImage,
    },
    {
      name: 'Tri-City Centre',
      description:
        'A cozy and charming adoption center nestled in a quiet area, offering a variety of pets looking for loving homes. Enjoy a peaceful experience with your future pet.',
      services: 'Veterinary services, pet supplies',
      contact: 'tricity@example.com | 071 854 5777',
      distance: 25,
      image: triCityCentreImage,
    },
  ];

  const [centres] = useState(initialCentres);

  return (
    <div className="centres-page">
      <NavbarComponent />

      <Container className="mt-5">
        <h2 className="centres-header mb-4">Find Your Local Adoption Centre</h2>
        <p className="centres-subtext mb-5">
          Explore adoption centers near you, meet your future pet in a comfortable setting, and learn about our range of services.
        </p>

        <Row>
          {centres.map((centre, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card className="h-100 centre-card">
                <Card.Img
                  variant="top"
                  src={centre.image}
                  className="centre-card-img"
                />
                <Card.Body>
                  <Card.Title>{centre.name}</Card.Title>
                  <Card.Text>{centre.description}</Card.Text>
                  <Card.Text><strong>Services:</strong> {centre.services}</Card.Text>
                  <Card.Text><strong>Contact:</strong> {centre.contact}</Card.Text>
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
