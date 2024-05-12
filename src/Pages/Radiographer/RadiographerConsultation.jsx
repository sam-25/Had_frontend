import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

import ConsultationNavbar from '../../Components/Radiographer/ConsultationNavbar'
import ConsultationTabs from '../../Components/Radiographer/ConsultationTabs'
import DicomArea from '../../Components/Radiographer/DicomArea'
import Notes from '../../Components/Radiographer/Notes'
import ActionsNavBar from '../../Components/Radiographer/ActionsNavBar'
import FileComponent from '../../Components/FileComponent';
import DicomUpload from '../../Components/DicomUpload';

const DoctorConsultation = () => {
  let { id } = useParams();
  // Initialize testId state with a default value of 0
  const [testId, setTestId] = useState(0); 

  // console.log(id);
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 h-screen'>
        <ConsultationNavbar  consultationId = {id} />
        <ConsultationTabs consultationId = {id} setTestId={setTestId}/>

        {/* <ActionsNavBar></ActionsNavBar> */}
        {/* <FileComponent FileType={"Upload DICOM"}></FileComponent> */}
        <DicomUpload testId={testId}></DicomUpload>
        {/* <p>ewfw</p> */}
      </div>

      <div className='bg-secondary-content col-span-3 h-screen flex flex-col'>
        <div className='flex-1 h-2/3'>
          <DicomArea />
        </div>
        
        {/* <div className='bg-base-300 flex-1 h-1/3'>
          <Notes />   
        </div> */}
      </div>
    </div>
  )
}

export default DoctorConsultation