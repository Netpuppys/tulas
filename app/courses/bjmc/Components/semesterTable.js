import React from "react";

const SemesterTable = () => {
  const semesterData = [
    {
      semester: "I SEMESTER",
      subjects: [
        { code: "BJMC 101", title: "Introduction to Communication" },
        { code: "BJMC 102", title: "Mass Media Writing" },
        { code: "BJMC 103", title: "Journalism –An Introduction" },
        { code: "BJMC 104", title: "Basics of Computers" },
      ],
    },
    {
      semester: "II SEMESTER",
      subjects: [
        { code: "BJMC 201", title: "History of Print & Broadcasting in India" },
        { code: "BJMC 202", title: "Reporting and Editing for Print" },
        { code: "BJMC 203", title: "Socio-Economic & Political Scenario" },
        { code: "BJMC 204", title: "Basics of Design & Graphics" },
      ],
    },
    {
      semester: "III SEMESTER",
      subjects: [
        { code: "BJMC 301", title: "Photo Journalism" },
        { code: "BJMC 302", title: "Advertising and Public Relations" },
        {
          code: "BJMC 303",
          title: "Radio Journalism and Production",
        },
        { code: "BJMC 304", title: "New Media" },
      ],
    },
    {
      semester: "IV SEMESTER",
      subjects: [
        { code: "BJMC 401", title: "Introduction to Cinema" },
        { code: "BJMC 402", title: "Development Communication" },
        { code: "BJMC 403", title: "Media Law" },
        {
          code: "BJMC 404",
          title: "Reporting and Editing for Broadcasting",
        },
      ],
    },
    {
      semester: "V SEMESTER",
      subjects: [
        { code: "BJMC 501", title: "Contemporary Issues" },
        { code: "BJMC 502", title: "Online Journalism" },
        { code: "BJMC 503", title: "Media Management" },
        { code: "BJMC 504", title: "Digital Video Editing" },
      ],
    },
    {
      semester: "VI SEMESTER",
      subjects: [
        { code: "BJMC 601", title: "Print Media Production" },
        {
          code: "BJMC 602",
          title: "Radio and Television Production",
        },
        { code: "BJMC 603", title: "Internship" },
        { code: "BJMC 604", title: "Comprehensive Vive-Voice" },
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
