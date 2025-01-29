import React from "react";
import mbaImage from "../../../public/graduate-school-of-business/mba/mbaImage.png";
import cuttingEdgeBackground from "../../../public/graduate-school-of-business/mba/cuttingEdgeBackground.png";
import marketingIcon from "../../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../../public/graduate-school-of-business/mba/entreprenurship.png";
import BusinessAnalytics from "../../../public/graduate-school-of-business/mba/BusinessAnalytics.png";
import HumanResource from "../../../public/graduate-school-of-business/mba/HumanResource.png";
import InternationalBusiness from "../../../public/graduate-school-of-business/mba/InternationalBusiness.png";
import AgriBusiness from "../../../public/graduate-school-of-business/mba/AgriBusiness.png";
import healthCare from "../../../public/graduate-school-of-business/mba/healthCare.png";
import Image from "next/image";
function CuttingEdge({ scrollRef }) {
  const department = [
    {
      title: "Marketing",
      icon: marketingIcon,
    },
    {
      title: "Finance",
      icon: finance,
    },
    {
      title: "Entreprenuership",
      icon: entreprenurship,
    },
    {
      title: "Business Analytics",
      icon: BusinessAnalytics,
    },
    {
      title: "Human Resource",
      icon: HumanResource,
    },
    {
      title: "International Business",
      icon: InternationalBusiness,
    },
    {
      title: "Agri- Business ",
      icon: AgriBusiness,
    },
    {
      title: "Health Care",
      icon: healthCare,
    },
  ];
  return (
    <div className="py-8 px-4 md:px-6 md:py-20 w-full flex flex-col justify-center items-center">
      <Image
        src={mbaImage}
        alt=""
        className="w-full md:max-w-[60vw] rounded-xl -z-10 mx-auto h-fit -mb-[39px]"
      />
      <div className="relative w-[95%] md:w-full rounded-xl overflow-hidden z-20 h-full">
        <Image
          src={cuttingEdgeBackground}
          alt=""
          className="w-full absolute -z-10 h-full object-cover"
        />
        <div className="w-full h-full flex flex-col py-8 md:py-20 md:pb-14 gap-8 md:gap-20 items-center ">
          <h8 className="text-white flex flex-col md:flex-row items-center justify-center leading-none gap-6 text-[40px] md:text-[clamp(20px,3vw,100px)] font-[Helvetica] font-light">
            <span>
              <strong className="font-bold">Tula’s </strong>Cutting Edge
            </span>
            <span className="text-[40px] md:text-[clamp(20px,3.2vw,100px)] font-[GoudyCatalogue] ">
              Specialisations
            </span>
          </h8>
          <div className="flex items-start flex-wrap gap-y-8 w-[90%] mx-auto">
            {department.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-[25%] items-start justify-start flex gap-20"
              >
                <div className="flex gap-8 justify-start items-center w-full h-full">
                  <Image
                    src={card.icon}
                    alt=""
                    className="bg-white p-2 w-[65px] aspect-square rounded-xl"
                  />
                  <h3 className="text-[#FFFFFF] leading-tight text-[clamp(15px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-wrap font-[Helvetica] font-normal">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <button
            style={{
              boxShadow:
                "10.677px 17.349px 33.364px 0px rgba(0, 122, 131, 0.51)",
            }}
            onClick={() =>
              scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className={`w-[calc(100%-32px)] md:w-[30%] mx-auto max-w-[400px] bg-[#007A83] text-[#FFFFFF] cursor-pointer py-3 rounded-[8px] disabled:opacity-60 disabled:cursor-not-allowed font-semibold`}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CuttingEdge;
