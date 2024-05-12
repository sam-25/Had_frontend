import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddRadiographerForm from '../Forms/AddRadiographer';
import AddRadiologistForm from '../Forms/AddRadiologist';

const TestCard = ({ testName, description, consultationId, testId, onClick, setTestId }) => {
  const [radiographerForm, setRadiographerForm] = useState(false);
  const [radiologistForm, setRadiologistForm] = useState(false);

  const handleTestClick = (testId) => {
    if (testId !== setTestId) { // Only setTestId if it's different
      setTestId(testId); 
    }
  };

  return (
    <div
      className="flex items-center justify-between bg-base-200 border border-gray-100 rounded-lg shadow-md p-4 mb-4"
      onClick={() => handleTestClick(testId)} 
      style={{ cursor: 'pointer' }}    
    >
      <div>
        <h3 className="text-lg font-semibold mb-2">{testName}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a onClick={() => setRadiographerForm(true)}>Add Radiographer</a></li>
          <li><a onClick={() => setRadiologistForm(true)}>Add Radiologist</a></li>
        </ul>
      </div>
      {radiographerForm && <AddRadiographerForm consultationId={consultationId} testId={testId} onClose={() => setRadiographerForm(false)} />}
      {radiologistForm && <AddRadiologistForm consultationId={consultationId} testId={testId} onClose={() => setRadiologistForm(false)} />}
    </div>
  );
};

const ConsultationTabs = ({ consultationId , setTestId}) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    var token = localStorage.getItem("token");
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    var response = axios.get('http://localhost:8080/consultation/getTests',
      {
        params: {
          consultationId: consultationId,
        }
      }
    )

      .then(response => {
        console.log(response.data);
        setTests(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div role="tablist" className="tabs tabs-bordered tabs-lg">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Chats" checked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Chats go here</div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tests" checked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6" style={{ maxHeight: '350px', overflowY: 'auto' , overflowX: 'hidden'}}>
        {tests.map((test, index) => (
          <TestCard testId= {test.id} key={index} testName={test.name} description={test.description} consultationId={consultationId} setTestId={setTestId}/>
        ))}
      </div>
    </div>
  )
}

export default ConsultationTabs;
