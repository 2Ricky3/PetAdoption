import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent'; // Import the reusable navbar
import './HomePage.css'; // Include the custom CSS file for styling

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [heartAnimation, setHeartAnimation] = useState({});

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

  const handleLike = (id) => {
    // Trigger heart animation for the specific pet
    setHeartAnimation((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setHeartAnimation((prev) => ({ ...prev, [id]: false }));
    }, 1000); // Heart disappears after 1 second
  };

  return (
    <div>
      {/* Include Navbar */}
      <NavbarComponent />

      <Container className="my-4">
        <Row>
          {pets.map((pet) => (
            <Col key={pet._id} sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`http://localhost:5000/${pet.image}`} />
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>Breed: {pet.breed}</Card.Text>
                  <Card.Text>Age: {pet.age}</Card.Text>
                  <div className="button-container">
                    <button
                      className="custom-button"
                      onClick={() => handleLike(pet._id)}
                    >
                      <span className="button_top">Like</span>
                    </button>
                    <button className="custom-button" style={{ marginLeft: '10px' }}>
                      <span className="button_top">Adopt</span>
                    </button>
                    {heartAnimation[pet._id] && (
                      <div className="heart-animation"></div> /* Red heart animation */
                    )}
                  </div>
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
