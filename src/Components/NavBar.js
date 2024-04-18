// // NavBar.js
// import React, { useState } from 'react';
// import './NavBar.css'; // Assuming you have a CSS file for styling
// import accountIcon from './Assets/account-icon.svg'; // Assuming you have the account icon

// function NavBar() {
//   const [showOptions, setShowOptions] = useState(false);

//   const handleOptionsClick = () => {
//     setShowOptions(!showOptions);
//   };

//   return (
//     <div className="navbar">
//       <a href="#tests" className="nav-item">Tests</a>
//       <a href="#chat" className="nav-item">Chat</a>
//       <div className="nav-item" onClick={handleOptionsClick}>
//         <span className="options">Options</span>
//         {showOptions && (
//           <div className="dropdown-menu">
//             <a href="#request-second-opinion" className="dropdown-item">Request Second Opinion</a>
//             <a href="#option-2" className="dropdown-item">Option 2</a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;
