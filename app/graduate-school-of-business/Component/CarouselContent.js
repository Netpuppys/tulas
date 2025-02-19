import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { PiStudentFill } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { FaBusinessTime, FaWifi } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import campus from "../../../public/graduate-school-of-business/mba/campus1.webp";
import Image from "next/image";
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
      value: "200",
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
      value: "20",
      name: (
        <>
          YEARS OF <strong>EXCELLENCE</strong>
        </>
      ),
    },
  ];

  const sections = [
    {
      title: "About Tula's",
      description: (
        <>
          Tula’s Institute, founded in 2006 under the Rishabh Educational Trust,
          is a premier institution in Dehradun dedicated to developing future
          leaders. We focus on providing a strong academic foundation while
          emphasizing critical thinking, strategic decision-making, and
          real-world skills—essential for success in today’s competitive world.
          <div className="mt-4 md:mt-[1%]"></div>
          At Tula’s, we prepare students to navigate complex challenges, drive
          innovation, and lead with confidence. Our hands-on approach to
          learning ensures that students are not only equipped with theoretical
          knowledge but also practical experience.
        </>
      ),
      image: campus,
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="py-8 md:py-[4%] bg-transparent overflow-hidden px-8 md:px-0 w-full h-fit flex gap-8 md:gap-0 flex-col items-center justify-between">
        {sections.map((section, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });
          return (
            <div
              ref={ref}
              key={index}
              className={`flex flex-col gap-8 md:gap-0 md:flex-row md:mb-[4%] last:mb-0 justify-between w-full md:w-[95%] h-fit items-center md:ml-[5%]`}
            >
              <div className="w-full md:px-0 md:w-[47%]">
                <div className="w-full block">
                  <h3
                    className={`
                      text-[#007A83] px-4 text-center font-[GoudyCatalogue] md:text-start rounded-md font-semibold text-[clamp(10px,7.5vw,50px)] leading-tight md:text-[clamp(10px,3.2vw,50px)]`}
                  >
                    {section.title}
                  </h3>
                  <h5
                    className={`text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-wrap font-[TTChocolates] text-[#4E4E4E]`}
                  >
                    {section.description}
                  </h5>
                </div>
              </div>
              <div className="w-full md:w-[47%]">
                {section.image && (
                  <Image
                    src={section.image}
                    alt=""
                    className={`w-full h-fit  ${
                      inView
                        ? "md:animate-translateRightImage rounded-xl md:rounded-none md:rounded-s-3xl"
                        : "rounded-xl md:opacity-0"
                    }`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap w-full md:max-w-[90%] gap-3 md:gap-[4%] items-center justify-center mx-auto">
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
                <h2 className="font-[TTChocolatesMedium] text-[clamp(10px,7vw,45px)] md:text-[clamp(10px,2.5vw,45px)] leading-tight text-[#007A83] font-extrabold">
                  {card.value}
                </h2>
                <h3 className="text-[#343434] max-w-[140px] md:max-w-[180px] text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] leading-tight text-wrap font-[TTChocolatesMedium] font-normal text-center">
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
