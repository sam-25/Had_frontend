import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';

const DoctorDiagnosticPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/doctor/getPrimaryConsultations?doctorId=1`);
        const modifiedData = response.data.map(item => ({
          patientName: item.patient.user.name,
          diagnosis: item.description,
          date: item.finished || '', // Assuming "finished" field represents the date
          remarks: '', // You can add remarks if available in your data
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
                <tr {...row.getRowProps()} className="hover:bg-gray-100 cursor-pointer" onClick={() => console.log('Row clicked')}>
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

export default DoctorDiagnosticPage;
