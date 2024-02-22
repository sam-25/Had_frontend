// UserTypeSelection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserInjured, faUserMd, faXRay, faRadiationAlt, faUserCog, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const UserTypeOption = ({ icon, label, onClick }) => (
  <div className="user-type-option" onClick={() => onClick(label)}>
    <FontAwesomeIcon icon={icon} size="lg" />
    <span className="user-type-label">{label}</span>
    <FontAwesomeIcon icon={faArrowRight} size="lg" />
  </div>
);

const UserTypeSelection = ({ onSelectUserType }) => (
  <div className="user-type-selection">
    <h2>Login As <FontAwesomeIcon icon={faArrowRight} size="xs" /></h2>
    <UserTypeOption icon={faUserInjured} label="Patient" onClick={onSelectUserType} />
    <UserTypeOption icon={faUserMd} label="Doctor" onClick={onSelectUserType} />
    <UserTypeOption icon={faXRay} label="Radiographer" onClick={onSelectUserType} />
    <UserTypeOption icon={faRadiationAlt} label="Radiologist" onClick={onSelectUserType} />
    <UserTypeOption icon={faUserCog} label="Admin" onClick={onSelectUserType} />
  </div>
);

export default UserTypeSelection;
