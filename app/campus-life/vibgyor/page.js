"use client";
import React from "react";
import background from "../../../public/campus-life/vibgyor/background.png";
import Footer from "@/component/Footer";
import Vision from "@/component/Programs/Vision";
import Banner from "@/component/Banner";
import Image from "next/image";
import Navbar from "@/component/Navbar/Navbar";
import vibgyorMain from "../../../public/campus-life/vibgyor/vibgyorMain.png";
import Footloose from "../../../public/campus-life/vibgyor/Footloose.webp";
import Sargam from "../../../public/campus-life/vibgyor/Sargam.webp";
import Manchan from "../../../public/campus-life/vibgyor/Manchan.webp";
import Stylexa from "../../../public/campus-life/vibgyor/Stylexa.webp";
import Meraki from "../../../public/campus-life/vibgyor/Meraki.webp";
import PublicRelation from "../../../public/campus-life/vibgyor/PublicRelation.webp";
import Backbone from "../../../public/campus-life/vibgyor/Backbone.webp";
import Capture from "../../../public/campus-life/vibgyor/Capture.webp";
import Technoocrats from "../../../public/campus-life/vibgyor/Technoocrats.webp";
import Quill from "../../../public/campus-life/vibgyor/Quill.webp";
import Expresso from "../../../public/campus-life/vibgyor/Expresso.webp";
import BannerImg from "../../../public/campus-life/vibgyor/bannerImg.png";
function Vibgyor() {
  const sections = [
    {
      title: "Footloose – For the dancers who own the stage.",
      description:
        "Dance enthusiasts come together in Footloose, where rhythm and movement blend to create captivating performances. This club nurtures budding dancers and offers a stage to showcase their talent.",
      image: Footloose,
    },
    {
      title: "Sargam – Where music and voices come alive.",
      description:
        "For those with a passion for music, Sargam is the perfect platform. This singing club brings together melodious voices and harmonizes talents, creating soulful musical experiences.",
      image: Sargam,
    },
    {
      title: "Manchan – Theatre for the drama lovers.",
      description:
        "The theatre lovers’ haven, Manchan, is where drama and creativity take the spotlight. This club provides a stage for aspiring actors to express their theatrical flair and perform impactful plays.",
      image: Manchan,
    },
    {
      title: "Stylexa – Fashion, runway, and style.",
      description:
        "In Stylexa, the world of fashion comes alive. This fashion show club offers a runway for aspiring designers and models to flaunt their style and creativity, making every show a grand spectacle.",
      image: Stylexa,
    },
    {
      title: "Meraki – Create art with passion.",
      description:
        "Art and craft find their expression in Meraki. This club encourages students to channel their artistic abilities and create beautiful, imaginative works that add colour to campus life.",
      image: Meraki,
    },
    {
      title: "Public Relations – Mastering events and connections.",
      description:
        "The PR club plays a crucial role in relationship building and event management. These students are the backbone of Vibgyor, ensuring seamless coordination and successful execution of all activities and events.",
      image: PublicRelation,
    },
    {
      title: "Backbone Crew – Running the show behind the scenes.",
      description:
        "Speaking of backbones, this club focuses on stage management, ensuring that all events run smoothly. From technical setups to behind-the-scenes operations, Backbone handles it all.",
      image: Backbone,
    },
    {
      title: "Capture – For those who capture every moment.",
      description:
        "Capture is the go-to club for photography and videography enthusiasts. These visual storytellers document every event and bring moments to life through their lenses.",
      image: Capture,
    },
    {
      title: "Technocrats – Tech wizards powering events.",
      description:
        "For those who love technology and consoles, Technocrats is the ideal club. They manage the technical aspects of events, ensuring everything is powered up and running flawlessly.",
      image: Technoocrats,
    },
    {
      title: "Quill – For those who love to write and tell stories.",
      description:
        "Literary minds gather in Quill, the literary club that celebrates the art of writing. From poetry and prose to discussions and debates, Quill offers a platform for literary expression.",
      image: Quill,
    },
    {
      title: "Expresso – For aspiring speakers and anchors.",
      description:
        "Public speaking and anchoring talents are honed in Expresso. This club provides opportunities for students to develop their oratory skills and confidently take the stage as anchors.",
      image: Expresso,
    },
  ];
  return (
    <>
      <head>
        <title>Vibgyor - Student Council at Tula's Institute, Dehradun</title>
        <meta
          name="description"
          content="Explore Vibgyor, the dynamic student council at Tula’s Institute, Dehradun. Discover 11 diverse clubs like Footloose, Sargam, and Technocrats, fostering talent and creativity across campus through vibrant events and activities."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={
            <>
              Vibgyor- <span className="text-[#007A83]">Student Clubs</span>
            </>
          }
        />

        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="text-[clamp(10px,7vw,30px)] md:text-[clamp(10px,2.5vw,45px)] text-center w-full font-[CarotSlab] leading-tight text-[#007A83] mb-4">
            Meet Vibgyor – the heartbeat of Tula’s Institute!
          </h3>
          <Image
            src={vibgyorMain}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <p className="text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] w-[90%] md:w-[70%] font-[MontserratLight] mx-auto text-center text-black leading-tight">
            This student council is all about making sure every student has an
            unforgettable college experience. With 11 exciting clubs, Vibgyor
            brings together creativity, passion, and skill-building in ways that
            extend beyond the classroom. Whether you’re into music, drama,
            sports, or tech, our campus provides specialized spaces and
            top-notch facilities, offering the perfect environment to explore
            your interests. Vibgyor isn’t just a council; it’s your chance to
            discover new talents, make lasting memories, and thrive in a place
            designed for creativity and growth.
          </p>
        </div>

        {/* fixed background */}
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <Vision sections={sections} />
        <div className="w-full h-fit flex flex-col justify-center items-center pb-8 md:pb-20">
          <p className="text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1vw,45px)] w-[90%] md:w-[70%] font-[MontserratLight] mx-auto text-center leading-tight text-white">
            Vibgyor is all about finding your passion, connecting with others,
            and making the most of your college journey. Whether you're looking
            to explore new interests, develop your skills, or just have a blast,
            there's something here for everyone.
            <br />
            <br />
            So, dive in, get involved, and let the experiences and memories roll
            in.
            <br />
            <br />
            Your college adventure is just getting started!
          </p>
        </div>
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default Vibgyor;
