import React from "react";

const SemesterTable = ({ semesterData }) => {
  return (
    <div className="semester-container max-w-[1200px] mx-auto">
      {semesterData.map((semester, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4 md:gap-6"
        >
          <h2 className="px-20 py-1 text-white font-[TTChocolatesBold] bg-[#007A83] text-center rounded-full text-[18px] md:text-[25px]">
            {semester.semester}
          </h2>
          <table
            className={`w-full mb-4 ${
              semesterData.length - 1 === index ? "" : "md:mb-[4%]"
            }`}
          >
            <thead>
              <tr className="font-[900]">
                <th className="w-[30%]">SUBJECT CODE</th>
                <th className="w-[70%]">SUBJECT</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, idx) => (
                <tr key={idx} className="">
                  <td
                    className="text-black border-black"
                    colSpan={subject.title ? "1" : "2"}
                  >
                    {subject.code}
                  </td>
                  {subject.title && (
                    <td className="text-black border-black">{subject.title}</td>
                  )}
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
