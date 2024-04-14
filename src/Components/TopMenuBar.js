import React, { useState } from 'react';
import './TopMenuBar.css'; // Ensure the path is correct
import accountIcon from './Assets/account-icon.svg';
import notificationsIcon from './Assets/notifications.svg';
import helpIcon from './Assets/help.svg';

const TopMenuBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Define icon sizes
  const iconSize = { width: '30px', height: '30px' }; // Adjust the size as needed

  return (
    <div className="top-menu-bar">
      <div className="menu-items">
        <div className="menu-icon" onClick={() => console.log("Notifications clicked")}>
          {/* Apply inline style for size */}
          <img src={notificationsIcon} alt="Notifications" style={iconSize} />
        </div>
        <div className="account-logo" onClick={() => setShowDropdown(!showDropdown)}>
          {/* Apply inline style for size */}
          <img src={accountIcon} alt="Account" style={iconSize} />
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <button>Account Info</button>
            <button>Edit Profile</button>
            <button>Sign Out</button>
          </div>
        )}
        <div className="menu-icon" onClick={() => console.log("Help clicked")}>
          {/* Apply inline style for size */}
          <img src={helpIcon} alt="Help" style={iconSize} />
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;
