import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileDisplay = ({testId}) => {
    // console.log('wecvwe');
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Fetch files using Axios
        // axios.get('http://your-api-endpoint/files')
        //     .then(response => {
        //         setFiles(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching files: ', error);
        //     });

        const fetchFiles = async () => {
            try {
                var token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
                const response = await axios.get('http://localhost:8080/test/getFiles', {
                    params: {
                        testId: 1,
                    },
                    
                });
                setFiles(response.data); // Update files state with response data
                console.log('fetchfile success');
                console.log(response);
            } catch (error) {
                console.log('fetchfile failed');
                console.error('Error fetching files:', error);
            }
        };
    
        fetchFiles();
    }, []);

    const downloadFile = (fileUrl, fileName) => {
        // Download file
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Files </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {files.map(file => (
                    <div key={file.id} className="border p-4">
                        <h2 className="font-semibold">{file.name}</h2>
                        <p>{file.description}</p>
                        <button onClick={() => downloadFile(file.url, file.name)} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Download File
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileDisplay;
