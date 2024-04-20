// DoctorDashboard.jsx
import React, { useState } from 'react';
import TopMenuBar from '../../Components/TopMenuBar';
import DoctorDiagnosisTable from '../../Components/DoctorNew/DoctorDiagnosisTable';
import SecondOpinionRequests from '../../Components/DoctorNew/SecondOpinionRequests';
import NewDiagnosticForm from '../../Components/Forms/NewDiagnosticForm';

const DoctorDashboard = () => {
  const [showNewDiagnosticForm, setShowNewDiagnosticForm] = useState(false);

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

  const handleSubmitForm = () => {
    setShowNewDiagnosticForm(false);
  };

  return (
    <div>
      <TopMenuBar />
      <div className="container mx-auto p-4">
        {/* <h1 className="text-2xl font-bold mb-4"> Doctor Dashboard </h1> */}
        
        <DoctorDiagnosisTable />
        <SecondOpinionRequests />

        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            onClick={handleAddDiagnosis}
          >
            Add Diagnosis
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleViewPastDiagnosis}
          >
            View Past Diagnosis
          </button>
        </div>

        {showNewDiagnosticForm && <NewDiagnosticForm onClose={handleCloseForm} onSubmit={handleSubmitForm}/>}
      </div>
    </div>
  );
};

export default DoctorDashboard;