import React, { useRef } from 'react';
import axios from 'axios';

const DicomUpload = ({ testId }) => {
    const fileInputRef = useRef(null);

    const handleUpload = async () => {
        const files = fileInputRef.current.files;
        const formData = new FormData();
    
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
    
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
            const params = { testId: testId, fileName: 'dummy' };
            const response = await axios.post('http://localhost:8080/dicom/upload', formData, { params });
            console.log('Files uploaded successfully');
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };
    

    return (
        <div className="mt-4">
            <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload DICOM
            </label>
            <input
                id="file-upload"
                type="file"
                ref={fileInputRef}
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleUpload}
            />
        </div>
    );
};

export default DicomUpload;
