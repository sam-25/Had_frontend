// BackButton.js
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Assuming you're using react-icons for the back arrow icon

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;
