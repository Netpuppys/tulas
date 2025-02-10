"use client";

import BannerImg from "../../public/vision/bannerImg.webp";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer";
import vision from "../../public/vision/vision.webp";
import mission from "../../public/vision/mission.webp";
import Vision from "@/component/Programs/Vision";
import BannerProgram from "@/component/Programs/BannerProgram";

function VisionAndMission() {
  const sections = [
    {
      title: "Institute’s Vision",
      description: (
        <>
          To emerge as an academic centre producing world class professionals,
          promoting innovation and research.
        </>
      ),
      image: vision,
    },
    {
      title: "Institute’s Mission",
      description: (
        <ul className="list-disc ml-5">
          <li>
            To promote intellectual and skilled human capital generating
            employment and entrepreneurship.
          </li>
          <li>
            To Be Educational centre of excellence of multi ethnicity and
            diversity.
          </li>
          <li>
            To Establish as a technology-driven teaching-learning institution.
          </li>
          <li>
            To Provide a world class platform for research and innovation.
          </li>
          <li>To Inculcate social, environmental, heritage values.</li>
        </ul>
      ),
      image: mission,
    },
  ];
  return (
    <>
      <head>
        <title>
          Institute’s Vision & Mission | Excellence in Education & Innovation
        </title>
        <meta
          name="description"
          content="Discover the vision and mission of our institute, dedicated to producing world-class professionals, fostering innovation, and promoting research. Learn how we strive for academic excellence, diversity, and technology-driven education."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <BannerProgram image={BannerImg} title={"Vision & Mission"} />
          <Vision color={true} sections={sections} />
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default VisionAndMission;
