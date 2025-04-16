import React, { useRef } from "react";
import AlumniInteractionSession from "../../public/Homepage/LatestNews/AlumniInteractionSession.webp";
import AlumniInteractionSessionCSE from "../../public/Homepage/LatestNews/AlumniInteractionSessionCSE.webp";
import AWSCloudPractitioner from "../../public/Homepage/LatestNews/AWSCloudPractiioner.webp";
import CLEANLINESSDRIVESantalaDevi from "../../public/Homepage/LatestNews/CLEANLINESS DRIVE (Santala Devi).webp";
import CleanlinessDrive from "../../public/Homepage/LatestNews/CleanlinessDrive.webp";
import CleanlinessDriveRishikesh from "../../public/Homepage/LatestNews/CleanlinessDriveRishikesh.webp";
import EventBannersTiMarch from "../../public/Homepage/LatestNews/EventBannersTiMarch.webp";
import FalguniGupta from "../../public/Homepage/LatestNews/FalguniGupta.webp";
import FarmersIncomeAndIndianAgriculture from "../../public/Homepage/LatestNews/FarmersIncomeAndIndianAgriculture.webp";
import FiringPractice from "../../public/Homepage/LatestNews/FiringPractice.webp";
import Hackathon from "../../public/Homepage/LatestNews/Hackathon.webp";
import HimalayaWellness from "../../public/Homepage/LatestNews/HimalayaWellness.webp";
import IndustrialVisitToVigyanDham from "../../public/Homepage/LatestNews/IndustrialVisitToVigyanDham.webp";
import InternationalWomenDay from "../../public/Homepage/LatestNews/InternationalWomenDay.webp";
import JuniorBrainBattle from "../../public/Homepage/LatestNews/JuniorBrainBattle.webp";
import OpenMicCompetition from "../../public/Homepage/LatestNews/OpenMicCompetiton.webp";
import SaraSaePvtLtd from "../../public/Homepage/LatestNews/SaraSaePvtLtd.webp";
import SarikaPanchhi from "../../public/Homepage/LatestNews/SarikaPanchhi.webp";
import StrenthingRuralWomen from "../../public/Homepage/LatestNews/StrenthningRuralWomen.webp";
import Techthone from "../../public/Homepage/LatestNews/Techthone.webp";
import TenderingInCivilEngineering from "../../public/Homepage/LatestNews/TenderingInCivilEngineering.webp";
import WorkshopOnEngineOverhaulingME from "../../public/Homepage/LatestNews/WorkshopOnEnginerOverhaulingME.webp";
import WorkshopOnElectricVehicles from "../../public/Homepage/LatestNews/WorkshopOnElectricVehicles.webp";
import WorkshopOnSpirituality from "../../public/Homepage/LatestNews/WorkshopOnSprituality.webp";
import WorldHealthDay from "../../public/Homepage/LatestNews/WorldHealthDay.webp";
import WorldHealthDayJuhi from "../../public/Homepage/LatestNews/WorldHealthDayJuhi.webp";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { MdDateRange, MdLocationPin, MdTimer } from "react-icons/md";
function StatsAndNews() {
  const swiperRef = useRef();
  const sports = [
    {
      image: WorldHealthDay,
      name: "Internal Complaint Committee (ICC) is organizing an event on World Health Day by Dr. Neha Mahajan",
      date: "07-Apr-2025",
      time: "11:00 am Onwards",
      location: "Auditorium, Tula's Institute",
    },
    {
      image: SaraSaePvtLtd,
      name: "Department of Mechanical Engineering is organizing an industrial visit to Sara Sae Pvt Ltd",
      date: "07-Apr-2025",
      time: "11:00 am Onwards",
      location: "A1 & 2, Sara Industrial Estate, Dehradun",
    },
    {
      image: WorldHealthDayJuhi,
      name: "Internal Complaint Committee (ICC) is organizing an event on World Health Day by Dr. Juhi Garg",
      date: "07-Apr-2025",
      time: "11:00 am Onwards",
      location: "Auditorium, Tula's Institute",
    },
    {
      image: TenderingInCivilEngineering,
      name: "Department of Civil Engineering is organizing an Expert talk on tranding in Civil Engineering",
      date: "04-Apr-2025",
      time: "10:00 am Onwards",
      location: "Seminar Hall (I301), Tula's Institute",
    },
    {
      image: WorkshopOnElectricVehicles,
      name: "Department of Electrical and Electronics Engineering  & Electronics and Communication Engineering are organizing in-house workshop on Mathemiatical Modelling of the Electric Vehicles",
      date: "02-Apr-2025",
      time: "09:40 am Onwards",
      location: "E-Block, Tula's Institute",
    },
    {
      image: FarmersIncomeAndIndianAgriculture,
      name: "Graduate School of Business is organizing guest Lecture on The Contribution of Livestock Farming to improving Farmer's Income and Indian Agriculture",
      date: "02-Apr-2025",
      time: "10:00 am - 12:30 pm",
      location: "Auditorium, Tula's Institute",
    },
    {
      image: EventBannersTiMarch,
      name: "Graduate School of Business is organizing Add-On Certification course on Data Analytics using different Data Set",
      date: "28-Mar - 07-Apr-2025",
      time: "10:00 am Onwards",
      location: "Lab-4, Tula's Institute",
    },
    {
      image: CleanlinessDriveRishikesh,
      name: "Department of Agriculture is organizing Cleanliness Drive Go green, There is no Planet B",
      date: "26-Mar-2025",
      time: "09:30 am - 05:00 pm",
      location: "Rishikesh, Uttarakhand",
    },
    {
      image: Hackathon,
      name: "Department of Computer Science & Engineering is organizing 12 hours Hackathon on Hack the Future 1.0",
      date: "26-Mar-2025",
      time: "10:00 pm - 11:00 am",
      location: "Lab- 2, 3 & 5, Tula's Institute",
    },
    {
      image: AWSCloudPractitioner,
      name: "Department of Computer Application & Department of Computer Science & Engineering are organizing Add-on Certification on AWS Cloud Practitioner",
      date: "25-Mar - 5th-Apr-2025",
      time: "10:00 am - 04:00 pm",
      location: "C-Block, Seminar Hall",
    },
    {
      image: CLEANLINESSDRIVESantalaDevi,
      name: "Department of Agriculture is organizing Cleanliness Drive Go green, There is no Planet B",
      date: "25-Mar-2025",
      time: "09:30 am - 05:00 pm",
      location: "Santala Devi Temple, Dehradun",
    },
    {
      image: AlumniInteractionSessionCSE,
      name: "Department of Computer Science & Engineering is organizing a session on Alumni Interaction",
      date: "22-Mar-2025",
      time: "10:30 am - 12:30 pm",
      location: "Google Meet",
    },
    {
      image: InternationalWomenDay,
      name: "Internal Complaint Committee (ICC) is Organizing Event on International Women's Day",
      date: "07-Mar-2025",
      time: "11:00 am Onwards",
      location: "Auditorium, Tula's Institute",
    },
    {
      image: Techthone,
      name: "Department of Applied Sciences & Humanities is organizing an event on Tech-thon",
      date: "28-Feb-2025",
      time: "01:00 pm Onwards",
      location: "New Seminar Hall, C-Block",
    },
    {
      image: StrenthingRuralWomen,
      name: "Tula's Institute is Organizing Hands on Training Programme on Strengthening Rural Women through Jute Bag Making",
      date: "24-Feb - 25-Feb-2025",
      time: "10:00 am - 04:00 pm",
      location: "TRC Lab",
    },
    {
      image: OpenMicCompetition,
      name: "International Complaint Committee (ICC) is organizing Open Mic Competition on Voices for Equality: Accelerating Change Together",
      date: "24-Feb-2025",
      time: "02:00 pm Onwards",
      location: "New Seminar Hall (C-Block), Tula's Institute",
    },
    {
      image: FiringPractice,
      name: "Firing Practice Organizing by 29UKBN Dehradun",
      date: "23-Feb-2025",
      time: "02:30 pm - 05:00 pm",
      location: "Dav Inter College, Dehradun",
    },
    {
      image: CleanlinessDrive,
      name: "Department of Agriculture is organizing Cleanliness Drive",
      date: "14-Feb-2025",
      time: "10:00 am",
      location: "Dhoolkot Village, Selaqui, Dehradun",
    },
    {
      image: AlumniInteractionSession,
      name: "Department of Mechanical Engineering is organizing an Alumni Interaction Session on Skills Required in Industry",
      date: "11-Feb-2025",
      time: "01:45 pm Onwards",
      location: "Seminar Hall, C-Block",
    },
    {
      image: SarikaPanchhi,
      name: "Graduate School of Business in Collaboration with Tula's Technology and Business Incubator is organizing InspireX",
      date: "08-Feb-2025",
      time: "11:00 am - 12:30 pm",
      location: "Old Seminar Hall, Tula's Institute",
    },
    {
      image: WorkshopOnEngineOverhaulingME,
      name: "Department of Mechanical Engineering is organizing a workshop on Engine Overhauling",
      date: "04-Feb-2025",
      time: "10:00 am Onwards",
      location: "Hirday Motors, 15-B Rajpur Road, Dehradun",
    },
    {
      image: JuniorBrainBattle,
      name: "Junior Brain Battle is organizing by NSS Unit, Tula's Institute",
      date: "04-Feb-2025",
      time: "01:00 pm - 04:00 pm",
      location: "Primary School, Bayakhala, Saharpur, Dehradun",
    },
    {
      image: FalguniGupta,
      name: "Graduate School of Business is organizing Guest Lecture on Binding the Gap",
      date: "27-Jan-2025",
      time: "10:00 am Onwards",
    },
    {
      image: IndustrialVisitToVigyanDham,
      name: "Department of Computer Applications Industrial Visit to Vigyan Dham",
    },
    {
      image: WorkshopOnSpirituality,
      name: "ISTD Dehradun Chapter & Dehradun Management Association invite you to a workshop on Spirituality & Governance",
      date: "25-Jan-2025",
      time: "12:30 pm Onwards",
    },
    {
      image: HimalayaWellness,
      name: "Graduate School of Business is organizing industrial visit to Himalaya Wellness, Company, Dehradun",
      date: "21-Jan-2024",
      time: "09:30 am Onwards",
    },
  ];

  return (
    <div className="flex bg-[#760135] mt-8 md:mt-[3%] flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-white w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Latest News & Updates
        <div className="h-[4px] bg-white w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="pt-6 flex md:hidden gap-2 md:pt-[3%] w-[90%] overflow-hidden">
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
                      priority
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div className="p-[3%] w-full h-full">
                    <h2 className="text-[clamp(10px,4vw,50px)] line-clamp-2 text-wrap md:text-[clamp(10px,1vw,50px)] text-[#353535] font-[TTChocolates] leading-tight font-extrabold">
                      {sport.name}
                    </h2>
                    <div className="flex gap-2 items-center">
                      <h2
                        className={`${
                          sport.date ? "opacity-100" : "opacity-0"
                        } mt-2 flex items-center gap-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                      >
                        <MdDateRange /> {sport.date}
                      </h2>

                      <h2
                        className={`${
                          sport.time ? "opacity-100" : "opacity-0"
                        } mt-2 flex items-center gap-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                      >
                        <MdTimer /> {sport.time}
                      </h2>
                    </div>
                    <h2
                      className={`${
                        sport.location ? "opacity-100" : "opacity-0"
                      } mt-2 flex items-center gap-1 line-clamp-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                    >
                      <MdLocationPin /> {sport.location}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pt-6 hidden md:flex gap-2 md:pt-[3%] w-[90%] overflow-hidden">
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
                      priority
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div className="p-[3%] w-full h-full">
                    <h2 className="text-[clamp(10px,4vw,50px)] line-clamp-2 text-wrap md:text-[clamp(10px,1vw,50px)] text-[#353535] font-[TTChocolates] leading-tight font-extrabold">
                      {sport.name}
                    </h2>
                    <div className="flex gap-2 items-center">
                      <h2
                        className={`${
                          sport.date ? "opacity-100" : "opacity-0"
                        } mt-2 flex items-center gap-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                      >
                        <MdDateRange /> {sport.date}
                      </h2>

                      <h2
                        className={`${
                          sport.time ? "opacity-100" : "opacity-0"
                        } mt-2 flex items-center gap-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                      >
                        <MdTimer /> {sport.time}
                      </h2>
                    </div>
                    <h2
                      className={`${
                        sport.location ? "opacity-100" : "opacity-0"
                      } mt-2 flex items-center gap-1 line-clamp-1 text-[clamp(10px,3.6vw,50px)] text-wrap md:text-[clamp(10px,0.85vw,50px)] text-[#4b4b4b] font-[TTChocolates] leading-tight font-extrabold`}
                    >
                      <MdLocationPin /> {sport.location}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        onClick={() => (window.location.href = "/latest-news")}
        className="mt-3 md:mt-[3%] px-10 mb-6 md:mb-[3%] flex items-center bg-[#007A83] font-[TTChocolatesMedium] rounded-full py-1 md:py-2 text-[15px] md:text-[20px] justify-center gap-14 hover:bg-white hover:shadow-lg hover:text-[#007A83] transition-all duration-300 ease-in-out"
      >
        See More News & Updates
      </button>
    </div>
  );
}

export default StatsAndNews;
