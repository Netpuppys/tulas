"use client"

import React, { useRef } from "react";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import AboutTulas from "./Component/AboutTulas";
import Video from "./Component/Video";
import Virtual from "./Component/Virtual";
import VirtualTour from "./Component/VirtualTour";
import Footer from "@/component/Footer";
import Courses from "./Component/Courses";
import WhyTulasScroll from "./Component/WhyTulasScroll";

export default function HomePage() {
    const parentRef = useRef(null)

    return (
        <div ref={parentRef} className="w-full overflow-x-hidden">
            <Navbar />
            <Banner />
            <AboutTulas />
            <WhyTulasScroll parentRef={parentRef} />
            <Courses parentRef={parentRef}/>
            <Virtual />
            <VirtualTour />
            <Video />
            <Footer />
        </div>
    );
}
