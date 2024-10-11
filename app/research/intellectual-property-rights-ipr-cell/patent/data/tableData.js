import React from "react";

const tableData = [
  {
    serialNumber: 1,
    applicationNumber: "201811016653",
    status: "Published",
    inventors: [
      "Dr S Suresh Kumar",
      "Nishant Saxena",
      "Dr. Sumira Malik",
      "Amrita Singh",
      "Minakshi Memoria",
      "Diwaker",
    ],
    publicationYear: 2018,
    title:
      "Plant Gene Classification and Functionality Prediction Using Blockchain Technology",
  },
  {
    serialNumber: 2,
    applicationNumber: "201811025465",
    status: "Published",
    inventors: [
      "Dr S Suresh Kumar",
      "Dr Sumira",
      "Dr. Nishant Saxena",
      "Shuchita Saxena",
      "Amrita Singh",
      "Ashish Awasthi",
      "Bablin Singh Huldrom",
      "Awadhesh Kumar Singh",
      "Alok Kumar",
      "Himanshu Suyal",
    ],
    publicationYear: 2018,
    title: "Automated Agricultural System and A Method Thereof",
  },
  {
    serialNumber: 3,
    applicationNumber: "201811025466",
    status: "Published",
    inventors: [
      "Dr. S Suresh Kumar",
      "Dr. Victor S P",
      "Dr. Saikumar",
      "Dr. Manoj Kumar",
      "Sunil Semwal",
      "Minakshi Memoria",
      "Diwaker",
      "Dr. Deepak Joshi",
    ],
    publicationYear: 2018,
    title: "Force Estimation System for Accurate Movement of Prosthetic Limb",
  },
  {
    serialNumber: 4,
    applicationNumber: "202011009730",
    status: "Published",
    inventors: ["Divyanshu Gupta", "Saransh Saxena", "Yusuf Mustafa Khan"],
    publicationYear: 2020,
    title: "Solar Powered Ventilation System for Automobiles",
  },
  {
    serialNumber: 5,
    applicationNumber: "202011009729",
    status: "Published",
    inventors: ["Ankit Saxena", "Dr. Nishant Saxena", "Shuchita Saxena"],
    publicationYear: 2020,
    title: "Biometric Based Anti Theft System",
  },
  {
    serialNumber: 6,
    applicationNumber: "337792-001",
    status: "Granted",
    inventors: [
      "Dr. Nishant Saxena",
      "Shuchita Saxena",
      "Dr. Sunil Semwal",
      "Dr. H.S. Bhadauria",
      "Mr. Saurabh Singh",
    ],
    publicationYear: 2020,
    title: "Fire Fighting Drone",
  },
  {
    serialNumber: 7,
    applicationNumber: "337791-001",
    status: "Granted",
    inventors: [
      "Dr. Nishant Saxena",
      "Dr. Sunil Semwal",
      "Mr. Akhil Kumar Prasad",
      "Mr. Abhishek Jaiswal",
      "Anukumar Saini",
    ],
    publicationYear: 2020,
    title: "Design and Development of Multipurpose Wheel Chair",
  },
  {
    serialNumber: 8,
    applicationNumber: "2021102036",
    status: "Granted",
    inventors: [
      "Pavi Saraswat",
      "Hina Singh",
      "Anupama Sharma",
      "Pramod Kumar",
      "Mano Yadav",
      "Preeti Yadav",
    ],
    publicationYear: 2021,
    title: "Healthcare Data Exchange using Blockchain based Technology",
  },
  {
    serialNumber: 9,
    applicationNumber: "2021101172",
    status: "Granted",
    inventors: [
      "Tarun Kumar Arora",
      "Pavan Kumar Chaubey",
      "Tarun Jaiswal",
      "Seema Agarwal",
      "A. Sathish",
    ],
    publicationYear: 2021,
    title:
      "Design and Implementation of Convolution Neural Network on Edge Computing Smart Phone for Human Activity Recognition",
  },
  {
    serialNumber: 10,
    applicationNumber: "202011052005",
    status: "Published",
    inventors: [
      "Dr. (Er.) Akshay Bhardwaj",
      "Dr. Pavan Kumar Chaubey",
      "Dr. Nitin Kishore Saxena",
      "Dr. T.C. Marjundath",
      "Dr. Pavitra G.",
    ],
    publicationYear: 2020,
    title:
      "Improving the Efficiency of Supply Chain management Using QR Code and Cloud Webservices",
  },
  {
    serialNumber: 11,
    applicationNumber: "202111033817",
    status: "Published",
    inventors: [
      "Sandeep Kumar",
      "Sachin Singh",
      "Pramod Singh",
      "Vikrant Singh",
    ],
    publicationYear: 2021,
    title:
      "Analysis of the Bitcoin cash system an online payment using machine learning",
  },
  {
    serialNumber: 12,
    applicationNumber: "202111035181",
    status: "Published",
    inventors: [
      "Dr. Sachin Kumar",
      "Mr. Vaibhav Sharma",
      "Mrs. Neeraj Sagar",
      "Mr. Vibhor Sharma",
      "Dr. Sandeep Kumar",
      "Ms. Rashmi Mishra",
      "Ms. Sakshi Koli",
    ],
    publicationYear: 2021,
    title:
      "Rating Prediction for Amazon: Amazon offers product recommendations based on customer activity using machine learning programming",
  },
  {
    serialNumber: 13,
    applicationNumber: "202111045803",
    status: "Published",
    inventors: [
      "Mr. Vaibhav Sharma",
      "Ms. Neha Barthwal",
      "Mr. Krishan Chandra Mishra",
      "Dr. Sachin Kumar",
      "Abhinandan Tripathi",
      "Mr. Dheresh Soni",
      "Mr. Abhishek Kumar Pandey",
    ],
    publicationYear: 2021,
    title:
      "An IoT Based Alert system for safeguarding human eye from HEV light",
  },
  {
    serialNumber: 14,
    applicationNumber: "337244-001 /299",
    status: "Granted",
    inventors: ["Dr. Sandip Vijay"],
    publicationYear: 2021,
    title: "Design of Wireless Antenna",
  },
  {
    serialNumber: 15,
    applicationNumber: "337243-001 / 299",
    status: "Granted",
    inventors: ["Dr. Sandip Vijay"],
    publicationYear: 2021,
    title: "Design of Conformal Antenna",
  },
  {
    serialNumber: 16,
    applicationNumber: "202011028547",
    status: "Published",
    inventors: ["Dr. Sandip Vijay"],
    publicationYear: 2020,
    title: "Method For Reducing Energy Consumption In Wireless Sensor Network",
  },
  {
    serialNumber: 17,
    applicationNumber: "331101-001",
    status: "Published",
    inventors: ["Dr. Sandip Vijay"],
    publicationYear: 2020,
    title: "Antenna for Wireless",
  },
  {
    serialNumber: 18,
    applicationNumber: "202011053002",
    status: "Published",
    inventors: [
      "Dr. Sandip Vijay",
      "Dr. Mahesh",
      "Dr. Vivek Jaglan",
      "Mr. Umang Garg",
      "Mr. Vivek Kumar Gupta",
    ],
    publicationYear: 2020,
    title: "Modified Optimal Path Programming Algorithm for UAV",
  },
  {
    serialNumber: 19,
    applicationNumber: "202111022500",
    status: "Published",
    inventors: [
      "Himani Shivaraman",
      "Anamika Raturi",
      "Dr. Nishant Saxena",
      "Dr. Raju Kumar",
      "Dr. Meenu",
      "Swati",
      "Ashima Gambhir",
      "Dr. Sandip Vijay",
    ],
    publicationYear: 2021,
    title: "Secured Biometric-Based Wi-Fi Cards",
  },
  {
    serialNumber: 20,
    applicationNumber: "202211021377",
    status: "Published",
    inventors: ["Abhishek Chakravorty", "Vrij Mohan Vidhyarthi"],
    publicationYear: 2022,
    title: "Water Filtration System",
  },
  {
    serialNumber: 21,
    applicationNumber: "202211021378",
    status: "Published",
    inventors: ["Mridulata Pant"],
    publicationYear: 2022,
    title: "Seed Treatment Device",
  },
  {
    serialNumber: 22,
    applicationNumber: "202211021381",
    status: "Published",
    inventors: ["Bhawana Gahtori"],
    publicationYear: 2022,
    title: "Crop Maintenance Device",
  },
  {
    serialNumber: 23,
    applicationNumber: "202211021379",
    status: "Published",
    inventors: ["Dr Sandip Vijay", "Dr Raghav Garg"],
    publicationYear: 2022,
    title: "Adjustable Soil Segregation Device",
  },
  {
    serialNumber: 24,
    applicationNumber: "202211021380",
    status: "Published",
    inventors: ["Dr Prerana Badoni"],
    publicationYear: 2022,
    title: "Shrub Shape Maintenance Device",
  },
  {
    serialNumber: 25,
    applicationNumber: "202211021399",
    status: "Published",
    inventors: ["Pankaj Singh Negi", "Anikesh Sharma"],
    publicationYear: 2022,
    title: "Automated Seedbed Preparation System",
  },
  {
    serialNumber: 26,
    applicationNumber: "202211021401",
    status: "Published",
    inventors: ["Dr Sandip Vijay", "Dr Raghav Garg"],
    publicationYear: 2022,
    title: "Agricultural Tillage Device",
  },
  {
    serialNumber: 27,
    applicationNumber: "202211021402",
    status: "Published",
    inventors: ["Prabhat Kumar", "Dr. Prerana Badoni"],
    publicationYear: 2022,
    title: "Plant Growth Management Device",
  },
  {
    serialNumber: 28,
    applicationNumber: "202211021398",
    status: "Granted",
    inventors: ["Dr. Sunil Semwal", "Piyush Dhuliya", "Dr. Tripuresh Joshi"],
    publicationYear: 2022,
    title: "Courier Management System",
  },
  {
    serialNumber: 29,
    applicationNumber: "202211021400",
    status: "Published",
    inventors: ["Dr Sandip Vijay"],
    publicationYear: 2022,
    title: "Balance Training Amusement Device",
  },
  {
    serialNumber: 30,
    applicationNumber: "202211015293",
    status: "Published",
    inventors: ["Dr. Raghav Garg", "Mrs. Suchi Jain", "Mrs. Arti Goel"],
    publicationYear: 2022,
    title: "IOT and AI Based Milk Vending Machine For Smart Distribution.",
  },
  {
    serialNumber: 31,
    applicationNumber: "202211045572",
    status: "Published",
    inventors: ["Dr. Tripuresh Joshi"],
    publicationYear: 2022,
    title:
      "PERFORMANCE ANALYSIS OF DOPING-LESS EXTENDED SOURCE TFET (DLES-TFET)",
  },
  {
    serialNumber: 32,
    applicationNumber: "202311002682",
    status: "Published",
    inventors: ["Amit Maurya"],
    publicationYear: 2023,
    title: "Injection bottle Cutter",
  },
  {
    serialNumber: 33,
    applicationNumber: "202311019678",
    status: "Published",
    inventors: ["Mr. Amit Maurya"],
    publicationYear: 2023,
    title:
      "FLEXIBLE TAP DESIGN THROUGH ELASTOMERIC SEALING RINGS PIPES CONNECTOR",
  },
  {
    serialNumber: 34,
    applicationNumber: "202311087998",
    status: "Published",
    inventors: ["Ms. Swati Yadav", "Dr. KR Ansari"],
    publicationYear: 2023,
    title: "LOAD CARRYING EQUIPMENT FOR WORKER",
  },
  {
    serialNumber: 35,
    applicationNumber: "202311002919",
    status: "Published",
    inventors: ["Mr. Amit Maurya"],
    publicationYear: 2023,
    title:
      "BACK WINDSHIELDS GLASS WIPER IN VEHICLE USING 3-LINK 4-BAR MECHANISM",
  },
];
const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>S. No</th>
          <th>Patent Application No.</th>
          <th>Status of Patent</th>
          <th>Inventor/s Name</th>
          <th>Year of Publication</th>
          <th>Title of the Patent</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((yearData, yearIndex) => (
          <React.Fragment key={yearIndex}>
            <tr key={yearIndex}>
              <td>{yearData.serialNumber}</td>
              <td>{yearData.applicationNumber}</td>
              <td>{yearData.status}</td>
              <td className="!p-0">
                {yearData.inventors.map((data, index) => (
                  <p
                    className="border-b p-2 border-white last:border-b-0"
                    key={index}
                  >
                    {data}
                  </p>
                ))}
              </td>
              <td>{yearData.publicationYear}</td>
              <td>{yearData.title}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
