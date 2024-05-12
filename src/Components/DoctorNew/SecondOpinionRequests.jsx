import React from 'react';
import { useTable } from 'react-table';

const SecondOpinionRequests = () => {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        diagnosisName: 'Fever',
        doctorName: 'Dr. Smith',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 'Pending',
      },
      // {
      //   id: 2,
      //   diagnosisName: 'Headache',
      //   doctorName: 'Dr. Johnson',
      //   remarks: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      //   status: 'Approved',
      // },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Diagnosis Name',
        accessor: 'diagnosisName',
      },
      {
        Header: 'Doctor Name',
        accessor: 'doctorName',
      },
      {
        Header: 'Remarks',
        accessor: 'remarks',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div>
            {row.original.status === 'Pending' && (
              <>
                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleApprove(row.original.id)}>Approve</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2" onClick={() => handleReject(row.original.id)}>Reject</button>
              </>
            )}
          </div>
        ),
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

  const handleApprove = (id) => {
    console.log(`Request ${id} approved`);
  };

  const handleReject = (id) => {
    console.log(`Request ${id} rejected`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Second Opinion Requests</h1>
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

export default SecondOpinionRequests;
