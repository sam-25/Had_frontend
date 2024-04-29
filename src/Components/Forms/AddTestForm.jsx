import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {colourOptions} from '../RadiologistList';

const animatedComponents = makeAnimated();

const AddTestForm = ({ consultationId, onClose, onSubmit, radiographers, radiologists }) => {
  const [formData, setFormData] = useState({
    testName: '',
    radiographer: [],
    radiologist: [],
    remarks: '',
  });

  const handleChange = (name, selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedOption,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let tempformdata = {
        consultationId: parseInt(consultationId['consultationId']),
        name: formData.testName,
        description: formData.remarks,
        radiographerIds: formData.radiographer.map((option) => option.value),
        radiologistIds: formData.radiologist.map((option) => option.value),
      };

      console.log(tempformdata);
      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.post('http://localhost:8080/consultation/createTest', tempformdata);

      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Add Test Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="testName" className="block text-sm font-medium text-gray-700">
              Test Name
            </label>
            <select
              id="testName"
              name="testName"
              value={formData.testName}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select Test</option>
              <option value="Test 1">Test 1</option>
              <option value="Test 2">Test 2</option>
              <option value="Test 3">Test 3</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="radiographer" className="block text-sm font-medium text-gray-700">
              Radiographer
            </label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[]}
              isMulti
              options={colourOptions}
              onChange={(selectedOption) => handleChange('radiographer', selectedOption)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="radiologist" className="block text-sm font-medium text-gray-700">
              Radiologist
            </label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[]}
              isMulti
              options={colourOptions}
              onChange={(selectedOption) => handleChange('radiologist', selectedOption)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              rows={4}
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

export default AddTestForm;
