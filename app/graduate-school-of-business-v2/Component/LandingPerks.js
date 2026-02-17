import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function LandingPerks({ perksSlides = [] }) {
  const swiperRef = useRef();

  return (
    <section className="bg-[#fbf4ee] py-6 mb-10">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          ref={swiperRef}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1}
        >
          {perksSlides.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 relative z-10">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <h2 className="text-xl md:text-xl tracking-wide text-[#1a1a1a]">
                    WHY CHOOSE MBA AT TULA'S
                </h2>
                </div>
                {/* IMAGE 1 */}
                <div className="bg-[#e1e1e1] rounded-[28px] overflow-hidden flex justify-end">
                  <Image
                    src={feature.image}
                    alt=""
                    className="w-full md:w-[70%] object-contain"
                  />
                </div>

                {/* IMAGE 2 */}
                <div className="bg-[#e1e1e1] rounded-[28px] overflow-hidden flex justify-end">
                  <Image
                    src={feature.image2}
                    alt=""
                    className="w-full md:w-[70%] object-contain"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LandingPerks;
