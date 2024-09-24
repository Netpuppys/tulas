import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import background from "../../public/alumni/background.png";
import React from "react";
import Testimonials from "../Component/Testimonials";
import Testimonial from "./testimonials/testimonial";
function AlumniTestimonials() {
  return (
    <div>
      <Navbar />
      <Banner
        title={
          <>
            ALUMNI <span className="text-[#007A83]">TESTIMONIALS</span>
          </>
        }
        image={BannerImg}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          <>
            We are thrilled to inform you that we have streamlined our  degree
            collection process for your convenience. You no longer need to make
            the journey back  to the institute to obtain your degree. Instead,
            we are now offering a hassle-free service where  your degree will be
            posted directly to your residence. All you need to do is pay a
            minimal  degree fee
          </>
        }
      />
      {/* fixed background */}
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
        <div className="py-10"><Testimonial/></div>
      </div>
      <div className="-mb-[6vh] bg-white py-10">
        <h3 className="text-[#007A83] text-[50px] text-center font-[TTChocolatesBold]">
          Videos Testimonials
        </h3>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default AlumniTestimonials;
