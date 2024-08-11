import React from "react";
import Engineering from "../../public/Homepage/Courses/Engineering.png";
import Business from "../../public/Homepage/Courses/Business.png";
import Agriculture from "../../public/Homepage/Courses/Agriculture.png";
import MassCoummunication from "../../public/Homepage/Courses/MassCommunication.png";
import computerApplication from "../../public/Homepage/Courses/ComputerApplication.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
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
              name: "Computer Science & Engineering",
              linkTo: "/courses/btech/computer-science/",
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
            {
              name: "Civil Engineering",
              linkTo: "/courses/btech/civil-engineering/",
            },
          ],
        },
        {
          name: "M.Tech",
          link: "/mtech/",
          branches: [
            {
              name: "Civil Engineering",
              linkTo: "/mtech/",
            },
            {
              name: "Thermal Engineering",
              linkTo: "/mtech/",
            },
            {
              name: "Computer Science and Engineering",
              linkTo: "/mtech/",
            },
          ],
        },
        {
          name: "Polytechnic",
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
          branches: [
            {
              name: "Finance",
              linkTo: "/courses/mba/",
            },
            {
              name: "Human Resource Managment",
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
              name: "Human Resource Managment",
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
      title: "DEPARTMENT OF MASS COMUNICATION",
      degrees: [
        {
          name: "BAJMC",
          link: "/courses/bjmc/",
          branches: [
            {
              name: "BA (Hons.) of Journalism and Mass Communications",
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
  ];
  return (
    <div className="flex items-center justify-center w-full h-fit gap-4">
      {cardsCourses.map((image, index) => (
        <Fade delay={300}>
          <div
            key={index}
            className={`w-[18vw] group h-full overflow-hidden shadow-lg transform transition-all duration-500`}
          >
            <Image
              src={image.src}
              alt=""
              className="z-20 object-cover w-full h-full group-hover:brightness-50"
              layout="responsive"
            />
            <div className="absolute z-30 bottom-0 p-2 flex flex-col gap-2">
              <div className="text-white w-fit text-left font-[BenchNine] text-3xl">
                {image.title}
              </div>
              {image.degrees.map((degree, degreeIndex) => (
                <div
                  key={degreeIndex}
                  className="hidden group-hover:block text-white w-fit text-left"
                >
                  <Link
                    href={degree.link || "#"}
                    className="border-t-2 border-b-2 border-[#E69706] w-fit font-[TTChocolates] text-2xl"
                  >
                    {degree.name}
                  </Link>
                  {degree.branches.map((branches, branchesIndex) => (
                    <Link href={branches.linkTo || "#"}>
                      <h3 className="text-sm" key={branchesIndex}>
                        {branches.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}

export default CardCourses;
