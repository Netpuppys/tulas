import React from "react";

function SelectedCardTable({ selectedCardTable }) {
  return (
    <div className="semester-container text-black">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <table className="w-full mb-4 md:mb-20 text-black">
          <thead>
            <tr className="font-[900]">
              <th className="w-[10%]">S.NO</th>
              <th className="w-[10%]">COURSE</th>
              <th className="w-[10%]">DURATION</th>
              <th className="w-[70%]">ELIGIBILITY</th>
            </tr>
          </thead>
          <tbody>
            {selectedCardTable.map((subject, idx) => (
              <tr key={idx} className="tracking-[0.1rem] font-[700]">
                <td className="text-black border-black">{subject.sno}</td>
                <td className="text-black border-black">{subject.course}</td>
                <td className="text-black border-black">{subject.duration}</td>
                <td className="text-black border-black">
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
