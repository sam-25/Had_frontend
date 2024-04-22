import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import MedicalLabPage from './Pages/MedicalLab/MedicalLabPage';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import EmptyPage from "./Pages/EmptyPage";
import DoctorDashboardPage from "./Pages/DoctorNew/DoctorDashboard";
import DoctorDiagnosticPage from "./Pages/Doctor/DoctorDiagnosticPage";
import DoctorConsultation from './Pages/DoctorNew/DoctorConsultation';
import Notes from './Components/DoctorNew/Notes';
import './App.css'
import auth from './Components/auth';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route path="/" element= {<LoginPage />}/>
              <Route path="/Radiographer" element = {auth() ? <MedicalLabPage /> : <LoginPage/>} />
              <Route path="/Doctor" element = {auth() ? <DoctorDashboardPage /> : <LoginPage></LoginPage>} />
              <Route path="/DoctorConsultation" element={<DoctorConsultation/>} />
              {/* <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Radiographer" element = {<MedicalLabPage />} /> 
              <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Radiographer" element = {<MedicalLabPage />} /> */}
              {/* <Route path="/" element= {<DoctorConsultation />}/> */}
          </Routes>
        </BrowserRouter> 

      {/* <DoctorDiagnosticPage /> */}
       {/* <DoctorConsultation /> */}
    </div>
  );
}

export default App;
