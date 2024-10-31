import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import './CentresPage.css';

const CentresPage = () => {
  const initialCentres = [
    {
      name: 'Fisher Centre',
      description: 'A modern and spacious facility with a dedicated play area for pets of all sizes. Our staff is highly trained to provide the best care...',
      services: 'Pet training, grooming, health checkups',
      contact: 'fisher@pets.co.za | 087 0956 2334',
      distance: 12,
      image: require('../assets/download (5).jpg'),
    },
    {
      name: 'Paws Centre',
      description: 'A vibrant and lively center, filled with large displays of adorable pets ready for adoption. Our staff is ready to assist you in choosing...',
      services: 'Adoption events, pet behavior workshops',
      contact: 'paws@centre.co.za | 082 555 6432',
      distance: 18,
      image: require('../assets/download (6).jpg'),
    },
    {
      name: 'Tri-City Centre',
      description: 'A cozy and charming adoption center nestled in a quiet area with all the resources you need to provide your pet a safe and happy home...',
      services: 'Veterinary services, pet supplies',
      contact: 'tricity@pretoria.co.za | 071 854 5777',
      distance: 25,
      image: require('../assets/download (7).jpg'),
    },
  ];

  const [centres, setCentres] = useState(initialCentres);
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="centres-page-container">
      <NavbarComponent />
      
      <div className="centres-page">
        <Container className="mt-5">
          <h2 className="centres-header mb-4">Find Your Local Adoption Centre</h2>
          <p className="centres-subtext mb-5">
            Explore adoption centers near you, meet your future pet in a comfortable setting, and learn about our range of services.
          </p>

          <Row>
            {centres.map((centre, index) => (
              <Col key={index} sm={12} md={4} className="mb-4">
                <Card className={`h-100 centre-card ${showMore[index] ? 'expanded-card' : ''}`}>
                  <Card.Img variant="top" src={centre.image} className="centre-card-img" />
                  <Card.Body>
                    <Card.Title>{centre.name}</Card.Title>
                    <Card.Text>
                      {showMore[index] ? centre.description : `${centre.description.slice(0, 50)}...`}
                      <span
                        className="read-more-toggle"
                        onClick={() => toggleShowMore(index)}
                      >
                        {showMore[index] ? ' Read Less' : ' Read More'}
                      </span>
                    </Card.Text>
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

      <FooterComponent />
    </div>
  );
};

export default CentresPage;
