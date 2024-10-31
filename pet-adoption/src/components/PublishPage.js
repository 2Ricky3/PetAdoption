import React, { useState } from 'react';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaPaw, FaCalendarAlt, FaDog } from 'react-icons/fa';

const PublishPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();

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
        navigate('/home');
      }
    } catch (error) {
      alert('Failed to publish pet.');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <StyledWrapper>
        <InfoCard>
          <h3>Animals We Accept</h3>
          <p>We accept a variety of animals, including:</p>
          <ul>
            <li>Dogs</li>
            <li>Cats</li>
            <li>Rabbits</li>
            <li>Birds</li>
            <li>Small reptiles</li>
          </ul>
          <p>Contact us for specific requirements for each type.</p>
        </InfoCard>

        <form className="form" onSubmit={handlePublish}>
          <h2 className="form-title">Publish a Pet</h2>
          <div className="flex-column">
            <label>Pet Name</label>
            <div className="input-wrapper">
              <FaPaw className="input-icon" />
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex-column">
            <label>Age</label>
            <div className="input-wrapper">
              <FaCalendarAlt className="input-icon" />
              <input
                type="number"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex-column">
            <label>Breed</label>
            <div className="input-wrapper">
              <FaDog className="input-icon" />
              <input
                type="text"
                className="input"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex-column">
            <label>Upload Image</label>
            <label htmlFor="file-upload" className="upload-button">
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
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Uploaded preview" />
              </div>
            )}
          </div>
          <button type="submit" className="button-submit">Publish</button>
          <p className="small-text">Ts & Cs Apply. Based in South Africa.</p>
        </form>

        <TipsCard>
          <h4>Tips for Uploading</h4>
          <p>Ensure your image is clear and well-lit for better presentation:</p>
          <ul>
            <li>Use natural lighting if possible.</li>
            <li>Focus on the pet’s face and features.</li>
            <li>Avoid busy backgrounds.</li>
          </ul>
        </TipsCard>
      </StyledWrapper>
      <FooterComponent />
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 40px;
  background-color: #2c2c2c;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffffff;
    padding: 40px;
    width: 500px;
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

  .input-wrapper {
    position: relative;
  }

  .input {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    padding-left: 35px;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }

  .input:focus-within {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }

  .input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }

  .upload-button {
    display: inline-flex;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fa;
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    cursor: pointer;
    color: #151717;
    transition: background-color 0.3s ease;
  }

  .upload-button:hover {
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
  }

  .small-text {
    text-align: center;
    font-size: 12px;
    color: grey;
    margin-top: 5px;
  }
`;

const InfoCard = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  color: #333;
  align-self: flex-start;

  h3 {
    text-align: center;
    margin-bottom: 15px;
  }

  ul {
    padding-left: 20px;
  }
`;

const TipsCard = styled.div`
  background-color: #e9ecef;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  color: #333;
  align-self: flex-start;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export default PublishPage;
