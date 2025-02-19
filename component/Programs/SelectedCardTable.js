import React from "react";

function SelectedCardTable({ selectedCardTable }) {
  return (
    <div className="semester-container max-w-[1200px] mx-auto text-[#353535]">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <table className="w-full text-[#353535] leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] font-normal">
          <thead>
            <tr className="">
              <th className="w-[10%]">S.NO</th>
              <th className="w-[10%]">COURSE</th>
              <th className="w-[10%]">DURATION</th>
              <th className="w-[70%]">ELIGIBILITY</th>
            </tr>
          </thead>
          <tbody>
            {selectedCardTable.map((subject, idx) => (
              <tr key={idx}>
                <td className="text-[#353535] border-black">{subject.sno}</td>
                <td className="text-[#353535] border-black">
                  {subject.course}
                </td>
                <td className="text-[#353535] border-black">
                  {subject.duration}
                </td>
                <td className="text-[#353535] border-black">
                  {subject.eligibility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SelectedCardTable;
