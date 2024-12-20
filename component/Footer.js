import React, { useContext } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import TulasFooter from "../public/Components/Footer/tulasFooter.png";
import Link from "next/link";
import ContactForm from "@/app/contact/Component/form";
import innovationAndStartupPolicy from "../public/research/innovation-and-startup-policy.pdf";
import Plagiarism from "../public/research/plagiarism-policy.pdf";
import HandBook from "../public/research/HandBook.pdf";
import NewResearchPolicy from "../public/research/NewResearchPolicy.pdf";
import ANTIRAGGING0001 from "../public/research/ANTI-RAGGING_0001.pdf";
import HolidayCalendar from "../public/research/Holiday-Calendar.pdf";
import Examination from "../public/research/Examination.pdf";
import ICC from "../public/research/ICC.pdf";
import MadatoryDisclosure from "../public/research/MadatoryDisclosure.pdf";
import ACADEMICCALENDER from "../public/research/ACADEMICCALENDER.pdf";
import codeOfConduct from "../public/research/code-of-conduct.pdf";
import { FiPhone } from "react-icons/fi";
import { RiFlightLandLine } from "react-icons/ri";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdMail } from "react-icons/md";
import { UtmContext } from "./utmParams";
const subTitle =
  "Affiliated to Uttarakhand Technical University and Sri Dev Suman University, Approved by AICTE, Ministry of HRD, Govt of India";

const Footer = ({ set = false, color = false }) => {
  const keyLinks = [
    { title: "Anti-ragging", linkTo: ANTIRAGGING0001, target: "_blank" },
    { title: "Grievance", linkTo: "/grievance/" },
    { title: "Holiday Calendar", linkTo: HolidayCalendar, target: "_blank" },
    { title: "Exam Details", linkTo: Examination, target: "_blank" },
    { title: "Career", linkTo: "/careers/" },
    { title: "ICC", linkTo: ICC, target: "_blank" },
    {
      title: "Mandatory Disclosure",
      linkTo: MadatoryDisclosure,
      target: "_blank",
    },
    { title: "Handbook", linkTo: HandBook, target: "_blank" },
    { title: "Research Policy", linkTo: NewResearchPolicy, target: "_blank" },
    { title: "Plagiarism Policy", linkTo: Plagiarism, target: "_blank" },
    {
      title: "QuillBot Software",
      linkTo: "https://quillbot.com/login?returnUrl=/app/chrome-extension",
      target: "_blank",
    },
    { title: "NAAC", linkTo: "/naac/" },
    { title: "IQAC", linkTo: "/iqac/" },
  ];
  const keyLinks2 = [
    {
      title: "AICTE",
      linkTo: "https://www.aicte-india.org/",
      target: "_blank",
    },
    { title: "AISHE", linkTo: "https://aishe.gov.in/", target: "_blank" },
    {
      title: "Uttarakhand Technical University",
      linkTo: "https://uktech.ac.in/en",
      target: "_blank",
    },
    {
      title: "Sri Devsuman Uttarakhand University",
      linkTo: "https://www.sdsuv.ac.in/",
      target: "_blank",
    },
    { title: "UBTER", linkTo: "https://ubter.in/", target: "_blank" },
    {
      title: "National Scholarship Portal",
      linkTo: "https://scholarships.gov.in/",
      target: "_blank",
    },
    {
      title: "National Career Service",
      linkTo: "https://www.ncs.gov.in/",
      target: "_blank",
    },
    { title: "NIRF Ranking", linkTo: "/nirf-ranking/" },
    {
      title: "Internshala",
      linkTo: "https://internshala.com/",
      target: "_blank",
    },
    {
      title: "Turnitin",
      linkTo: "https://www.turnitin.com/login_page.asp",
      target: "_blank",
    },
    { title: "Academic Calendar", linkTo: ACADEMICCALENDER, target: "_blank" },
    { title: "Code Of Conduct", linkTo: codeOfConduct, target: "_blank" },
    {
      title: "Innovation and Startup Policy",
      linkTo: innovationAndStartupPolicy,
      target: "_blank",
    },
  ];

  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/tulasinstitutedehradun/",
      icon: <FaFacebookF />,
    },
    { href: "https://twitter.com/tulas_institute", icon: <FaTwitter /> },
    {
      href: "https://www.instagram.com/tulasinstitutedehradun/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.linkedin.com/school/tula's-institute/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.youtube.com/@TulasInstitutedehradune",
      icon: <FaYoutube />,
    },
  ];
  const cardsData = [
    {
      leftText:
        "Copyright © 2025 Tula's Institute, Dehradun | All Rights Reserved",
    },
    {
      leftText: (
        <>
          Designed and Managed By{" "}
          <a
            href="https://netpuppys.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NetPuppys
          </a>
        </>
      ),
    },
  ];
  const button = [
    {
      buttons: [
        { text: "Privacy Policy", linkTo: "/privacy-policy/" },
        { text: "Terms & Conditions", linkTo: "/terms-conditions/" },
      ],
    },
    {
      buttons: [
        { text: "Blog", linkTo: "/blog/" },
        { text: "Contact Us", linkTo: "/contact/" },
      ],
    },
  ];
  const { utmParams } = useContext(UtmContext);

  return (
    <footer className="min-h-screen w-full text-white overflow-hidden z-40">
      <div className="w-full h-fit md:h-[12vh] flex flex-col md:flex-row items-end bg-transparent">
        {/* black bar */}
        <div
          className={`w-full md:w-[67%] h-full ${
            color ? "bg-[#00383D]" : "bg-[#120008]"
          }  flex justify-between px-4 py-2 md:py-0 items-center z-40`}
        >
          <h3 className="font-[Oswald] w-1/2 md:w-fit text-[16px] md:text-[clamp(10px,2vw,40px)]">
            WANT TO LEARN MORE ABOUT TULA’S?
          </h3>
          <div className="flex w-fit gap-4">
            <button className="text-[clamp(9px,0.8vw,18px)] bg-transparent hover:bg-[#E69706] hover:text-[#120008] border-2 border-[#E69706] py-1 px-1 md:py-2 md:px-[1vw] text-white">
              ENQUIRY NOW
            </button>
            <button className="bg-[#E69706] border-2 text-[clamp(9px,0.8vw,18px)] border-[#E69706] py-1 px-1 md:py-2 md:px-[1vw] text-[#120008] hover:text-white hover:bg-transparent ">
              APPLY TODAY
            </button>
          </div>
        </div>
        {/* gray social icons div */}
        <div className="w-full md:w-[33%] h-[6vh] bg-[#808080] px-[5%] gap-[3%] flex justify-between items-center z-50">
          <h4 className="font-[Oswald] text-[clamp(20px,6.5vw,35px)] text-nowrap md:text-[clamp(12px,1.6vw,28px)] text-white ">
            CONNECT US
          </h4>
          <ul className="flex w-[60%] gap-[5%]">
            {socialMediaLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fff] rounded-lg bg-opacity-[0.8] text-[#808080] p-[3%] text-[20px] md:text-[clamp(8px,1.3vw,25px)]"
              >
                {social.icon}
              </Link>
            ))}
          </ul>
          <button className="bg-[rgba(255, 255, 255, 0.08)] text-white"></button>
        </div>
      </div>
      {set && <ContactForm />}
      {/* main footer */}
      <div
        className={`w-full flex flex-col relative z-50 h-fit md:min-h-[88vh] justify-center items-center ${
          color ? "bg-[#005D64]" : "bg-[#3D001B]"
        }`}
      >
        <div className="w-full flex flex-col items-center gap-[6%] justify-center">
          <Image
            src={TulasFooter}
            alt="Tula's Dehradun Logo"
            className="w-[200px] md:w-[10%] h-fit pt-4 md:pt-[1%]"
          />
          <p className="pt-[1%] text-[14px] md:text-[clamp(10px,0.8vw,16px)] px-4 md:px-[1%] max-w-full md:max-w-[35%] text-center">
            {subTitle}
          </p>
        </div>

        <ul className="flex gap-2 pt-[1%] w-full items-center justify-center">
          {socialMediaLinks.map((social, index) => (
            <li
              key={index}
              className="text-[20px] md:text-[clamp(10px,1.3vw,25px)] p-2 md:p-[0.5%] rounded-full backdrop:blur-3xl bg-opacity-20 bg-white"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 md:flex-row justify-between w-full h-full mt-8 px-[5%]">
          <div className="max-w-full md:max-w-[25%] flex flex-col items-center md:block">
            <div className="items-center md:items-start justify-center flex flex-col">
              <div className="w-[40%] md:w-[15%] h-[2px] bg-[#E69706]"></div>
              <h4 className="text-[24px] md:text-[clamp(15px,1.6vw,30px)] font-normal mb-4 font-[Oswald]">
                ADDRESS
              </h4>
            </div>
            <p className="text-[20px] md:text-[clamp(10px,1.1vw,20px)] text-center md:text-start font-[TTChocolates] mb-8">
              Tula's Institute, Dhoolkot Near Selaqui, Dhulkot Rd, Dehradun,
              <strong className="text-[#E69706]"> Uttarakhand</strong>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.277785508504!2d77.8834027760641!3d30.343054304360063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa74538275%3A0x3cb757428c691de3!2sTula&#39;s%20Institute!5e0!3m2!1sen!2sin!4v1724739581831!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              className="rounded-2xl h-[20vh] w-full md:w-[20vw]"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-4"></div>
          </div>
          <div className="mb-6 md:mb-0 md:w-[45%]">
            <div className="md:w-[80%] justify-center flex flex-col items-center text-center">
              <div className="w-[40%] md:w-[15%] h-[2px] bg-[#E69706]"></div>
              <h4 className="text-[25px] md:text-[clamp(15px,1.6vw,30px)] font-normal mb-4 font-[Oswald]">
                KEY LINKS
              </h4>
            </div>
            <h5 className="flex w-full max-w-full justify-between font-[TTChocolates]">
              <ul className="max-w-[40%] w-full">
                {keyLinks.map((link, index) => (
                  <li key={index} className="">
                    <Link
                      href={
                        link.target
                          ? `${link.linkTo}`
                          : `${link.linkTo}${utmParams}`
                      }
                      target={link.target ? "_blank" : ""}
                      rel={
                        link.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex gap-2 text-[14px] md:text-[clamp(10px,1.1vw,20px)] w-fit"
                    >
                      <span className="text-[#E69706]">{"> "}</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="max-w-[42%] w-full">
                {keyLinks2.map((link, index) => (
                  <li key={index} className="">
                    <Link
                      href={
                        link.target
                          ? `${link.linkTo}`
                          : `${link.linkTo}${utmParams}`
                      }
                      target={link.target ? "_blank" : ""}
                      rel={
                        link.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex gap-2 text-[14px] md:text-[clamp(10px,1.1vw,20px)] w-fit"
                    >
                      <span className="text-[#E69706]">{"> "}</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </h5>
          </div>

          <div className="flex flex-row mb-6 md:flex-col w-full md:w-fit h-full md:h-fit items-start justify-between">
            <div className="flex flex-col w-[33%] md:w-fit h-full">
              <div className="justify-center flex flex-col">
                <div className="w-[40%] md:w-[65%] h-[2px] bg-[#E69706]"></div>
                <h4 className="text-[25px] md:text-[clamp(15px,1.6vw,30px)] font-normal mb-4 font-[Oswald]">
                  ADMISSION HELPLINE
                </h4>
              </div>
              <ul className="text-[14px] md:text-[clamp(10px,1.1vw,20px)] font-[TTChocolates]">
                <li>
                  <a
                    href="tel:+91-6366937159"
                    className="flex justify-start items-center gap-2"
                  >
                    <span className="text-[#E69706]">
                      <FiPhone />
                    </span>
                    +91-9837983721
                  </a>
                </li>
                {/* <li>
                  <a href="tel:+91-9837634737">
                    <span className="text-[#E69706]">{"> "}</span>+91-9837983721
                    <br />
                    (Nepal Admission Helpline)
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="flex flex-col w-[33%] md:w-fit h-full">
              <div className="md:mt-8 justify-center flex flex-col">
                <div className="w-[40%] md:w-[35%] h-[2px] bg-[#E69706]"></div>
                <h4 className="text-[25px] md:text-[clamp(15px,1.6vw,30px)] font-normal mb-4 font-[Oswald]">
                  LANDLINE
                </h4>
              </div>
              <ul className="text-[14px] md:text-[clamp(10px,1.1vw,20px)] font-[TTChocolates]">
                <li>
                  <a
                    href="tel:0135-269930"
                    className="flex justify-start items-center gap-2"
                  >
                    <span className="text-[#E69706]">
                      <TbDeviceLandlinePhone />
                    </span>
                    0135-2699300
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-col flex w-[33%] md:w-fit h-full">
              <div className="md:mt-8 justify-center flex flex-col">
                <div className="w-[40%] md:w-[15%] h-[2px] bg-[#E69706]"></div>
                <h4 className="text-[25px] md:text-[clamp(15px,1.6vw,30px)] font-normal mb-4 font-[Oswald]">
                  MAIL
                </h4>
              </div>

              <p className="text-[14px] md:text-[clamp(10px,1.1vw,20px)] font-[TTChocolates] flex gap-1 items-center">
                <span className="text-[#E69706]">
                  <MdMail />
                </span>
                <a href="mailto:info@tulas.edu.in">info@tulas.edu.in</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col flex md:flex-row justify-between w-full">
          <div className="w-full flex flex-col items-center md:items-start justify-between px-10 py-4">
            {cardsData.map((card, index) => (
              <div key={index} className="text-center md:text-left md:mb-0">
                <p className="text-[12px] md:text-[clamp(10px,0.8vw,20px)] font-light md:font-normal">
                  {card.leftText}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex md:flex-col items-center md:items-end justify-center md:px-10 md:py-4 pb-4 md:pb-0">
            {button.map((btnGroup, index) => (
              <div
                key={index}
                className="flex items-center border-r-2 border-white md:border-0 last:border-opacity-0"
              >
                {btnGroup.buttons.map((btn, btnIndex) => (
                  <React.Fragment key={btnIndex}>
                    <Link
                      href={`${btn.linkTo}${utmParams}`}
                      className={`px-1 text-[12px] md:text-[clamp(10px,0.8vw,20px)] font-light md:font-normal md:px-2 ${
                        btnIndex < btnGroup.buttons.length - 1
                          ? "border-r-2 border-white last:border-r-0"
                          : ""
                      }`}
                    >
                      {btn.text}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
