"use client";
import React, { useState } from "react";
import admission from "../../public/Homepage/BannerHome/BannerImage2.webp";
import event from "../../public/Homepage/LifeAtTulas/events2.webp";
import Image from "next/image";
import FormPopup from "../../component/formPopup";
const StatsAndNews = () => {
  const [formPopup, setFormPopup] = useState(false);
  const stats = [
    {
      number: "3000+",
      label: "Bright Students",
    },
    {
      number: "150+",
      label: "Faculty Members",
    },
    {
      number: "19+",
      label: "Years of Experience",
    },
    {
      number: "7000+",
      label: "Glorious Alumni",
    },
  ];

  const handleFormPopup = () => {
    setFormPopup(true);
  };

  const newsCard = [
    {
      date: "1 April 2025",
      title: "Tula's Annual Fest Sanskriti",
      image: event,
      linkTo:
        "https://www.instagram.com/reel/DHtDKieyfnd/?igsh=MXZ6MnYyYW52amY5aw== ",
    },
    {
      date: "1 April 2025",
      title: "Admission Open 2025-26",
      image: admission,
      hasFunction: true,
    },
  ];

  return (
    <div className="bg-[#007A83] text-white py-8 px-8 md:px-0 md:py-[3%]">
      <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* Stats Section */}
        <div className="w-full md:w-[calc(40%-1.5rem)] flex items-center flex-wrap gap-6">
          {stats.map((item, index) => (
            <div key={index} className="w-[calc(50%-0.75rem)] text-center">
              <p className="text-[clamp(8px,7.5vw,30px)] leading-tight md:text-[clamp(10px,2.2vw,45px)] text-white font-[TTChocolatesMedium]">
                {item.number}
              </p>
              <p className="text-[clamp(8px,4vw,30px)] md:text-[clamp(10px,0.9vw,45px)] text-white font-[TTChocolatesMedium]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] md:h-auto md:w-[1px] bg-white"></div>
        {/* News Section */}
        <div className="w-full md:w-[calc(60%-1.5rem)]">
          <h2 className="text-[clamp(8px,5.5vw,30px)] md:text-[clamp(10px,1.4vw,45px)] leading-tight text-white font-[TTChocolatesMedium] border-b border-white pb-2">
            Latest News & Notifications
          </h2>
          <div className="flex flex-col md:flex-row mt-6 gap-6">
            {newsCard.map((news, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden group relative text-white bg-black bg-opacity-50`}
              >
                <Image
                  src={news.image}
                  alt=""
                  className="hidden opacity-50 z-0 group-hover:flex absolute w-full h-full object-cover transition-all duration-300 ease-in"
                />
                <div className="p-4 z-10 relative">
                  <p className="text-[clamp(8px,3.5vw,30px)] md:text-[clamp(10px,0.9vw,45px)] text-[#E69706] font-[TTChocolatesMedium]">
                    {news.date}
                  </p>
                  <p className="text-lg mt-2 mb-6">{news.title}</p>
                  <button
                    onClick={(e) => {
                      if (news.hasFunction) {
                        handleFormPopup();
                      } else {
                        window.open(news.linkTo, "_blank");
                      }
                    }}
                    target={news.hasFunction ? "" : "_blank"}
                    className=" bg-[#760135] px-4 py-2 text-sm rounded cursor-pointer"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {formPopup && (
        <FormPopup formPopup={formPopup} setFormPopup={setFormPopup} />
      )}
    </div>
  );
};
export default StatsAndNews;
