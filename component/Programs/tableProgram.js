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
  const marginLeft = 100 / cards?.length;

  return (
    <>
      <div className="w-full px-4 relative z-[20]">
        {cards && (
          <div className="md:rounded-full max-w-[1200px] mx-auto md:bg-[#007A83] py-1 px-1 overflow-hidden flex flex-col md:flex-row gap-2 md:gap-0 items-center relative">
            <div
              style={{
                left: `${selectedCard * marginLeft}%`,
                width: `${100 / cards.length}%`,
              }}
              className={`absolute transition-all duration-300 top-0 h-full rounded-full overflow-hidden z-10 p-1`}
            >
              <div className="w-full h-full bg-white rounded-full"></div>
            </div>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`w-full py-1 rounded-full z-20 px-1 shadow-md md:shadow-none flex items-center justify-center cursor-pointer ${
                  selectedCard === index
                    ? "text-white md:text-[#007A83] bg-[#007A83] md:bg-transparent"
                    : "text-[#007A83] md:text-white bg-white md:bg-transparent"
                }`}
                onClick={() => setSelectedCard(index)}
              >
                <button className="flex items-center font-[TTChocolatesMedium] rounded-full py-1 md:py-2 text-[20px] justify-center gap-14">
                  {card.title}
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="pt-8 md:pt-[3%] overflow-hidden">
          {selectedCard === 0 && selectedCard1 && (
            <div className="bg-white max-w-[1200px] mx-auto text-[#007A83] px-4 md:px-8 text-[clamp(10px,5.5vw,30px)] md:text-[clamp(10px,2.5vw,45px)]">
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
            <div className="bg-[#007A83] max-w-[1200px] mx-auto rounded-3xl text-white px-4 md:px-8 py-4 md:py-8 leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] font-[TTChocolates] font-normal">
              {specialization}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TableProgram;
