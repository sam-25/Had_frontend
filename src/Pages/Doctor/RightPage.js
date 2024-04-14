// RightPage.js
import React from 'react';
import { Resizable } from 'react-resizable';
import Dicom from '../../Components/Dicom';
import Options from '../../Components/Options';
import './RightPage.css'; // Import the CSS file

const RightPage = () => {
  const [dicomHeight, setDicomHeight] = React.useState('50%'); // Initial height for Dicom component
  const [optionsHeight, setOptionsHeight] = React.useState('50%'); // Initial height for Options component

  const onResizeDicom = (event, { size }) => {
    setDicomHeight(`${size.height}px`);
    setOptionsHeight(`calc(100% - ${size.height}px)`);
  };

  const onResizeOptions = (event, { size }) => {
    setOptionsHeight(`${size.height}px`);
    setDicomHeight(`calc(100% - ${size.height}px)`);
  };

  return (
    <div className="right-page">
      <Resizable
        height={dicomHeight}
        onResize={onResizeDicom}
        minConstraints={[100, 100]}
        maxConstraints={[null, '70%']}
        axis="y"
      >
        <Dicom />
      </Resizable>
      <Resizable
        height={optionsHeight}
        onResize={onResizeOptions}
        minConstraints={[100, 100]}
        maxConstraints={[null, '70%']}
        axis="y"
      >
        <Options />
      </Resizable>
    </div>
  );
};

export default RightPage;
