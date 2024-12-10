"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/library/background.png";
import { Fade } from "react-awesome-reveal";
import library from "../../../public/infrastructure/library/library.png";
import library2 from "../../../public/infrastructure/library/library2.png";
import NPTEL from "../../../public/infrastructure/library/NPTEL.png";
import { useInView } from "react-intersection-observer";
import Vision from "@/component/Programs/Vision";

function Library() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });
  const sections = [
    {
      title: "Digital Library",
      description: (
        <>
          In the past few years, procedures for digitizing books at high speed
          and comparatively low cost have improved considerably. The result is
          that we can now digitize millions of books per year for creating
          digital libraries.
          <br />
          <br />
          Our Digital library has over 18383+ e-books and 3338 + e-Journals
          available round the clock through a FTP server on the intranet,
          whereby students can access the material and books anytime from
          anywhere on the campus.
        </>
      ),
      image: library,
    },
    {
      title: "Reference Library",
      description: (
        <>
          The Institute has an altogether a separate reference library which is
          spread on an area of more than 448 sq m with varied books on Basic
          Sciences, Engineering and Technology, Humanities, Social Sciences and
          Management.
        </>
      ),
      image: library2,
    },
  ];

  return (
    <>
      <head>
        <title>
          Digital Library for Students | College eLibrary | Best College in
          Dehradun
        </title>
        <meta
          name="description"
          content="Library acts as the spine of any educational institution. Well stocked library with adequate reading material defines the academic qualities and level of learning in an institution."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                <span className="text-[#007A83]">LIBRARY</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <p className="text-sm md:text-lg">
                <strong>With</strong> over{" "}
                <strong className="text-[#007A83]">60000</strong> volumes
                library is a veritable{" "}
                <strong className="text-[#007A83]">
                  powerhouse of knowledge.
                </strong>{" "}
                It provides a vast and constantly updated resource to its
                students to ensure their overall development. The aim of the
                Library is to serve the needs of Tula’s faculty, Research
                Scholars, Students and Members of the Library. In terms of
                infrastructure,{" "}
                <strong className="text-[#007A83]">Tula’s Institute </strong>has
                time and again been a preferred destination for students from
                across the country for it has been rated by various independent
                surveys amongst the{" "}
                <strong className="text-[#007A83]">
                  ‘Top 10 Engineering colleges in Dehradun’.
                </strong>{" "}
                Library at Tula’s is no exception, for we believe that it is the
                heart of the institution and acts as a{" "}
                <strong className="text-[#007A83]">center</strong> of knowledge
                for varied subjects.
              </p>
            }
          />
          {/* fixed background */}
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div>
          <Vision sections={sections.slice(0, 1)} />
          <div
            ref={ref}
            className="w-full h-fit py-8 md:py-20 bg-white px-8 md:px-[15%] flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center"
          >
            <div className="w-[70%] md:w-[30%] h-fit flex justify-center items-center">
              <Fade>
                <Image
                  src={NPTEL}
                  alt=""
                  className={`w-fit h-fit ${
                    inView ? "animate-translateLeft" : "opacity-0"
                  }`}
                />
              </Fade>
            </div>
            <h4
              className={`text-black max-w-[669px] w-full text-[16px] md:text-[22px] font-[TTChocolates] font-medium ${
                inView ? "animate-translateRight" : "opacity-0"
              }`}
            >
              The National Programme on Technology Enhanced Learning (NPTEL),
              video-based teaching material by the Indian Institutes of
              Technology (IIT) and Technical Teacher Training Institutes (TTTI),
              is also available in the library. This keeps students and
              faculties abreast with new technologies and provides them with
              better understanding of the same.
            </h4>
          </div>
          <Vision sections={sections.slice(1)} />
          <button
            onClick={() => {
              window.location.href = "https://tulas-opac.kohacloud.in/";
            }}
            className="px-12 md:px-20 py-2 mb-20 bg-white text-[20px] md:text-[28px] font-[TTChocolatesBold] text-[#00383D] rounded-full hover:bg-[#00383D] hover:text-white"
          >
            TULA’S Library Resources
          </button>

          <div className="w-full h-fit z-50">
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default Library;
