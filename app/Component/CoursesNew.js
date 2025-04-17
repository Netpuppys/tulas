import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import admission from "../../public/Homepage/BannerHome/BannerImage2.webp";
import Image from "next/image";
import FormPopup from "@/component/formPopup";
function CoursesNew() {
  const courses = [
    {
      title: "Undergraduate",
      nestedLinks: [
        {
          title: "Department of Engineering",
          superNestedLinks: [
            {
              title: "Civil Engineering (CE)",
              linkTo: "/courses/btech/civil-engineering",
            },
            {
              title: "Computer Science & Engineering (CSE)",
              linkTo: "/courses/btech/computer-science",
            },
            {
              title: "Computer Science & Engineering (AI&ML)",
              linkTo:
                "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning",
            },
            {
              title: "Computer Science & Engineering (Cyber Security)",
              linkTo:
                "/courses/btech/computer-science-engineering-cyber-security",
            },
            {
              title: "Computer Science & Engineering( Data Science)",
              linkTo:
                "/courses/btech/computer-science-engineering-data-science",
            },
            {
              title: "Electronics & Communication Engineering (ECE)",
              linkTo: "/courses/btech/electronics-and-communication-engg",
            },
            {
              title: "Electrical & Electronics Engineering (EEE)",
              linkTo: "/courses/btech/electrical-and-electronics-engg",
            },
            {
              title: "Mechanical Engineering (ME)",
              linkTo: "/courses/btech/mechanical-engineering",
            },
          ],
        },
        {
          title: "Department of Applied Sciences and Humanities",
          superNestedLinks: [
            {
              title: "Applied Sciences and Humanities",
              linkTo: "/courses/applied-science",
            },
          ],
        },
        {
          title: "Department of Agriculture",
          superNestedLinks: [
            {
              title: "B.Sc Agriculture",
              linkTo: "/b-sc-agriculture",
            },
          ],
        },
        {
          title: "Department of Mass Communications",
          superNestedLinks: [
            {
              title: "BAJMC",
              linkTo: "/courses/bjmc",
            },
          ],
        },
        {
          title: "Graduate School of Business",
          superNestedLinks: [
            {
              title: "BBA",
              linkTo: "/courses/bba",
            },
            {
              title: "B.Com (Hons.)",
              linkTo: "/courses/bcom",
            },
          ],
        },
        {
          title: "Department of Computer Applications",
          superNestedLinks: [
            {
              title: "BCA",
              linkTo: "/courses/bca",
            },
          ],
        },
        {
          title: "Tula's Institue of Pharmacy",
          superNestedLinks: [
            {
              title: "B.Pharma",
              linkTo: "/courses/bpharma",
            },
          ],
        },
      ],
    },
    {
      title: "Postgraduate",
      nestedLinks: [
        {
          title: "Department of Engineering",
          superNestedLinks: [
            {
              title: "M.Tech",
              linkTo: "/mtech",
            },
          ],
        },
        {
          title: "Graduate School of Business",
          superNestedLinks: [
            {
              title: "MBA",
              linkTo: "/courses/mba",
            },
          ],
        },
        {
          title: "Department of Computer Applications",
          superNestedLinks: [
            {
              title: "MCA",
              linkTo: "/courses/mca",
            },
          ],
        },
      ],
    },
    {
      title: "Diploma",
      nestedLinks: [
        {
          title: "Department of Engineering",
          superNestedLinks: [
            {
              title: "Diploma in Civil Engineering",
              linkTo: "/diploma-in-civil-engineering",
            },
            {
              title: "Diploma in Mechanical Engineering",
              linkTo: "/diploma-mechanical-engineering",
            },
            {
              title: "Diploma in Computer Science Engineering",
              linkTo: "/diploma-computer-science-engineering",
            },
          ],
        },
        {
          title: "Tula's Institue of Pharmacy",
          superNestedLinks: [
            {
              title: "D.Pharma",
              linkTo: "/courses/dpharma",
            },
          ],
        },
      ],
    },
  ];
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const handleFormPopup = () => {
    setFormPopup(true);
  };
  const [formPopup, setFormPopup] = useState(false);
  const newsCard = [
    {
      title: "Admission Open 2025-26",
      image: admission,
    },
  ];
  return (
    <div className="py-8 md:py-[3%] flex flex-col bg-[#f1efef] justify-center items-center">
      <div className="font-[CarotSlab] text-center px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Choose Your Programs
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] pt-8 md:pt-[3%] mx-auto gap-4 md:gap-[2%]">
        {/* Left Side - Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => setSelectedCourseIndex(index)}
              className={`text-center px-4 py-2 rounded transition-all duration-300 font-extrabold text-[clamp(10px,3.5vw,50px)] md:text-[clamp(10px,1.2vw,50px)] font-[TTChocolates] leading-tight
              ${
                selectedCourseIndex === index
                  ? "bg-[#007A83] text-white shadow-md"
                  : "bg-white text-black hover:text-[#007A83]  hover:shadow-sm"
              }`}
            >
              {course.title}
            </button>
          ))}
          {newsCard.map((news, index) => (
            <div
              key={index}
              className={`rounded-lg hidden md:block bg-[#760135] overflow-hidden w-full p-2 h-fit`}
            >
              <Image
                src={news.image}
                alt=""
                className="flex w-full rounded-lg h-fit object-cover transition-all duration-300 ease-in"
              />
              <div className="p-4">
                <p className="text-lg mt-2 mb-6 text-white">{news.title}</p>
                <button
                  onClick={handleFormPopup}
                  className=" bg-[#000] px-4 py-2 text-sm rounded cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Nested Links */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap gap-4">
            {courses[selectedCourseIndex]?.nestedLinks.map(
              (nestedLink, nestedIndex) => (
                <div
                  key={nestedIndex}
                  className="w-full md:w-[calc(50%-0.5rem)] border-[#757575] border bg-white p-4 flex flex-col gap-2"
                >
                  <h3 className="text-lg font-bold text-black">
                    {nestedLink.title}
                  </h3>
                  <ul className="">
                    {nestedLink.superNestedLinks.map(
                      (superNestedLink, superNestedIndex) => (
                        <li
                          key={superNestedIndex}
                          className="flex gap-2 items-center"
                        >
                          <MdKeyboardArrowRight color="blue" />
                          <a
                            href={superNestedLink.linkTo}
                            className="text-blue-500 text-[clamp(10px,3.5vw,50px)] md:text-[clamp(10px,1vw,50px)] font-[TTChocolates] hover:underline"
                          >
                            {superNestedLink.title}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
        {newsCard.map((news, index) => (
          <div
            key={index}
            className={`rounded-lg block md:hidden bg-[#760135] overflow-hidden w-full p-2 h-fit`}
          >
            <Image
              src={news.image}
              alt=""
              className="flex w-full rounded-lg h-fit object-cover transition-all duration-300 ease-in"
            />
            <div className="p-4 w-full h-fit">
              <p className="text-lg mt-2 mb-6 text-white">{news.title}</p>
              <button
                onClick={handleFormPopup}
                className=" bg-[#000] px-4 py-2 text-sm rounded cursor-pointer"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
      {formPopup && (
        <FormPopup formPopup={formPopup} setFormPopup={setFormPopup} />
      )}
    </div>
  );
}

export default CoursesNew;
