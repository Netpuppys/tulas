import React from "react";
import love1 from "../../public/Homepage/LifeAtTulas/love1.webp";
import love2 from "../../public/Homepage/LifeAtTulas/love2.webp";
import love3 from "../../public/Homepage/LifeAtTulas/love3.webp";
import love4 from "../../public/Homepage/LifeAtTulas/love4.webp";
import placements1 from "../../public/Homepage/LifeAtTulas/placements1.webp";
import placements2 from "../../public/Homepage/LifeAtTulas/placements2.webp";
import placements3 from "../../public/Homepage/LifeAtTulas/placements3.webp";
import placements4 from "../../public/Homepage/LifeAtTulas/placements4.webp";
import events1 from "../../public/Homepage/LifeAtTulas/events1.webp";
import events2 from "../../public/Homepage/LifeAtTulas/events2.webp";
import events3 from "../../public/Homepage/LifeAtTulas/events3.webp";
import events4 from "../../public/Homepage/LifeAtTulas/events4.webp";
import celebrities1 from "../../public/Homepage/LifeAtTulas/celebrities1.webp";
import celebrities2 from "../../public/Homepage/LifeAtTulas/celebrities2.webp";
import celebrities3 from "../../public/Homepage/LifeAtTulas/celebrities3.webp";
import celebrities4 from "../../public/Homepage/LifeAtTulas/celebrities4.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

function LifeAtTulas() {
  const swiper = [
    [
      {
        title: "I Love TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love1,
      },
      {
        title: "I Love TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love2,
      },
      {
        title: "I Love TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love3,
      },
      {
        title: "I Love TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: love4,
      },
    ],
    [
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements1,
      },
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements2,
      },
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements3,
      },
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placements4,
      },
    ],
    [
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events1,
      },
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events2,
      },
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events3,
      },
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: events4,
      },
    ],
    [
      {
        title: "Celebrities At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities1,
      },
      {
        title: "Celebrities At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities2,
      },
      {
        title: "Celebrities At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities3,
      },
      {
        title: "Celebrities At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, ",
        image: celebrities4,
      },
    ],
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center items-center">
      <div className="text-[#3A3A3A] w-fit pb-[3%] font-[CarotSlab] px-4 text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] leading-none">
        Life At Tulas
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="w-[85%] mx-auto pb-[5%] flex flex-wrap gap-1 justify-center">
        {swiper.map((slides, index) => (
          <div
            className={`aspect-[1.5/1] md:aspect-auto ${
              index === 0 || index === 3
                ? "w-full md:w-[calc(45%-4px)]"
                : "w-full md:w-[calc(55%-4px)]"
            }`}
          >
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              modules={[Autoplay]}
              className="w-full h-full mySwiper"
              slidesPerView={1}
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full">
                    <Image
                      src={slide.image}
                      alt=""
                      className="w-full -z-10 h-full object-cover"
                    />
                    <div className="absolute z-20 left-[5%] top-[6%]">
                      <div className="text-white w-fit font-[TTChocolatesMedium] text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.4vw,50px)] leading-tight">
                        {slide.title}
                        <div className="h-[2px] bg-[#E69706] w-[50%] rounded-full"></div>
                      </div>
                      <h3 className="text-[clamp(8px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)] md:max-w-[60%]">
                        {slide.description}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeAtTulas;
