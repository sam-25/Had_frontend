import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function AutoDemo({FileType}) {
    const toast = useRef(null);

    const onUpload = (event) => {
        // Access the uploaded file from the event object
        const file = event.files[0];
        
        // You can perform additional checks or validations here
        
        // Assuming you are using fetch API for uploading file to backend
        fetch('/api/upload', {
            method: 'POST',
            body: file
        })
        .then(response => {
            if (response.ok) {
                toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'File Upload Failed' });
            }
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'An error occurred while uploading the file' });
        });
    };
        
    return (
        <div className="card flex justify-content-center" style={{display: 'flex', position: 'absolute', bottom: 10, justifyContent: 'center', alignItems: 'center', left: 70}}>
            <Toast ref={toast}></Toast>
            <FileUpload 
                mode="basic" 
                name="demo[]" 
                url="/api/upload" 
                accept="image/*" 
                maxFileSize={1000000} 
                onUpload={onUpload} 
                auto 
                chooseLabel={FileType} 
            />
        </div>  
    )
}
