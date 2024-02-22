// SignupForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ onBack, onToggle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
    // Here you would typically handle the signup logic,
    // such as sending the name, email, and password to your server for account creation
  };

  return (
    <div className="login-container">
      {/* Back Button */}
      <button className="Back-button" onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} size="xs" /> Back
      </button>

      {/* Form Title */}
      <h2>Sign Up</h2>

      {/* Signup Form */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
      </form>

      {/* Toggle to Login Form */}
      <p>
        Already have an account? <span onClick={onToggle} style={{color: '#007bff', cursor: 'pointer'}}>Login</span>
      </p>
    </div>
  );
};

export default SignupForm;
