import React from "react";
import love1 from "../../public/Homepage/LifeAtTulas/love1.png";
import placement1 from "../../public/Homepage/LifeAtTulas/placement1.png";
import event1 from "../../public/Homepage/LifeAtTulas/event1.png";
import celebrities1 from "../../public/Homepage/LifeAtTulas/celebrities1.png";
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
        image: love1,
      },
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
        image: love1,
      },
    ],
    [
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placement1,
      },
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placement1,
      },
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placement1,
      },
      {
        title: "Placements At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: placement1,
      },
    ],
    [
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: event1,
      },
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: event1,
      },
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: event1,
      },
      {
        title: "Events At TULA’s",
        description:
          "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust,",
        image: event1,
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
        image: celebrities1,
      },
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
        image: celebrities1,
      },
    ],
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center items-center">
      <div className="text-[#3A3A3A] w-fit pb-[3%] font-[CarotSlab] px-4 text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] leading-none">
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
                      <div className="text-white w-fit font-[TTChocolatesBold] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(10px,1.4vw,50px)] leading-tight">
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
