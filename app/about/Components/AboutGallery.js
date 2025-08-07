import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

function AboutGallery({ aboutimages }) {
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full md:w-[100%] overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={1}
        >
          {!isMobile &&
            // Desktop View: show 3 images in one slide
            aboutimages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center pt-4 md:py-[2%] h-full px-4 w-full md:w-[95%] md:px-0 gap-4 md:gap-12 mx-auto">
                  <div className="w-full md:w-[30%]">
                    <Image src={item.image} alt="" loading="lazy" />
                  </div>
                  <div className="w-full md:w-[40%]">
                    <Image src={item.image2} alt="" loading="lazy" />
                  </div>
                  <div className="w-full md:w-[30%]">
                    <Image src={item.image3} alt="" loading="lazy" />
                  </div>
                </div>
              </SwiperSlide>
            ))}

          {isMobile &&
            // Mobile View: each image is a separate slide
            aboutimages.flatMap((item, index) =>
              [item.image, item.image2, item.image3].map((img, i) => (
                <SwiperSlide key={`${index}-${i}`}>
                  <div className="w-full px-4">
                    <Image src={img} alt="" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))
            )}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutGallery;
