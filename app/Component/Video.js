import React from "react";

function Video() {
  return (
    <div class="relative w-full py-8 md:py-10">
      <div class="flex items-center w-full h-full justify-center">
        <div class="flex flex-col w-full">
          <h2 class="text-[30px] md:text-[42px] text-center w-full font-[CarotSlab] text-[#007A83] mb-4">
            BEST ENGINEERING COLLEGE IN DEHRADUN
          </h2>
          <video
            autoPlay
            controls
            muted
            className="w-full aspect-[9/16] object-cover md:aspect-video md:w-[60%]  mx-auto mb-4"
            src="https://res.cloudinary.com/dwdqs0osd/video/upload/v1723530948/Campus_Tour___Tula_s_Institute___Dehradun_safmr2.mp4"
          />

          <p class="text-lg md:text-2xl w-[90%] md:w-[60%] font-[TTChocolates] mx-auto text-center text-black">
            <span class="font-medium text-[#007A83]">Tula's Institute</span> was
            established in 2006, under the aegis of Rishabh Educational Trust,
            Dehradun with the vision of offering excellent academics along with
            fostering the professional and personal personas of every student of
            the institute.
            <span class="font-medium text-[#007A83]">Tula's Institute</span> is
            dedicated to serve the communities by recognizing the diverse needs
            of individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
