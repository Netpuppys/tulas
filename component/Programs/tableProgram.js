import React, { useState } from "react";
import SemesterTable from "./semesterData";
import FacultyData from "./facultyData";
import SelectedCardTable from "./SelectedCardTable";
import HOD from "./HOD";

function TableProgram({
  cards,
  selectedCard1,
  selectedCardTable,
  semesterData,
  facultyData,
  hod,
  HODcontent,
  specialization,
}) {
  const [selectedCard, setSelectedCard] = useState(0); // Index 1 is selected by default

  return (
    <>
      <div className="py-10 md:py-20 px-4 w-full max-w-[1200px] mx-auto relative z-[20]">
        <div className="rounded-full bg-white py-1 px-1 overflow-hidden flex items-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-full py-1 rounded-full px-1 flex items-center justify-center cursor-pointer ${
                selectedCard === index
                  ? "text-white bg-[#3D001B]"
                  : "text-[#3D001B] bg-white"
              }`}
              onClick={() => setSelectedCard(index)}
            >
              <button className="flex items-center font-[TTChocolatesBold] rounded-full py-1 md:py-2 text-[15px] md:text-[20px] justify-center gap-14">
                {card.title}
              </button>
            </div>
          ))}
        </div>
        <div className="pt-10 md:pt-20">
          {selectedCard === 0 && selectedCard1 && (
            <div className="bg-white rounded-3xl text-[#3D0018] px-4 md:px-8 py-4 md:py-8 text-[28px] md:text-[40px]">
              {selectedCard1}
            </div>
          )}
          {selectedCard === 0 && selectedCardTable && (
            <SelectedCardTable selectedCardTable={selectedCardTable} />
          )}
          {selectedCard === 1 && semesterData && (
            <SemesterTable semesterData={semesterData} />
          )}
          {selectedCard === 1 && !semesterData && (
            <FacultyData facultyData={facultyData} />
          )}
          {selectedCard === 2 && semesterData && (
            <FacultyData facultyData={facultyData} />
          )}
          {selectedCard === 0 &&
            !selectedCardTable &&
            !selectedCard1 &&
            !semesterData &&
            !hod && <FacultyData facultyData={facultyData} />}
          {selectedCard === 2 && !semesterData && hod && (
            <HOD hod={hod} HODcontent={HODcontent} />
          )}
          {hod && selectedCard === 3 && (
            <HOD hod={hod} HODcontent={HODcontent} />
          )}
          {selectedCard === 4 && specialization && (
            <div className="bg-white rounded-3xl text-[#3D0018] px-4 md:px-8 py-4 md:py-8 text-[14px] md:text-[20px]">
              {specialization}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TableProgram;
