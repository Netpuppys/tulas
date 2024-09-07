"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../public/ict-facilities/background.png";
import { Fade } from "react-awesome-reveal";
import ICT from "../../public/ict-facilities/ict-facilities.png";
import { useInView } from "react-intersection-observer";

function ICTFacilities() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            ICT <span className="text-[#007A83]">FACILITIES</span>
          </>
        }
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Tula’s has implemented ICT to support advanced learning and assessment. The institute has adequate classrooms to meet the need of the various programs being run. Presently all lecture rooms, tutorial rooms and seminar halls are equipped with projectors and Wi-Fi/LAN connectivity for the use of ICT during teaching.Computer assisted learning and digital materials are made available to the students to supplementclassroom teaching."
        }
      />
      {/* fixed background */}
      <div className="w-full relative overflow-hidden -mb-[6vh]">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
      </div>
      <div className="pt-40 pb-20 bg-transparent w-[95%] ml-[5%] h-fit flex items-center justify-between">
        <Fade delay={300} className="w-[45%]">
          <div className="w-full block">
            <h3 className="px-10 font-[TTChocolatesBold] font-semibold rounded-md text-[52px] border-l-4 border-white">
              ICT Facilities
            </h3>
            <br />
            <h4 className="text-[22px] font-[TTChocolates] text-[#D9D9D9]">
              {
                "In addition to traditional method of teaching, the faculty members are using the IT enabled learning tools such as PPT, Video clippings, online classes, online sources, to expose the students for advanced knowledge and practical learning. Internet with capacity of over 205 Mbps is made available."
              }
              <br />
              <br />
              {
                "Classrooms & Seminar halls with ICT enabled facilities Tula's Institute has a state-of-the-art infrastructure, creating an ideal environment for progressive learning and resource development. To meet the academic needs of the students we have well equipped Classrooms, Tutorial rooms and laboratories that meet the AICTE specifications. With an aim to fill the gap between the curriculum and the industry expectations from a graduate engineer the college has provided, apart from the regular Laboratories, industry tie-ups etc."
              }
              <br />
              <br />
              {
                "Labs are equipped with adequate hardware and licensed software to run curriculum specific programs. Adequate numbers of personal computers are available for the smooth conduct of the Labs."
              }
              <br />
              <br />
              {
                "Institute consists of the adequate numbers of Seminar Halls and class rooms with ICT enabled facilities like:"
              }
            </h4>
          </div>
        </Fade>
        <Fade className="w-[45%]">
          <Image src={ICT} alt="" className="w-full h-fit rounded-3xl" />
        </Fade>
      </div>

      <div className="w-full h-fit z-50">
        <Footer />
      </div>
    </div>
  );
}

export default ICTFacilities;
