import React, { useRef } from 'react';
import axios from 'axios';

const UploadFiles = ({ testId }) => {
    console.log('Upload Files here');
    console.log(testId);
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
            console.log("in the upload normal files its working")
            const params = { testId: testId, fileName: 'dummy' };
            const response = await axios.post('http://localhost:8080/test/createVersion2', formData, { params });
            console.log('Files uploaded successfully');
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };
    

    return (
        <div className="mt-4" style={{marginLeft: '110px'}}>
            <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload Docs
            </label>
            <input
                id="file-upload"
                type="file"
                ref={fileInputRef}
                className="hidden"
                multiple
                accept="application/pdf"
                onChange={handleUpload}
            />
        </div>
    );
};

export default UploadFiles;



// import React, { useRef } from 'react';
// import { Toast } from 'primereact/toast';
// import { FileUpload } from 'primereact/fileupload';

// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

// export default function AutoDemo() {
//     const toast = useRef(null);

//     const onUpload = (event) => {
//         // Access the uploaded file from the event object
//         const file = event.files[0];
        
//         // You can perform additional checks or validations here
        
//         // Assuming you are using fetch API for uploading file to backend
//         fetch('/api/upload', {
//             method: 'POST',
//             body: file
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Show success message if upload is successful
//                 toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
//             } else {
//                 // Show error message if upload fails
//                 toast.current.show({ severity: 'error', summary: 'Error', detail: 'File Upload Failed' });
//             }
//         })
//         .catch(error => {
//             console.error('Error uploading file:', error);
//             // Show error message if an error occurs during upload
//             toast.current.show({ severity: 'error', summary: 'Error', detail: 'An error occurred while uploading the file' });
//         });
//     };
        
//     return (
//         <div className="card flex justify-content-center" style={{display: 'flex', position: 'absolute', bottom: 10, left: '80%'}}>
//             <Toast ref={toast}></Toast>
//             <FileUpload 
//                 mode="basic" 
//                 name="demo[]" 
//                 url="/api/upload" 
//                 accept="image/*" 
//                 maxFileSize={1000000} 
//                 onUpload={onUpload} 
//                 auto 
//                 chooseLabel="Upload Doc" 
//             />
//         </div>  
//     )
// }
