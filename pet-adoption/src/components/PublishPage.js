import React, { useState } from 'react';
import axios from 'axios';

const PublishPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState(null);

  const handlePublish = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('breed', breed);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/pets/publish', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        alert('Pet published successfully!');
      }
    } catch (error) {
      alert('Failed to publish pet.');
    }
  };

  return (
    <div className="container">
      <h2>Publish a Pet</h2>
      <form onSubmit={handlePublish}>
        <div className="form-group">
          <label>Pet Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Breed</label>
          <input
            type="text"
            className="form-control"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Publish</button>
      </form>
    </div>
  );
};

export default PublishPage;
