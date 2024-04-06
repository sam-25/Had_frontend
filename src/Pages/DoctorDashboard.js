import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectPatient, setDiagnostics } from './diagnosticsSlice';

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const diagnostics = useSelector((state) => state.diagnostics.diagnostics);

  useEffect(() => {
    // Fetch diagnostics data here and dispatch it to Redux store
    const fetchedDiagnostics = []; // Replace this with your API call to fetch diagnostics
    dispatch(setDiagnostics(fetchedDiagnostics));
  }, [dispatch]);

  const handleRowClick = (patient) => {
    dispatch(selectPatient(patient));
    history.push('/doctor-diagnostic/' + patient.id); // Redirect to detailed diagnostics page
  };

  return (
    <div>
      <h1>Doctor Diagnostic Page</h1>
      <table>
        <thead>
          <tr>
            <th>Diagnostic</th>
            <th>Patient Name</th>
            <th>Status</th>
            <th>Updates</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((diagnostic) => (
            <tr key={diagnostic.id} onClick={() => handleRowClick(diagnostic)}>
              <td>{diagnostic.diagnostic}</td>
              <td>{diagnostic.patientName}</td>
              <td>{diagnostic.status}</td>
              <td>{diagnostic.updates}</td>
              <td>{diagnostic.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;
