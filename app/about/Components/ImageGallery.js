'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // ✅ Add this line

const images = [
  '/About/aboutgallery/newlat1.jpg',
  '/About/aboutgallery/newlat2.jpg',
  '/About/aboutgallery/newlat3.jpg',
  '/About/aboutgallery/newlat4.jpg',
  '/About/aboutgallery/newlat5.jpg',
  '/About/aboutgallery/newlat6.jpg',
  '/About/aboutgallery/newlat7.jpg',
  '/About/aboutgallery/newlat8.jpg',
];

export default function ImageGallery() {
  return (
    <div className="w-full py-7 relative">
      <div className="text-center pb-8 md:pt-[3%] px-4 text-wrap text-[clamp(15px,6.3vw,55px)] md:text-[clamp(15px,2.3vw,55px)] text-[#991E55] leading-none z-10 font-bold uppercase tracking-tight font-serif">
        #TulasVibes 
      </div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={false}
        pagination={{ clickable: true }} // ✅ Add this
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]} // ✅ Add Pagination
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="rounded-lg overflow-hidden bg-white max-w-[85%] md:max-w-[60%] lg:max-w-[40%] shadow-md slide-custom"
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 👇 Clipping styles */}
      <style jsx global>{`
        .swiper-slide.slide-custom {
          transition: clip-path 0.3s ease;
        }

        .swiper-slide.slide-custom.swiper-slide-active {
          clip-path: none !important;
          transform: scale(1);
          z-index: 2;
        }

        .swiper-slide.slide-custom.swiper-slide-prev {
          clip-path: polygon(0 0, 100% 8%, 100% 92%, 0% 100%);
          transform: scale(0.95);
        }

        .swiper-slide.slide-custom.swiper-slide-next {
          clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 92%);
          transform: scale(0.95);
        }

        .swiper-slide.slide-custom:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
          clip-path: polygon(0 19%, 100% 0, 100% 100%, 0 82%);
          transform: scale(0.9);
          opacity: 0.6;
        }

        /* Optional: Customize dot color and spacing */

        .swiper-pagination {
          position: relative; /* instead of absolute */
          margin-top: 20px; /* push dots down */
          text-align: center;
        }

        .swiper-pagination-bullet {
          background: #333;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
