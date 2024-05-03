import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useTable} from 'react-table'

const RadiographerDiagnosticPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Adding useNavigate hook

    useEffect(() => {
    const fetchData = async () => {
      try {
        
        var token=localStorage.getItem("token");
        console.log(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(`http://localhost:8080/doctor/getSecondaryConsultations`, {
          params: {
             // Replace with the actual doctorId value
            // Add more params as needed
          }
        });
        console.log(response.data);
        // console.log(type(response.data[1].date));
        const modifiedData = response.data.map(item => ({
          patientName: item.patientName,
          diagnosis: item.name,
          date: item.date, // Assuming "finished" field represents the date
          remarks: item.description, // You can add remarks if available in your data
          diagnosisId: item.id,
        }));

        setData(modifiedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };    

        fetchData();
  }, []);

    const columns = React.useMemo(
    () => [
      {
        Header: 'PATIENT NAME',
        accessor: 'patientName',
      },
      {
        Header: 'DIAGNOSIS',
        accessor: 'diagnosis',
      },
      {
        Header: 'DATE',
        accessor: 'date',
      },
      {
        Header: 'Remarks',
        accessor: 'remarks',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Active Diagnosis</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table {...getTableProps()} className="w-full border-collapse border">
              <thead>
               {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="p-2 border">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/DoctorConsultation/${row.original.diagnosisId}`)}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className="p-2 border">
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RadiographerDiagnosticPage;



// import React, { useState, useEffect } from 'react';
// import { useTable } from 'react-table';
// import axios from 'axios';

// const DoctorDiagnosticPage = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
        
//         var token=localStorage.getItem("token");
//         console.log(token);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         const response = await axios.get(`http://localhost:8080/doctor/getPrimaryConsultations`, {
//           params: {
//              // Replace with the actual doctorId value
//             // Add more params as needed
//           }
//         });
//         console.log(response.data);
//         // console.log(type(response.data[1].date));
//         const modifiedData = response.data.map(item => ({
//           patientName: item.patientName,
//           diagnosis: item.name,
//           date: item.date, // Assuming "finished" field represents the date
//           remarks: item.description, // You can add remarks if available in your data
//           diagnosisId: item.id,
//         }));

//         setData(modifiedData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };    

//     fetchData();
//   }, []);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'PATIENT NAME',
//         accessor: 'patientName',
//       },
//       {
//         Header: 'DIAGNOSIS',
//         accessor: 'diagnosis',
//       },
//       {
//         Header: 'DATE',
//         accessor: 'date',
//       },
//       {
//         Header: 'Remarks',
//         accessor: 'remarks',
//       },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data });

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Active Diagnosis</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table {...getTableProps()} className="w-full border-collapse border">
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
//                 {headerGroup.headers.map(column => (
//                   <th {...column.getHeaderProps()} className="p-2 border">
//                     {column.render('Header')}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map(row => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()} className="hover:bg-gray-100 cursor-pointer" onClick={() => console.log('Row clicked')}>
//                   {row.cells.map(cell => {
//                     return (
//                       <td {...cell.getCellProps()} className="p-2 border">
//                         {cell.render('Cell')}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default DoctorDiagnosticPage;
