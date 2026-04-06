"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/Components/Navbar/TulasLogo.png";
import NAAC from "../../public/Components/Navbar/naacnew.png";


/* ---------------- PROGRAM DATA ---------------- */
const menuData = {
  undergraduate: {
    "Dept. Of Engineering": [
      "Civil Engineering",
      "CSE",
      "AI & ML",
      "Cybersecurity",
      "Data Science",
      "ECE",
      "EEE",
      "Mechanical",
    ],
    "Dept. Of Management": ["BBA", "MBA"],
    "School Of Law": ["LLB", "LLM"],
  },
};

/* ---------------- SIMPLE MENUS ---------------- */
const simpleMenus = {
  about: {
    title: "About Tulas",
    left: [
      "About Tulas",
      "Vision & Mission",
      "Organogram",
      "Management",
    ],
    right: [
      "Approvals",
      "About Dehradun",
      "Contact Us",
      "Why Tulas",
    ],
  },
  infrastructure: {
    title: "Tulas Infrastructure",
    left: [
      "Library",
      "Computer Centre",
      "Auditorium",
      "Lecture Theatre",
    ],
    right: [
      "Hostel & Mess Facilities",
      "Sports",
      "ICT Facilities",
      "Institute Video",
    ],
  },
  admissions: {
    title: "Admissions",
    left: [
      "Admission Procedure",
      "Admission Eligibility",
      "Pay Fee Online",
      "E-Prospectus",
    ],
    right: [],
  },
};

export default function MegaMenu() {
  const [openPrograms, setOpenPrograms] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [category, setCategory] = useState("undergraduate");
  const [dept, setDept] = useState("Dept. Of Engineering");
  const [navHover, setNavHover] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">

{/* TOP STRIP */}
<div className="w-full bg-[#f5f5f5] text-black text-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">

    {/* LEFT - NAAC LOGO */}
    <div className="flex items-center">
      <Image
        src={NAAC} // import your NAAC image like you already have
        alt="NAAC"
        className="h-6 w-auto object-contain"
      />
    </div>

    {/* RIGHT LINKS */}
    <div className="flex items-center gap-8 font-semibold">
      <span className="cursor-pointer hover:text-orange-500">R&D (CIRE)</span>
      <span className="cursor-pointer hover:text-orange-500">Alumni</span>
      <span className="cursor-pointer hover:text-orange-500">Blogs</span>
      <span className="cursor-pointer hover:text-orange-500">ERP</span>
    </div>

  </div>
</div>

<div
  onMouseEnter={() => setNavHover(true)}
  onMouseLeave={() => {
    setNavHover(false);
    setOpenPrograms(false);
    setActiveMenu(null);
  }}
>
  {/* NAVBAR */}
  <div className="w-full bg-[rgba(120,120,120,0.75)] backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      <Image src={logo} alt="logo" className="w-[180px]" />

      <nav className="flex items-center gap-8 text-white font-medium text-lg">

        {/* ABOUT */}
        <span
          onMouseEnter={() => {
            setActiveMenu("about");
            setOpenPrograms(false);
          }}
          className="cursor-pointer hover:text-orange-400"
        >
          About Us
        </span>

        {/* PROGRAMS */}
        <span
          onMouseEnter={() => {
            setOpenPrograms(true);
            setActiveMenu(null);
          }}
          className="cursor-pointer hover:text-orange-400"
        >
          Programs
        </span>

        {/* INFRA */}
        <span
          onMouseEnter={() => {
            setActiveMenu("infrastructure");
            setOpenPrograms(false);
          }}
          className="cursor-pointer hover:text-orange-400"
        >
          Infrastructure
        </span>

        {/* CAMPUS */}
        <span
          onMouseEnter={() => {
            setActiveMenu("about");
            setOpenPrograms(false);
          }}
          className="cursor-pointer hover:text-orange-400"
        >
          Campus Life
        </span>

        {/* ADMISSIONS */}
        <span
          onMouseEnter={() => {
            setActiveMenu("admissions");
            setOpenPrograms(false);
          }}
          className="cursor-pointer hover:text-orange-400"
        >
          Admissions
        </span>

      </nav>

      <button className="bg-white text-orange-500 px-6 py-2 rounded-full">
        Apply
      </button>
    </div>
  </div>

  {/* ---------------- DROPDOWNS ---------------- */}

  {navHover && (
    <>
      {/* BACKDROP */}
      {/* <div className="fixed inset-0 bg-black/20 z-40 pointer-events-none" /> */}

      {/* PROGRAM MENU */}
      {openPrograms && (
        <div className="fixed left-0 w-full z-50">
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-6 flex gap-6">
              {/* your 3 column code SAME */}
            </div>
          </div>
        </div>
      )}

      {/* SIMPLE MENU */}
      {activeMenu && simpleMenus[activeMenu] && (
        <div className="fixed left-0 w-full z-50">
          <div className="py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-10 text-white">
              {/* your simple menu SAME */}
            </div>
          </div>
        </div>
      )}
    </>
  )}
</div>

      {/* ---------------- PROGRAM MEGA MENU ---------------- */}
      {openPrograms && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40 pointer-events-none" />

          <div className="fixed left-0 w-full z-50">
            <div
              className="w-full pointer-events-auto"
              onMouseEnter={() => setOpenPrograms(true)}
              onMouseLeave={() => setOpenPrograms(false)}
            >
              <div className="bg-[rgba(120,120,120,0.75)] py-10">

                <div className="max-w-7xl mx-auto px-6 flex gap-6">

                  {/* LEFT */}
                  <div className="w-[260px] flex flex-col gap-4">
                    {["undergraduate", "postgraduate", "diploma"].map((item) => (
                      <div
                        key={item}
                        onMouseEnter={() => {
                          setCategory(item);
                          const first = Object.keys(menuData["undergraduate"])[0];
                          setDept(first);
                        }}
                        className={`flex justify-between items-center px-6 py-4 rounded-xl cursor-pointer font-semibold uppercase
                        ${
                          category === item
                            ? "bg-orange-500 text-white"
                            : "bg-[#EADFD7] text-black"
                        }`}
                      >
                        {item}
                        <span>›</span>
                      </div>
                    ))}
                  </div>

                  {/* MIDDLE */}
                  <div className="w-[320px] bg-white/30 rounded-2xl p-5">
                    {Object.keys(menuData[category] || {}).map((d) => (
                      <div
                        key={d}
                        onMouseEnter={() => setDept(d)}
                        className={`flex justify-between px-4 py-3 rounded-lg cursor-pointer
                        ${
                          dept === d
                            ? "bg-orange-500 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {d}
                        <span>›</span>
                      </div>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="w-[340px] bg-white/30 rounded-2xl p-5">
                    {(menuData[category]?.[dept] || []).map((c, i) => (
                      <div
                        key={i}
                        className="flex justify-between px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black"
                      >
                        {c}
                        <span className="text-orange-500">›</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ---------------- SIMPLE MENUS ---------------- */}
      {activeMenu && simpleMenus[activeMenu] && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40 pointer-events-none" />

          <div className="fixed left-0 w-full z-50">
            <div
              className="w-full pointer-events-auto"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="bg-[rgba(120,120,120,0.75)] py-10">

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-10 text-white">

                  {/* LEFT TEXT */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {simpleMenus[activeMenu].title}
                    </h2>

                    <p className="text-sm text-gray-200 mb-6">
                      Tulas Institute offers a vibrant campus in Dehradun with modern classrooms, creative spaces, and open grounds designed for students to learn, connect, and experience the journey.
                    </p>

                    <button className="bg-orange-500 px-4 py-2 rounded">
                      → Apply Now
                    </button>
                  </div>

                  {/* MIDDLE */}
                  <div className="flex flex-col gap-4">
                    {simpleMenus[activeMenu].left.map((item, i) => (
                      <div key={i} className="cursor-pointer hover:text-orange-400">
                        → {item}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col gap-4">
                    {simpleMenus[activeMenu].right.map((item, i) => (
                      <div key={i} className="cursor-pointer hover:text-orange-400">
                        → {item}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </header>
  );
}