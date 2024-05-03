// DoctorDashboard.jsx
import React, { useState } from 'react';
import TopMenuBar from '../../Components/TopMenuBar';
import RadiographerDiagnosisTable from '../../Components/Radiographer/RadiographerDiagnosisTable';
import SecondOpinionRequests from '../../Components/Patient/SecondOpinionRequests';
import NewDiagnosticForm from '../../Components/Forms/NewDiagnosticForm';
import PatientDiagnosisTable from'../../Components/Patient/PatientDiagnosisTable'
import RadiographerDiagnosticPage from '../../Components/Radiographer/RadiographerDiagnosisTable';


const DoctorDashboard = () => {
  const [showNewDiagnosticForm, setShowNewDiagnosticForm] = useState(false);
  const [pastDiagnosis, setPastDiagnosis] = useState([]);

  const handleAddDiagnosis = () => {
    setShowNewDiagnosticForm(true);
    console.log('Add Diagnosis clicked');
  };

  const handleViewPastDiagnosis = () => {
    // Add logic to handle viewing past diagnosis
    console.log('View Past Diagnosis clicked');
  };

  const handleCloseForm = () => {
    setShowNewDiagnosticForm(false);
  };

  const handleSubmitForm = (formData) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add the new diagnosis to the past diagnosis list
    setPastDiagnosis([...pastDiagnosis, formData]);
    // Close the form
    setShowNewDiagnosticForm(false);
  };

  return (
    <div>
      <TopMenuBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4"> Radiographer Dashboard </h1>
        
        {/* <PatientDiagnosisTable pastDiagnosis={pastDiagnosis} /> */}
        {/* <DoctorDiagnosisTable> </DoctorDiagnosisTable> */}
        <RadiographerDiagnosticPage></RadiographerDiagnosticPage>
        {/* <SecondOpinionRequests /> */}

        <div className="mb-4">
          {/* <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            onClick={handleAddDiagnosis}
          >
            Add Diagnosis
          </button> */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleViewPastDiagnosis}
          >
            View Past Diagnosis
          </button>
        </div>

        {showNewDiagnosticForm && <NewDiagnosticForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />}
      </div>
    </div>
  );
};

export default DoctorDashboard;