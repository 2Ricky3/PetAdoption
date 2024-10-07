import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Pen Pets</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/publish">Publish</Nav.Link>
          <Nav.Link href="/browse">Browse</Nav.Link>
          <Nav.Link href="/centres">Centres</Nav.Link>
          <Button variant="outline-light">Logout</Button>
        </Nav>
      </Navbar>

      <Container className="text-center my-3">
        <Button variant="outline-secondary">A-Z</Button>{' '}
        <Button variant="outline-secondary">Age</Button>{' '}
        <Button variant="outline-secondary">Filter</Button>
      </Container>

      <Container>
        <Row>
          {pets.map((pet) => (
            <Col key={pet._id} sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`http://localhost:5000/uploads/${pet.image}`} />
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>{pet.description}</Card.Text>
                  <Button variant="success" className="mr-2">Like</Button>
                  <Button variant="primary">Adopt</Button>
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
