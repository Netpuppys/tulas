// components/ImageGallery.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

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
    <div className="w-full py-10 relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={false}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl overflow-hidden bg-white max-w-[85%] md:max-w-[60%] lg:max-w-[40%] shadow-lg slide-custom"
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

        /* Center slide — no clip */
        .swiper-slide.slide-custom.swiper-slide-active {
          clip-path: none !important;
          transform: scale(1);
          z-index: 2;
        }

        /* Left of center (prev) — left-slant clip */
        .swiper-slide.slide-custom.swiper-slide-prev {
          clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
          transform: scale(0.95);
        }

        /* Right of center (next) — right-slant clip */
        .swiper-slide.slide-custom.swiper-slide-next {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
          transform: scale(0.95);
        }

        /* All other slides (further away) — optional clip (if you want) */
        .swiper-slide.slide-custom:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) {
          clip-path: polygon(0 19%, 100% 0, 100% 100%, 0 82%;
          transform: scale(0.9);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
