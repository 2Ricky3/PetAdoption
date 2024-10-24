import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);
  const [password] = useState('2003'); // Hardcode the password

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get(`http://localhost:5000/api/admin/users?password=${password}`);
        const petsResponse = await axios.get(`http://localhost:5000/api/admin/pets?password=${password}`);
        setUsers(usersResponse.data);
        setPets(petsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [password]);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${id}?password=${password}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeletePet = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/pets/${id}?password=${password}`);
      setPets(pets.filter(pet => pet._id !== id));
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container my-4">
        <h2>Admin Dashboard</h2>

        <h3>Users</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Pets</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
              <tr key={pet._id}>
                <td>{pet.name}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeletePet(pet._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPage;
