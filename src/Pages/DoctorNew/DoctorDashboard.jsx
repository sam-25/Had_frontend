import React, { useState, useEffect } from 'react';
import TopMenuBar from '../../Components/TopMenuBar';
import DoctorDiagnosisTable from '../../Components/DoctorNew/DoctorDiagnosisTable';
import SecondOpinionRequests from '../../Components/DoctorNew/SecondOpinionRequests';
import NewDiagnosticForm from '../../Components/Forms/NewDiagnosticForm';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [showNewDiagnosticForm, setShowNewDiagnosticForm] = useState(false);
  const [pastDiagnosis, setPastDiagnosis] = useState(false);
  const [modifiedPastDiagnosis, setModifiedPastDiagnosis] = useState([]);

  useEffect(() => {
    // Filter or manipulate pastDiagnosis data here if needed
    setModifiedPastDiagnosis(pastDiagnosis);
  }, [pastDiagnosis]);

  const handleAddDiagnosis = () => {
    setShowNewDiagnosticForm(true);
    console.log('Add Diagnosis clicked');
  };

  const handleTogglePastDiagnosis = () => {
    setPastDiagnosis(!pastDiagnosis);
    console.log('Toggle Past Diagnosis clicked');
  };

  const handleCloseForm = () => {
    setShowNewDiagnosticForm(false);
  };

  const handleSubmitForm = (formData) => {
    console.log('Form submitted:', formData);
    setPastDiagnosis([...pastDiagnosis, formData]);
    setShowNewDiagnosticForm(false);
  };

  return (
    <div>
      <TopMenuBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4"> Doctor Dashboard </h1>
        
        <DoctorDiagnosisTable pastDiagnosis={modifiedPastDiagnosis} />
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
            onClick={handleTogglePastDiagnosis}
          >
            {pastDiagnosis ? 'View Active Diagnosis' : 'View Past Diagnosis'}
          </button>
        </div>

        {showNewDiagnosticForm && <NewDiagnosticForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />}
      </div>
    </div>
  );
};

export default DoctorDashboard;
