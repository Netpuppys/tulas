"use client";
import Script from 'next/script';
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useContext } from "react";
import BannerImg from "../../public/blogs/blogBanner.webp";
import Blogs from "./Blogs";
import Footer from "@/component/Footer";
import background from "../../public/AboutDehradun/background.png";
import Image from "next/image";
import { UtmContext } from "@/component/utmParams";
import MegaMenu from '@/component/Navbar/MegaMenu';
import NewNavbar from '@/component/Navbar/NewNavbar';
import NewFooter from '@/component/NewFooter';

function Blog() {
  const { utmParams } = useContext(UtmContext);
  return (
    <>

        {/* <Navbar /> */}
        <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
        <Banner
          title={"Blogs"}
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
        <NewFooter />
      
    </>
  );
}

export default Blog;
