import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FacultyDataLandingPage({ facultyData }) {
  return (
    <>
      <div
        className={`w-full justify-center gap-5 ${
          facultyData.length < 6 ? "hidden md:flex" : "hidden"
        }`}
      >
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="w-[calc(18.18%-20px)] flex justify-center"
          >
            <div
              className={`flex group relative flex-col w-full border border-[#323232] rounded-xl overflow-hidden items-start justify-center transition-all ease-in duration-300 ${
                faculty.linkTo ? "cursor-pointer" : ""
              }`}
            >
              <div className="w-full aspect-[0.75/1] h-full group-hover:opacity-0 flex flex-col justify-end items-center relative rounded-xl overflow-hidden transition-all ease-in duration-300">
                <Image
                  src={faculty.imageUrl}
                  alt=""
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="px-4 text-[#353535] py-4 flex group-hover:opacity-0 flex-col transition-all ease-in duration-300">
                <h3 className="text-[#007A83] font-[TTChocolatesMedium] leading-tight font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)]">
                  {faculty.name}
                </h3>
                {faculty.designation && (
                  <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                    {faculty.designation}
                  </p>
                )}
                {faculty.experience && (
                  <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                    {faculty.experience}+ years Experience
                  </p>
                )}
              </div>
              <div className="px-4 opacity-0 absolute pb-[40px] bg-[#007A83] w-full h-full text-white py-4 group-hover:opacity-100 flex flex-col justify-center gap-2 transition-all ease-in duration-300">
                <h3 className="text-white font-[TTChocolatesMedium] leading-tight font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] w-fit border-b border-white">
                  {faculty.name}
                </h3>
                {faculty.designation && (
                  <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                    <strong>Designation:- </strong> {faculty.designation}
                  </p>
                )}
                {faculty.education && (
                  <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                    <strong>Education:- </strong>
                    {faculty.education}
                  </p>
                )}
                {faculty.specialization && (
                  <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                    <strong>Specialization:- </strong>
                    {faculty.specialization}
                  </p>
                )}
                {faculty.publications && (
                  <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                    <strong>Publications:- </strong>
                    {faculty.publications}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`w-full ${
          facultyData.length <= 6 ? "flex md:hidden" : "flex"
        }`}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5.5 },
          }}
          className="w-full mySwiper"
        >
          {facultyData.map((faculty, index) => (
            <SwiperSlide key={index} className="w-full flex justify-center">
              <div
                className={`flex group relative flex-col w-full border border-[#323232] rounded-xl overflow-hidden items-start justify-center transition-all ease-in duration-300 ${
                  faculty.linkTo ? "cursor-pointer" : ""
                }`}
              >
                <div className="w-full aspect-[0.75/1] h-full group-hover:opacity-0 flex flex-col justify-end items-center relative rounded-xl overflow-hidden transition-all ease-in duration-300">
                  <Image
                    src={faculty.imageUrl}
                    alt=""
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 text-[#353535] py-4 flex group-hover:opacity-0 flex-col transition-all ease-in duration-300">
                  <h3 className="text-[#007A83] font-[TTChocolatesMedium] leading-tight font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)]">
                    {faculty.name}
                  </h3>
                  {faculty.designation && (
                    <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                      {faculty.designation}
                    </p>
                  )}
                  {faculty.experience && (
                    <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                      {faculty.experience}+ years Experience
                    </p>
                  )}
                </div>
                <div className="px-4 opacity-0 absolute pb-[40px] bg-[#007A83] w-full h-full text-white py-4 group-hover:opacity-100 flex flex-col justify-center gap-2 transition-all ease-in duration-300">
                  <h3 className="text-white font-[TTChocolatesMedium] leading-tight font-semibold text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] w-fit border-b border-white">
                    {faculty.name}
                  </h3>
                  {faculty.designation && (
                    <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                      <strong>Designation:- </strong> {faculty.designation}
                    </p>
                  )}
                  {faculty.education && (
                    <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                      <strong>Education:- </strong>
                      {faculty.education}
                    </p>
                  )}
                  {faculty.specialization && (
                    <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                      <strong>Specialization:- </strong>
                      {faculty.specialization}
                    </p>
                  )}
                  {faculty.publications && (
                    <p className="text-[clamp(10px,3vw,30px)] md:text-[clamp(10px,0.8vw,45px)]">
                      <strong>Publications:- </strong>
                      {faculty.publications}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default FacultyDataLandingPage;
