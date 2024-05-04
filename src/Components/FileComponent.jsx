import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileComponent = ({FileType}) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, application/pdf',
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
    },
  });

  const handleDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleOpenFile = (file) => {
    window.open(URL.createObjectURL(file));
  };

  return (
    <div className="container mx-auto mt-8">
      <div >
        <label {...getRootProps()}>
          <input {...getInputProps()} />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer">
            {FileType}
          </button>
        </label>
      </div>
      <div className="mt-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-200">
            <p className="mr-4">{file.name}</p>
            <div>
              <button
                className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                onClick={() => handleOpenFile(file)}
              >
                Open
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileComponent;
