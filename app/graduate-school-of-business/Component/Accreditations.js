import React from "react";
import naac from "../../../public/graduate-school-of-business/mba/naac.png";
import govtDegree from "../../../public/graduate-school-of-business/mba/govtDegree.png";
import addOn from "../../../public/graduate-school-of-business/mba/addOn.png";
import AICTE from "../../../public/graduate-school-of-business/mba/AICTE.png";
import Image from "next/image";

function Accreditations() {
  const card = [
    {
      icon: naac,
      title: "NAAC A+ Accredited",
      desc: "In 2022, Tula's Institute was accredited with an A+ Grade by NAAC, placing it among the top 5% of colleges in India for academic excellence and infrastructure.",
    },
    {
      icon: govtDegree,
      title: "Government Degree",
      desc: "Tula's Institute provides Government Degrees to the passouts as Tula's is Affiliated from 2 Government state universities. (Uttarakhand Technical University And Sri Dev Suman University)",
    },
    {
      icon: addOn,
      title: "Add on Certificate",
      desc: (
        <ul className="ml-5 list-disc w-full text-start">
          <li>Advanced Excel</li>
          <li>Business and Data Analytics</li>
          <li>Stock Trading</li>
          <li>Digital Marketing</li>
          <li>Six Sigma</li>
          <li>Power Bi and Tableau</li>
          <li>SPSS</li>
        </ul>
      ),
    },
    {
      icon: AICTE,
      title: "AICTE Approved",
      desc: "Tula's Institute is approved by AICTE, Delhi, ensuring it meets the highest standards of technical education and provides a quality learning experience for students.",
    },
  ];
  return (
    <div className="pb-8 px-4 md:px-6 md:pb-20 flex flex-col items-center justify-center w-full">
      <h8 className="text-[40px] text-[#007A83] md:text-[clamp(20px,3.2vw,100px)] font-[GoudyCatalogue] leading-none gap-6 font-light">
        Accreditations
      </h8>
      <div className="w-[95%] pt-8 md:pt-20 md:w-[70%] flex flex-wrap gap-2 md:gap-3">
        {card.map((card, index) => (
          <div
            style={{
              boxShadow: "0px 6.391px 47.935px 0px rgba(0, 0, 0, 0.25) inset",
            }}
            key={index}
            className="flex flex-col gap-4 items-center justify-center p-4 w-[calc(50%-8px)] md:w-[calc(25%-12px)]"
          >
            <Image src={card.icon} alt="" className="w-fit h-fit" />
            <h3 className="text-[#007A83] text-center text-[clamp(15px,3.6vw,30px)] md:text-[clamp(18px,1.3vw,45px)] font-[TTChocolatesBold]">
              {card.title}
            </h3>
            <h3 className="text-[#000] text-center text-[clamp(7px,3vw,30px)] md:text-[clamp(10px,1vw,45px)] font-[Helvetica]">
              {card.desc}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accreditations;
