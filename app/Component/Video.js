import React from "react";
import dynamic from "next/dynamic";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Video() {
  return (
    <div className="relative w-full">
      <div className="flex items-center w-full h-full justify-center">
        <div className="flex flex-col w-full px-5 md:px-0">
          <video
            autoPlay
            controls
            muted
            className="w-full h-full hidden md:block mx-auto"
            src="https://assets.tulas.edu.in/tulasDesktop.mp4"
          />
          <video
            autoPlay
            controls
            muted
            className="w-full h-full md:hidden mx-auto"
            src="https://assets.tulas.edu.in/tulasMobile.mp4"
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
