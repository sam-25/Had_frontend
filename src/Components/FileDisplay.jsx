import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileDisplay = ({ testId }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                var token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                const response = await axios.get('http://localhost:8080/test/getFiles', {
                    params: {
                        testId: 1,
                    },
                });

                // Here, you can modify the response data if needed before setting it in the state
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
    }, [testId]);

    const openFile = (fileUrl) => {
        if (!fileUrl) {
            console.error('File URL is undefined');
            return;
        }

        // Open the image in a new tab
        window.open(fileUrl, '_blank');
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Files</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {files.map((file, index) => (
                    <div key={index} className="border p-4">
                        {file.type && file.type.startsWith('image/') ? (
                            <img
                                src={file.url}
                                alt={`Image ${index}`}
                                className="max-w-full h-auto mb-2"
                                onClick={() => openFile(file.url)}
                            />
                        ) : (
                            <p>File {index + 1}</p>
                        )}
                        {file.description && <p>{file.description}</p>}
                        <button
                            onClick={() => openFile(file.url)}
                            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Open File
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileDisplay;
