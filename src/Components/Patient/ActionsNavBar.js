import React, { useState } from 'react';

const ActionsNavBar = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (buttonId) => {
    if (selectedFile) {
      onUpload(selectedFile, buttonId);
      setSelectedFile(null);
    }
  };

  return (
    <div className="flex flex-col p-4">
      {/* <label htmlFor="file-upload" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer mb-2">
        Upload File
        <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
      </label>
      
      <label htmlFor="final-report-upload" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
        Upload Final Report
        <input id="final-report-upload" type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {selectedFile && <span className="mb-2">{selectedFile.name}</span>} */}
    </div>
  );
};

export default ActionsNavBar;
