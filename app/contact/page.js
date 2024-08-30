import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import React from "react";
import BannerImg from "../../public/Components/Banner/BannerImg.png";

const title = <>
    CONTACT{" "}<span className="text-[#007A83]">US</span>
  </>

function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        image={BannerImg}
        title={title}
        description={"Tula’s Institute is dedicated to serve the community by recognizing the diverse needs of the individuals. We encourage personal and professional development through respect, appreciation and a commitment to general education, as a foundation for life-long learning. Tula’s Institute is the Ranked as No. 9 College in the North India"}
        belowTitle={"CONTACT US"}
        belowPara={"Being the capital city, Dehradun is well-connected by roads, rail and air and is easily accessible from most parts of the country. It is 235 km away from India’s capital, New Delhi. Dehradun is easy to reach and an accessible destination that you can visit any time of the year."}
      />
      <div className="w-full">
        
      </div>
    </>
  );
}

export default Contact;
