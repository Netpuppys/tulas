"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/footer/background.png";
import Vision from "@/component/Programs/Vision";
import library from "../../public/infrastructure/library/library.png";
import library2 from "../../public/infrastructure/library/library2.png";
import hostel from "../../public/infrastructure/HostelMess/hostel.png";

function AboutIQAC() {
  const sections = [
    {
      title: "OBJECTIVES",
      description: (
        <ul className="ml-5 list-disc">
          <li>
            To develop a system for conscious, consistent, and catalytic action
            to improve the academic and administrative performance of the
            institution.
          </li>
          <li>
            To promote measures for institutional functioning towards quality
            enhancement through internalization of quality culture and
            institutionalization of best practices.
          </li>
        </ul>
      ),
      image: library2,
    },
    {
      title: "Functions",
      description: (
        <>
          Some of the functions expected of the IQAC are:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>Development and application of quality benchmarks</li>
            <li>
              Parameters for various academic and administrative activities of
              the institution
            </li>
            <li>
              Facilitating the creation of a learner-centric environment
              conducive to quality education and faculty maturation to adopt the
              required knowledge and technology for participatory teaching and
              learning process
            </li>
            <li>
              Collection and analysis of feedback from all stakeholders on
              quality-related institutional processes
            </li>
            <li>
              Organization of inter and intra institutional workshops, seminars
              on quality related themes and promotion of quality circles
            </li>
            <li>
              Documentation of the various programs/activities leading to
              quality improvement
            </li>
            <li>
              Acting as a nodal agency of the Institution for coordinating
              quality-related activities, including adoption and dissemination
              of best practices
            </li>
            <li>
              Development and maintenance of institutional database through MIS
              for the purpose of maintaining /enhancing the institutional
              quality
            </li>
          </ul>
        </>
      ),
      image: hostel,
    },
    {
      title: "Strategies",
      description: (
        <>
          Internal quality assurance cell shall evolve mechanisms and procedures
          for:
          <br />
          <br />
          <ul className="list-disc ml-5">
            <li>
              Ensuring timely, efficient, and progressive performance of
              academic, administrative and financial tasks
            </li>
            <li>Relevant and quality academic/ research programs</li>
            <li>
              Equitable access to and affordability of academic programs for
              various sections of society
            </li>
            <li>
              Optimization and integration of modern methods of teaching and
              learning
            </li>
            <li>The credibility of the assessment and evaluation process</li>
            <li>
              Ensuring the adequacy, maintenance, and proper allocation of
              support structure and services
            </li>
            <li>
              Best Sharing of research findings and networking with other
              institutions in India and abroad
            </li>
          </ul>
        </>
      ),
      image: library,
    },
  ];
  return (
    <div>
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            About Internal Quality{" "}
            <span className="text-[#005D64]">Assurance Cell (IQAC)</span>
          </>
        }
        description={<></>}
        belowTitle={""}
        belowPara={
          "The Internal Quality Assurance Cell (IQAC) was established in 2014 at Tula’s Institute, Dehradun as an accreditation quality measure. The IQAC has been constituted as per the recommendations of the National Assessment and Accreditation Council (NAAC). The IQAC ensures the effective implementation of quality initiatives through continuous reviews and periodic meetings. The IQAC works towards attaining excellence in all academic and administrative endeavors of the institution."
        }
      />
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <Vision sections={sections} />
      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default AboutIQAC;
