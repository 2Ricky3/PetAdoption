import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  return (
    <Container>
      <Row>
        {pets.map((pet) => (
          <Col key={pet._id} sm={12} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`http://localhost:5000/${pet.image}`} />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>Breed: {pet.breed}</Card.Text>
                <Card.Text>Age: {pet.age}</Card.Text>
                <Button variant="primary">Like</Button>{' '}
                <Button variant="success">Adopt</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
