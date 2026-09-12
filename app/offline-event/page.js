"use client";

import React from "react";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import Footer from "@/component/Footer";
import HomeMainBanner from "../newhome-components/HomeMainBanner";
import HomePerks from "../newhome-components/HomePerks";
import HomeAlumniSuccessStories from "../newhome-components/HomeAlumniSuccessStories";
import HomeProgramsSection from "../newhome-components/HomeProgramsSection";
import HomeScholarship from "../newhome-components/HomeScholarship";
import HomeVirtual from "../newhome-components/HomeVirtual";
import VirtualTour from "../Component/VirtualTour";

import desktopbanner from "../../public/Homepage/BannerHome/nbabanner.png";
import desktopbanner1 from "../../public/Homepage/BannerHome/newbanner.jpg";
import mobilebanner from "../../public/Homepage/BannerHome/nbamobile.jpeg";
import mobilebanner1 from "../../public/Homepage/BannerHome/newbannermobile.jpg";
import desktopbanner3 from "../../public/Homepage/BannerHome/newbanner2.webp";
import mobilebanner3 from "../../public/Homepage/BannerHome/newbannermobile2.webp";
import desktopbanner4 from "../../public/Homepage/BannerHome/ranking-desktop.jpg";
import mobilebanner4 from "../../public/Homepage/BannerHome/ranking-mobile.jpg";
import desktopbanner5 from "../../public/Homepage/BannerHome/learn-desktop.jpg";
import mobilebanner5 from "../../public/Homepage/BannerHome/learn-mobile.jpg";

function OfflineEvent() {
  const bannerImagesDesktop = [
    desktopbanner4,
    desktopbanner5,
    desktopbanner,
    desktopbanner1,
    desktopbanner3,
  ];
  const bannerImagesMobile = [
    mobilebanner4,
    mobilebanner5,
    mobilebanner,
    mobilebanner1,
    mobilebanner3,
  ];

  return (
    <>
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      <div className="block md:hidden">
        <NewNavbar fullBanner={true} />
      </div>

      <div className="hidden md:block">
        <HomeMainBanner bannerImages={bannerImagesDesktop} scrollButton={true} />
      </div>
      <div className="block md:hidden">
        <HomeMainBanner bannerImages={bannerImagesMobile} scrollButton={true} />
      </div>

      <HomePerks />

      <HomeAlumniSuccessStories />

      <HomeProgramsSection />

      <HomeScholarship />

      <HomeVirtual />
      <VirtualTour />

      <Footer color={true} />
    </>
  );
}

export default OfflineEvent;
