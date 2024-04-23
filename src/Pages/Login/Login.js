// Login.js
import React, { useState } from 'react';
import UserTypeSelection from '../../Components/UserTypeSelection';
import LoginForm from '../../Components/LoginForm';
import SignupForm from '../../Components/SignupForm';
import axios from 'axios';

const Login = () => {
  const [userType, setUserType] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isToken,setToken] =useState()

  if (!userType) {
    return <UserTypeSelection onSelectUserType={(type) => setUserType(type)} />;
    // let val = localStorage.getItem('token'); 
    // if(val != null){


    //   if(userType == 'Radiographer'){
    //       try{
                 

    //       }
    //       catch{
             
    //       }
    //   }
    //   else if(userType == 'Doctor'){
    //      try{
    //        let val = axios.get("")
             
    //     }
    //     catch{
           
    //     }
    //   }
       
     
    // }
  }

  return (

    isLogin ? (
      <LoginForm onBack={() => setUserType('')} onToggle={() => setIsLogin(false)} userType={userType} />
    ) : (
      <SignupForm onBack={() => setUserType('')} onToggle={() => setIsLogin(true)} userType={userType}/>
    )
  );
};

export default Login;
