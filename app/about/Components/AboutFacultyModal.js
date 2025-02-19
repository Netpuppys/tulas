import Image from "next/image";
import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { IoClose } from "react-icons/io5";
import background from "../../../public/courses/bjmc/background.png";

const AboutFacultyModal = ({
  setActiveProfile,
  activeProfile,
  relatedProfiles,
}) => {
  const scrollRef = useRef();

  const handleProfileChange = (profile) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setActiveProfile(profile);
  };

  return (
    <div className="w-full md:w-full h-screen z-[9999] pointer-events-auto fixed top-0 left-0 bg-black overflow-y-scroll bg-opacity-40 backdrop-blur-sm flex items-start justify-start">
      <div
        onClick={() => setActiveProfile(null)}
        className="cursor-pointer w-0 md:w-[55vw] h-full hidden md:block"
      ></div>
      <div
        ref={scrollRef}
        className="w-full md:w-[45vw] h-screen z-[9999] animate-translateRight pointer-events-auto bg-white overflow-y-scroll"
      >
        {/* top bar */}
        <div className="w-full md:w-[45vw] h-20 bg-[#760135] flex items-center justify-between px-[1.3rem] py-4">
          <p className="font-[CarotSlab] text-[1.6rem] font-medium">
            Management Profiles
          </p>
          <button
            onClick={() => setActiveProfile(null)}
            className="h-full aspect-square bg-white flex items-center justify-center text-[#760135] text-2xl"
          >
            <IoClose />
          </button>
        </div>

        {/* profile content */}
        <div className="px-10 md:px-10 py-8 md:py-16 ">
          <div className="flex flex-col-reverse md:flex-row gap-6 justify-between">
            <div className="md:w-[70%]">
              <p className="capitalize text-[#760135] text-[clamp(8px,6.5vw,30px)] md:text-[clamp(10px,1.9vw,75px)] pb-1 font-semibold underline">
                {activeProfile?.name}
              </p>
              <p className="capitalize italic text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,0.9vw,45px)] text-[#007A83] font-bold font-[rothwood]">
                {activeProfile?.profile}
              </p>
              <p className=" text-[#1b1b1b] text-wrap text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,0.9vw,45px)] font-light mt-6">
                {activeProfile?.description}
              </p>
            </div>
            {activeProfile?.image && (
              <div className="bg-[#007a83] overflow-hidden mx-auto md:mx-0 w-60 md:w-[30%] h-[25rem] md:h-full rounded-xl shadow-2xl">
                <Image
                  src={activeProfile.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            )}
          </div>
          {activeProfile?.desc2 && (
            <p className=" text-[#1b1b1b] text-wrap text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,0.9vw,45px)] font-light mt-6">
              {activeProfile.desc2}
            </p>
          )}
          <div className=" mt-8 flex flex-col gap-5">
            {activeProfile?.awards?.map((item, id) => (
              <p
                key={id}
                className="text-[#007A83] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,0.9vw,45px)] font-bold"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* related profiles */}
        <div className="relative">
          <Image
            src={background}
            alt=""
            className="absolute w-full -z-10 top-0 h-full object-cover"
          />
          <div className="px-4 md:px-[4%] py-5 md:py-10">
            <p className="font-[CarotSlab] text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.5vw,75px)] leading-[1.2] text-[#fbfbfb] font-medium">
              Related Profiles
            </p>
            <div className="w-full flex flex-wrap items-start justify-center gap-4 md:gap-[2%] mt-5 md:mt-14">
              {relatedProfiles?.map((card, groupIndex) => (
                <div
                  key={groupIndex}
                  onClick={() =>
                    handleProfileChange({
                      profile: card,
                      related: relatedProfiles,
                    })
                  }
                  className={`cursor-pointer flex-col w-[calc(50%-1rem)] md:max-w-[31%] items-center justify-center gap-2 ${
                    activeProfile.name === card.name ? "hidden" : "flex"
                  }`}
                >
                  <Fade>
                    <Image
                      src={card.image}
                      alt=""
                      className="rounded-xl mb-2 w-full md:w-[265px] md:h-[372px] object-cover"
                    />
                  </Fade>
                  <h2 className="font-[TTChocolatesMedium] text-white font-semibold text-[clamp(8px,5.2vw,30px)] md:text-[clamp(10px,1.5vw,75px)] leading-[1.2] text-center">
                    {card.name}
                  </h2>
                  <h4 className="font-[TTChocolates] text-[#C2C2C2] text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-center">
                    {card.profile}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFacultyModal;
