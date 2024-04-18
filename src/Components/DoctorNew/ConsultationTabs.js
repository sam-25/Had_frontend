import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TestCard = ({ testName, description }) => {
  return (
    <div className="flex items-center justify-between bg-base-200 border border-gray-100 rounded-lg shadow-md p-4 mb-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">{testName}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Default</a></li>
          <li><a>Radiologist-version-1</a></li>
          <li><a>Radiologist-verions-2</a></li>
        </ul>
      </div>
    </div>
  );
};

const ConsultationTabs = () => {
  const [tests, setTests] = useState([

  ]);

  useEffect(() =>{
    axios.get('http://localhost:8080/Testing')
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
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Chats" checked/>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Chats go here</div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tests" checked/>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        {/* <TestCard testName="X-ray" description="Description for Test 1" />
        <TestCard testName="CT-Scan" description="Description for Test 2" />
        <TestCard testName="Some Test" description="Description for Test 3" /> */}
        {tests.map((test, index) => (
          <TestCard key={index} testName={test.testName} description={test.description} />
        ))}
      </div>
    </div>
  )
}

export default ConsultationTabs