import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get('http://localhost:5000/api/pets');
      setPets(response.data);
    };
    fetchPets();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div className="col-md-4" key={pet._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">{pet.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No Pets Available</h1>
        )}
      </div>
    </div>
  );
};

export default PetList;
