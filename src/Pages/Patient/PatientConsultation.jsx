import React from 'react'
import { useParams } from 'react-router-dom';

import ConsultationNavbar from '../../Components/Patient/ConsultationNavbar'
import ConsultationTabs from '../../Components/Patient/ConsultationTabs'
import DicomArea from '../../Components/Patient/DicomArea'
import Notes from '../../Components/Patient/Notes'
import ActionsNavBar from '../../Components/Patient/ActionsNavBar'

const DoctorConsultation = () => {
  let { id } = useParams();
  // console.log(id);
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 h-screen'>
        <ConsultationNavbar  consultationId = {id} />
        <ConsultationTabs consultationId = {id}/>
        {/* <ActionsNavBar></ActionsNavBar> */}
      </div>

      <div className='bg-secondary-content col-span-3 h-screen flex flex-col'>
        <div className='flex-1 h-2/3'>
          <DicomArea />
        </div>
        
        <div className='bg-base-300 flex-1 h-1/3'>
          <Notes />   
        </div>
      </div>
    </div>
  )
}

export default DoctorConsultation