
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRadiologistForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // patientName: '',
    // diagnosisName: '',
    // remarks: '',
    name: '',
    email: '',
    password: '',
    specialization: '',
    medialLicenseNumber: '',
    yearsOfExperience: '',
    professionalAffiliations: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = async(e) => {
    // e.preventDefault,
    navigate('/AdminDashboard');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      var token = localStorage.getItem("token"); 
      console.log(token);
      
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      let tempformdata={
        // token: token,
        // patientName: formData.patientName,
        // name: formData.diagnosisName,
        // description: formData.remarks
        name: formData.name,
        email: formData.email,
        password: 'xxxxx',
        // password: formData.password,
        // specialization: formData.specialization,
        // medialLicenseNumber: formData.medialLicenseNumber,
        // yearsOfExperience: formData.yearsOfExperience,
        // professionalAffiliations: formData.professionalAffiliations,
      }
      const response = await axios.post('http://localhost:8080/createRadiologist', tempformdata);
      
      
      console.log('Response:', response.data);
      // Reset form after successful submission
      setFormData({
        patientName: '',
        diagnosisName: '',
        remarks: '',
      });

      navigate('/AdminDashboard');
      // Close the form
    //   onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error as needed
    }
  };
  



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-h-[80vh] overflow-y-auto">
        <div className="bg-white p-6 w-96">
          <h2 className="text-xl font-semibold mb-4">New Radiologist</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.patientName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.diagnosisName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Specialization" className="block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <input
                type="text"
                id="Specialization"
                name="Specialization"
                value={formData.remarks}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="medicalLisenceNumber" className="block text-sm font-medium text-gray-700">
                MedicalLisenceNumber
              </label>
              <input
                type="text"
                id="medicalLisenceNumber"
                name="medicalLisenceNumber"
                value={formData.remarks}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="yearsOfExperince" className="block text-sm font-medium text-gray-700">
                YearsOfExperince
              </label>
              <textarea
                id="yearsOfExperince"
                name="yearsOfExperince"
                value={formData.remarks}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="professionalAffiliations" className="block text-sm font-medium text-gray-700">
                  ProfessionalAffiliations
              </label>
              <textarea
                id="professionalAffiliations"
                name="professionalAffiliations"
                value={formData.remarks}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div> */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRadiologistForm;