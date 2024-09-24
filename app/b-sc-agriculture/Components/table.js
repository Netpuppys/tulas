import React, { useState } from "react";
import FacultyData from "./facultyData";
import SemesterTable from "./semesterTable";

function Table() {
  const [selectedCard, setSelectedCard] = useState(1); // Index 1 is selected by default
  const cards = [
    { title: "Eligibility" },
    { title: "Curriculum" },
    { title: "Senior Faculty" },
  ];
  return (
    <>
      <div className="py-20 px-4 w-full max-w-[1200px] mx-auto relative z-[20]">
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
              <button className="flex items-center font-[TTChocolatesBold] rounded-full py-2 text-[20px] justify-center gap-14">
                {card.title}
              </button>
            </div>
          ))}
        </div>
        <div className="pt-20">
          {selectedCard === 0 && (
            <div className="bg-white rounded-3xl text-[#3D0018] px-8 py-8 text-[40px]">
              <span className="font-[Arapey]">Admission Eligibility</span>{" "}
              <br />
              <ul className="font-[TTChocolates] list-disc ml-5 text-[23px] text-black">
                <li>
                  Passed 10+2 examination with Physics, Chemistry,
                  Mathematics/Biology/Agriculture Obtained at least 45% marks
                  (40% marks in case of candidates belonging to reserved
                  category) in the above subjects taken together.
                </li>
              </ul>
            </div>
          )}
          {selectedCard === 1 && <SemesterTable />}
          {selectedCard === 2 && <FacultyData />}
        </div>
      </div>
    </>
  );
}

export default Table;
