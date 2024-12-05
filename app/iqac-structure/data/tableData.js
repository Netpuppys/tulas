import React from "react";

const tableData = [
  { sno: 1, name: "Prof. (Dr.) Sandip Vijay", designation: "Director" },
  {
    sno: 2,
    name: "Prof. (Dr.) Nishant Saxena",
    designation: "IQAC Coordinator",
  },
  { sno: 3, name: "Dr. Vijay Kumar Upadhyay", designation: "Registrar" },
  {
    sno: 4,
    name: "Dr. Sanjeev Kumar",
    designation: "IQAC Co-Coordinator, Professor",
  },
  {
    sno: 5,
    name: "Mr. Abhishek Chakravorty",
    designation: "IQAC Co-Coordinator, HoD, ECE/EEE",
  },
  { sno: 6, name: "Dr. Raghav Garg", designation: "Management Representative" },
  { sno: 7, name: "Dr. Sunil Semwal", designation: "Dean R&D" },
  {
    sno: 8,
    name: "Dr. Sanjay Sharma",
    designation: "DSW, HoD, B. Sc. Agriculture",
  },
  { sno: 9, name: "Dr. Sandeep Kumar", designation: "HoD, CSE" },
  { sno: 10, name: "Dr. Arghya Sarkar", designation: "HoD, GSB" },
  { sno: 11, name: "Dr. Tripti Khanduri", designation: "HoD, CE" },
  { sno: 12, name: "Mr. Mukesh Pathela", designation: "HoD, ASH" },
  { sno: 13, name: "Mr. Ankit Jain", designation: "HoD, ME" },
  { sno: 14, name: "Mr. Tauseef Iqbal", designation: "HoD, JMC" },
  { sno: 15, name: "Ms. Suchi Jain", designation: "Alumni" },
  {
    sno: 16,
    name: "Mr. Pravesh Kumar Chauhan",
    designation: "External Member, IQAC",
  },
  {
    sno: 17,
    name: "Mr. Subhash Sharma",
    designation: "Student Member, IQAC (B. Tech CSE-III)",
  },
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
