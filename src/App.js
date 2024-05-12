import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import EmptyPage from "./Pages/EmptyPage";
import DoctorDashboardPage from "./Pages/DoctorNew/DoctorDashboard";
import DoctorConsultation from './Pages/DoctorNew/DoctorConsultation';
import PatientDashboard from './Pages/Patient/PatientDashboard'
import RadiographerDashboard from './Pages/Radiographer/RadiographerDashboard'
import RadiologistDashboard from './Pages/Radiologist/RadiologistDashboard'

import Dashboard from './Pages/Admin/Dashboard';
import AddRadiologistform from './Components/Forms/AddRadiologistform';
import AddRadiographerform from './Components/Forms/AddRadiographerform';
import AddDoctorform from './Components/Forms/AddDoctorForm';
import PatientConsultation from './Pages/Patient/PatientConsultation';
import RadiologistConsultation from './Pages/Radiologist/RadiologistConsultation';
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
              <Route path="/Radiologist" element = {auth() ? <RadiologistDashboard /> : <LoginPage></LoginPage>} />
              <Route path="/Patient" element = {auth() ? <PatientDashboard/>: <LoginPage></LoginPage>}/>
              <Route path="/Radiographer" element = {auth() ? <RadiographerDashboard /> : <LoginPage></LoginPage>} />
              <Route path="/AdminDashboard" element = { <Dashboard/> }/>
              <Route path="/Doctor" element = {auth() ? <DoctorDashboardPage /> : <LoginPage></LoginPage>} />

              <Route path="/DoctorConsultation/:id" element={<DoctorConsultation/>} />
              <Route path="/PatientConsultation/:id" element={<PatientConsultation/>} />
              <Route path="/RadiographerConsultation/:id" element={<RadiographerConsultation/>} />
              <Route path="/RadiologistConsultation/:id" element={<RadiologistConsultation/>} />
              <Route path="/Admin/AddRadiologist" element={<AddRadiologistform/>} />
              <Route path="/Admin/AddRadiographer"element={<AddRadiographerform/>} />
              <Route path="Admin/AddDoctor" element={<AddDoctorform/>} />
              

              {/* <Route path="/" element= {< RadiographerConsultation/>}/> */}

          </Routes>
        </BrowserRouter> 

    </div>
  );
}

export default App;
