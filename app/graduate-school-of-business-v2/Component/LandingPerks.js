import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function LandingPerks({ perksSlides = [] }) {
  const swiperRef = useRef();

  return (
    <section className=" py-6 mb-5">
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
              <div className="flex flex-col gap-1">
              {/* Heading */}
      <div className="px-2 md:px-12 max-w-4xl">
        <h3 className="text-[clamp(28px,6vw,36px)] text-center font-medium mb-3">
          <span className="text-orange-500">Excellence</span>{" "}
          <span className="text-gray-800 font-light">Redefined</span>
        </h3>
      </div>
                {/* IMAGE 1 */}
                <div className="rounded-[28px] overflow-hidden flex justify-end">
                  <Image
                    src={feature.image2}
                    alt=""
                    className="w-full md:w-[70%] object-contain"
                  />
                </div>

                {/* IMAGE 2 */}
                <div className="rounded-[28px] overflow-hidden flex justify-end">
                  <Image
                    src={feature.image}
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
