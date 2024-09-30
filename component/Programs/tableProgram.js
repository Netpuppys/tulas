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
}) {
  const [selectedCard, setSelectedCard] = useState(1); // Index 1 is selected by default

  return (
    <>
      <div className="py-10 md:py-20 px-4 w-full max-w-[1200px] mx-auto relative z-[20]">
        <div className="h-fit rounded-full bg-white py-1 px-1 overflow-hidden flex">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-[33.33%] h-full py-1 rounded-full px-1 flex items-center justify-center cursor-pointer ${
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
          {selectedCard === 1 && <SemesterTable semesterData={semesterData} />}
          {selectedCard === 2 && <FacultyData facultyData={facultyData} />}
          {hod && selectedCard === 3 && <HOD hod={hod} HODcontent={HODcontent} />}
        </div>
      </div>
    </>
  );
}

export default TableProgram;
