import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import Blogs from "./Blogs";
import Footer from "@/component/Footer";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";

function Blog() {
  return (
    <>
      <head>
        <title>
          Blog | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Stay updated with the latest insights, news, and academic advancements at Tula's Institute, the best engineering college in Dehradun, Uttarakhand. Explore articles on engineering, technology, student life, career tips, and more from our expert faculty and students."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          title={
            <>
              Our <span className="text-[#007A83]">Blog</span>
            </>
          }
          image={BannerImg}
          description={<></>}
          belowTitle={<></>}
          belowPara={
            <>
              Education is not only a way of learning new things but also
              looking at the world differently. My 35 Years of Experience in
              Business, Social & Public space has enabled me to provide an ECO
              system that will help you make a correct decision in matters of
              careers & life.
            </>
          }
        />
        <Blogs />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default Blog;
