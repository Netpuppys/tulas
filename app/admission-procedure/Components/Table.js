"use client";
import React, { useContext, useState } from "react";
import {
  tableBTech,
  tableBTechLateral,
  tableMBA,
  tableMTech,
  tableDiploma,
  tableBBA,
  tableBCA,
  tableMCA,
  tableBSC,
  tableBJMC,
  tableBCom,
} from "./data";
import Link from "next/link";
import { UtmContext } from "@/component/utmParams";

function TableRender({ tableData }) {
    const { utmParams } = useContext(UtmContext);
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 overflow-x-scroll">
      <table className="w-full mb-4 md:mb-20 ">
        <thead>
          <tr className="font-[900]">
            <th className="w-[5%]">S.NO</th>
            <th className="w-[10%]">Program</th>
            <th className="w-[70%]">ELIGIBILITY</th>
            <th className="w-[5%]">SEATS</th>
            <th className="w-[5%]">DURATION</th>
            <th className="w-[5%]">APPLY</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((subject, idx) => (
            <tr key={idx} className="tracking-[0.1rem] font-[700]">
              <td>{subject.sno}</td>
              <td>{subject.program}</td>
              <td>{subject.eligibility}</td>
              <td>{subject.seat}</td>
              <td>{subject.duration}</td>
              <td>
                <Link href={`/admissions2024${utmParams}`}>Apply Now</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Table({}) {
  const [selectedCard, setSelectedCard] = useState(0); // Index 1 is selected by default
  const cards = [
    { title: "B.Tech" },
    { title: "B.Tech Lateral" },
    { title: "M.Tech" },
    { title: "Diploma" },
    { title: "BBA" },
    { title: "MBA" },
    { title: "BCA" },
    { title: "MCA" },
    { title: "B.SC" },
    { title: "BJMC" },
    { title: "B.Com (Honors)" },
  ];
  return (
    <>
      <div className="px-4 w-full max-w-[1200px] mx-auto relative z-[20]">
        <div className=" py-1 px-1 overflow-hidden flex flex-wrap justify-center gap-2 items-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-[45%] md:w-fit py-1  rounded-full md:px-16 flex items-center justify-center cursor-pointer ${
                selectedCard === index
                  ? "text-white bg-[#3D001B]"
                  : "text-[#3D001B] bg-white"
              }`}
              onClick={() => setSelectedCard(index)}
            >
              <button className="flex items-center  font-[TTChocolatesBold] rounded-full py-1 md:py-2 text-[15px] md:text-[20px] justify-center gap-14">
                {card.title}
              </button>
            </div>
          ))}
        </div>
        <div className="pt-10 md:pt-20">
          {selectedCard === 0 && <TableRender tableData={tableBTech} />}
          {selectedCard === 1 && <TableRender tableData={tableBTechLateral} />}
          {selectedCard === 2 && <TableRender tableData={tableMTech} />}
          {selectedCard === 3 && <TableRender tableData={tableDiploma} />}
          {selectedCard === 4 && <TableRender tableData={tableBBA} />}
          {selectedCard === 5 && <TableRender tableData={tableMBA} />}
          {selectedCard === 6 && <TableRender tableData={tableBCA} />}
          {selectedCard === 7 && <TableRender tableData={tableMCA} />}
          {selectedCard === 8 && <TableRender tableData={tableBSC} />}
          {selectedCard === 9 && <TableRender tableData={tableBJMC} />}
          {selectedCard === 10 && <TableRender tableData={tableBCom} />}
        </div>
      </div>
    </>
  );
}

export default Table;
