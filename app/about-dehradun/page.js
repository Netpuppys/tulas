import Banner from "@/component/Banner";
import React from "react";
import BannerImg from "../../public/Components/Banner/BannerImg.png";
import Navbar from "@/component/Navbar";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";
function Contact() {
  const gradient = "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 122, 131, 0.00) 0%, rgba(0, 122, 131, 0.76) 59.07%)"

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
      <div
        className="w-full h-[200vh] overflow-hidden image-gradient"
        // style={{
        //   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 122, 131, 0.00) 0%, rgba(0, 122, 131, 0.76) 59.07%), url(${background}) lightgray -243.692px 0px / 128.205% 106.526% no-repeat`,
        // }}
      >
        {/* <Image
          src={background}
          className="object-cover w-full h-full "
          alt=""
        /> */}
      </div>
      <div className="h-screen w-full text-[100px]">Harsh</div>
    </>
  );
}

export default Contact;
