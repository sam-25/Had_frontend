// NavBar.js
import React from 'react';
import './NavBar.css'; // Assuming you have a CSS file for styling

function NavBar() {
  return (
    <div className="navbar">
      <a href="#tests" className="nav-item">Tests</a>
      <a href="#chat" className="nav-item">Chat</a>
    </div>
  );
}

export default NavBar;
