"use client";
import React, { useEffect, useState } from "react";
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
import bannerImg from "../../public/ProminentPersonalities/bannerImg.webp";
import Footer from "@/component/Footer";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Navbar from "@/component/Navbar/Navbar";
import BannerProgram from "@/component/Programs/BannerProgram";
import { MdDateRange, MdLocationPin, MdTimer } from "react-icons/md";

function CareerAndSkillEvents() {
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
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);
  return (
    <>
      <Navbar />
      <BannerProgram
        image={bannerImg}
        title="Career and Skill Events at Tula's Institute"
      />
      <div className="w-full h-full pt-8 md:pt-[4%]">
        <div className="w-[calc(100%-2rem)] font-[TTChocolates] md:w-[90%] mx-auto">
          <div className="flex py-8 flex-wrap justify-center md:py-[3%] gap-4">
            {sports.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="flex w-full md:w-[calc(25%-1rem)] flex-col md:flex-row gap-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative p-2 overflow-hidden rounded-xl bg-[#007A83] w-full h-full mx-auto">
                    <div className="w-full h-full aspect-[2/1] flex flex-col justify-between">
                      <Image
                        src={item.image}
                        alt=""
                        priority
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedItem && (
        <div className="fixed z-20 w-full inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="p-5 w-[95%] md:w-[40%] mx-auto h-fit rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 bg-[#007a83] text-white aspect-square p-2 rounded-full"
              onClick={() => setSelectedItem(null)}
            >
              <IoClose />
            </button>
            <Image
              src={selectedItem.image}
              alt=""
              loading="lazy"
              placeholder="blur"
              className="w-full h-fit rounded"
            />
          </div>
        </div>
      )}
      <Footer color={true} />
    </>
  );
}

export default CareerAndSkillEvents;
