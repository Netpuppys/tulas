import React from "react";

const tableData = [
  {
    sno: 1,
    name: "Prof.(Dr.) Sandip Vijay",
    designation: "Director",
  },
  {
    sno: 2,
    name: "Prof.(Dr.).Nishant Saxena",
    designation: "IQAC Coordinator",
  },
  {
    sno: 3,
    name: "Dr. Sanjeev Kumar",
    designation: "IQAC Co-Coordinator, Professor",
  },
  {
    sno: 4,
    name: "Dr. Anand Kumar Gupta",
    designation: "IQAC Co-Coordinator, HOD, CSE",
  },
  {
    sno: 5,
    name: "Dr. Arghya Sarker",
    designation: "HOD, GSB",
  },
  {
    sno: 6,
    name: "Mr. Mukesh Pathela",
    designation: "HOD, Applied Science",
  },
  {
    sno: 7,
    name: "Mr. Ankit Jain",
    designation: "HOD, Mechanical Engineering",
  },

  {
    sno: 8,
    name: "Dr. Tripti Khanduri",
    designation: "HOD, Civil Engineering",
  },
  { sno: 9, name: "Mr. Abhishek Chakravorty", designation: "HOD, ECE / EEE" },
  { sno: 10, name: "Mr. Tauseef Iqbal", designation: "HOD, JMC" },
  { sno: 11, name: "Mr. Ashish Upadhyay", designation: "Director Nominee" },
  { sno: 12, name: "Ms. Suchi Jain", designation: "Alumni" },
  { sno: 13, name: "Dr. Arun Kumar", designation: "External Member, IQAC" },
  { sno: 14, name: "Mr. Brijesh Sharma", designation: "Student Member, IQAC" },
];

const TableComponent = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((table, yearIndex) => (
          <tr key={yearIndex}>
            <td>{table.sno}</td>
            <td>{table.name}</td>
            <td>{table.designation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
