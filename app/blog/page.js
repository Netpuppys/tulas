"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useContext } from "react";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import Blogs from "./Blogs";
import Footer from "@/component/Footer";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";
import { UtmContext } from "@/component/utmParams";

function Blog() {
  const { utmParams } = useContext(UtmContext);
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
              <span className="text-[#007A83]">Blogs</span>
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
        <Blogs utmParams={utmParams} />
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
