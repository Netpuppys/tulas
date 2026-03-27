"use client";
import React from "react";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

export default function LandingAdmissionEligibility({ onKnowMore }) {
  return (
  <section className="bg-[#f3f3f3] py-5 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="flex items-start gap-4 mb-8">
          <div className="text-orange-500 text-4xl">
            <HiOutlineDocumentCheck />
          </div>

          <div>
            <p className="uppercase text-sm tracking-widest text-gray-500">
              Admission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              ELIGIBILITY
            </h2>
          </div>
        </div>

        {/* Boxes + Button wrapper */}
        <div className="max-w-3xl mx-auto">
          {/* Eligibility Boxes – always row */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6">
            <div className="bg-[#6b6b6b] text-white rounded-2xl p-4 md:p-6 text-[14px] md:text-lg leading-relaxed">
              Passed Bachelor Degree of minimum <br />
              3 years duration.
            </div>

            <div className="bg-[#6b6b6b] text-white rounded-2xl p-4 md:p-6 text-[14px] md:text-lg leading-relaxed">
              Obtained at least 50% marks in the <br />
              qualifying Examination.
            </div>
          </div>

          {/* CTA – same width as both boxes */}
          <button
            onClick={onKnowMore}
            className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white text-base md:text-lg font-semibold py-3 md:py-4 rounded-full"
          >
            KNOW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
