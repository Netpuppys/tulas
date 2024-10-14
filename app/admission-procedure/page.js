import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import background from "../../public/AboutDehradun/background.png";
import Footer from "@/component/Footer";
import Image from "next/image";

const title = (
  <>
    <span className="text-[#007A83]">ADMISSIONS</span>
  </>
);

function DegreeRequestForm() {
  return (
    <>
      <Navbar />
      <Banner
        image={BannerImg}
        title={title}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Education is not only a way of learning new things but also looking at the world differently. My 35 Years of Experience in Business, Social & Public space has enabled me to provide an ECO system that will help you make a correct decision in matters of careers & life."
        }
      />

      {/* Background and Form Button */}
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
        <div className="py-10 md:py-20">
          <div className="w-full items-center flex flex-col gap-8 justify-center">
            <h3 className="text-white font-[TTChocolatesBold] md:text-[40px] border-b-2 border-white">
              Admission Eligibility
            </h3>
            <button className="font-[TTChocolatesBold] mb-8 bg-white rounded-full text-[#760135] text-[18px] md:text-[24px] text-center items-center py-2 px-10 md:px-32">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-fit z-40">
        <Footer />
      </div>
    </>
  );
}

export default DegreeRequestForm;
