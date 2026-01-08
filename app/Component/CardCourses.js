import React, { useContext } from "react";
import Engineering from "../../public/Homepage/Courses/Engineering.png";
import Business from "../../public/Homepage/Courses/Business.png";
import Agriculture from "../../public/Homepage/Courses/Agriculture.png";
import MassCoummunication from "../../public/Homepage/Courses/MassCommunication.png";
import computerApplication from "../../public/Homepage/Courses/ComputerApplication.png";
import computerApplicationgraduate from "../../public/Homepage/Courses/computerapplicationgraduate.jpg";
import departmentofmanagment from "../../public/Homepage/Courses/departmentofmanagment.jpg";
import Pharmacy from "../../public/Homepage/Courses/Pharmacy.png";
import Image from "next/image";
import Link from "next/link";
import { UtmContext } from "@/component/utmParams";
function CardCourses({ linked = true }) {
  const cardsCourses = [
    {
      src: Engineering,
      title: "DEPARTMENT OF ENGINEERING",
      degrees: [
        {
          name: "B.Tech",
          link: "/btech",
          branches: [
            {
              name: "Civil Engineering",
              linkTo: "/courses/btech/civil-engineering",
            },
            {
              name: "Computer Science & Engineering",
              linkTo: "/courses/btech/computer-science",
            },
            {
              name: "Computer Science & Engineering (AI&ML)",
              linkTo:
                "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning",
            },
            {
              name: "Computer Science & Engineering (Cyber Security)",
              linkTo:
                "/courses/btech/computer-science-engineering-cyber-security",
            },
            {
              name: "Computer Science & Engineering (Data Science)",
              linkTo:
                "/courses/btech/computer-science-engineering-data-science",
            },
            {
              name: "Electronics & Communication Engineering",
              linkTo: "/courses/btech/electronics-and-communication-engg",
            },
            {
              name: "Electrical & Electronics Engineering",
              linkTo: "/courses/btech/electrical-and-electronics-engg",
            },
            {
              name: "Mechanical Engineering",
              linkTo: "/courses/btech/mechanical-engineering",
            },
          ],
        },
        {
          name: "M.Tech",
          link: "/mtech",
          branches: [
            // {
            //   name: "Civil Engineering",
            //   linkTo: "/mtech",
            // },
            // {
            //   name: "Thermal Engineering",
            //   linkTo: "/mtech",
            // },
            // {
            //   name: "Computer Science and Engineering",
            //   linkTo: "/mtech",
            // },
          ],
        },
        {
          name: "Diploma",
          link: "#",
          branches: [
            {
              name: "Computer Science Engineering",
              linkTo: "/diploma-computer-science-engineering",
            },
            {
              name: "Civil Engineering",
              linkTo: "/diploma-in-civil-engineering",
            },
            {
              name: "Mechanical Engineering",
              linkTo: "/diploma-mechanical-engineering",
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
          link: "/courses/mba",
          branches: [
            {
              name: "Finance",
              linkTo: "/courses/mba",
            },
            {
              name: "Human Resource Management",
              linkTo: "/courses/mba",
            },
            {
              name: "Marketing",
              linkTo: "/courses/mba",
            },
            {
              name: "Development",
              linkTo: "/courses/mba",
            },
            {
              name: "International Business",
              linkTo: "/courses/mba",
            },
            {
              name: "Business Analytics",
              linkTo: "/courses/mba",
            },
          ],
        },
        {
          name: "B.com. (Hons)",
          link: "/courses/bcom",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "BBA",
          link: "/courses/bba",
          branches: [
            {
              name: "Human Resource Management",
              linkTo: "/courses/bba",
            },
            {
              name: "Marketing",
              linkTo: "/courses/bba",
            },
            {
              name: "Finance",
              linkTo: "/courses/bba",
            },
          ],
        },
      ],
    },
        {
      src: departmentofmanagment,
      title: "DEPARTMENT OF MANAGMENT AND COMMERCE",
      degrees: [
        {
          name: "MBA",
          link: "/courses/mba",
          // branches: [
          //   {
          //     name: "Finance",
          //     linkTo: "/courses/mba",
          //   },
          //   {
          //     name: "Human Resource Management",
          //     linkTo: "/courses/mba",
          //   },
          //   {
          //     name: "Marketing",
          //     linkTo: "/courses/mba",
          //   },
          //   {
          //     name: "Development",
          //     linkTo: "/courses/mba",
          //   },
          //   {
          //     name: "International Business",
          //     linkTo: "/courses/mba",
          //   },
          //   {
          //     name: "Business Analytics",
          //     linkTo: "/courses/mba",
          //   },
          // ],
        },
        {
          name: "B.com. (Hons)",
          link: "/courses/bcom",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "BBA",
          link: "/courses/bba",
          branches: [
            {
              name: "Human Resource Management",
              linkTo: "/courses/bba",
            },
            {
              name: "Marketing",
              linkTo: "/courses/bba",
            },
            {
              name: "Finance",
              linkTo: "/courses/bba",
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
      title: "Department of Journalism and Communications",
      degrees: [
        {
          name: "BA.(Hons.) JMC",
          link: "/courses/bjmc",
          branches: [
            {
              name: "BA (Hons.) of Journalism and Mass Communication",
              linkTo: "/courses/bjmc",
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
          link: "/courses/bca",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "MCA",
          link: "/courses/mca",
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
      src: computerApplicationgraduate,
      title: "GRADUATE SCHOOL OF COMPUTER APPLICATIONS",
      degrees: [
        {
          name: "BCA",
          link: "/courses/bca",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "MCA",
          link: "/courses/mca",
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
          name: "B.Pharm.",
          link: "/courses/bpharma",
          branches: [
            {
              name: "",
              linkTo: "",
            },
          ],
        },
        {
          name: "D.Pharm.",
          link: "/courses/dpharma",
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
<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
  {cardsCourses.map((image, index) => (
    <div className="w-full max-w-[300px]" key={index}>
      <div
        className="group card-group h-[400px] overflow-hidden shadow-lg transform transition-all duration-500 relative"
      >
        <Image
          src={image.src}
          loading="lazy"
          alt=""
          className="z-50 object-cover w-full h-full"
          width={240}
          height={400}
        />

        <div className="absolute w-full h-fit z-30 bottom-0 p-2 flex flex-col gap-4">
          <div className="text-white w-fit text-left font-[BenchNine] text-2xl md:text-3xl">
            {image.title}
          </div>
              {/* {image.degrees.map((degree, degreeIndex) => (
                <div
                  key={degreeIndex}
                  className="md:hidden slide-in text-white w-fit text-left"
                >
                  {!linked && (
                    <div
                      // href={`${degree.link}/${utmParams}`}
                      className="border-t-2 border-b-2 border-[#E69706] w-fit font-[TTChocolates] leading-tight tracking-tight text-2xl"
                    >
                      {degree.name}
                    </div>
                  )}
                  {linked && (
                    <Link
                      href={`${degree.link}/${utmParams}`}
                      className="border-t-2 border-b-2 border-[#E69706] w-fit font-[TTChocolates] leading-tight tracking-tight text-2xl"
                    >
                      {degree.name}
                    </Link>
                  )}
                  {degree.branches.map((branches, branchesIndex) => (
                    <div>
                      {!linked && (
                        <div key={branchesIndex}>
                          <h3 className="text-xs mt-[2px]">{branches.name}</h3>
                        </div>
                      )}
                      {linked && (
                        <Link
                          href={`${branches.linkTo}/${utmParams}`}
                          key={branchesIndex}
                        >
                          <h3 className="text-xs mt-[2px]">{branches.name}</h3>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ))} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardCourses;
