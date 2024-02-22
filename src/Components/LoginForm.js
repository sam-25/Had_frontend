// LoginForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ onBack, onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    // Here you would typically handle the login logic,
    // such as sending the email and password to your server for authentication
  };

  return (
    <div className="login-container">
      {/* Back Button */}
      <button className="Back-button" onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} size="xs" /> Back
      </button>

      {/* Form Title */}
      <h2>Login</h2>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      {/* Toggle to Signup Form */}
      <p>
        Don't have an account? <span onClick={onToggle} style={{color: '#007bff', cursor: 'pointer'}}>Sign up</span>
      </p>
    </div>
  );
};

export default LoginForm;
