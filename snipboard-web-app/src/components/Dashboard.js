// src/components/Dashboard.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <div>
      <h1>My Dashboard</h1>
      {email && <p>Welcome, {email}</p>}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;