import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FileDisplay = ({ consultationId }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                var token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                const response = await axios.get('http://localhost:8080/getFinalReports', {
                    params: {
                        consultationId: consultationId,
                    },
                });
                
                const urlsArray = response.data.map((dataString) => {
                    const byteCharacters = atob(dataString);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
    
                    let image = new Blob([byteArray], { type: 'application/pdf' });
    
                    return URL.createObjectURL(image);
                });
    
                setUrls(urlsArray);
                setFiles(response.data);
                setError(null);

                console.log('fetchfile success');
                console.log(response);
            } catch (error) {
                console.log('fetchfile failed');
                console.error('Error fetching files:', error);
                setError('Failed to fetch files');
            }
        };

        fetchFiles();
    }, [consultationId]);

    const openFile = (fileUrl) => {
        window.open(fileUrl, '_blank');
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Final Reports</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  style={{ maxHeight: '120px', overflowY: 'auto' }}>
                {urls.map((url, index) => (
                    <div key={index} className="border p-4">
                        <p>File: {index + 1}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={() => openFile(url)}>Open</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileDisplay;
