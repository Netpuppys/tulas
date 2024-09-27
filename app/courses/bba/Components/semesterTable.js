import React from "react";

const SemesterTable = () => {
  const semesterData = [
    {
        semester: "I SEMESTER",
        subjects: [
            { code: "BBA 101 PPM", title: "Principles and Practice of Management" },
            { code: "BBA 102 CAB", title: "Computer Applications in Business" },
            { code: "BBA 103", title: "Business Communication" },
            { code: "BBA 104", title: "Financial Accounting" },
            { code: "BBA 105", title: "Business Economics" }
        ],
    },
    {
        semester: "II SEMESTER",
        subjects: [
            { code: "201", title: "Marketing Management" },
            { code: "202", title: "Human Resource Management" },
            { code: "203", title: "Business Environment" },
            { code: "204", title: "Production Management" },
            { code: "205", title: "Business Finance" }
        ],
    },
    {
        semester: "III SEMESTER",
        subjects: [
            { code: "301", title: "International Business" },
            { code: "302", title: "Organizational Behaviour" },
            { code: "303", title: "Business Laws" },
            { code: "304", title: "Accounting for Management" },
            { code: "305", title: "Quantitative Analysis" }
        ],
    },
    {
        semester: "IV SEMESTER",
        subjects: [
            { code: "401", title: "Company Law" },
            { code: "402", title: "Research Methodology" },
            { code: "403", title: "Logistics Management" },
            { code: "404", title: "Marketing of Services" },
            { code: "405", title: "Consumer Behaviour" }
        ],
    },
    {
        semester: "V SEMESTER",
        subjects: [
            { code: "501", title: "Business Policy and Strategy" },
            { code: "502", title: "Entrepreneurship and Small Business" },
            { code: "503", title: "Project and Project Presentation/Seminar" },
            { code: "M-2", title: "Marketing Communication and Advertising" },
            { code: "M-03", title: "Sales and Distribution Management" },
            { code: "H-1", title: "Industrial Relations" },
            { code: "H-2", title: "Training and Development" },
            { code: "F-2", title: "Working Capital Management" },
            { code: "F-3", title: "Financial Institutions and Markets" }
        ],
    },
    {
        semester: "VI SEMESTER",
        subjects: [
            { code: "601", title: "Management Information System" },
            { code: "602", title: "Project Management" },
            { code: "M-1", title: "International Marketing" },
            { code: "M-3", title: "Rural Marketing" },
            { code: "H-1", title: "Human Resource Planning and Development" },
            { code: "H-3", title: "Social Security and Labour Welfare" },
            { code: "F-1", title: "International Financial Management" },
            { code: "F-2", title: "Management of Financial Service" }
        ],
    },
];

  return (
    <div className="semester-container">
      {semesterData.map((semester, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4 md:gap-6"
        >
          <h2 className="px-20 py-1 text-[#3D0018] font-[TTChocolatesBold] bg-white text-center rounded-full text-[18px] md:text-[25px]">
            {semester.semester}
          </h2>
          <table className="w-full mb-4 md:mb-20">
            <thead>
              <tr className="font-[900]">
                <th className="w-[30%]">SUBJECT CODE</th>
                <th className="w-[70%]">SUBJECT</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, idx) => (
                <tr key={idx} className="tracking-[0.1rem] font-[700]">
                  <td>{subject.code}</td>
                  <td>{subject.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SemesterTable;
