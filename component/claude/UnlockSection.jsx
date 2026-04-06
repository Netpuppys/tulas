"use client";
import { useState } from "react";

const departments = [
  {
    name: "School Of Management",
    courses: ["MBA", "BBA", "B.Com", "B.Com (Hons.)"],
  },
  {
    name: "Department Of Engineering",
    courses: ["B.Tech CSE", "B.Tech ME", "B.Tech CE", "B.Tech ECE", "B.Tech EE"],
  },
  {
    name: "Department Of Commerce",
    courses: ["B.Com", "B.Com (Hons.)", "M.Com"],
  },
  {
    name: "Department Of Computer Applications",
    courses: ["BCA", "MCA"],
  },
  {
    name: "Department Of Mass Comm. & Journalism",
    courses: ["BJMC", "MJMC"],
  },
  {
    name: "Department Of Pharmacy",
    courses: ["B.Pharma", "D.Pharma", "M.Pharma"],
  },
];

export default function UnlockSection() {
  const [openDept, setOpenDept] = useState(null);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

        {/* Left - Departments */}
        <div className="flex-1 bg-gray-100 rounded-2xl p-8">
          <h2 className="text-4xl font-black mb-2">
            <span className="text-orange-500">UNLOCK</span>
          </h2>
          <h2 className="text-4xl font-black text-gray-900 mb-8">YOUR POTENTIAL</h2>

          <div className="grid grid-cols-2 gap-3">
            {departments.map((dept) => (
              <div key={dept.name} className="flex flex-col">
                {/* Dept header - toggles dropdown */}
                <button
                  onClick={() => setOpenDept(openDept === dept.name ? null : dept.name)}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-4 text-left hover:shadow-md transition-shadow"
                >
                  <span className="font-bold text-gray-800 text-sm leading-tight">{dept.name}</span>
                  <svg
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 ml-2 transition-transform duration-300 ${openDept === dept.name ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Courses dropdown - not clickable */}
                {openDept === dept.name && (
                  <div className="bg-white border border-gray-100 rounded-xl mt-1 px-4 py-3 shadow-sm">
                    <ul className="space-y-2">
                      {dept.courses.map((course) => (
                        <li
                          key={course}
                          className="flex items-center gap-2 text-sm text-gray-700 cursor-default select-none"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Application Form */}
        <div
          className="w-full lg:w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:sticky lg:top-24"
          style={{ borderTop: "4px solid #f97316" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-orange-500">Start</span> Your Tulas Application
          </h3>

          <div className="space-y-4">
            <input type="text" placeholder="Enter Your Full Name*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors" />

            <input type="email" placeholder="Enter Your Email Address*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors" />

            <div className="flex gap-2">
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 text-sm bg-gray-50 text-gray-700 font-semibold">
                +91
              </div>
              <input type="tel" placeholder="Mobile Number*"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors" />
              <button className="bg-gray-900 text-white text-xs font-bold px-3 py-3 rounded-lg hover:bg-orange-500 transition-colors whitespace-nowrap">
                Send OTP
              </button>
            </div>

            <input type="text" placeholder="Enter OTP*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-orange-500 transition-colors" />

            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-orange-500 appearance-none bg-white">
              <option value="">Select Course</option>
              <option>B.Tech</option>
              <option>BBA</option>
              <option>BCA</option>
              <option>MBA</option>
            </select>

            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-orange-500 appearance-none bg-white">
              <option value="">Select Specialisation</option>
              <option>Computer Science</option>
              <option>Civil Engineering</option>
              <option>Mechanical Engineering</option>
            </select>

            <div className="flex gap-3">
              <select className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-orange-500 appearance-none bg-white">
                <option value="">Select State</option>
                <option>Uttarakhand</option>
                <option>Delhi</option>
                <option>UP</option>
              </select>
              <select className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-orange-500 appearance-none bg-white">
                <option value="">Select City</option>
                <option>Dehradun</option>
                <option>Delhi</option>
              </select>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-base tracking-wide">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
