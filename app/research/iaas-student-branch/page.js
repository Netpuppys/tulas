"use client";
import React from "react";
import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/research/r-and-cell/funded-projects-and-grants/background.png";
import TableComponent from "./data/tableData";
import hostel from "../../../public/infrastructure/HostelMess/hostel.png";
import Vision from "@/component/Programs/Vision";
function IICEvents() {
  const sections = [
    {
      title: "IAAS Student Branch",
      description: (
        <>
          <ul className="ml-5 list-disc">
            <li>
              <strong>Knowledge Sharing:</strong> The chapter facilitates the
              exchange of knowledge and experiences among students through
              various activities such as lectures, panel discussions, and study
              tours. It encourages students to share their research findings,
              insights, and innovative ideas in the field of agriculture and
              related sciences.
            </li>
            <br />
            <li>
              <strong>Skill Development:</strong> The Tula’s IAAS chapter
              organizes workshops, training programs, and hands-on sessions to
              enhance the technical and practical skills of its members. These
              activities may cover areas such as sustainable agriculture
              practices, agribusiness management, food security, and rural
              development.
            </li>
            <br />
            <li>
              <strong>International Cooperation:</strong> Tula’s IAAS promotes
              international collaboration and understanding by fostering
              connections with students and organizations from different
              countries. The chapter at Tula’s Institute actively participates
              in IAAS events, conferences, and exchange programs, providing
              students with opportunities to interact with their counterparts
              globally.
            </li>
            <br />
            <li>
              <strong>Community Outreach:</strong> The Tula’s IAAS chapter
              engages in community-oriented initiatives that address
              agricultural challenges and contribute to sustainable development.
              This may involve organizing awareness campaigns, field visits to
              rural areas, and implementing small-scale projects focused on
              agricultural education, conservation, or livelihood improvement.
            </li>
            <br />
            <li>
              <strong>Leadership and Personal Development:</strong> The Tula’s
              IAAS chapter offers opportunities for students to develop
              leadership and organizational skills by taking active roles in
              managing and organizing chapter activities. It encourages members
              to develop their abilities in teamwork, communication, project
              management, and other essential skills for personal growth.
            </li>
          </ul>
          <br />
          Through its IAAS chapter, Tula’s Institute promotes a global
          perspective in the field of agricultural and related sciences. The
          chapter serves as a platform for students to broaden their horizons,
          exchange ideas, and contribute to the sustainable development of the
          agriculture sector. It fosters a sense of community and provides
          students with valuable experiences and connections that can shape
          their future careers in the agricultural industry.
        </>
      ),
      image: hostel,
    },
  ];
  return (
    <>
      <head>
        <title>
          IAAS Student Branch | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Explore the IAAS Student Branch at Tula's Institute in Dehradun, which fosters knowledge exchange, skill development, international cooperation, and community outreach in the field of agricultural and related sciences. Join us for workshops, events, and global networking opportunities."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                IAAS <span className="text-[#007A83]">Student Branch</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              <>
                Tula’s Institute is proud to host the International Association
                of Students in Agricultural and Related Sciences (IAAS) chapter
                on its campus. IAAS is a global student organization that aims
                to connect and empower students interested in agricultural and
                related sciences from around the world.
                <br />
                <br />
                The Tula’s IAAS chapter at Tula’s Institute provides a platform
                for students to engage in activities that promote knowledge
                exchange, skill development, and networking opportunities in the
                field of agriculture and related sciences. The chapter organizes
                a wide range of events, workshops, seminars, and competitions
                that cater to the interests and professional development of its
                members.
                <br />
                <br />
                Some key objectives and activities of the Tula’s IAAS chapter at
                Tula’s Institute include:
              </>
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
          <div className="p-8 md:p-32">
            <div className="h-[90vh] px-5 overflow-auto w-[100vw] md:w-auto flex items-start justify-start">
              <TableComponent />
            </div>
          </div>

          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default IICEvents;
