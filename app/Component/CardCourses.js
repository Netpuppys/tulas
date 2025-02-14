import React, { useContext } from "react";
import Engineering from "../../public/Homepage/Courses/Engineering.png";
import Business from "../../public/Homepage/Courses/Business.png";
import Agriculture from "../../public/Homepage/Courses/Agriculture.png";
import MassCoummunication from "../../public/Homepage/Courses/MassCommunication.png";
import computerApplication from "../../public/Homepage/Courses/ComputerApplication.png";
import Pharmacy from "../../public/Homepage/Courses/Pharmacy.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { UtmContext } from "@/component/utmParams";
function CardCourses() {
  const cardsCourses = [
    {
      src: Engineering,
      title: "DEPARTMENT OF ENGINEERING",
      degrees: [
        {
          name: "B.Tech",
          link: "/btech/",
          branches: [
            {
              name: "Civil Engineering",
              linkTo: "/courses/btech/civil-engineering/",
            },
            {
              name: "Computer Science & Engineering",
              linkTo: "/courses/btech/computer-science/",
            },
            {
              name: "Computer Science & Engineering (AI&ML)",
              linkTo:
                "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/",
            },
            {
              name: "Computer Science & Engineering (Cyber Security)",
              linkTo:
                "/courses/btech/computer-science-engineering-cyber-security/",
            },
            {
              name: "Computer Science & Engineering (Data Science)",
              linkTo:
                "/courses/btech/computer-science-engineering-data-science/",
            },
            {
              name: "Electronics & Communication Engineering",
              linkTo: "/courses/btech/electronics-and-communication-engg/",
            },
            {
              name: "Electrical & Electronics Engineering",
              linkTo: "/courses/btech/electrical-and-electronics-engg/",
            },
            {
              name: "Mechanical Engineering",
              linkTo: "/courses/btech/mechanical-engineering/",
            },
          ],
        },
        {
          name: "M.Tech",
          link: "/mtech/",
          branches: [
            // {
            //   name: "Civil Engineering",
            //   linkTo: "/mtech/",
            // },
            // {
            //   name: "Thermal Engineering",
            //   linkTo: "/mtech/",
            // },
            // {
            //   name: "Computer Science and Engineering",
            //   linkTo: "/mtech/",
            // },
          ],
        },
        {
          name: "Diploma",
          link: "#",
          branches: [
            {
              name: "Computer Science Engineering",
              linkTo: "/diploma-computer-science-engineering/",
            },
            {
              name: "Civil Engineering",
              linkTo: "/diploma-in-civil-engineering/",
            },
            {
              name: "Mechanical Engineering",
              linkTo: "/diploma-mechanical-engineering/",
            },
          ],
        },
      ],
    },
    {
      src: Business,
      title: "GRADUATE SCHOOL OF BUSINESS",
      degrees: [
        {
          name: "MBA",
          link: "/courses/mba/",
          branches: [
            {
              name: "Finance",
              linkTo: "/courses/mba/",
            },
            {
              name: "Human Resource Management",
              linkTo: "/courses/mba/",
            },
            {
              name: "Marketing",
              linkTo: "/courses/mba/",
            },
            {
              name: "Development",
              linkTo: "/courses/mba/",
            },
            {
              name: "International Business",
              linkTo: "/courses/mba/",
            },
            {
              name: "Business Analytics",
              linkTo: "/courses/mba/",
            },
          ],
        },
        {
          name: "B.com. (Hons)",
          link: "/courses/bcom/",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "BBA",
          link: "/courses/bba/",
          branches: [
            {
              name: "Human Resource Management",
              linkTo: "/courses/bba/",
            },
            {
              name: "Marketing",
              linkTo: "/courses/bba/",
            },
            {
              name: "Finance",
              linkTo: "/courses/bba/",
            },
          ],
        },
      ],
    },
    {
      src: Agriculture,
      title: "DEPARTMENT OF AGRICULTURE",
      degrees: [
        {
          name: "B.Sc (Hons) Agriculture",
          link: "/b-sc-agriculture",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
      ],
    },
    {
      src: MassCoummunication,
      title: "DEPARTMENT OF MASS COMMUNICATION",
      degrees: [
        {
          name: "BAJMC",
          link: "/courses/bjmc/",
          branches: [
            {
              name: "BA (Hons.) of Journalism and Mass Communication",
              linkTo: "/courses/bjmc/",
            },
          ],
        },
      ],
    },
    {
      src: computerApplication,
      title: "DEPARTMENT OF COMPUTER APPLICATION",
      degrees: [
        {
          name: "BCA",
          link: "/courses/bca/",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "MCA",
          link: "/courses/mca/",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
      ],
    },
    {
      src: Pharmacy,
      title: "TULA'S INSTITUTE OF PHARMACY",
      degrees: [
        {
          name: "B.Pharma",
          link: "/courses/bpharma/",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "D.Pharma",
          link: "/courses/dpharma/",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
      ],
    },
  ];
  const { utmParams } = useContext(UtmContext);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-fit gap-4">
      {cardsCourses.map((image, index) => (
        <div className="w-[90%] md:w-fit" key={index}>
          <div
            className={`w-full md:w-[15vw] group card-group h-[400px] md:h-full overflow-hidden shadow-lg transform transition-all duration-500`}
          >
            <Image
              src={image.src}
              alt=""
              className="z-50 object-cover w-full h-full brightness-50 md:brightness-100 md:group-hover:brightness-50"
              width={270}
              height={510}
            />
            <div className="w-full opacity-100 md:opacity-0 h-full bg-gradient-custom-black absolute bottom-0 left-1/2 -translate-x-1/2 z-20"></div>
            <div className="absolute w-full h-fit overflow-scroll z-30 bottom-0 p-2 flex flex-col gap-4">
              <div className="text-white slide-in w-fit text-left font-[BenchNine] text-3xl">
                {image.title}
              </div>
              {image.degrees.map((degree, degreeIndex) => (
                <div
                  key={degreeIndex}
                  className="md:hidden slide-in text-white w-fit text-left"
                >
                  <Link
                    href={`${degree.link}/${utmParams}`}
                    className="border-t-2 border-b-2 border-[#E69706] w-fit font-[MontserratLight] leading-tight tracking-tight text-2xl"
                  >
                    {degree.name}
                  </Link>
                  {degree.branches.map((branches, branchesIndex) => (
                    <Link
                      href={`${branches.linkTo}/${utmParams}`}
                      key={branchesIndex}
                    >
                      <h3 className="text-xs mt-[2px]">{branches.name}</h3>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardCourses;
