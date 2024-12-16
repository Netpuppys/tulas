import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { PiStudentFill } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { FaBusinessTime, FaWifi } from "react-icons/fa";
function CarouselContent() {
  const cards = [
    {
      icon: <FaWifi />,
      value: "22",
      name: (
        <>
          ACRES <strong>WI-FI</strong> ENABLED CAMPUS
        </>
      ),
    },
    {
      icon: <PiStudentFill />,
      value: "150",
      name: (
        <>
          QUALIFIED FACULTY <strong>MEMBERS</strong>
        </>
      ),
    },
    {
      icon: <GiGraduateCap />,
      value: "3000+",
      name: (
        <>
          <strong>STUDENTS</strong> ENROLLED
        </>
      ),
    },
    {
      icon: <FaBusinessTime />,
      value: "19",
      name: (
        <>
          YEARS OF <strong>EXCELLENCE</strong>
        </>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center pt-8 md:pt-20">
      <h2 className="text-black flex flex-col md:flex-row md:gap-6 text-[40px] text-center md:text-[clamp(20px,3vw,100px)] font-[Helvetica] font-light">
        Here Excellence Meets{" "}
        <span className="text-[#007A83] text-[40px] md:text-[clamp(20px,3.2vw,100px)] font-[GoudyCatalogue] ">
          Opportunity!
        </span>
      </h2>
      <h4 className="px-8 md:px-0 w-full my-8 md:max-w-[55%] font-[Helvetica] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] text-black">
        Tula’s Institute, founded in 2006 under the Rishabh Educational Trust,
        is a premier institution in Dehradun dedicated to developing future
        leaders. We focus on providing a strong academic foundation while
        emphasizing critical thinking, strategic decision-making, and real-world
        skills—essential for success in today’s competitive world.
      </h4>
      <h6 className="px-8 md:px-0 w-full md:max-w-[55%] font-[Helvetica] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] text-black">
        At Tula’s, we prepare students to navigate complex challenges, drive
        innovation, and lead with confidence. Our hands-on approach to learning
        ensures that students are not only equipped with theoretical knowledge
        but also practical experience.
      </h6>
      <div className="flex flex-wrap w-full md:max-w-[90%] py-8 md:py-20 md:pb-10 gap-3 md:gap-[8%] items-center justify-center mx-auto">
        {cards.map((card, index) => (
          <div key={index}>
            <div
              style={{
                boxShadow: "0px 32.744px 57.6px 0px rgba(0, 0, 0, 0.15)",
              }}
              className="bg-[#E7F1F2] md:min-w-[206px] p-2 md:p-5 aspect-square flex gap-20"
            >
              <div className="flex flex-col justify-center items-center w-full h-full">
                <h3 className="text-[40px] md:text-[51px] leading-tight text-[#007A83] font-extrabold">
                  {card.icon}
                </h3>
                <h2 className="font-[TTChocolatesBold] text-[30px] md:text-[42px] leading-tight text-[#007A83] font-extrabold">
                  {card.value}
                </h2>
                <h3 className="text-[#343434] max-w-[140px] md:max-w-[180px] text-[16px] md:text-[20px] leading-tight text-wrap font-[TTChocolatesBold] font-normal text-center">
                  {card.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselContent;
