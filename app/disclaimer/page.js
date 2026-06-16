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
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";


function Disclaimer() {

  return (
    <div className="w-full h-fit">
      <div className="hidden md:block">
        <MegaMenu />
      </div>
      
      <div className="block md:hidden">
        <NewNavbar fullBanner={true}/>
      </div>
      {/* <Banner title={"Grievance"} image={bannerImage} /> */}

<div className="mx-auto max-w-5xl pt-12 pb-10 px-4">
  {/* Page Title */}
  {/* <div className="text-center mb-10">
        <p className="font-[carotSlab] text-[2.6rem] font-medium text-orange-500 text-center">
          Disclaimer
        </p>
    <div className="mx-auto mt-2 h-1 w-16 bg-yellow-500 rounded" />
  </div> */}

  {/* Card */}
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
    {/* Card Header */}
    {/* <div className="border-b border-gray-200 px-8 py-5">
      <h2 className="text-lg font-semibold text-gray-800">
        Disclaimer
      </h2>
    </div> */}

    {/* Card Body */}
    <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
              <h2 className="text-lg font-semibold text-gray-800">
        Disclaimer
      </h2>
        <p>
          The official website of Tulas Institute ("Tulas" or "the Institute") is intended to provide general information for students, parents, alumni, recruiters, faculty members, and other stakeholders.
        </p>

        <p>
          Tulas makes every reasonable effort to ensure that the information presented on this website is accurate and up to date. However, the Institute does not guarantee the completeness, accuracy, reliability, or timeliness of the information provided. Academic regulations, eligibility criteria, programme structures, fee details, placement statistics, and institutional policies are subject to revision in accordance with regulatory bodies and institutional decisions.
        </p>

        <p>
         The information available on this website is provided for general guidance and immediate reference only. It does not constitute a legally binding document or official offer of admission. In case of any discrepancy, official notifications issued by the Institute or competent authorities shall prevail.
        </p>

        <p>
          Tulas shall not be liable for any loss, damage, or inconvenience arising from reliance on the information published on this website.
        </p>
      </div>
    </div>

    <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <h2 className="text-lg font-semibold text-gray-800">
        Privacy and Website Usage
      </h2>
        <p>
          Users may access this website without providing personal information wherever permissible. However, certain services such as admissions, enquiries, registrations, or applications may require the submission of personal information.
        </p>

        <p>
          The website may collect limited technical information, including IP addresses, browser details, device information, and usage data through cookies or similar technologies for the purpose of improving website functionality, security, and user experience.
        </p>

        <p>
         Tulas does not sell, rent, or disclose personal information to third parties for commercial purposes. Information may be shared only as required by law, regulatory authorities, or for legitimate institutional purposes.
        </p>

        <p>
          While the Institute adopts reasonable measures to safeguard user information, it does not guarantee absolute security of data transmitted over the internet.
        </p>
      </div>
    </div>

        <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <h2 className="text-lg font-semibold text-gray-800">
        External Links
      </h2>
        <p>
          Links to external websites are provided solely for informational purposes. Tulas does not exercise control over such websites and assumes no responsibility for their content, privacy practices, security, or availability. The inclusion of any link does not imply endorsement by the Institute.
        </p>
      </div>
    </div>

    <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <h2 className="text-lg font-semibold text-gray-800">
        Intellectual Property
      </h2>
        <p>
         Unless otherwise stated, all content on this website, including text, images, graphics, logos, videos, and documents, is the property of Tulas Institute and may not be reproduced, modified, distributed, or used without prior written permission from the Institute.
        </p>
      </div>
    </div>

    <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <h2 className="text-lg font-semibold text-gray-800">
        Amendments
      </h2>
        <p>
         Tulas reserves the right to amend, update, or withdraw any information published on this website, including these Terms and Conditions, at any time without prior notice. Continued use of the website shall constitute acceptance of such changes.
        </p>
      </div>
    </div>

    <div className="relative px-8 py-8">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-8 h-6 w-1 bg-yellow-500 rounded-r" />

      <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
        <h2 className="text-lg font-semibold text-gray-800">
        Governing Law
      </h2>
        <p>
         These Terms and Conditions shall be governed by the laws of India. Any dispute arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts in Dehradun, Uttarakhand.
        </p>
      </div>
    </div>

  </div>
</div>


      <div className=" w-full">
        <NewFooter/>
      </div>
    </div>
  );
}

export default Disclaimer;
