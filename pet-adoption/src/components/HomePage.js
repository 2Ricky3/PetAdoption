import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel, Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import { FaHeart } from 'react-icons/fa';
import './HomePage.css';

const backendUrl = 'https://penpets.oa.r.appspot.com';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [heartAnimation, setHeartAnimation] = useState({});
  const [sortedPets, setSortedPets] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchPets = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/pets`);
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

  const handleAdoptClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <NavbarComponent />

      {/* Welcome Section */}
      <Container className="text-center my-5 welcome-section" data-aos="fade-up">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" className="background-logo" />
        <h1 className="welcome-text">Welcome to Pen Pets</h1>
        <p className="subtext">
          Your friendly pet adoption application where you can freely browse, like, and adopt pets looking for a loving home.
        </p>
      </Container>

      {/* Mission and Vision Cards */}
      <Container className="my-5 pb-5">
        <Row className="gy-4">
          <Col md={6} data-aos="fade-right">
            <Card className="h-100 mission-vision-card">
              <Card.Body>
                <Card.Title className="text-center">Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to connect loving families with animals in need of a home, creating a positive impact in both their lives and our communities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} data-aos="fade-left">
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

      {/* Title Section */}
      <Container className="text-center my-5" data-aos="fade-up">
        <h2 className="friends-title">This is Our Furry Friends</h2>
      </Container>

      {/* Filter Buttons */}
      <Container className="text-center my-5" data-aos="fade-up">
        <Button className="filter-btn mx-2" onClick={sortAlphabetically}>Sort A-Z</Button>
        <Button className="filter-btn mx-2" onClick={sortByAge}>Sort by Age</Button>
      </Container>

      {/* Pet Carousel with 4 pets per slide */}
      <Container className="my-5 pb-5 wider-carousel" data-aos="fade-up">
        <Carousel indicators={true} interval={3000} className="pet-carousel" controls={false} wrap={true}>
          {Array.from({ length: Math.ceil(sortedPets.length / 4) }).map((_, pageIndex) => (
            <Carousel.Item key={pageIndex}>
              <Row className="justify-content-center">
                {sortedPets.slice(pageIndex * 4, pageIndex * 4 + 4).map((pet) => (
                  <Col key={pet._id} md={3} className="mb-4">
                    <Card className="pet-card" data-aos="zoom-in">
                      <Card.Img variant="top" src={`${backendUrl}/${pet.image}`} className="card-image" />
                      <Card.Body className="text-center position-relative">
                        <Card.Title>{pet.name}</Card.Title>
                        <Card.Text>Breed: {pet.breed}</Card.Text>
                        <Card.Text>Age: {pet.age}</Card.Text>
                        <div className="d-flex justify-content-around position-relative">
                          <Button className="btn-custom" onClick={() => handleLike(pet._id)}>Like</Button>
                          <Button className="btn-custom" onClick={handleAdoptClick}>Adopt</Button>
                        </div>
                        {/* Heart animation icon */}
                        {heartAnimation[pet._id] && (
                          <FaHeart className="heart-animation" />
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Modal for Adopt Confirmation */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="text-center">
          <h4>We will send you an email soon!</h4>
          <Button className="btn-custom mt-3" onClick={handleCloseModal}>OK</Button>
        </Modal.Body>
      </Modal>

      {/* Team Section */}
      <Container className="text-center my-5 pt-5 team-section" data-aos="fade-up">
        <h2 className="welcome-text mb-5">Meet Our Team</h2>
        <p className="company-info mt-4">
          Pen Pets is a non-profit organization dedicated to finding homes for pets in need. Our hard work and commitment are focused solely on helping animals find loving families.
        </p>
        <Row className="gy-4 mt-4">
          <Col md={4} data-aos="flip-left">
            <Card className="team-card h-100">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/SaraMartinez.jpg`} className="team-image" />
              <Card.Body>
                <Card.Title>Alex Johnson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
                <Card.Text>
                  Alex is passionate about connecting pets with loving homes and founded Pen Pets to make a difference.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="flip-up">
            <Card className="team-card h-100">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/AlexJohnson.jpg`} className="team-image" />
              <Card.Body>
                <Card.Title>Sara Martinez</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Head of Marketing</Card.Subtitle>
                <Card.Text>
                  Sara ensures our mission reaches as many people as possible, connecting pets with potential families.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="flip-right">
            <Card className="team-card h-100">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/TomGreen.jpg`} className="team-image" />
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
