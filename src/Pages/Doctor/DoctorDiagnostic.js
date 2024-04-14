// DoctorDiagnosticPage.js
import React, { useState } from 'react';
import './DoctorDiagnosticPage.css'; 
import NavBar from '../../Components/NavBar';
import TestForm from '../../Components/TestForm'

const DoctorDiagnostic = () => {
  const [tests, setTests] = useState([
    { id: 1, test: 'X-ray', date: '2024-04-05', progress: 'Test Completed', myStatus: false, remarks: 'No remarks' },
    { id: 2, test: 'CT Scan', date: '2024-04-06', progress: 'X-ray taken', myStatus: true, remarks: 'Some remarks' },
    { id: 3, test: 'MRI Scan', date: '2024-04-07', progress: 'Pending', myStatus: false, remarks: 'Additional remarks' },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleMyStatusChange = (id) => {
    setTests((prevTests) =>
      prevTests.map((test) =>
        test.id === id ? { ...test, myStatus: !test.myStatus } : test
      )
    );
  };

  const handleRowClick = (id) => {
    console.log('Row clicked:', id);
  };

  const handleTestClick = (e, id) => {
    e.stopPropagation();
    console.log('Test clicked:', id);
  };

  const handleAddTestClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="doctor-diagnostic-page-container">
      <NavBar></NavBar>
      <div className="doctor-diagnostic-page">
        <h1>Diagnostic Name - Patient Name</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Test</th>
                <th>Date</th>
                <th>Current Progress</th>
                <th>My Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={test.id} onClick={() => handleRowClick(test.id)}>
                  <td>
                    <div onClick={(e) => handleTestClick(e, test.id)}>
                      {test.test}
                    </div>
                  </td>
                  <td>{test.date}</td>
                  <td>{test.progress}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={test.myStatus}
                      onChange={() => handleMyStatusChange(test.id)}
                    />
                  </td>
                  <td>{test.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleAddTestClick}>Add Test</button>
        {showForm && <TestForm onClose={handleCloseForm} />}
      </div>
    </div>
  );
};

export default DoctorDiagnostic;
