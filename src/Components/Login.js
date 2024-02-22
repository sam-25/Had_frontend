import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserInjured, faUserMd, faXRay, faRadiationAlt, faUserCog, faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const UserTypeOption = ({ icon, label, onClick }) => (
  <div className="user-type-option" onClick={() => onClick(label)}>
    <FontAwesomeIcon icon={icon} size="lg" />
    <span className="user-type-label">{label}</span>
    <FontAwesomeIcon icon={faArrowRight} size="lg" />
  </div>
);

const Login = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used for signup
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);
  // State to store selected user type
  const [userType, setUserType] = useState('');

  // Handle user type selection
  const handleUserTypeSelect = (type) => {
    // console.log(type)
    setUserType(type);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here, you can handle the form submission, e.g., send data to a server
    console.log({ email, password, name: isLogin ? null : name, userType });
  };

  // Render user type selection if no type has been selected yet
  if (!userType) {
    return (
        
      <div className="user-type-selection">
        <h2>Login As <FontAwesomeIcon icon={faArrowRight} size="xs" /></h2>
        <UserTypeOption icon={faUserInjured} label="Patient" onClick={handleUserTypeSelect} />
        <UserTypeOption icon={faUserMd} label="Doctor" onClick={handleUserTypeSelect} />
        <UserTypeOption icon={faXRay} label="Radiographer" onClick={handleUserTypeSelect} />
        <UserTypeOption icon={faRadiationAlt} label="Radiologist" onClick={handleUserTypeSelect} />
        <UserTypeOption icon={faUserCog} label="Admin" onClick={handleUserTypeSelect} />
      </div>
    );
  }

  return (
    // <div> <button> Back  </button></div>
   
    <div className="login-container">
      <button className="Back-button" onClick={()=>setUserType('')}>   <FontAwesomeIcon icon={faArrowLeft} size="xs" />    &nbsp; Back</button>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      {isLogin ? (
        <p>
          Don't have an account? <span onClick={() => setIsLogin(false)} style={{color: '#007bff', cursor: 'pointer'}}>Sign up</span>
        </p>
      ) : (
        <p>
          Already have an account? <span onClick={() => setIsLogin(true)} style={{color: '#007bff', cursor: 'pointer'}}>Login</span>
        </p>
      )}
    </div>
  );
};

export default Login;
