import React, { useState } from 'react';
import './MedicalLabPage.css';

// PatientList component
const PatientList = ({ patients, onSelectPatient }) => {
  return (
    <div className="patient-list">
      <h2>Patients</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id} onClick={() => onSelectPatient(patient)}>
            {patient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PatientDetails component
const PatientDetails = ({ selectedPatient }) => {
  const [files, setFiles] = useState([]);
  const [notes, setNotes] = useState('');

  const addFile = (file) => {
    setFiles([...files, file]);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const shareWithPatient = () => {
    // Logic to share files/notes with patient
  };

  return (
    <div className="patient-details">
      <h2>{selectedPatient ? selectedPatient.name : 'Select a patient'}</h2>
      <div className="files">
        <h3>Files</h3>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
        <button onClick={() => addFile('New File')}>Add File</button>
      </div>
      <div className="notes">
        <h3>Notes</h3>
        <textarea value={notes} onChange={handleNotesChange} />
        <button onClick={shareWithPatient}>Share with Patient</button>
      </div>
    </div>
  );
};

// Main component
const MedicalLabPage = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  // Sample data for patients
  const patients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
  ];

  return (
    <div className="medical-lab-page">
      <div className="title-bar">
        <button>Profile</button>
        <button>Notifications</button>
        <button>Help</button>
      </div>
      <div className="content">
        <PatientList patients={patients} onSelectPatient={handleSelectPatient} />
        <PatientDetails selectedPatient={selectedPatient} />
      </div>
    </div>
  );
};

export default MedicalLabPage;
