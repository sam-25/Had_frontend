import React from 'react';
import './OptionsNavBar.css'; // Assuming you have a CSS file for styling

function OptionsNavBar() {
    return (
        <div className="options-navbar">
            <button className="option-button">View Notes</button>
            <button className="option-button">Add Notes</button>
            <button className="option-button">Upload Final Report</button>
        </div>
    );
}

export default OptionsNavBar;
