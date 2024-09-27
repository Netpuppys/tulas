import React from "react";

const SemesterTable = () => {
  const semesterData = [
    {
      semester: "I SEMESTER",
      subjects: [
        { code: "MB101 PPM", title: "Principles and Practices of Management" },
        { code: "MB102 FA", title: "Financial accounting" },
        {
          code: "MB103 QTOR",
          title: "Quantitative Techniques and Operation Research",
        },
        { code: "MB104 ME", title: "Managerial Economics" },
        { code: "MB105 BE", title: "Business Environment" },
        { code: "MB106 BL", title: "Business Laws" },
        {
          code: "MB107 PBC",
          title: "Professional Business Communication",
        },
        {
          code: "MB108",
          title: "MIS and Computer applications in Business",
        },
      ],
    },
    {
      semester: "II SEMESTER",
      subjects: [
        { code: "MB201", title: "Organisational Behaviour" },
        { code: "MB202", title: "Management Accounting" },
        { code: "MB203", title: "Live projects on current business Issues" },
        { code: "MB204", title: "Marketing Management" },
        { code: "MB205", title: "Financial Management" },
        { code: "MB206", title: "Human Resource Management" },
        { code: "MB207", title: "Production and Operations Management" },
        { code: "MB208", title: "Business Research Methods" },
      ],
    },
    {
      semester: "III SEMESTER",
      subjects: [
        { code: "MB301 IB", title: "International Business" },
        { code: "MB302 PM", title: "Project Management" },
        {
          code: "MB303 TQM",
          title: "Total Quality Management",
        },
        { code: "MBAT 311", title: "Consumer Behaviour" },
        { code: "MBAT 313", title: "Marketing of Services (Minor)" },
        { code: "MBAT 315", title: "Retail Management" },
        {
          code: "MBAT 321",
          title: "Security Analysis and Portfolio Management",
        },
        {
          code: "MBAT 322",
          title: "Financial Markets and Institutions (Minor)",
        },
        { code: "MBAT 323", title: "International Financial Management" },
        { code: "MBAT 331", title: "Industrial Relations and Labour Laws" },
        {
          code: "MBAT 333",
          title: "Human Resource Planning & Development (Minor)",
        },
        {
          code: "MBAT 342",
          title: "Cross-Cultural Business Management (Minor)",
        },
        {
          code: "MBAT 335",
          title: "Organisational Structure and Change",
        },
      ],
    },
    {
      semester: "IV SEMESTER",
      subjects: [
        { code: "MB401", title: "Business Ethics and Corporate Governance" },
        { code: "MB402", title: "Strategic Management" },
        { code: "MB403", title: "Entrepreneurship Development" },
        {
          code: "MB404",
          title: "Research Project",
        },
        { code: "MBAT 412", title: "Sales Management (Minor)" },
        { code: "MBAT 413", title: "Financial Services (Minor)" },
        {
          code: "MBAT 422",
          title: "Mergers and Corporate Restructuring",
        },
        { code: "MB431", title: "International Human Resource Management" },
        { code: "MB441", title: "EXIM Financing and Documentation (Minor)" },
        { code: "MB433", title: "Corporate leadership (Minor)" },
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
