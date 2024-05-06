import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ConsultationNavbar from '../../Components/DoctorNew/ConsultationNavbar';
import ConsultationTabs from '../../Components/DoctorNew/ConsultationTabs';
import DicomArea from '../../Components/DoctorNew/DicomArea';
import Notes from '../../Components/DoctorNew/Notes';
import ActionsNavBar from '../../Components/DoctorNew/ActionsNavBar';
import FileComponent from '../../Components/FileComponent';

const DoctorConsultation = () => {
  let { id } = useParams();
  // Initialize testId state with a default value of 0
  const [testId, setTestId] = useState(0); 
  
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 h-screen'>
        <ConsultationNavbar consultationId={id} />
        <ConsultationTabs consultationId={id} setTestId={setTestId} /> 
        {/* <ActionsNavBar></ActionsNavBar> */}
        <FileComponent FileType={"Upload Document"}></FileComponent>
      </div>

      <div className='bg-secondary-content col-span-3 h-screen flex flex-col'>
        <div className='flex-1 h-2/3'>
          <DicomArea testId={testId}/>
        </div>
        
        <div className='bg-base-300 flex-1 h-1/3'>
          <Notes testId={testId} /> 
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultation;
