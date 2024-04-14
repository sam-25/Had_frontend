// LoginForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MedicalLabPage from '../Pages/MedicalLab/MedicalLabPage';
const LoginForm = ({ onBack, onToggle ,userType}) => {
  let howle = 0;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, password });
    // Here you would typically handle the login logic,
    // such as sending the email and password to your server for authentication

    let user = {
      "username": name,
      "password":password, 
     }
 
   
   let options = {
     method: 'POST',
     headers: {
         'Content-Type':
             'application/json;charset=utf-8'
     },
     body: JSON.stringify(user)
   }
 
 
   async function request(options){
 
       try{

        let res = await axios.post("http://localhost:8080/auth/generateToken",
          {   
           username: name,
           password: password, 

          }
        )

        var token = res.data; 
        localStorage.setItem("token",token); 
          
        if(userType=="Radiographer")
        navigate("/Radiographer");
      else{
        navigate("/Doctor");
      }
           
       }
       catch(e){
          
          console.log(e); 
       }
 
   }
 
   request(options);

  };
  // if(!howle)
  return ( 
    <div className="login-container">
      {/* Back Button */}
      <button className="Back-button" onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} size="xs" /> Back
      </button>

      {/* Form Title */}
      <h2>Login</h2>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      {/* Toggle to Signup Form */}
      
      {userType === 'Patient' && (
        <p>
          Don't have an account? <span onClick={onToggle} style={{color: '#007bff', cursor: 'pointer'}}>Sign up</span>
        </p>
      )}
    </div>
  );
};

export default LoginForm;
