"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import logo from "../../public/Components/Footer/tulaslogo.png";
import year from "../../public/Components/Footer/20yearblue.png";
import NAAC from "../../public/Components/Navbar/newnaac.png";
import NBA from "../../public/Components/Navbar/newnba.png";
import Organogram from "../../public/FooterPDf/Organogram.pdf";
import Plagiarism from "../../public/research/plagiarism-policy.pdf";
import NewResearchPolicy from "../../public/research/new-research-policy-tulas.pdf";
import whatsapp from "../../public/Components/Navbar/whatsapp.png";
import logo360 from "../../public/Components/Navbar/logo360.png";
import phoneCallGif from "../../public/Components/Navbar/phone_ringing.gif";
import { UtmContext } from "../utmParams";
import FormPopup from "../formPopup";



/* ------------------------------------------------------------------ */
/*  TOP STRIP ITEMS                                                     */
/* ------------------------------------------------------------------ */
const topStripItems = [
  {
    name: "ERP",
    href: "#",
    subLinks: [
      { name: "Teacher Login", href: "https://teacher.camu.in" },
      { name: "Student Login", href: "https://student.camu.in" },
    ],
  },
  { name: "BLOG", href: "/blog", subLinks: null },
  {
    name: "ALUMNI",
    href: "/",
    subLinks: [
      { name: "Alumni Login", href: "https://alumni.tulas.edu.in" },
      { name: "Alumni Testimonials", href: "/alumni-testimonials" },
      { name: "Degree Request Form", href: "/degree-request-form" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  PROGRAMME DATA                                                      */
/* ------------------------------------------------------------------ */
const menuData = {
  undergraduate: {
    "School Of Management": [
      { name: "BBA", href: "/courses/bba" },
      { name: "BBA Digital Marketing", href: "/courses/bba/digital-marketing" },
      { name: "BBA Business Analytics", href: "/courses/bba/business-analytics" },
    ],
    "Department Of Engineering": [
      { name: "B.Tech", href: "/courses/btech/" },
      { name: "B.Tech Civil Engineering (CE)", href: "/courses/btech/civil-engineering/" },
      { name: "B.Tech Mechanical Engineering (ME)", href: "/courses/btech/mechanical-engineering/" },
      { name: "B.Tech ECE", href: "/courses/btech/electronics-and-communication-engg" },
      { name: "B.Tech EEE", href: "/courses/btech/electrical-and-electronics-engg/" },
      { name: "B.Tech CSE", href: "/courses/btech/computer-science" },
      { name: "B.Tech CSE AI & ML", href: "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning" },
      { name: "B.Tech CSE Cyber Security", href: "/courses/btech/computer-science-engineering-cyber-security" },
      { name: "B.Tech CSE Data Science", href: "/courses/btech/computer-science-engineering-data-science" },
      { name: "B.Tech CSE Full Stack Development", href: "/courses/btech/computer-science" },
    ],
    "Department Of Commerce": [
      { name: "B.Com", href: "/courses/bcom/" },
      { name: "B.Com (Hons.)", href: "/courses/bcom/" },
    ],
    "Department Of Computer Applications": [
      { name: "BCA", href: "/courses/bca/" },
      { name: "BCA Full Stack Software Development", href: "/courses/bca/fullstack-devlopment" },
      { name: "BCA AI & ML", href: "/courses/bca/artificial-intelligence-&-machine-learning" },
    ],
    "Department Of Mass Comm. & Journalism": [
      { name: "BAJMC", href: "/courses/bjmc/" },
      { name: "BA (Hons.) JMC", href: "/courses/bjmc/" },
    ],
    "Department Of Pharmacy": [
      { name: "B.Pharma", href: "/courses/bpharma/" },
    ],
    "School Of Law": [
      { name: "LL.B", href: "/courses/llb/" },
      { name: "B.A. LL.B (Hons.)", href: "/courses/llb/" },
      { name: "BBA LL.B (Hons.)", href: "/courses/llb/" },
    ],
    "Department Of Agriculture": [
      { name: "B.Sc. (Hons.) Agriculture", href: "/b-sc-agriculture/" },
    ],
  },

  postgraduate: {
    "School Of Management": [
      { name: "MBA", href: "/courses/mba" },
      { name: "MBA Marketing", href: "/courses/mba/marketing" },
      { name: "MBA Human Resource Mgmt.", href: "/courses/mba/human-resource-managment" },
      { name: "MBA International Business", href: "/courses/mba/international-business" },
      { name: "MBA Finance", href: "/courses/mba/finance" },
      { name: "MBA Agri-Business Mgmt.", href: "/courses/mba/agri-business" },
      { name: "MBA Digital Marketing", href: "/courses/mba/digital-marketing" },
      { name: "MBA Business Analytics", href: "/courses/mba/business-analytics" },
    ],
    "Department Of Engineering": [
      { name: "M.Tech", href: "/mtech" },
    ],
    "Department Of Computer Applications": [
      { name: "MCA", href: "/courses/mca" },
      { name: "MCA Full Stack Software Development", href: "/courses/mca" },
      { name: "MCA AI & ML", href: "/courses/mca/artificial-intelligence-&-machine-learning" },
    ],
    "Department Of Agriculture": [
      { name: "M.Sc. Agronomy", href: "/courses/msc-agronomy" },
    ],
  },

  diploma: {
    "Department Of Engineering": [
      { name: "Diploma in Civil Engineering", href: "/diploma-in-civil-engineering" },
      { name: "Diploma in Mechanical Engineering", href: "/diploma-mechanical-engineering" },
      { name: "Diploma in Computer Science Engineering", href: "/diploma-computer-science-engineering" },
    ],
    "Department Of Pharmacy": [
      { name: "Diploma in Pharmacy (D.Pharma)", href: "/courses/dpharma" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  SIMPLE MENUS                                                        */
/* ------------------------------------------------------------------ */
const simpleMenus = {
  about: {
    title: "About Tulas",
    text: "Learn about Tulas Institute, its vision, leadership, and legacy of academic excellence.",
    left: [
      { name: "About Tulas", href: "/about" },
      { name: "Vision & Mission", href: "/vision-mission" },
      { name: "Organogram", href: Organogram },
      { name: "Management", href: "/about/management-messages" },
    ],
    right: [
      { name: "Approvals", href: "/about/approval" },
      { name: "About Dehradun", href: "/about-dehradun" },
      { name: "Contact Us", href: "/contact" },
      { name: "Why Tulas", href: "/about/why-tulas" },
    ],
  },
  infrastructure: {
    title: "Tulas Infrastructure",
    text: "Discover world-class infrastructure including labs, library, hostels, and sports facilities.",
    left: [
      { name: "Library", href: "/infrastructure/library" },
      { name: "Computer Centre", href: "/infrastructure/computer-center" },
      { name: "Auditorium", href: "/infrastructure/auditorium" },
      { name: "Lecture Theatre", href: "/infrastructure/lecture-theatre" },
    ],
    right: [
      { name: "Hostel & Mess Facilities", href: "/infrastructure/hostel-and-mess" },
      { name: "Sports", href: "/sports" },
      { name: "ICT Facilities", href: "/ict-facilities" },
      { name: "Institute Video", href: "https://drive.google.com/file/d/1EBffP1S9nRRnIiGXD6awmc9POIkF5QH1/view" },
    ],
  },
  admissions: {
    title: "Admissions",
    text: "Get complete details about admission process, eligibility, and start your journey with Tulas.",
    left: [
      { name: "Programs & Fee structure 2026", href: "/tulas-programs" },
      // { name: "Admission Procedure", href: "/admission-procedure" },
      // { name: "Bank Details", href: "/bank-details" },
      { name: "Pay Fee Online", href: "/pay-fee-online" },
      { name: "Brochure", href: "/pay-fee-online" },
    ],
    right: [],
  },
  campus: {
    title: "Campus Life",
    text: "Experience vibrant campus life with clubs, events, sports, and student engagement activities.",
    left: [
      { name: "Dehradun International Film Festival", href: "/campus-life/celebrities" },
      { name: "Leadership Fests", href: "/campus-life/leadership-fests" },
      { name: "Sanskriti Cultural Fest", href: "/campus-life/sanskriti" },
      { name: "NCC/NSS", href: "/campus-life/ncc-nss" },
      { name: "Tulas Experiences", href: "/campus-life/tulas-experiences/" },
    ],
    right: [
      { name: "Student Clubs", href: "/campus-life/student-clubs" },
      { name: "Freshers Orientation", href: "/campus-life/freshers-orientation/" },
      { name: "Victree- Sports Clubs", href: "/campus-life/victree" },
      { name: "Prominent Personalities", href: "/campus-life/prominent-personalities" },
      { name: "Alumni Meet", href: "/campus-life/alumni-meet" },
    ],
  },
  academics: {
    title: "Academics",
    text: "Explore academic excellence through structured curriculum, faculty, and research initiatives.",
    left: [
      { name: "Academic Calendar", href: "/academics/calendar" },
      { name: "Examination", href: "/academics/examination" },
      { name: "Results", href: "/academics/results" },
      { name: "Syllabus", href: "/academics/syllabus" },
    ],
    right: [
      { name: "Faculty", href: "/academics/faculty" },
      { name: "Research", href: "/research" },
      { name: "Publications", href: "/academics/publications" },
      { name: "MOU & Collaborations", href: "/academics/mou" },
    ],
  },
  placements: {
    title: "Placements",
    text: "Check placement records, recruiters, internships, and career opportunities at Tulas.",
    left: [
      { name: "Placement at Tulas", href: "/placements/career-innovation-centre" },
      { name: "Technical Placement Record", href: "/placements/technical-department" },
      { name: "Non-Technical Placement Record", href: "/placements/non-technical-department" },
    ],
    right: [],
  },
};

/* ------------------------------------------------------------------ */
/*  RESEARCH DATA                                                       */
/* ------------------------------------------------------------------ */
const researchData = [
  {
    title: "Research and Development (R&D) Cell",
    href: "/research/research-and-development-rd-cell",
    subLinks: [
      { name: "Funded Projects and Grants", href: "/research/research-and-development-rd-cell/funded-projects-and-grants" },
      { name: "Journal Publications", href: "/research/research-and-development-rd-cell/journal-publications" },
      { name: "Conference Publications", href: "/research/research-and-development-rd-cell/conference-publications" },
      { name: "Conferences Organized", href: "/research/research-and-development-rd-cell/conference-organized" },
      { name: "FDPs and Workshops", href: "/research/fdps-workshops" },
      { name: "Research Policy", href: NewResearchPolicy },
      { name: "Plagiarism Policy", href: Plagiarism },
      { name: "Research Remuneration", href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:957d143a-c27f-4828-92d5-e9536adca5ce" },
    ],
  },
  {
    title: "Intellectual Property Rights",
    href: "/research/intellectual-property-rights-ipr-cell",
    subLinks: [
      { name: "Patents Filed", href: "/research/intellectual-property-rights-ipr-cell/patent" },
    ],
  },
  {
    title: "Entrepreneurship Development Cell",
    href: "/research/entrepreneurship-development-cell",
    subLinks: null,
  },
  {
    title: "Institute Innovation Council",
    href: "/research/institute-innovation-council-iic",
    subLinks: [
      { name: "IIC Events", href: "/research/institute-innovation-council-iic/iic-events" },
      { name: "IAAS Student Branch", href: "/research/iaas-student-branch" },
      { name: "IEEE Student Branch", href: "/research/ieee-student-branch-stb17561" },
    ],
  },
  {
    title: "Tula's Technology and Incubator (TTBI)",
    href: "https://ttbif.in/",
    subLinks: null,
  },
  {
    title: "AICTE IDEA LAB",
    href: "/research/aicte-idea-lab",
    subLinks: null,
  },
];

/* ------------------------------------------------------------------ */
/*  SVG ICONS                                                           */
/* ------------------------------------------------------------------ */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
  </svg>
);

const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                           */
/* ------------------------------------------------------------------ */
export default function MegaMenu() {
  const [openPrograms, setOpenPrograms] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [category, setCategory] = useState("undergraduate");
  const [dept, setDept] = useState("School Of Management");
  const [navHover, setNavHover] = useState(false);
  const [expandedResearch, setExpandedResearch] = useState(null);
  const [activeTopStrip, setActiveTopStrip] = useState(null);
    const { utmParams } = useContext(UtmContext);
    const [formPopup, setFormPopup] = useState(false);
  

  /* Observe only Layer 1 (top strip) leaving viewport */
  const topStripRef = useRef(null);
  /* Measure combined height of Layer 2 + Layer 3 for spacer */
  const stickyWrapRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [stickyHeight, setStickyHeight] = useState(0);

  useEffect(() => {
    if (stickyWrapRef.current) setStickyHeight(stickyWrapRef.current.offsetHeight);

    const observer = new IntersectionObserver(
      ([entry]) => setIsFixed(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (topStripRef.current) observer.observe(topStripRef.current);
    return () => observer.disconnect();
  }, []);

  const closeHoverMenus = () => {
    setNavHover(false);
    setActiveMenu(null);
    setExpandedResearch(null);
    setOpenPrograms(false);
  };

  const switchCategory = (level) => {
    setCategory(level);
    setDept(Object.keys(menuData[level])[0]);
  };

  const toggleResearch = (i) =>
    setExpandedResearch((prev) => (prev === i ? null : i));

  const currentCourses = menuData[category]?.[dept] ?? [];

  return (
    <header className="w-full font-sans">

      {/* ===== LAYER 1 — TOP STRIP (scrolls away) ===== */}
      <div ref={topStripRef} className="w-full bg-[#e0500e] border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <span className="text-white text-base leading-none">•</span>
            <span className="tracking-wide">Excellence in Education Since 2006</span>
          </div>
                
          <div className="flex items-center gap-7 text-white text-xs font-semibold tracking-widest">
            {topStripItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subLinks && setActiveTopStrip(item.name)}
                onMouseLeave={() => setActiveTopStrip(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 hover:text-orange-500 transition-colors cursor-pointer ${activeTopStrip === item.name ? "text-orange-500" : ""}`}
                >
                  {item.name}
                  {item.subLinks && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>

                {item.subLinks && activeTopStrip === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[9999] min-w-[180px]">
                    <div className="flex justify-center">
                      <div className="w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45 -mb-1.5 z-10 relative" />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      {item.subLinks.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition-colors whitespace-nowrap tracking-widest"
                        >
                          <span className="text-orange-400 text-[10px]">›</span>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <Image src={NBA} alt="NAAC A+" className="h-7 px-3 w-auto object-contain" />
            <Image src={NAAC} alt="NAAC A+" className="h-7 w-auto object-contain" />
            
          </div>
        </div>
      </div>

      {/* Spacer — prevents layout jump when Layer 2 + Layer 3 become fixed */}
      {isFixed && <div style={{ height: stickyHeight }} />}

      {/* ===== STICKY WRAPPER — Layer 2 (orange) + Layer 3 (dark nav) ===== */}
      <div
        ref={stickyWrapRef}
        className={isFixed ? "fixed top-0 left-0 w-full z-[9999]" : "relative"}
      >

        {/* ===== LAYER 2 — MAIN HEADER (orange) ===== */}
        <div className="w-full bg-[#ffff]">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-5 flex-shrink-0">
              <Image src={logo} alt="Tulas Institute Dehradun" className="h-[68px] w-auto object-contain" />
              <Image src={year} alt="Tulas Institute Dehradun" className="h-[55px] w-auto object-contain" />
              {/* <div className="hidden md:flex flex-col justify-center text-white">
                <span className="text-[14px] font-semibold leading-tight tracking-wide">20 Years of</span>
                <span className="text-[14px] font-semibold leading-tight tracking-wide">Academic Excellence</span>
              </div> */}
            </Link>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a onClick={() => setFormPopup(true)}
 className="flex items-center gap-3 bg-[#263145] text-white rounded-full px-5 py-2.5 cursor-pointer hover:bg-[#1c2538] transition-colors select-none">
                <PhoneIcon />
                <div className="leading-none">
                  <p className="text-base font-bold tracking-wide">Enquire Now</p>
                  <p className="text-[10px] text-gray-300 mb-0.5">For Any Queries</p>
                </div>
              </a>

              <Link href="/apply-now" className="flex items-center gap-3 bg-[#f26522] text-gray-800 rounded-full px-5 py-2.5 cursor-pointer hover:shadow-md transition-shadow select-none border border-gray-100">
                <div className="w-8 h-8 bg-[#f26522] rounded-full flex items-center justify-center flex-shrink-0">
                  <PersonIcon />
                </div>
                <div className="leading-none">
                  <p className="text-sm font-bold text-white mb-0.5">Apply Now</p>
                  <p className="text-[10px] text-white">For Session 2026-27</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ===== LAYER 3 — BOTTOM DARK NAV BAR ===== */}
        <div
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={closeHoverMenus}
        >
          <div className="w-full bg-[#263145]">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center justify-center flex-wrap text-white text-[13.5px] font-medium">

                <Link href="/"
                  onMouseEnter={() => setActiveMenu(null)}
                  className="px-4 py-[14px] hover:bg-[#f26522] transition-colors whitespace-nowrap">
                  Home
                </Link>

                <span onMouseEnter={() => { setActiveMenu("about"); setOpenPrograms(false); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeMenu === "about" ? "bg-[#f26522]" : ""}`}>
                  About Us <ChevronDown />
                </span>

                <span onMouseEnter={() => { setActiveMenu("infrastructure"); setOpenPrograms(false); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeMenu === "infrastructure" ? "bg-[#f26522]" : ""}`}>
                  Infrastructure <ChevronDown />
                </span>

                <span
                  onMouseEnter={() => { setOpenPrograms(true); setActiveMenu(null); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${openPrograms ? "bg-[#f26522]" : ""}`}
                >
                  Programmes <ChevronDown />
                </span>

                <span onMouseEnter={() => { setActiveMenu("admissions"); setOpenPrograms(false); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeMenu === "admissions" ? "bg-[#f26522]" : ""}`}>
                  Admissions <ChevronDown />
                </span>

                <span onMouseEnter={() => { setActiveMenu("research"); setOpenPrograms(false); setExpandedResearch(null); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeMenu === "research" ? "bg-[#f26522]" : ""}`}>
                  Research <ChevronDown />
                </span>

                <span onMouseEnter={() => { setActiveMenu("placements"); setOpenPrograms(false); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeMenu === "placements" ? "bg-[#f26522]" : ""}`}>
                  Placements <ChevronDown />
                </span>

                <span onMouseEnter={() => { setActiveMenu("campus"); setOpenPrograms(false); setNavHover(true); }}
                  className={`px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeMenu === "campus" ? "bg-[#f26522]" : ""}`}>
                  Campus Life <ChevronDown />
                </span>

                <Link href="/contact"
                  onMouseEnter={() => setActiveMenu(null)}
                  className="px-4 py-[14px] cursor-pointer hover:bg-[#f26522] transition-colors whitespace-nowrap">
                  Contact Us
                </Link>

              </nav>
            </div>
          </div>

          {/* ============ DROPDOWNS ============ */}

          {/* ---- PROGRAMMES MEGA MENU ---- */}
          {openPrograms && (
            <div
              className="absolute left-0 w-full z-50"
              onMouseEnter={() => { setOpenPrograms(true); setNavHover(true); }}
              onMouseLeave={closeHoverMenus}
            >
              <div className="w-full bg-[#263145]/90 backdrop-blur-md border-t-2 border-[#f26522] shadow-2xl">
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="flex gap-5">

                    <div className="w-[180px] flex-shrink-0 flex flex-col gap-3">
                      {["undergraduate", "postgraduate", "diploma"].map((level) => (
                        <div
                          key={level}
                          onClick={() => switchCategory(level)}
                          className={`flex justify-between items-center px-4 py-3.5 rounded-xl cursor-pointer font-semibold uppercase text-sm tracking-wider transition-colors
                            ${category === level ? "bg-[#f26522] text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
                        >
                          {level}
                          <span className="text-base">›</span>
                        </div>
                      ))}
                    </div>

                    <div className="w-[240px] flex-shrink-0 bg-white/5 rounded-2xl p-4">
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-3 px-1">Departments</p>
                      <div className="flex flex-col gap-0.5">
                        {Object.keys(menuData[category] || {}).map((d) => (
                          <div
                            key={d}
                            onClick={() => setDept(d)}
                            className={`flex justify-between items-center px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-colors
                              ${dept === d ? "bg-[#f26522] text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"}`}
                          >
                            <span>{d}</span>
                            <span className="text-base flex-shrink-0 ml-1">›</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 bg-white/5 rounded-2xl p-4">
  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-3 px-1">
    Courses — <span className="text-white/60">{dept}</span>
  </p>
  {(() => {
    const cseCourses = currentCourses.filter(c => c.name.includes("CSE"));
    const otherCourses = currentCourses.filter(c => !c.name.includes("CSE"));
    const hasSplit = cseCourses.length > 0 && otherCourses.length > 0;

    const CourseLink = ({ course, i }) => (
      <Link
        key={`${dept}-${i}`}
        href={course.href}
        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors group"
      >
        <span className="text-[#f26522] group-hover:translate-x-0.5 transition-transform flex-shrink-0 text-xs">›</span>
        <span className="leading-snug">{course.name}</span>
      </Link>
    );

    if (hasSplit) {
      return (
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-0.5">
            {otherCourses.map((course, i) => <CourseLink key={i} course={course} i={i} />)}
          </div>
          <div className="flex flex-col gap-0.5">
            {cseCourses.map((course, i) => <CourseLink key={i} course={course} i={i} />)}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
        {currentCourses.map((course, i) => <CourseLink key={i} course={course} i={i} />)}
      </div>
    );
  })()}
</div>

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---- HOVER-BASED DROPDOWNS ---- */}
          {navHover && (
            <>
              {activeMenu === "research" && (
                <div
                  className="absolute left-0 w-full z-50"
                  onMouseEnter={() => { setActiveMenu("research"); setNavHover(true); }}
                  onMouseLeave={closeHoverMenus}
                >
                  <div className="w-full bg-[#263145]/90 backdrop-blur-md border-t-2 border-[#f26522] shadow-2xl">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                      <div className="flex gap-10">
                        <div className="flex-1 flex flex-col justify-center">
                          <h2 className="text-2xl font-bold text-[#ffff] mb-3">Research at Tulas</h2>
                          <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Tulas Institute is committed to fostering a culture of innovation and research.
                            Our dedicated research cells and incubation centres empower students and faculty
                            to explore cutting-edge ideas, file patents, and build startups that solve real-world problems.
                          </p>
                          <button className="self-start bg-[#f26522] hover:bg-orange-600 transition-colors text-white px-5 py-2.5 rounded-full text-sm font-semibold">
                            → Explore Research
                          </button>
                        </div>
                        <div className="w-[480px] flex-shrink-0">
                          <p className="text-[#f26522] text-xs uppercase tracking-widest font-semibold mb-4">Research Areas</p>
                          <div className="flex flex-col divide-y divide-white/10">
                            {researchData.map((item, i) => (
                              <div key={i}>
                                <div
                                  className="flex items-center justify-between py-3.5 group"
                                  onClick={() => item.subLinks && toggleResearch(i)}
                                >
                                  <Link
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-[#f26522] ${expandedResearch === i ? "text-[#f26522]" : "text-white"}`}
                                  >
                                    {item.title}
                                  </Link>
                                  {item.subLinks && (
                                    <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ml-4 text-white font-bold text-lg cursor-pointer transition-colors
                                      ${expandedResearch === i ? "bg-[#f26522]" : "bg-gray-600 group-hover:bg-[#f26522]"}`}>
                                      {expandedResearch === i ? "−" : "+"}
                                    </div>
                                  )}
                                </div>
                                {item.subLinks && expandedResearch === i && (
                                  <div className="pb-3 pl-4 flex flex-col gap-2">
                                    {item.subLinks.map((sub, j) => (
                                      <Link
                                        key={j}
                                        href={sub.href}
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#f26522] transition-colors group/sub"
                                      >
                                        <span className="text-[#f26522] group-hover/sub:translate-x-1 transition-transform text-xs">›</span>
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeMenu && simpleMenus[activeMenu] && (
                <div
                  className="absolute left-0 w-full z-50"
                  onMouseEnter={() => { setActiveMenu(activeMenu); setNavHover(true); }}
                  onMouseLeave={closeHoverMenus}
                >
                  <div className="w-full bg-[#263145]/90 backdrop-blur-md border-t-2 border-[#f26522] shadow-2xl">
                    <div className="max-w-7xl mx-auto px-6 py-10">
                      <div className="grid grid-cols-3 gap-10 text-white">
                        <div>
                          <h2 className="text-2xl font-bold mb-3 text-[#ffff]">
                            {simpleMenus[activeMenu].title}
                          </h2>
                          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                            {simpleMenus[activeMenu].text}
                          </p>
                          <Link href="/admissions-open" className="bg-[#f26522] hover:bg-orange-600 transition-colors text-white px-5 py-2.5 rounded-full text-sm font-semibold">
                            → Apply Now
                          </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                          {simpleMenus[activeMenu].left.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-2 hover:text-[#f26522] transition-colors text-sm text-gray-200 group"
                            >
                              <span className="text-[#f26522] group-hover:translate-x-1 transition-transform">→</span>
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <div className="flex flex-col gap-3">
                          {simpleMenus[activeMenu].right.map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="flex items-center gap-2 hover:text-[#f26522] transition-colors text-sm text-gray-200 group"
                            >
                              <span className="text-[#f26522] group-hover:translate-x-1 transition-transform">→</span>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>{/* end stickyWrapRef */}

              <>
                <div
        className={`fixed bottom-0 left-0 w-full z-50 pointer-events-auto bg-[#f97316] mdNavbar:hidden`}
                >
                  <div className="w-full mx-auto flex justify-between h-fit py-2">
                    <a
                      className="flex px-1 w-[calc(50%-0.5px)] text-white gap-2 items-center justify-center"
                      href="tel:+91-9837983721"
                    >
                      {/* <IoCall /> */}
                      +91-9837983721
                    </a>
                    <div className="w-[1px] bg-white"></div>
                  </div>
                </div>
                <div
  className={`w-fit right-4 top-[50%] hidden mdNavbar:flex flex-col gap-2 -translate-y-1/2 fixed z-[9999] pointer-events-auto`}
>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://api.whatsapp.com/send/?phone=%2B919258159248&text&type=phone_number&app_absent=0")
                    }
                    className="bg-[#25D366] shadow-2xl cursor-pointer w-full h-full aspect-square rounded-full p-3 text-white"
                  >
                    <Image
                      src={whatsapp}
                      alt=""
                      className="w-[25px] h-[25px] mdNavbar:w-[29px] mdNavbar:h-[29px]"
                    />
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `/virtual-tour/index.html/${utmParams}`)
                    }
                    className="bg-[#263145] shadow-2xl cursor-pointer w-full h-full aspect-square rounded-full p-3 text-white"
                  >
                    <Image
                      src={logo360}
                      alt=""
                      className="w-[25px] h-[25px] mdNavbar:w-[29px] mdNavbar:h-[29px]"
                    />
                  </button>
                  <a
                    href="tel:+91-9837983721"
                    title="Admissions Helpline Number - +91-9837983721"
                    className="bg-[#f97316] shadow-2xl cursor-pointer w-full h-full aspect-square rounded-full p-3 text-white"
                  >
                    <Image
                      src={phoneCallGif}
                      alt=""
                      className="w-[25px] h-[25px] mdNavbar:w-[29px] mdNavbar:h-[29px]"
                    />
                  </a>
                </div>
              </>
          {formPopup && <FormPopup formPopup={formPopup} setFormPopup={setFormPopup} />}

    </header>
  );
}
