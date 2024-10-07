import React, { useState } from 'react';
import axios from 'axios';
import './PublishPage.css';

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
    formData.append('image', image);  // Adding the image to FormData

    try {
      const response = await axios.post('http://localhost:5000/api/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        alert('Pet published successfully!');
        window.location.href = '/home';
      }
    } catch (error) {
      console.error('Error publishing pet:', error);
      alert('Failed to publish pet. Please try again.');
    }
  };

  return (
    <div className="publish-container">
      <form onSubmit={handlePublish}>
        <h2>Post a Dog</h2>
        <div className="form-group">
          <label>Name</label>
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
            type="text"
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
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Publish</button>
      </form>
    </div>
  );
};

export default PublishPage;
