import React from 'react';
import LoginPage from './Components/LoginPage';
import MedicalLabPage from './Components/MedicalLabPage';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import DoctorDashboard from './Pages/DoctorDashboard';
import EmptyPage from "./Components/EmptyPage";
function App() {
  return (
    <div className="App">
      {/* <LoginPage />
       */}
       <BrowserRouter>
          <Routes>
              <Route path="/" element= {<LoginPage />}/>
              <Route path="/Radiographer" element = {<MedicalLabPage />} />
              <Route path="/Doctor" element = {<DoctorDashboard />} />
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
