import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";

import iphoneFrame from "../../public/Homepage/Testimonials/iphoneFrame.png";
import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const carouselImages = [iphoneFrame, iphoneFrame, iphoneFrame];
const testimonials = [
  "https://tulasasset.s3.eu-north-1.amazonaws.com/testimonial1.mp4",
  "https://tulasasset.s3.eu-north-1.amazonaws.com/testimonial2.mp4",
  "https://tulasasset.s3.eu-north-1.amazonaws.com/testimonial3.mp4"
]

const Testimonials = () => {
  return (
    <>
    <h3 className="text-[#007A83] text-center uppercase font-[CarotSlab] align-baseline md:pt-20 leading-[0.8] text-[clamp(30px,2.8vw,55px)]">
       Video Testimonials
      </h3>
    <div className="w-full md:w-[80%] mx-auto h-fit flex items-center justify-center gap-10 md:px-40 md:py-20 relative">
      <button
        id="swiper-prev"
        className="bg-transparent z-50 absolute top-1/2 -translate-y-1/2 left-0 md:left-10 p-2 rounded-full hover:bg-black hover:bg-opacity-80 text-5xl text-black hover:text-white text-opacity-80 flex items-center justify-center"
      >
        <HiOutlineChevronLeft />
      </button>

      <div className="w-fit hidden md:flex z-10 items-center justify-start md:justify-center h-full">
        <div className="w-full md:h-[60%] md:scale-75 ">
          {/* <Image src={iphoneFrame} className="h-fit w-full" alt="" /> */}
          <video
            src={"https://tulasasset.s3.eu-north-1.amazonaws.com/testimonial1.mp4"}
            className="h-fit w-full aspect-[9/16] blur-[4px]"
            autoPlay={false}
            
            // controls={true}
          />
        </div>
        <div className="w-full md:h-[60%]  md:rounded-2xl overflow-hidden">
          {/* <Image src={iphoneFrame} className="h-fit w-full" alt="" /> */}
          <video
            src={"https://tulasasset.s3.eu-north-1.amazonaws.com/testimonial2.mp4"}
            className="h-fit w-full aspect-[9/16]"
            autoPlay={true}
            // controls={true}
          />
        </div>
        <div className="w-full md:h-[60%] md:scale-75">
          {/* <Image src={iphoneFrame} className="h-fit w-full" alt="" /> */}
          <video
            src={"https://tulasasset.s3.eu-north-1.amazonaws.com/testimonial3.mp4"}
            className="h-fit w-full aspect-[9/16] blur-[4px]"
            autoPlay={false}
            // controls={true}
          />
        </div>
      </div>

      <div className="w-full h-fit flex items-center justify-center md:hidden">
        {/* Swiper Carousel */}
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: "#swiper-prev",
            nextEl: "#swiper-next",
          }}
          modules={[Navigation]}
          className="w-full md:w-fit"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-screen md:h-[70%] rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  className="h-full w-full"
                  alt={`carousel-image-${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>

      <button
        id="swiper-next"
        className="bg-transparent z-50 absolute top-1/2 -translate-y-1/2 right-0 md:right-10 p-2 rounded-full hover:bg-black hover:bg-opacity-50 text-5xl text-black hover:text-white text-opacity-80 flex items-center justify-center"
      >
        <HiOutlineChevronRight />
      </button>

      {/* <div className="p-16 absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E69706]">
        <div className="w-40 md:w-[18rem] aspect-square rounded-full bg-[#007A83] shadow-2xl"></div>
      </div> */}
    </div></>
  );
};

export default Testimonials;
