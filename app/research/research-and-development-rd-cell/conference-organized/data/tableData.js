import React from "react";

const tableData = [
  {
    sno: 1,
    name: "IEEE International Conference on Advances in Computing, Communication and Materials (ICACCM-2024)",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "Proposed for 22-23 Nov, 2024",
  },
  {
    sno: 2,
    name: "International Scientific Conference on Millets",
    sponsor: "IAAS",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "4-5 July, 2023",
  },
  {
    sno: 3,
    name: "IEEE International Conference on Advances in Computing, Communication and Materials (ICACCM-2022)",
    sponsor: "IEEE, AICTE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "10-11 Nov, 2022",
  },
  {
    sno: 4,
    name: "8th IEEE Uttar Pradesh Section International Conference on Electrical, Electronics, and Computer Engineering (UPCON 2021)",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "11-13 Nov. 2021",
  },
  {
    sno: 5,
    name: "IEEE International Conference on Advances in Computing, Communication and Materials (ICACCM-2020)",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "21-22 August, 2020",
  },
  {
    sno: 6,
    name: "Conference on Imagineering: Imagination and Engineering",
    sponsor: "UCOST",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "25 October, 2018",
  },
  {
    sno: 7,
    name: "Interactive Workshop on Emerging Trends in Agribusiness and Allied Sciences",
    sponsor: "Plantica & Tula's Institute",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "30 August-1 September 2018",
  },
  {
    sno: 8,
    name: "IEEE International Conference on Advances in Computing, Communication and Automation (ICACCA-2017- Fall)",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "15-16 September, 2017",
  },
  {
    sno: 9,
    name: "IEEE International Conference on Advances in Computing, Communication and Automation (ICACCA-2016)",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "8-9 April, 2016",
  },
  {
    sno: 10,
    name: "IEEE Two Days Women in Engineering Symposium",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "19-20 Feb. 2016",
  },
  {
    sno: 11,
    name: "IEEE International Conference on Advances in Computing and Communication Engineering (ICACCE-2015)",
    sponsor: "IEEE",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "1-2 May, 2015",
  },
  {
    sno: 12,
    name: "International Conference on Advances in Electronics, Electrical and Computer Science Engineering (EEC)",
    sponsor:
      "Institute of Research Engineers and Doctors and Uttrakhand Technical University",
    venue: "Tula’s Institute, Dehradun (India)",
    date: "7-9 July, 2012",
  },
];
const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>SNo.</th>
          <th>Conference Name </th>
          <th>Conference Sponser</th>
          <th>Venue</th>
          <th>Organizing Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((yearData, yearIndex) => (
          <tr key={yearIndex}>
            <td>{yearData.sno}</td>
            <td>{yearData.name}</td>
            <td>{yearData.sponsor}</td>
            <td>{yearData.venue}</td>
            <td>{yearData.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
