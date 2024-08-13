import React from "react";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import AboutTulas from "./Component/AboutTulas";
import WhyTulasScroll from "./Component/WhyTulasScroll";
import Virtual from "./Component/Virtual";
import VirtualTour from "./Component/VirtualTour";

export const metadata = {
  title:
    "Best Engineering & Degree College in Dehradun, India | Tula's Institute",
  description:
    "Looking for the Top Engineering and Degree College in Dehradun(Uttarakhand)? Look No Further Than Tula's Institute. We Offer the Best Engineering Courses Across India. Visit Now!",
};
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutTulas />
      <Virtual />
      <VirtualTour />
    </>
  );
}
