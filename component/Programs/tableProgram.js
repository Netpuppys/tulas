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
  const [selectedCard, setSelectedCard] = useState(0);
  const marginLeft = 100/cards?.length;

  return (
    <>
      <div className="pb-8 md:pb-20 px-4 w-full max-w-[1200px] mx-auto relative z-[20]">
        <div className="md:rounded-full md:bg-[#3D001B] py-1 px-1 overflow-hidden flex flex-col md:flex-row gap-2 md:gap-0 items-center relative">
          <div 
            style={{ left: `${selectedCard*marginLeft}%`, width: `${100/cards.length}%`}} 
            className={`absolute transition-all duration-300 top-0 h-full bg-transparent rounded-full overflow-hidden z-10 p-1`}
          >
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-full py-1 rounded-full bg-transparent z-20 px-1 flex  items-center justify-center cursor-pointer ${
                selectedCard === index
                  ? "text-[#3D001B]"
                  : "text-white"
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
            <div className="bg-[#3D0018] rounded-3xl text-white px-4 md:px-8 py-4 md:py-8 text-[14px] md:text-[20px]">
              {specialization}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TableProgram;
