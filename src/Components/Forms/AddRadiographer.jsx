import React, { useState } from 'react';
import axios from 'axios';

const AddRadiographerForm = ({ onClose, onSubmit ,testId, consultationId}) => {
  const [radiographerName, setRadiographerName] = useState('');


  const handleSubmit = async (e) => {
    // try {
      e.preventDefault();
      console.log('1');
      console.log(radiographerName);
      // console.log(tempformdata);
      console.log(consultationId);
      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      var response = await axios.post('http://localhost:8080/consultation/addSecondaryDoctor', {
        // You can include request body here if needed
      }, {
        params: {
          doctor: radiographerName,
          // testId: testId, // Uncomment this line if you want to include testId
          consultationId: consultationId,
        }
      });

    console.log('2');

    console.log(response);

      console.log(testId);
      console.log(consultationId);
      console.log(radiographerName);

    // var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      response = await axios.post('http://localhost:8080/test/permitDoctor', {

      }, {
        params:{
          consultationId: consultationId,
          testId: testId,
          permittedDoctorName: radiographerName,
        }
      }
    );

    console.log(response);
    console.log(radiographerName, testId, consultationId);
    console.log("here");

      onClose();
      // window.location.reload();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Add Radiographer Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="radiographerName" className="block text-sm font-medium text-gray-700">
              Radiographer Name
            </label>
            <input
              type="text"
              id="radiographerName"
              name="radiographerName"
              value={radiographerName}
              onChange={(e) => setRadiographerName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
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

export default AddRadiographerForm;
