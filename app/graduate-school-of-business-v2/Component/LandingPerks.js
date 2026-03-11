import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function LandingPerks({ perksSlides = [] }) {
  const swiperRef = useRef();

  return (
    <section className="py-6 mb-5">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="w-full md:max-w-xl mx-auto">
          <h3 className="text-[clamp(28px,6vw,36px)] text-center font-medium mb-6">
            <span className="text-orange-500">Excellence</span>{" "}
            <span className="text-gray-800 font-light">Redefined</span>
          </h3>
        </div>

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

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* IMAGE 1 */}
                <div className="rounded-[28px] overflow-hidden">
                  <Image
                    src={feature.image2}
                    alt=""
                    width={800}
                    height={500}
                    className="w-full object-contain"
                  />
                </div>

                {/* IMAGE 2 */}
                <div className="rounded-[28px] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt=""
                    width={800}
                    height={500}
                    className="w-full object-contain"
                  />
                </div>

                {/* IMAGE 3 */}
                {feature.image3 && (
                  <div className="rounded-[28px] overflow-hidden">
                    <Image
                      src={feature.image3}
                      alt=""
                      width={800}
                      height={500}
                      className="w-full object-contain"
                    />
                  </div>
                )}

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default LandingPerks;