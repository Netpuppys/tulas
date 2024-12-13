"use client";
import React from "react";
import NavbarLandingPage from "../Component/NavbarLandingPage";
import BannerLandingPage from "../Component/BannerLandingPage";
import FormLandingPage from "../Component/FormLandingPage";
import CarouselContent from "../Component/CarouselContent";
import CuttingEdge from "../Component/CuttingEdge";
import WhyChoose from "../Component/WhyChoose";
import AtGlance from "../Component/AtGlance";
import Accreditations from "../Component/Accreditations";
import Placement from "../Component/Placement";

const page = () => {
  return (
    <>
      <head>
        <title>Tula's Institute is best to pursue a career in MBA</title>
        <meta
          name="description"
          content="Join Tula's Institute. Excel in MBA and more with industry-focused programs and dedicated faculty. Become a future leader today"
        />
      </head>
      <body>
        <div className="w-full min-h-screen h-full relative">
          {/* Navbar */}
          <NavbarLandingPage />
          {/* banner */}
          <BannerLandingPage />
          {/* Form */}
          <FormLandingPage />
          {/* Content One */}
          <CarouselContent />
          {/* Cutting Edge */}
          <CuttingEdge />
          {/* Why Choose Tulas */}
          <WhyChoose />
          {/* At a glance */}
          <AtGlance />
          {/* Accreditations */}
          <Accreditations />
          {/* Placement */}
          <Placement />
        </div>
      </body>
    </>
  );
};

export default page;
