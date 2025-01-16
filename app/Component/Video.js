import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Video() {
  return (
    <div className="relative w-full">
      <div className="flex items-center w-full h-full justify-center">
        <div className="flex flex-col w-full px-5 md:px-0">
          {/* <h2 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            BEST ENGINEERING COLLEGE IN DEHRADUN
          </h2> */}
          <p className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] w-[90%] md:w-[60%] font-[TTChocolates] mx-auto md:text-center text-black py-8 md:py-20">
            Tula’s Institute isn’t just about books and exams—it’s a launchpad
            for your entire future. Here, it’s all about shaping you into a
            well-rounded individual, blending top-tier education with real-world
            experiences. From leadership workshops and hands-on projects to
            sports and cultural events, Tula’s ensures that every student is
            equipped to thrive beyond the classroom. You won’t just graduate
            with a degree; you’ll leave as a confident, capable individual,
            ready to make a mark in the world with a unique blend of skills,
            values, and experiences that set you apart.
          </p>
          {/* <div className="w-full aspect-[9/16] object-cover md:aspect-[12/4.8] mx-auto mb-4">
            <Image
              src={videoTest}
              alt=""
              className="w-full h-full object-cover"
            />
          </div> */}
          {/* <ReactPlayer
              url={
                "https://assets.tulas.edu.in/Campus_Tour___Tula_s_Institute___Dehradun_safmr2%20(1).mp4"
              }
              playing
              muted
              className="w-full h-full object-cover"
              loop
              width="100%"
              height="100%"
              playsinline
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    muted: true,
                    playsInline: true,
                  },
                },
              }}
            /> */}
          <video
            autoPlay
            controls
            muted
            className="w-full aspect-[9/16] object-cover md:aspect-[12/4.8] md:w-[100%] mx-auto mb-4"
            src="https://assets.tulas.edu.in/Campus_Tour___Tula_s_Institute___Dehradun_safmr2%20(1).mp4"
          />

          <p className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] w-[90%] md:w-[60%] font-[TTChocolates] mx-auto md:text-center text-black py-8 md:py-20">
            At our institution, versatility is at the heart of our academic
            offerings. Whatever be your ambition, we have a path to match! For
            those passionate about technology, we offer{" "}
            <strong className="text-[#007A83]">
              BCA and MCA in Computer Applications.{" "}
            </strong>
            Engineering enthusiasts can choose from{" "}
            <strong className="text-[#007A83]">
              B.Tech, M.Tech, and Diploma programs{" "}
            </strong>
            across various disciplines. If you’re business-inclined or have a
            knack for leadership, our{" "}
            <strong className="text-[#007A83]">
              MBA, BBA, and B.Com (Hons) programs{" "}
            </strong>{" "}
            are designed for you. Aspiring agriculturalists can explore
            opportunities with{" "}
            <strong className="text-[#007A83]">
              B.Sc (Hons) Agriculture,{" "}
            </strong>
            while creative minds can pursue their calling through our{" "}
            <strong className="text-[#007A83]">
              Mass Communication course (BAJMC).
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
