import React from 'react';
import { useTable } from 'react-table';

const DoctorDiagnosticPage = () => {
  const data = React.useMemo(
    () => [
      {
        patientName: 'John Doe',
        diagnosis: 'Fever',
        date: '2022-01-01',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        patientName: 'Jane Smith',
        diagnosis: 'Headache',
        date: '2022-01-02',
        remarks: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      // Add more data as needed
    ],
    []
  );

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
    </div>
  );
};

export default DoctorDiagnosticPage;
