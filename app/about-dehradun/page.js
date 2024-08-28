import Banner from "@/component/Banner";
import React from "react";
import BannerImg from "../../public/Components/Banner/BannerImg.png";
import Navbar from "@/component/Navbar";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";
function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        image={BannerImg}
        title={
          <>
            <span className="text-[#007A83]">ABOUT</span>
            <br />
            DEHRADUN, <span className="text-[#007A83]">UTTARAKHAND</span>
          </>
        }
        description={
          "Uttarakhand has many historical temples with mythical tales and it is also a gateway to some of the most popular hill stations in the country like Mussoorie and Nainital. Apart from this, India’s most holy pilgrimage sites such as Haridwar and Rishikesh are also an hour’s drive away from Dehradun. Dehradun is also home to some renowned and important establishments like the ONGC, Survey of India, the IMA, Forest Research Institute etc."
        }
        belowTitle={"HOW TO REACH DEHRADUN"}
        belowPara={
          "Being the capital city, Dehradun is well-connected by roads, rail and air and is easily accessible from most parts of the country. It is 235 km away from India’s capital, New Delhi. Dehradun is easy to reach and an accessible destination that you can visit any time of the year."
        }
      />
      <div className="w-full h-screen overflow-hidden">
        <Image
          src={background}
          className="w-full h-full z-0 fixed object-cover"
          alt=""
        />
      </div>
      <div className="h-screen w-full  text-[100px]">Harsh</div>
    </>
  );
}

export default Contact;
