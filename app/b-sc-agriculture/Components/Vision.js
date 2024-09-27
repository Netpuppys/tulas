import React from "react";
import DepartmentalVission from "../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../public/courses/bjmc/departmentalMission.png";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function Vision() {
  const sections = [
    {
      title: "Departmental Vision",
      description:
        "To cultivate a future for organic farming, enhanced crop diversity, access to technology, education and environmental harmony through innovative, sustainable and research based agricultural practices, cutting-edge technologies and empowered farming communities.",
      image: DepartmentalVission,
    },
    {
      title: "Departmental Mission",
      description: (
        <>
          <ul>
            <li>
              To create and share information about sustainable farming methods
              that boost productivity, save resources, and help combat climate
              change.
            </li>
            <li>
              To foster innovation in agricultural technologies to improve
              efficiency, reduce waste, and ensure access to healthy and
              affordable food for all.
            </li>
            <li>
              To strengthen farming communities by providing education,
              training, and outreach services, enabling them to improve their
              quality of life and adapt to economic and environmental hardships.
            </li>
            <li>
              To encourage cooperation among all players in the food system –
              researchers, policymakers, industry figures, and consumers – to
              develop a food chain that is both sustainable and fair.
            </li>
            <li>
              To advocate for the protection of biodiversity and the well-being
              of ecosystems within agricultural areas, endorsing methods that
              safeguard natural resources and facilitate the production of
              nutritious food in a sustainable manner.
            </li>
          </ul>
        </>
      ),
      image: DepartmentalMission,
    },
  ];
  return (
    <div>
      <div className="pt-8 md:pt-20 px-3 md:px-0 w-full md:w-[90%] mx-auto bg-transparent h-fit">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 md:gap-0 md:flex-row mb-8 md:mb-20 justify-between w-full h-fit items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } `}
          >
            <Fade delay={300} className="w-full px-3 md:px-0 md:w-[45%]">
              <div className="w-full block">
                <h3 className="px-4 md:px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[30px] md:text-[52px] border-l-4 border-white">
                  {section.title}
                </h3>
                <br />
                <h4 className="text-[16px] md:text-[22px] font-[TTChocolates] text-[#D9D9D9]">
                  {section.description}
                </h4>
              </div>
            </Fade>
            <Fade className="w-full md:w-[45%]">
              <Image
                src={section.image}
                alt=""
                className="w-full h-fit rounded-xl md:rounded-3xl"
              />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vision;
