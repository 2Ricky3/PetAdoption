import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Card, Button, Container } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import './HomePage.css'; // Include custom CSS for further styling

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [heartAnimation, setHeartAnimation] = useState({});
  const [sortedPets, setSortedPets] = useState([]); // To store sorted pets

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets');
        setPets(response.data);
        setSortedPets(response.data); // Initialize sortedPets
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  useEffect(() => {
    setSortedPets(pets);
  }, [pets]);

  const handleLike = (id) => {
    setHeartAnimation((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setHeartAnimation((prev) => ({ ...prev, [id]: false }));
    }, 1000); // Heart disappears after 1 second
  };

  const sortAlphabetically = () => {
    const sorted = [...sortedPets].sort((a, b) => a.name.localeCompare(b.name));
    setSortedPets(sorted);
  };

  const sortByAge = () => {
    const sorted = [...sortedPets].sort((a, b) => a.age - b.age);
    setSortedPets(sorted);
  };

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Divide pets into groups of 3 per slide
  const petChunks = chunkArray(sortedPets, 3);

  return (
    <div>
      <NavbarComponent />

      {/* Filter Buttons */}
      <Container className="text-center my-3">
        <Button variant="outline-secondary" onClick={sortAlphabetically}>Sort A-Z</Button>{' '}
        <Button variant="outline-secondary" onClick={sortByAge}>Sort by Age</Button>
      </Container>

      {/* Carousel to display pets as cards */}
      <Container className="my-4">
        <Carousel>
          {petChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((pet) => (
                  <Card key={pet._id} style={{ width: '18rem' }}>
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
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
