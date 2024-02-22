// Login.js
import React, { useState } from 'react';
import UserTypeSelection from './UserTypeSelection';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Login = () => {
  const [userType, setUserType] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  if (!userType) {
    return <UserTypeSelection onSelectUserType={(type) => setUserType(type)} />;
  }

  return (
    isLogin ? (
      <LoginForm onBack={() => setUserType('')} onToggle={() => setIsLogin(false)} />
    ) : (
      <SignupForm onBack={() => setUserType('')} onToggle={() => setIsLogin(true)} />
    )
  );
};

export default Login;
