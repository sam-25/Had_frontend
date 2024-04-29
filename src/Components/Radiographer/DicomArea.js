import React from 'react'
import dicomImage from '../Assets/dicom-sample.jpg';

const DicomArea = () => {
  return (
    <img className='w-full h-full object-contain' src={dicomImage} alt="Description of your image" />
  )
}

export default DicomArea