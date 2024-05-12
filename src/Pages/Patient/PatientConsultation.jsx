import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

import ConsultationNavbar from '../../Components/Patient/ConsultationNavbar'
import ConsultationTabs from '../../Components/Patient/ConsultationTabs'
import DicomArea from '../../Components/Patient/DicomArea'
import Notes from '../../Components/Patient/Notes'
import ActionsNavBar from '../../Components/Patient/ActionsNavBar'
import ImageViewerLarge from '../../Components/ImageViewerLarge';
import FinalReportDisplay from '../../Components/FinalReportDisplay'

const DoctorConsultation = () => {
  let { id } = useParams();
  // Initialize testId state with a default value of 0
  const [testId, setTestId] = useState(0); 

  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 h-screen'>
        <ConsultationNavbar  consultationId = {id} />
        <ConsultationTabs consultationId = {id} setTestId={setTestId}/>
        {/* <ActionsNavBar></ActionsNavBar> */}
        <FinalReportDisplay consultationId = {id}></FinalReportDisplay>

      </div>

      <div className='bg-secondary-content col-span-3 h-screen flex flex-col'>
        {/* <div className='flex-1 h-1/6'>
          <DicomArea />
        </div> */}

        <ImageViewerLarge testId={testId}></ImageViewerLarge>
        
        {/* <div className='bg-base-300 flex-1 h-1/3'> */}
          {/* <Notes />    */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default DoctorConsultation