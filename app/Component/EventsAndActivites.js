import React, { useRef } from "react";
import AlumniInteractionSession from "../../public/Homepage/Events/AlumniInteractionSession.webp";
import AlumniInteractionSessionFalguniGupta from "../../public/Homepage/Events/AlumniInteractionSessionFalguniGupta.webp";
import AlumniInteractionSessionGSB from "../../public/Homepage/Events/AlumniInteractionSessionGSB.webp";
import AndroidAppDevelopment from "../../public/Homepage/Events/AndroidAppDevelopment.webp";
import BakeryTraining from "../../public/Homepage/Events/BakeryTraining.webp";
import CampusInternshipDrive from "../../public/Homepage/Events/CampusInternshipDrive.webp";
import CampusPlacementDrive24 from "../../public/Homepage/Events/CampusPlacementDrive24.webp";
import CampusPlacementDrive25 from "../../public/Homepage/Events/CampusPlacementDrive25.webp";
import CampusPlacementDrive26 from "../../public/Homepage/Events/CampusPlacementDrive26.webp";
import CampusPlacementDrive27 from "../../public/Homepage/Events/CampusPlacementDrive27.webp";
import CampusPlacementDrive38 from "../../public/Homepage/Events/CampusPlacementDrive38.webp";
import CampusPlacementDrive39 from "../../public/Homepage/Events/CampusPlacementDrive39.webp";
import CampusPlacementDrive40 from "../../public/Homepage/Events/CampusPlacementDrive40.webp";
import CampusPlacementDrive42 from "../../public/Homepage/Events/CampusPlacementDrive42.webp";
import CampusPlacementDrive43 from "../../public/Homepage/Events/CampusPlacementDrive43.webp";
import CertificationCourse from "../../public/Homepage/Events/CertificationCourse.webp";
import CertificationCourseAfterEffects from "../../public/Homepage/Events/CertificationCourseAfterEffects.webp";
import CertificationCourseECommerce from "../../public/Homepage/Events/CertificationCourseECommerce.webp";
import CertificationCourseOnBuildingEstimation from "../../public/Homepage/Events/CertificationCourseOnBuildingEstimation&Costing.webp";
import CertificationCourseOnCatiaSoftware from "../../public/Homepage/Events/CertificationCourseOnCatiaSoftware.webp";
import CertificationCourseOnDataAnalysis from "../../public/Homepage/Events/CertificationCourseOnDataAnalysis.webp";
import CertificationCourseOnDataAnalytics from "../../public/Homepage/Events/CertificationCourseOnDataAnalytics.webp";
import CertificationCourseOnMongoDB from "../../public/Homepage/Events/CertificationCourseOnMongoDB.webp";
import DataStructure from "../../public/Homepage/Events/DataStructure.webp";
import GuestLectureOnExploringCareerOpportunities from "../../public/Homepage/Events/GuestLectureOnExploringCareerOptions.webp";
import IndustrialVisit from "../../public/Homepage/Events/IndustrialVisit.webp";
import NurseryManagement from "../../public/Homepage/Events/NurseryManagement.webp";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
function EventsAndActivites() {
  const swiperRef = useRef();
  const sports = [
    {
      image: AlumniInteractionSession,
    },
    {
      image: AlumniInteractionSessionFalguniGupta,
    },
    {
      image: AlumniInteractionSessionGSB,
    },
    {
      image: AndroidAppDevelopment,
    },
    {
      image: BakeryTraining,
    },
    {
      image: CampusInternshipDrive,
    },
    {
      image: CampusPlacementDrive24,
    },
    {
      image: CampusPlacementDrive25,
    },
    {
      image: CampusPlacementDrive26,
    },
    {
      image: CampusPlacementDrive27,
    },
    {
      image: CampusPlacementDrive38,
    },
    {
      image: CampusPlacementDrive39,
    },
    {
      image: CampusPlacementDrive40,
    },
    {
      image: CampusPlacementDrive42,
    },
    {
      image: CampusPlacementDrive43,
    },
    {
      image: CertificationCourse,
    },
    {
      image: CertificationCourseAfterEffects,
    },
    {
      image: CertificationCourseECommerce,
    },
    {
      image: CertificationCourseOnBuildingEstimation,
    },
    {
      image: CertificationCourseOnCatiaSoftware,
    },
    {
      image: CertificationCourseOnDataAnalysis,
    },
    {
      image: CertificationCourseOnDataAnalytics,
    },
    {
      image: CertificationCourseOnMongoDB,
    },
    {
      image: DataStructure,
    },
    {
      image: GuestLectureOnExploringCareerOpportunities,
    },
    {
      image: IndustrialVisit,
    },
    {
      image: NurseryManagement,
    },
  ];

  return (
    <div className="flex bg-[#760135] mt-8 md:mt-[3%] flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-white w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Career & Skill Events at Tula's
        <div className="h-[4px] bg-white w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="py-6 flex md:hidden gap-2 md:py-[3%] w-[90%] overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          spaceBetween={20}
          className="mySwiper"
          slidesPerView={1}
        >
          {sports.map((sport, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative p-2 overflow-hidden rounded-xl bg-white w-full h-full mx-auto">
                  <div className="w-full h-full aspect-[2/1] flex flex-col justify-between">
                    <Image
                      src={sport.image}
                      alt=""
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="py-6 hidden md:flex gap-2 md:py-[3%] w-[90%] overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          spaceBetween={20}
          className="mySwiper"
          slidesPerView={4}
        >
          {sports.map((sport, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative p-2 overflow-hidden rounded-xl bg-white w-full h-full mx-auto">
                  <div className="w-full h-full aspect-[2/1] flex flex-col justify-between">
                    <Image
                      src={sport.image}
                      alt=""
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        onClick={() => (window.location.href = "/career-and-skill-events")}
        className="px-10 mb-6 md:mb-[3%] flex items-center bg-[#007A83] font-[TTChocolatesMedium] rounded-full py-1 md:py-2 text-[15px] md:text-[20px] justify-center gap-14 hover:bg-white hover:shadow-lg hover:text-[#007A83] transition-all duration-300 ease-in-out"
      >
        See More Career & Skill Events
      </button>
    </div>
  );
}

export default EventsAndActivites;
