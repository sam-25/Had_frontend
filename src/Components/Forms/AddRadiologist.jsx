import React, { useState } from 'react';
import axios from 'axios';

const AddRadiologistForm = ({ onClose, onSubmit }) => {
  const [radiologistName, setRadiologistName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/radiologist', { name: radiologistName });
      onSubmit(response.data);
    } catch (error) {
      console.error('Error adding radiologist:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Add Radiologist Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="radiologistName" className="block text-sm font-medium text-gray-700">
              Radiologist Name
            </label>
            <input
              type="text"
              id="radiologistName"
              name="radiologistName"
              value={radiologistName}
              onChange={(e) => setRadiologistName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRadiologistForm;
