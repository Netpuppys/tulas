"use client";

import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../../public/About/whyTulasBanner.png";
import Footer from "@/component/Footer";
import formBackground from "../../public/grievance/formbackground.jpg";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Disclaimer() {

  return (
    <div className="w-full h-fit">
      <Navbar />
      {/* <Banner title={"Grievance"} image={bannerImage} /> */}

<div className="mx-auto max-w-5xl pt-32 pb-20 px-4">
  {/* Page Title */}
  <div className="text-center mb-10">
        <p className="font-[carotSlab] text-[2.6rem] font-medium text-[#760135] text-center">
          Disclaimer
        </p>
    <div className="mx-auto mt-2 h-1 w-16 bg-yellow-500 rounded" />
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
    {/* Card Header */}
    <div className="border-b border-gray-200 px-8 py-5">
      <h2 className="text-lg font-semibold text-gray-800">
        Website Usage Policy
      </h2>
    </div>

    {/* Card Body */}
    <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <p>
          This disclaimer outlines the terms governing the use of the official
          website of <strong>Tula’s Institute</strong>.
        </p>

        <p>
          Tula’s Institute makes every reasonable effort to ensure that the
          information presented on this website is accurate and up to date.
          However, the Institute does not guarantee the completeness, accuracy,
          reliability, or timeliness of the information provided. Academic
          regulations, eligibility criteria, program structures, fee details,
          placement statistics, and institutional policies are subject to
          revision in accordance with regulatory bodies and institutional
          decisions.
        </p>

        <p>
          The information available on this website is provided for general
          guidance and immediate reference only. It does not constitute a
          legally binding document or official offer of admission. In case of
          any discrepancy, official notifications issued by the Institute or
          competent authorities shall prevail.
        </p>

        <p>
          Tula’s Institute shall not be liable for any loss, damage, or
          inconvenience arising from reliance on the information published on
          this website.
        </p>

        <p>
          Links to external websites are provided solely for informational
          purposes. The Institute does not exercise control over such websites
          and assumes no responsibility for their content or practices.
        </p>

        <p>
          Tula’s Institute reserves the right to amend, update, or withdraw any
          information published on the website at any time without prior
          notice.
        </p>
      </div>
    </div>
  </div>
</div>


      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Disclaimer;
