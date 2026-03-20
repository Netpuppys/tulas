"use client";
import { useState } from "react";
import Image from "next/image";

export default function McaLandingAccordianSpecialization() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Journalism & Reporting",
      // subitle: "Build the foundations of tomorrow",
      text: "Develop the ability to research, write and report news stories across print and digital platforms. Build skills in news writing, interviewing, fact-checking and editorial structuring, along with an understanding of media ethics and journalism fundamentals.",
      mobileImage: "/bjmcimage/bjmcspecial.jpg",
      image: "/bjmcimage/bjmcspecial.jpg",
    },
    {
      title: `Digital Media & Content Creation`,
      // subitle: "Create technology powering digital world",
      text: "Build foundational skills in content creation for social media, blogs and digital platforms. Gain hands-on exposure to content planning, video creation, basic editing tools and audience engagement strategies across digital ecosystems.",
      mobileImage: "/bjmcimage/bjmcspecial1.jpg",
      image: "/bjmcimage/bjmcspecial1.jpg",
    },
    {
      title: "Advertising & Brand Communication",
      // subitle: "Turn data into futuristic decisions",
      text: "Understand how brands communicate and influence audiences. Develop skills in copywriting, campaign ideation, visual communication and brand storytelling, along with an understanding of consumer behaviour and marketing communication basics.",
      mobileImage: "/bjmcimage/bjmcspecial2.jpg",
      image: "/bjmcimage/bjmcspecial2.jpg",
    },
    {
      title: "Public Relations & Corporate Communication",
      // subitle: "Secure the Digital World",
      text: "Gain exposure to media relations, press communication and reputation management. Build skills in writing press releases, managing communication strategies and handling brand messaging across corporate and public platforms.",
      mobileImage: "/bjmcimage/bjmcspecial3.jpg",
      image: "/bjmcimage/bjmcspecial3.jpg",
    },
    {
      title: `Film, Video & Audio Production`,
      // subitle: "Build Machines that Think",
      text: "Develop practical skills in scripting, camera handling, video shooting and editing using basic production tools. Gain hands-on experience in creating audio-visual content, short videos and media productions from concept to final output.",
      mobileImage: "/bjmcimage/bjmcspecial4.jpg",
      image: "/bjmcimage/bjmcspecial4.jpg",
    },
    {
      title: `Media Studies & Communication Foundations`,
      // subitle: "Connect the World Through Technology",
      text: "Understand communication theories, media laws, audience behaviour and development communication. Build analytical skills to evaluate media content, understand industry trends and interpret the role of media in society.",
      mobileImage: "/bjmcimage/bjmcspecial5.jpg",
      image: "/bjmcimage/bjmcspecial5.jpg",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">

      {/* Heading */}
      <h2 className="text-center text-[clamp(38px,5vw,38px)] font-extrabold mb-10">
        <span className="text-orange-500">Specialisations</span>{" "}
        <span className="text-gray-800">We Offer</span>
      </h2>

      {/* ---------------- MOBILE (ACCORDION) ---------------- */}
      <div className="space-y-4 md:hidden">
        {items.map((item, index) => (
          <MobileAccordion
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      {/* ---------------- DESKTOP (VERTICAL TABS) ---------------- */}
      <div className="hidden md:grid grid-cols-12 gap-10">

        {/* LEFT TABS */}
        <div className="col-span-4 space-y-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => toggle(index)}
              className={`w-full text-left px-5 py-4 rounded-lg border transition ${
                activeIndex === index
                  ? "bg-orange-600 text-white border-orange-500"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-8 border rounded-xl p-6 shadow-sm">

          {items[activeIndex] && (
            <>
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                width={800}
                height={500}
                className="rounded-lg mb-5 w-full h-[260px] md:h-[320px] object-cover"
              />

              <h3 className="text-2xl font-semibold mb-3 text-orange-500">
                {items[activeIndex].subitle}
              </h3>

              <p className="text-gray-600">
                {items[activeIndex].text}
              </p>
            </>
          )}

        </div>
      </div>

    </section>
  );
}

/* MOBILE ACCORDION COMPONENT */
function MobileAccordion({ item, index, activeIndex, setActiveIndex }) {
  const toggle = () => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">

      <button
        onClick={toggle}
        className="w-full text-left px-5 py-4 flex justify-between items-center text-black font-semibold text-lg"
      >
        {item.title}
        <span className="text-xxl text-orange-500">
          {activeIndex === index ? "-" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          activeIndex === index
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 border-t">

            <Image
              src={item.mobileImage}
              alt={item.title}
              width={800}
              height={400}
              className="rounded-lg mb-4 w-full h-[220px] object-cover"
            />

            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              {item.subitle}
            </h3>

            <p className="text-gray-600">{item.text}</p>

          </div>
        </div>
      </div>

    </div>
  );
}