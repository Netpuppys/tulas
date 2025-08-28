import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ✅ Import pagination CSS
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Import Pagination

function Leaders({ halltitle, features }) {
  const swiperRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(15px,6.3vw,55px)] md:text-[clamp(15px,2.3vw,55px)] text-[#991E55] leading-none z-10 font-bold uppercase tracking-tight font-serif">
        {halltitle}
      </div>

      <div className="w-full md:w-[85%] overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }} // ✅ Add pagination
          modules={[Autoplay, Pagination]} // ✅ Add module
          className="mySwiper"
          slidesPerView={1}
        >
          {!isMobile &&
            features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row pt-4 md:py-[2%] h-full px-4 w-full md:w-[100%] md:px-0 gap-4 md:gap-12 mx-auto">
                  <div className="w-full md:w-[50%]">
                    <Image
                      src={feature.image}
                      alt=""
                      loading="lazy"
                      className="rounded-xl md:rounded-2xl h-fit object-cover"
                    />
                  </div>
                  <div className="w-full md:w-[50%]">
                    <Image
                      src={feature.image2}
                      alt=""
                      loading="lazy"
                      className="rounded-xl md:rounded-3xl h-fit object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

          {isMobile &&
            features.flatMap((feature, index) =>
              [feature.image, feature.image2, feature.image3].map((img, i) => (
                <SwiperSlide key={`${index}-${i}`}>
                  <div className="w-full px-4 py-4">
                    <Image
                      src={img}
                      alt=""
                      loading="lazy"
                      className="rounded-xl h-fit object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))
            )}
        </Swiper>
      </div>

      {/* ✅ Pagination styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 20px;
          text-align: center;
        }

        .swiper-pagination-bullet {
          background: #991e55;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #991e55;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Leaders;
