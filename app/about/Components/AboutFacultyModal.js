import Image from "next/image";
import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { IoClose } from "react-icons/io5";

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
    <div className="w-screen md:w-full h-screen z-[9999] pointer-events-auto fixed top-0 left-0 bg-black overflow-y-scroll bg-opacity-40 backdrop-blur-sm flex items-start justify-start">
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
        <div className="px-10 py-16 ">
          <div className="flex gap-6 justify-between">
            <div className="">
              <p className="capitalize text-[#760135] text-[2.2rem] pb-1 font-semibold underline">
                {activeProfile?.name}
              </p>
              <p className="capitalize italic text-xl text-[#007A83] font-bold font-[rothwood]">
                {activeProfile?.profile}
              </p>
              <p className=" text-[#1b1b1b] text-wrap text-lg font-light mt-6">
                {activeProfile?.description}
              </p>
            </div>
            {activeProfile?.image && (
              <div className="bg-[#007a83] hidden md:block min-w-60 overflow-hidden w-60 min-h-[25rem] h-[25rem] rounded-xl shadow-2xl">
                <Image
                  src={activeProfile.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            )}
          </div>
          {activeProfile?.desc2 && (
            <p className=" text-[#1b1b1b] text-wrap text-lg font-light mt-6">
              {activeProfile.desc2}
            </p>
          )}
          <div className=" mt-8 flex flex-col gap-5">
            {activeProfile?.awards?.map((item, id) => (
              <p key={id} className="text-[#007A83] text-xl font-bold">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* related profiles */}
        <div className="bg-[#3D001B] px-12 py-10">
          <p className=" font-[CarotSlab] text-2xl text-[#fbfbfb] font-medium">
            Related Profiles
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-6 mt-14">
            {relatedProfiles?.map((card, groupIndex) => (
              <div
                key={groupIndex}
                onClick={() =>
                  handleProfileChange({
                    profile: card,
                    related: relatedProfiles,
                  })
                }
                className={`cursor-pointer flex-col max-w-[calc(33%-1.5rem)] items-center justify-center gap-5 ${
                  activeProfile.name === card.name ? "hidden" : "flex"
                }`}
              >
                <Fade>
                  <Image
                    src={card.image}
                    alt=""
                    className="rounded-3xl mb-2 w-full aspect-[2/3] object-cover"
                  />
                </Fade>
                <h2 className="font-[TTChocolatesBold] text-white font-semibold text-2xl text-center">
                  {card.name}
                </h2>
                <h4 className="font-[TTChocolates] text-[#C2C2C2] text-center">
                  {card.profile}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFacultyModal;
