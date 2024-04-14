// TestForm.js
import React from 'react';
import './TestForm.css';

const TestForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form values using e.target.elements
    onClose(); // Close the form after submission
  };

  return (
    <div className="test-form">
      <h2>Add Test</h2>
      <button type="button" className="close-button" onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>
          Test Name:
          <select name="testName">
            <option value="X-ray">X-ray</option>
            <option value="CT Scan">CT Scan</option>
            <option value="MRI Scan">MRI Scan</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Radiographer:
          <input type="text" name="radiographer" />
        </label>
        <label>
          Radiologist:
          <input type="text" name="radiologist" />
        </label>
        <label>
          Remark:
          <input type="text" name="remark" />
        </label>
        <div className="button-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TestForm;
