"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TulasFooter from "../public/Components/Footer/tulaslogo.png";
import Link from "next/link";
import ContactForm from "@/app/contact/Component/form";
import innovationAndStartupPolicy from "../public/research/innovation-and-startup-policy.pdf";
import Plagiarism from "../public/research/plagiarism-policy.pdf";
import HandBook from "../public/research/HandBook.pdf";
import NewResearchPolicy from "../public/research/NewResearchPolicy.pdf";
import HrPolicy from "../public/FooterPDf/hr-policy.pdf";
import ANTIRAGGING0001 from "../public/research/ANTI-RAGGING_0001.pdf";
import HolidayCalendar from "../public/research/holiday-calender-26.pdf";
import Examination from "../public/research/Examination.pdf";
import ICC from "../public/research/ICC.pdf";
import MadatoryDisclosure from "../public/research/MadatoryDisclosure.pdf";
import ACADEMICCALENDER from "../public/research/academic-calendar-26.pdf";
import codeOfConduct from "../public/research/code-of-conduct.pdf";
import { UtmContext } from "./utmParams";
import FormPopup from "./formPopup";
import Brouchure from "../public/FooterPDf/Brouchure.pdf";
import FeeStructure from "../public/FooterPDf/FeeStructure.pdf";

const NewFooter = ({ set = false, color = false }) => {
  const { utmParams } = useContext(UtmContext);
  const [formPopup, setFormPopup] = useState(false);
  const [prospectus, setProspectus] = useState(false);
  const [feesStructure, setFeesStructure] = useState(false);

  const quickLinks = [
    { title: "About Us", linkTo: "/about/" },
    { title: "Programs", linkTo: "/programs/" },
    { title: "Admissions", linkTo: "/admissions/" },
    { title: "Placements", linkTo: "/placements/" },
    { title: "Career", linkTo: "/careers/" },
  ];

  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/tulasinstitutedehradun/",
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/school/tula's-institute/",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@TulasInstitutedehradun",
      icon: <FaYoutube />,
      label: "YouTube",
    },
    {
      href: "https://twitter.com/tulas_institute",
      icon: <FaXTwitter />,
      label: "X (Twitter)",
    },
    {
      href: "https://www.instagram.com/tulasinstitutedehradun/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
  ];

  const accreditationLinks = [
    { title: "AICTE", linkTo: "https://www.aicte-india.org/", target: "_blank" },
    { title: "AISHE", linkTo: "https://aishe.gov.in/", target: "_blank" },
    { title: "UTU", linkTo: "https://uktech.ac.in/en", target: "_blank" },
    { title: "SDUU", linkTo: "https://www.sdsuv.ac.in/", target: "_blank" },
    { title: "UBTER", linkTo: "https://ubter.in/", target: "_blank" },
    { title: "NIRF", linkTo: "/nirf-ranking/" },
    { title: "NAAC", linkTo: "/naac/" },
    { title: "IQAC", linkTo: "/iqac/" },
  ];

  const studyLinks = [
    { title: "Programs", linkTo: "/programs/" },
    { title: "Exam Details", linkTo: Examination, target: "_blank" },
    { title: "Code of Conduct", linkTo: codeOfConduct, target: "_blank" },
    { title: "Academic Calendar", linkTo: ACADEMICCALENDER, target: "_blank" },
    { title: "Handbook", linkTo: HandBook, target: "_blank" },
    { title: "Holiday Calendar", linkTo: HolidayCalendar, target: "_blank" },
    { title: "Internshala", linkTo: "https://internshala.com/", target: "_blank" },
    { title: "National Career Service", linkTo: "https://www.ncs.gov.in/", target: "_blank" },
    { title: "National Scholarship Portal", linkTo: "https://scholarships.gov.in/", target: "_blank" },
    { title: "Disclaimer", linkTo: "/disclaimer/" },
  ];

  const otherKeyLinks = [
    { title: "ICC", linkTo: ICC, target: "_blank" },
    { title: "Grievance", linkTo: "/grievance/" },
    { title: "Turnitin", linkTo: "https://www.turnitin.com/login_page.asp", target: "_blank" },
    { title: "Anti Ragging", linkTo: ANTIRAGGING0001, target: "_blank" },
    { title: "Research Policy", linkTo: NewResearchPolicy, target: "_blank" },
    { title: "Plagiarism policy", linkTo: Plagiarism, target: "_blank" },
    {
      title: "QuillBot Software",
      linkTo: "https://quillbot.com/login?returnUrl=/app/chrome-extension",
      target: "_blank",
    },
    { title: "Innovation & Startup policy", linkTo: innovationAndStartupPolicy, target: "_blank" },
    { title: "Mandatory Disclosure", linkTo: MadatoryDisclosure, target: "_blank" },
      { title: "Hr policy", linkTo: HrPolicy, target: "_blank" },

  ];

  const renderLink = (link, index) => {
    const href = link.target
      ? `${link.linkTo}`
      : `${link.linkTo}${utmParams}`;
    return (
      <li key={index}>
        <Link
          href={href}
          target={link.target || ""}
          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
          className="flex items-start gap-2 text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200 leading-snug py-[3px]"
        >
          <span className="text-orange-500 mt-[2px] shrink-0 text-[10px]">▶</span>
          {link.title}
        </Link>
      </li>
    );
  };

  return (
    <footer className="w-full text-white overflow-hidden z-40 bg-[#111111]">
      {set && <ContactForm />}

      {/* ── TOP BAND ── */}
      <div className="w-full px-[5%] py-10 grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 border-b border-white/10">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-4 max-w-[360px]">
          <Image
            src={TulasFooter}
            alt="Tula's Institute Dehradun Logo"
            className="w-[260px] h-auto"
          />
          <p className="text-[13px] text-gray-400 leading-relaxed">
            Building future leaders through quality education and innovation since 2006.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 md:pl-10">
          <h4 className="text-orange-500 font-semibold text-[15px] tracking-wide mb-1">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-1">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={`${link.linkTo}${utmParams}`}
                  className="text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3 md:pl-10">
          <h4 className="text-orange-500 font-semibold text-[15px] tracking-wide mb-1">
            Contact
          </h4>
          <ul className="flex flex-col gap-1 text-[13px] text-gray-300">
            <li>Tulas Institute</li>
            <li>Dehradun, Uttarakhand</li>
            <li>
              Phone:{" "}
              <a
                href="tel:+91-9837983721"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                +91-9837983721
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:info@tulas.edu.in"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                info@tulas.edu.in
              </a>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="flex flex-col gap-3 md:pl-10">
          <h4 className="text-orange-500 font-semibold text-[15px] tracking-wide mb-1">
            Connect With Us
          </h4>
          <p className="text-[13px] text-gray-400">
            Follow us on social media for updates and news
          </p>
          <div className="flex gap-3 flex-wrap mt-1">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-orange-500 hover:bg-white/10 flex items-center justify-center text-[15px] transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM 4-COLUMN BAND ── */}
      <div className="w-full px-[5%] py-10 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10">

        {/* Contact Tulas */}
        <div>
          <div className="mb-4">
            <span className="text-orange-500 font-semibold text-[18px] leading-tight block">
              Contact
            </span>
            <span className="text-white text-[15px] font-medium">Tulas</span>
          </div>
          <ul className="flex flex-col">
            <li>
              <a
                href="mailto:info@tulas.edu.in"
                className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200 py-[3px]"
              >
                <span className="text-orange-500 text-[10px]">▶</span>
                Email
              </a>
            </li>
            <li>
              <a
                href="tel:+91-9837983721"
                className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200 py-[3px]"
              >
                <span className="text-orange-500 text-[10px]">▶</span>
                Call
              </a>
            </li>
            <li>
              <a
                href="tel:0135-2699300"
                className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200 py-[3px]"
              >
                <span className="text-orange-500 text-[10px]">▶</span>
                Landline
              </a>
            </li>
          </ul>

          {/* Updates */}
          <div className="mt-6 mb-4">
            <span className="text-orange-500 font-semibold text-[18px] leading-tight block">
              Updates
            </span>
            <span className="text-white text-[15px] font-medium">Tulas</span>
          </div>
          <ul className="flex flex-col">
            <li>
              <Link
                href={`/news/${utmParams}`}
                className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200 py-[3px]"
              >
                <span className="text-orange-500 text-[10px]">▶</span>
                News
              </Link>
            </li>
            <li>
              <Link
                href={`/blog/${utmParams}`}
                className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-orange-500 transition-colors duration-200 py-[3px]"
              >
                <span className="text-orange-500 text-[10px]">▶</span>
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Accreditations Tulas */}
        <div>
          <div className="mb-4">
            <span className="text-orange-500 font-semibold text-[18px] leading-tight block">
              Accreditations
            </span>
            <span className="text-white text-[15px] font-medium">Tulas</span>
          </div>
          <ul className="flex flex-col">
            {accreditationLinks.map((link, index) => renderLink(link, index))}
          </ul>
        </div>

        {/* Study at Tulas */}
        <div>
          <div className="mb-4">
            <span className="text-orange-500 font-semibold text-[18px] leading-tight block">
              Study at
            </span>
            <span className="text-white text-[15px] font-medium">Tulas</span>
          </div>
          <ul className="flex flex-col">
            {studyLinks.map((link, index) => renderLink(link, index))}
          </ul>
        </div>

        {/* Other Key Links */}
        <div>
          <div className="mb-4">
            <span className="text-orange-500 font-semibold text-[18px] leading-tight block">
              Other Key
            </span>
            <span className="text-white text-[15px] font-medium">Links</span>
          </div>
          <ul className="flex flex-col">
            {otherKeyLinks.map((link, index) => renderLink(link, index))}
          </ul>
        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className="w-full px-[5%] py-5 flex flex-col md:flex-row items-center justify-between gap-2 bg-[#0a0a0a]">
        <p className="text-[12px] text-gray-400 text-center md:text-left">
          Copyright © 2026 Tulas Institute, Dehradun | All Rights Reserved
        </p>
        <p className="text-[12px] text-gray-400 text-center md:text-right">
          Designed and Managed By{" "}
          <a
            href="https://netpuppys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-500 transition-colors duration-200"
          >
            NetPuppys
          </a>
        </p>
      </div>

      {formPopup && (
        <FormPopup
          formPopup={formPopup}
          setFormPopup={setFormPopup}
          pdf={prospectus ? Brouchure : feesStructure ? FeeStructure : ""}
        />
      )}
    </footer>
  );
};

export default NewFooter;
