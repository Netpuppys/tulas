"use client";
import React from "react";
import background from "../../../public/campus-life/vibgyor/background.png";
import Footer from "@/component/Footer";
import Vision from "@/component/Programs/Vision";
import Image from "next/image";
import Navbar from "@/component/Navbar/Navbar";
import vibgyorMain from "../../../public/campus-life/vibgyor/vibgyorMain.png";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
function Vibgyor() {
  const sections = [
    {
      title: "Footloose",
      description:
        "Dance enthusiasts come together in Footloose, where rhythm and movement blend to create captivating performances. This club nurtures budding dancers and offers a stage to showcase their talent.",
    },
    {
      title: "Sargam",
      description:
        "For those with a passion for music, Sargam is the perfect platform. This singing club brings together melodious voices and harmonizes talents, creating soulful musical experiences.",
    },
    {
      title: "Manchan",
      description:
        "The theatre lovers’ haven, Manchan, is where drama and creativity take the spotlight. This club provides a stage for aspiring actors to express their theatrical flair and perform impactful plays.",
    },
    {
      title: "Stylexa",
      description:
        "In Stylexa, the world of fashion comes alive. This fashion show club offers a runway for aspiring designers and models to flaunt their style and creativity, making every show a grand spectacle.",
    },
    {
      title: "Meraki",
      description:
        "Art and craft find their expression in Meraki. This club encourages students to channel their artistic abilities and create beautiful, imaginative works that add colour to campus life.",
    },
    {
      title: "Public Relations",
      description:
        "The PR club plays a crucial role in relationship building and event management. These students are the backbone of Vibgyor, ensuring seamless coordination and successful execution of all activities and events.",
    },
    {
      title: "Backbone Crew",
      description:
        "Speaking of backbones, this club focuses on stage management, ensuring that all events run smoothly. From technical setups to behind-the-scenes operations, Backbone handles it all.",
    },
    {
      title: "Capture",
      description:
        "Capture is the go-to club for photography and videography enthusiasts. These visual storytellers document every event and bring moments to life through their lenses.",
    },
    {
      title: "Technocrats",
      description:
        "For those who love technology and consoles, Technocrats is the ideal club. They manage the technical aspects of events, ensuring everything is powered up and running flawlessly.",
    },
    {
      title: "Quill",
      description:
        "Literary minds gather in Quill, the literary club that celebrates the art of writing. From poetry and prose to discussions and debates, Quill offers a platform for literary expression.",
    },
    {
      title: "Expresso",
      description:
        "Public speaking and anchoring talents are honed in Expresso. This club provides opportunities for students to develop their oratory skills and confidently take the stage as anchors.",
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
        <div className="h-fit w-full z-40 bg-white">
          <div className="h-[80vh] md:h-[71vh] w-full relative">
            <Image
              src={BannerImg}
              alt=""
              className="w-full h-full object-cover absolute"
            />
            <div className="bottom-4 md:bottom-10 z-10 absolute mx-4 md:ml-16">
              <h3 className="text-[40px] md:text-[60px] text-[#007A83] z-10 font-[CarotSlab]">
                Vibgyor
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-fit flex flex-col justify-center  items-center py-8 md:py-20">
          <h3 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            Vibgyor Student Council at Tula’s Institute
          </h3>
          <Image
            src={vibgyorMain}
            alt=""
            className="w-full aspect-[9/12] px-4 object-cover md:aspect-video md:w-[80%] py-4 md:py-8 mx-auto mb-4"
          />
          <p className="text-lg md:text-2xl w-[90%] md:w-[70%] font-[TTChocolates] mx-auto text-center text-black">
            <span className="font-black text-[#007A83] font-[TTChocolatesBold]">
              Vibgyor,{" "}
            </span>
            the vibrant and dynamic student council of{" "}
            <span className="font-black text-[#3D001B] font-[TTChocolatesBold]">
              {" "}
              Tula’s Institute,{" "}
            </span>{" "}
            is the heart and soul behind the extra and co-curricular activities
            on campus. This dedicated body ensures students have a holistic and
            enriching college experience, fostering talent and creativity across
            various domains. Vibgyor is home to 11 diverse and exciting clubs,
            each offering unique opportunities for students to explore their
            passions and develop their skills.
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
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default Vibgyor;
