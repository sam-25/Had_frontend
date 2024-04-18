import React from 'react';
import TopMenuBar from './TopMenuBar';
import DoctorDiagnosisTable from '../../Components/DoctorNew/DoctorDiagnosisTable';
import SecondOpinionRequests from '../../Components/DoctorNew/SecondOpinionRequests';

const DoctorDashboard = () => {
  const handleAddDiagnosis = () => {
    // Add logic to handle adding diagnosis
    console.log('Add Diagnosis clicked');
  };

  const handleViewPastDiagnosis = () => {
    // Add logic to handle viewing past diagnosis
    console.log('View Past Diagnosis clicked');
  };

  return (
    <div>
      <TopMenuBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4"> Doctor Dashboard </h1>
        
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
      </div>
    </div>
  );
};

export default DoctorDashboard;
