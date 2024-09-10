import React from "react";

const tableData = [
  {
    year: "2023-24",
    projects: [
      {
        id: 1,
        title:
          "An assessment of in-situ water quality parameters and its variation with Landsat 8 level 1 surface reflectance datasets",
        name: "Mishra, Arun Pratap; Khali, Harish; Singh, Sachchidanand; Pande, Chaitanya B; Singh, Raj; Chaurasia, Shardesh K;",
        department: "AGRI",
        nameJournal:
          "International Journal of Environmental Analytical Chemistry",
        yearOfPublication: "2023",
        issn: "",
        publisher: "Taylor & Francis",
      },
      {
        id: 2,
        title: "Cost and Financial Accounting in High-Technology Firms",
        name: "Goyal, Lalit; Ahmad, Vasim; Kumar, Jugander;",
        department: "GSB",
        nameJournal: "Sustainable Technology for Society 5.0",
        yearOfPublication: "2023",
        issn: "",
        publisher: "CRC Press",
      },
    ],
  },
];
const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>S. No</th>
          <th>Title of paper</th>
          <th>Name of the author/s</th>
          <th>Department</th>
          <th>Name of journal</th>
          <th>Year of publication</th>
          <th>ISSN number</th>
          <th>Publisher</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((yearData, yearIndex) => (
          <React.Fragment key={yearIndex}>
            <tr>
              <td
                colSpan="8"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {yearData.year}
              </td>
            </tr>
            {yearData.projects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.name}</td>
                <td>{project.department}</td>
                <td>{project.nameJournal}</td>
                <td>{project.yearOfPublication}</td>
                <td>{project.issn}</td>
                <td>{project.publisher}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
