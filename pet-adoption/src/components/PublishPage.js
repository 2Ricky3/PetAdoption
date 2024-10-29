import React, { useState } from 'react';
import axios from 'axios';
import NavbarComponent from './NavbarComponent'; // Ensure the Navbar is included
import FooterComponent from './FooterComponent'; // Ensure Footer is included
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa'; // Icon for file upload

const PublishPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(''); // State for image preview
  const navigate = useNavigate(); // Use for redirecting to home page

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
        navigate('/home'); // Redirect to home page on successful publish
      }
    } catch (error) {
      alert('Failed to publish pet.');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Show image preview when file is uploaded
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // Update imagePreview with file data
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <NavbarComponent /> {/* Add Navbar */}
      <StyledWrapper>
        <form className="form" onSubmit={handlePublish}>
          <h2 className="form-title">Publish a Pet</h2>
          <div className="flex-column">
            <label>Pet Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex-column">
            <label>Age</label>
            <input
              type="number"
              className="input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="flex-column">
            <label>Breed</label>
            <input
              type="text"
              className="input"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              required
            />
          </div>
          <div className="flex-column">
            <label>Upload Image</label>
            <div className="upload-icon">
              <label htmlFor="file-upload" className="custom-file-upload">
                <FaUpload size={24} />
                &nbsp; Upload Image
              </label>
              <input
                id="file-upload"
                type="file"
                className="input-file"
                onChange={handleImageUpload}
                required
              />
            </div>
            {/* Image preview */}
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Uploaded preview" />
              </div>
            )}
          </div>
          <button type="submit" className="button-submit">Publish</button>
          <p className="small-text">Ts & Cs Apply. Based in South Africa.</p>
        </form>
      </StyledWrapper>
      <FooterComponent /> {/* Add Footer */}
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #2c2c2c; 
  position: relative;

  /* Background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Increased gap for more space between elements */
    background-color: #ffffff;
    padding: 40px;
    width: 500px; /* Increased width for more room */
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .form-title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #151717;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .input {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    padding-left: 10px;
    transition: all 0.3s ease-in-out; 
  }

  .input:focus-within {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px); 
  }

  .upload-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    background-color: #f8f9fa;
    transition: background-color 0.3s ease;
  }

  .upload-icon:hover {
    background-color: #e8e8e8;
  }

  .input-file {
    display: none;
  }

  .button-submit {
    margin-top: 20px;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  }

  .button-submit:hover {
    background-color: #808080;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.7),
                0 0 15px rgba(128, 128, 128, 0.5),
                0 0 20px rgba(128, 128, 128, 0.4);
    color: white;
  }

  .image-preview {
    margin-top: 15px;
    text-align: center;
  }

  .image-preview img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
  }

  .small-text {
    text-align: center;
    font-size: 12px;
    color: grey;
    margin-top: 5px;
  }
`;

export default PublishPage;
