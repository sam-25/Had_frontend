import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import MedicalLabPage from './Pages/MedicalLab/MedicalLabPage';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import EmptyPage from "./Pages/EmptyPage";
import DoctorDiagnosticPage from './Pages/Doctor/DoctorDiagnosticPage';
function App() {
  return (
    <div className="App">
      {/* <LoginPage />
       */}
       <BrowserRouter>
          <Routes>
              <Route path="/" element= {<LoginPage />}/>
              <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Doctor" element = {<DoctorDiagnosticPage />} />
              {/* <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Radiographer" element = {<MedicalLabPage />} /> */}
          </Routes>
       </BrowserRouter>
    </div>
  );
}


export default App;
