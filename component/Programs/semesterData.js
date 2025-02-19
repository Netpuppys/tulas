import React from "react";

const SemesterTable = ({ semesterData }) => {
  return (
    <div className="semester-container max-w-[1200px] mx-auto">
      {semesterData.map((semester, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4 md:gap-6"
        >
          <h2 className="px-20 py-1 text-white font-[TTChocolatesMedium] bg-[#007A83] text-center rounded-full text-[clamp(10px,4.5vw,45px)] md:text-[clamp(10px,1.2vw,45px)]">
            {semester.semester}
          </h2>
          <table
            className={`w-full leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] font-normal mb-4 ${
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
                    className="text-[#353535] border-black"
                    colSpan={subject.title ? "1" : "2"}
                  >
                    {subject.code}
                  </td>
                  {subject.title && (
                    <td className="text-[#353535] border-black">
                      {subject.title}
                    </td>
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
