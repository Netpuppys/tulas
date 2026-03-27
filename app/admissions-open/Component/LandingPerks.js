"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

function LandingPerks({ perksSlides = [] }) {
  const swiperRef = useRef();

  return (
    <section className="py-6 mb-5">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="w-full md:max-w-xl mx-auto">
          <h3 className="text-[clamp(38px,6vw,36px)] text-center font-extrabold mb-6">
            <span className="text-orange-500">Excellence</span>{" "}
            <span className="text-gray-800 font-extrabold">Redefined</span>
          </h3>
        </div>

        <Swiper
          ref={swiperRef}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          speed={1800}
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
        >
          {perksSlides.map((feature, index) => (
            <SwiperSlide key={index}>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="rounded-[28px] overflow-hidden">
                  <Image
                    src={feature.image2}
                    alt=""
                    width={800}
                    height={500}
                    className="w-full object-contain"
                  />
                </div>

                <div className="rounded-[28px] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt=""
                    width={800}
                    height={500}
                    className="w-full object-contain"
                  />
                </div>

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
