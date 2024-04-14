import React from 'react';
import Login from './Login';
import './LoginPage.css';
import homePageImage from '../../Components/Assets/home-page.jpg'; // Make sure this path is correct

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="image-section">
        <img src={homePageImage} alt="Login Visual" />
      </div>
      <div className="login-section">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;