import React, { useState } from 'react';
import AddTestForm from '../Forms/AddTestForm'; // Import the AddTestForm component

const ConsultationNavbar = () => {
  const [showAddTestForm, setShowAddTestForm] = useState(false);

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <div className="btn btn-square btn-ghost">
          <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Invite users</a></li>
            <li><a>Mark as completed</a></li>
            <li><a onClick={() => setShowAddTestForm(true)}>Add Test</a></li>
          </ul>
        </div>
      </div>
      
      {/* Conditionally render the AddTestForm component */}
      {showAddTestForm && <AddTestForm onClose={() => setShowAddTestForm(false)} />}
    </div>
  );
};

export default ConsultationNavbar;
