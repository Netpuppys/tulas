"use client";

import { FaPlay, FaPause } from "react-icons/fa";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from "react";
import { useMobile } from "@/component/IsMobileContext";
import { ThreeDots } from "react-loader-spinner";

const testimonials = [
  "https://assets.tulas.edu.in/testimonial1.mp4",
  "https://assets.tulas.edu.in/testimonial2.mp4",
  "https://assets.tulas.edu.in/testimonial3.mp4",
  "https://assets.tulas.edu.in/testimonial1.mp4",
  "https://assets.tulas.edu.in/testimonial2.mp4",
  "https://assets.tulas.edu.in/testimonial3.mp4",
];

const Testimonials = () => {
  const { isMobile } = useMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  const videoRefs = useRef([]);

  useEffect(() => {
    // Add event listeners to update isPlaying state when a video plays or pauses
    videoRefs.current.forEach((video) => {
      if (video) {
        video.addEventListener("play", () => setIsPlaying(true));
        video.addEventListener("pause", () => setIsPlaying(false));
      }
    });

    // Cleanup event listeners
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener("play", () => setIsPlaying(true));
          video.removeEventListener("pause", () => setIsPlaying(false));
        }
      });
    };
  }, [videoRefs]);

  const handlePlayToggle = () => {
    setIsPlaying((prev) => !prev);

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
      }
    });
  };

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
    videoRefs.current.forEach((video) => {
      if (video) video.muted = !isMuted;
    });
  };

  const handleBuffering = (isBuffering) => {
    setIsBuffering(isBuffering);
  };

  return (
    <div className="relative w-full pt-10 pb-[3.5%] md:pb-0 md:pt-[4%]">
      <div className="absolute bottom-5 w-full md:w-fit right-0 items-center justify-center md:right-5 z-50 flex gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayToggle}
          className="bg-[#007A83] border-2 border-[#007A83] md:hover:bg-white md:hover:text-[#007A83] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        {/* Mute/Unmute Button */}
        <button
          onClick={handleMuteToggle}
          className="bg-[#760135] border-2 border-[#760135] md:hover:bg-white md:hover:text-[#760135] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
        >
          {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <h3 className="text-[#2A2A2A] w-fit text-center font-[CarotSlab] align-baseline leading-[0.8] text-[clamp(30px,2.8vw,55px)]">
          Student Testimonials
          <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
        </h3>
      </div>

      <div className="w-full md:w-[80%] mx-auto h-fit flex items-center justify-center gap-10 md:px-[6%] py-6 md:py-[3.5%] relative">
        <button
          id="swiper-prev"
          onClick={() => setIsPlaying(false)}
          className="bg-transparent z-50 absolute top-1/2 -translate-y-1/2 left-0 md:left-10 p-2 rounded-full md:hover:bg-black md:hover:bg-opacity-80 text-5xl text-black md:hover:text-white text-opacity-80 flex items-center justify-center"
        >
          <HiOutlineChevronLeft />
        </button>

        <div className="w-[80%] h-full flex items-center justify-center px-8 md:px-0 relative">
          {isBuffering && (
            <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
              <ThreeDots color="#007A83" height={30} />
            </div>
          )}

          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => {
              const newIndex = swiper.realIndex;
              setActiveIndex(newIndex);

              // Pause all videos except the one at the current index
              videoRefs.current.forEach((video, index) => {
                if (video) {
                  if (index === newIndex && isPlaying) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              });
            }}
            navigation={{
              prevEl: "#swiper-prev",
              nextEl: "#swiper-next",
            }}
            modules={[Navigation]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`transition-transform duration-500 ${
                    activeIndex === index
                      ? "scale-100 blur-none"
                      : "scale-75 blur-sm"
                  }`}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={testimonial}
                    className="h-fit w-full aspect-[9/16]"
                    muted={isMuted}
                    loop
                    onWaiting={() => handleBuffering(true)}
                    onPlaying={() => handleBuffering(false)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          id="swiper-next"
          onClick={() => setIsPlaying(false)}
          className="bg-transparent z-50 absolute top-1/2 -translate-y-1/2 right-0 md:right-10 p-2 rounded-full md:hover:bg-black md:hover:bg-opacity-50 text-5xl text-black md:hover:text-white text-opacity-80 flex items-center justify-center"
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
