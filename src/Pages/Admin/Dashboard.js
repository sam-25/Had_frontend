import React, { useState } from 'react';
import AddDoctorForm from '../../Components/Forms/AddDoctorForm';
import AddRadiographerform from '../../Components/Forms/AddRadiographerform';
import AddRadiologistform from '../../Components/Forms/AddRadiologistform';
import { useNavigate } from 'react-router-dom';
import TopMenuBar from '../../Components/TopMenuBar';
import doctorimage from '../../Components/Assets/doctor.jpg';
import radiologistimage from '../../Components/Assets/radiologist.jpg';
import radiographerimage from '../../Components/Assets/Radiolographer.png';

const CreateCard = ({ onClick, text, image }) => (
    // <div>
    <button onClick={onClick} className="relative overflow-hidden bg-cover bg-center h-40 rounded-md shadow-lg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-semibold z-10">{text}</span>
        </div>
        <img src={image} alt={text} className="absolute inset-0 w-full h-full object-cover" />
    </button>
  );

const Dashboard = () => {

  const navigate = useNavigate();


  const handlecreateDoctor = () => {
    navigate('/Admin/AddDoctor');
  }

  const handlecreateradiographer = () => {
    navigate('/Admin/AddRadiographer');
  }
  const handlecreateradiologist = () => {
    navigate('/Admin/AddRadiologist');
  }


  return (
    <div>
        <TopMenuBar />
        <div className="mb-4">

            <div className="flex flex-col gap-4" style={{ width: "25%", marginLeft: "25rem", marginRight: "1rem" }}>
              <h2 className="text-center mb-4">Admin Dashboard</h2>
              <CreateCard onClick={handlecreateDoctor} text="Create Doctor" image={doctorimage} />
              <CreateCard onClick={handlecreateradiologist} text="Create Radiologist" image={radiologistimage} />
              <CreateCard onClick={handlecreateradiographer} text="Create Radiographer" image={radiographerimage} />
            </div>
        </div>
    </div>

  );
};

export default Dashboard;
