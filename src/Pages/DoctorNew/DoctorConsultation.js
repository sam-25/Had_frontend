import React from 'react'
import ConsultationNavbar from '../../Components/DoctorNew/ConsultationNavbar'
import ConsultationTabs from '../../Components/DoctorNew/ConsultationTabs'
import DicomArea from '../../Components/DoctorNew/DicomArea'
import Notes from '../../Components/DoctorNew/Notes'
import ActionsNavBar from '../../Components/DoctorNew/ActionsNavBar'

const DoctorConsultation = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 h-screen'>
        <ConsultationNavbar />
        <ConsultationTabs />
        <ActionsNavBar></ActionsNavBar>
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