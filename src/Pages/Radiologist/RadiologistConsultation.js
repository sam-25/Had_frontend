import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ConsultationNavbar from '../../Components/Radiologist/ConsultationNavbar';
import ConsultationTabs from '../../Components/Radiologist/ConsultationTabs';
import DicomArea from '../../Components/Radiologist/DicomArea';
import Notes from '../../Components/Radiologist/Notes';
import ActionsNavBar from '../../Components/Radiologist/ActionsNavBar';
import FileComponent from '../../Components/FileComponent';
import UploadDocs from '../../Components/UploadDocs';
import FileDisplay from '../../Components/FileDisplay';
import ImageViewer from '../../Components/ImageViewer';

const RadiologistConsultation = () => {
  let { id } = useParams();
  // Initialize testId state with a default value of 0
  const [testId, setTestId] = useState(0); 

  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 h-screen'>
        <ConsultationNavbar consultationId={id} />
        <ConsultationTabs consultationId={id} setTestId={setTestId} /> 
        {/* <ActionsNavBar></ActionsNavBar> */}
        {/* <FileComponent FileType={"Upload Document"}></FileComponent> */}
      </div>

      <div className='bg-secondary-content col-span-3 h-screen flex flex-col'>
        <div className='flex-1 h-3/5'>
          <ImageViewer testId={testId}></ImageViewer>
        </div>
        
        <div className='bg-base-300 flex h-2/5'>
          <div className='flex-1, w-2/3'>
              <Notes testId={testId} />
          </div>
          <div className='flex-2 w-1/3'>
              {/* <UploadDocs /> */}
              <FileDisplay  testId={testId}></FileDisplay>
              <UploadDocs testId={testId}></UploadDocs>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RadiologistConsultation;
