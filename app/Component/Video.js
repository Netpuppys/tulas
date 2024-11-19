import React from "react";

function Video() {
  return (
    <div className="relative w-full pt-80">
      <div className="flex items-center w-full h-full justify-center">
        <div className="flex flex-col w-full px-5 md:px-0">
          {/* <h2 className="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            BEST ENGINEERING COLLEGE IN DEHRADUN
          </h2> */}
          <video
            autoPlay
            controls
            muted
            className="w-full aspect-[9/16] object-cover md:aspect-[12/4.8] md:w-[100%] mx-auto mb-4"
            src="https://res.cloudinary.com/dwdqs0osd/video/upload/v1723530948/Campus_Tour___Tula_s_Institute___Dehradun_safmr2.mp4"
          />

          <p className="text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] w-[90%] md:w-[60%] font-[TTChocolates] mx-auto text-justify md:text-center text-black py-8 md:py-20">
            <span className="font-medium text-[#007A83]">Tula's Institute</span>{" "}
            was established in 2006, under the aegis of Rishabh Educational
            Trust, Dehradun with the vision of offering excellent academics
            along with fostering the professional and personal personas of every
            student of the institute.
            <span className="font-medium text-[#007A83]">
              Tula's Institute
            </span>{" "}
            is dedicated to serve the communities by recognizing the diverse
            needs of individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
