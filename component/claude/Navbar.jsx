"use client";
import { useState } from "react";
import Link from "next/link";

const megaMenuData = {
  "About Us": [
    { title: "Overview", links: ["Vision & Mission", "Leadership", "Accreditations", "Awards & Rankings"] },
    { title: "Campus", links: ["Dehradun Campus", "Infrastructure", "Virtual Tour", "Gallery"] },
  ],
  Programs: [
    { title: "Undergraduate", links: ["B.Tech", "BBA", "BCA", "BJMC", "BComm", "B Pharma", "BSc Agriculture"] },
    { title: "Postgraduate", links: ["M.Tech", "MBA", "MCA", "M Pharma"] },
    { title: "Diploma", links: ["Diploma Engineering", "Diploma Pharmacy"] },
  ],
  Infrastructure: [
    { title: "Facilities", links: ["Library", "Labs", "Sports Complex", "Hostel", "Cafeteria"] },
    { title: "Digital", links: ["Smart Classrooms", "Wi-Fi Campus", "ERP System"] },
  ],
  "Campus Life": [
    { title: "Activities", links: ["Fests & Events", "Cultural", "Sports", "Wellness", "Clubs"] },
    { title: "Support", links: ["Student Counseling", "Career Support", "Mentorship"] },
  ],
  Admissions: [
    { title: "Process", links: ["How to Apply", "Eligibility", "Fee Structure", "Scholarships"] },
    { title: "Resources", links: ["Download Prospectus", "FAQs", "Contact Admissions"] },
  ],
  Placements: [
    { title: "Highlights", links: ["Top Recruiters", "Placement Stats", "Alumni Success Stories"] },
    { title: "Support", links: ["Training Programs", "Internships", "Career Services"] },
  ],
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-1.5 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded">NAAC</span>
          <span className="font-black text-pink-600 text-base">A+</span>
        </div>
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          {["R&D (CIRE)", "Alumni", "Blogs", "ERP"].map((item) => (
            <Link key={item} href="#" className="hover:text-orange-500 transition-colors text-xs">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#3a3a3a] px-6 py-0 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 py-3">
          <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center text-white font-black text-lg">T</div>
          <div className="leading-tight">
            <div className="text-white font-black text-xl tracking-wide">TULAS</div>
            <div className="text-orange-400 font-bold text-xs tracking-widest">INSTITUTE</div>
            <div className="text-white font-black text-2xl tracking-wider -mt-1">DEHRADUN</div>
          </div>
        </Link>

        {/* Nav Items */}
        <div className="flex items-center">
          {Object.keys(megaMenuData).map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-white font-medium text-sm px-4 py-6 hover:text-orange-400 transition-colors whitespace-nowrap flex items-center gap-1">
                {item}
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {activeMenu === item && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-b-xl border-t-4 border-orange-500 z-50 p-6 min-w-[500px] grid grid-cols-2 gap-6">
                  {megaMenuData[item].map((col) => (
                    <div key={col.title}>
                      <h4 className="text-orange-500 font-bold text-sm uppercase tracking-wide mb-3">{col.title}</h4>
                      <ul className="space-y-2">
                        {col.links.map((link) => (
                          <li key={link}>
                            <Link href="#" className="text-gray-700 text-sm hover:text-orange-500 hover:translate-x-1 transition-all inline-block">
                              → {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Apply Now */}
        <Link
          href="#"
          className="bg-white text-orange-500 font-bold px-6 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200 text-sm whitespace-nowrap border-2 border-orange-500"
        >
          Apply now
        </Link>
      </nav>
    </header>
  );
}
