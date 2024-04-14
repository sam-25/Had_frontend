// DoctorDashboardPage.js
import React, { useState } from 'react';
import BackButton from '../../Components/BackButton'; // Assuming BackButton.js is in the correct directory
import './DoctorDashboardPage.css'; // Import CSS for styling from the correct path
import NavBar from '../../Components/NavBar';

const DoctorDashboardPage = () => {
  const [diagnoses, setDiagnoses] = useState([
    { id: 1, patientName: 'John Doe', diagnosis: 'Fever', date: '2024-04-05', status: [{ test: 'X-ray', isChecked: false }, { test: 'Blood test', isChecked: true }], updates: 'Started medication' },
    { id: 2, patientName: 'Jane Smith', diagnosis: 'Cough', date: '2024-04-06', status: [{ test: 'X-ray', isChecked: true }, { test: 'Blood test', isChecked: false }], updates: 'Prescribed cough syrup' },
    { id: 2, patientName: 'Jane Smith', diagnosis: 'Cough', date: '2024-04-06', status: [{ test: 'X-ray', isChecked: true }, { test: 'Blood test', isChecked: false }], updates: 'Prescribed cough syrup' },

    // Add more diagnosis data as needed
  ]);

  return (
    <div className="doctor-dashboard-page">
      
      <BackButton onClick={() => console.log('Back button clicked')} />
      <h1>Doctor Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Diagnosis</th>
            <th>Date</th>
            <th>Status</th>
            <th>Updates</th>
          </tr>
        </thead>
        <tbody>
          {diagnoses.map((diagnosis) => (
            <tr key={diagnosis.id}>
              <td>{diagnosis.patientName}</td>
              <td>{diagnosis.diagnosis}</td>
              <td>{diagnosis.date}</td>
              <td>
                <ul>
                  {diagnosis.status.map((test, index) => (
                    <li key={index}>
                      {test.test}: <input
                        type="checkbox"
                        disabled
                        checked={test.isChecked}
                      />
                    </li>
                  ))}
                </ul>
              </td>
              <td>{diagnosis.updates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboardPage;
