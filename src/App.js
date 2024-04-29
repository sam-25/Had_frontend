import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import MedicalLabPage from './Pages/MedicalLab/MedicalLabPage';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import EmptyPage from "./Pages/EmptyPage";
import DoctorDashboardPage from "./Pages/DoctorNew/DoctorDashboard";
import DoctorDiagnosticPage from "./Pages/Doctor/DoctorDiagnosticPage";
import DoctorConsultation from './Pages/DoctorNew/DoctorConsultation';
import PatientDashboard from './Pages/Patient/PatientDashboard'
import RadiographerDashboard from './Pages/Radiographer/RadiographerDashboard'
import PatientConsultation from './Pages/Patient/PatientConsultation';
import Notes from './Components/DoctorNew/Notes';
import RadiographerConsultation from './Pages/Radiographer/RadiographerConsultation'
import './App.css'
import auth from './Components/auth';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">

       <BrowserRouter>
          <Routes>
              <Route path="/" element= {<LoginPage />}/>
              <Route path="/Radiologist" element = {auth() ? <DoctorDashboardPage /> : <LoginPage></LoginPage>} />
              <Route path="/Patient" element = {auth() ? <PatientDashboard/>: <LoginPage></LoginPage>}/>
              <Route path="/Radiographer" element = {auth() ? <RadiographerDashboard /> : <LoginPage></LoginPage>} />
              <Route path="/Admin" element = {auth() ? <DoctorDashboardPage /> : <LoginPage></LoginPage>} />

              <Route path="/Radiographer" element = {auth() ? <MedicalLabPage /> : <LoginPage/>} />
              <Route path="/Doctor" element = {auth() ? <DoctorDashboardPage /> : <LoginPage></LoginPage>} />
              <Route path="/DoctorConsultation/:id" element={<DoctorConsultation/>} />
              <Route path="/PatientConsultation/:id" element={<PatientConsultation/>} />

              {/* <Route path="/" element= {< RadiographerConsultation/>}/> */}

          </Routes>
        </BrowserRouter> 

    </div>
  );
}

export default App;
