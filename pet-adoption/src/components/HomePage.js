import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import logo from '../assets/logo.png'; // Import the logo for background
import './HomePage.css';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [heartAnimation, setHeartAnimation] = useState({});
  const [sortedPets, setSortedPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets');
        setPets(response.data);
        setSortedPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  const handleLike = (id) => {
    setHeartAnimation((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setHeartAnimation((prev) => ({ ...prev, [id]: false }));
    }, 1000);
  };

  const sortAlphabetically = () => {
    const sorted = [...sortedPets].sort((a, b) => a.name.localeCompare(b.name));
    setSortedPets(sorted);
  };

  const sortByAge = () => {
    const sorted = [...sortedPets].sort((a, b) => a.age - b.age);
    setSortedPets(sorted);
  };

  return (
    <div>
      <NavbarComponent />

      {/* Welcome Section */}
      <Container className="text-center my-4 welcome-section">
        <img src={logo} alt="Logo" className="background-logo" />
        <h1 className="welcome-text">Welcome to Pen Pets</h1>
        <p className="subtext">Your friendly pet adoption application where you can freely browse, like, and adopt pets looking for a loving home.</p>
      </Container>

      {/* Mission and Vision Cards */}
      <Container className="my-5">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 mission-vision-card">
              <Card.Body>
                <Card.Title className="text-center">Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to connect loving families with animals in need of a home, creating a positive impact in both their lives and our communities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 mission-vision-card">
              <Card.Body>
                <Card.Title className="text-center">Our Vision</Card.Title>
                <Card.Text>
                  We envision a world where every pet finds a safe, loving, and caring family. Join us in making this vision a reality, one adoption at a time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Filter Buttons */}
      <Container className="text-center my-4">
        <Button className="filter-btn" onClick={sortAlphabetically}>Sort A-Z</Button>
        <Button className="filter-btn" onClick={sortByAge}>Sort by Age</Button>
      </Container>

     {/* Pet Carousel with 5 pets per slide */}
{/* Pet Carousel with 4 pets per slide */}
<Container className="my-4">
  <Carousel indicators={true} interval={3000} className="pet-carousel" controls={false} wrap={true}>
    {Array.from({ length: Math.ceil(sortedPets.length / 4) }).map((_, pageIndex) => (
      <Carousel.Item key={pageIndex}>
        <Row className="justify-content-center">
          {sortedPets.slice(pageIndex * 4, pageIndex * 4 + 4).map((pet) => (
            <Col key={pet._id} md={3} className="mb-4"> {/* Adjust column width to fit 4 items */}
              <Card className="pet-card">
                <Card.Img variant="top" src={`http://localhost:5000/${pet.image}`} className="card-image" />
                <Card.Body className="text-center">
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>Breed: {pet.breed}</Card.Text>
                  <Card.Text>Age: {pet.age}</Card.Text>
                  <div className="d-flex justify-content-around">
                    <Button className="btn-custom" onClick={() => handleLike(pet._id)}>Like</Button>
                    <Button className="btn-custom">Adopt</Button>
                  </div>
                  {heartAnimation[pet._id] && <div className="heart-animation"></div>}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    ))}
  </Carousel>
</Container>


  

      {/* Team Section */}
      <Container className="text-center my-5 team-section">
        <h2 className="welcome-text">Meet Our Team</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="team-card h-100">
              <Card.Img variant="top" src={require('../assets/AlexJohnson.jpg')} className="team-image" />
              <Card.Body>
                <Card.Title>Alex Johnson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
                <Card.Text>
                  Alex is passionate about connecting pets with loving homes and founded Pen Pets to make a difference.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card h-100">
              <Card.Img variant="top" src={require('../assets/SaraMartinez.jpg')} className="team-image" />
              <Card.Body>
                <Card.Title>Sara Martinez</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Head of Marketing</Card.Subtitle>
                <Card.Text>
                  Sara ensures our mission reaches as many people as possible, connecting pets with potential families.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card h-100">
              <Card.Img variant="top" src={require('../assets/TomGreen.jpg')} className="team-image" />
              <Card.Body>
                <Card.Title>Tom Green</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Operations Manager</Card.Subtitle>
                <Card.Text>
                  Tom oversees operations to ensure that everything runs smoothly and our pets are well taken care of.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
