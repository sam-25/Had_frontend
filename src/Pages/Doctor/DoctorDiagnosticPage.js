import React from 'react';
import Checkbox from '../../Components/Checkbox';
import { Resizable } from 'react-resizable';

import DoctorDiagnostic from './DoctorDiagnostic';
import DoctorDashboardPage from './DoctorDashboardPage';
import ChatApp from './ChatApp';
import TopMenuBar from '../../Components/TopMenuBar'
import './DoctorDiagnosticPage.css';
import RightPage from './RightPage'


const DoctorDiagnosticPage = () => {
  return (
    // <div> 
    //   {/* <Checkbox> </Checkbox> */}
    //   {/* <button>wef</button> */}
    
      // <DoctorDashboardPage></DoctorDashboardPage>
      // <DoctorDiagnosticPage></DoctorDiagnosticPage>
    //   {/* <ChatApp></ChatApp> */}
    // </div>



    <div className="container">
    <TopMenuBar className="top-menu-bar" />
    <div className="content">
      <div className="component1">
        <DoctorDiagnostic />
      </div>
      <div className="components-wrapper">
        <div className="component2">
          <RightPage></RightPage>
        </div>
        {/* <div className="component3"> */}
          {/* <DoctorDiagnosticPage /> */}
        {/* </div> */}
      </div>
    </div>
  </div>


  )
}

export default DoctorDiagnosticPage;