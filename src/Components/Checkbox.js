import React, { useState } from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
    const [checked, setChecked] = useState(isChecked);
  
    const handleOnChange = (e) => {
      const isChecked = e.target.checked;
      setChecked(isChecked);
    //   onChange(isChecked);
    };
  
    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleOnChange}
        />
        {label}
      </label>
    );
  };
  
  export default Checkbox;