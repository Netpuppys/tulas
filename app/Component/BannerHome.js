"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import bannerImage1 from "../../public/Homepage/BannerHome/BannerImage1.webp";
import bannerImage2 from "../../public/Homepage/BannerHome/BannerImage2.webp";
import bannerImage3 from "../../public/Homepage/BannerHome/BannerImage3.webp";
import bannerImage4 from "../../public/Homepage/BannerHome/BannerImage4.webp";
import bannerImage5 from "../../public/Homepage/BannerHome/BannerImage5.webp";

const bannerImages = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,
];
const title = (
  <>
    <span className="text-[#007A83]">UNLOCK</span> NEW <br />
    PATHWAYS TO <span className="text-[#007A83]">SUCCESS</span>
  </>
);

function BannerHome({ isChecked }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(bannerImages[0]);
  const [scrollToSection, setScrollToSection] = useState(1);
  const maxSections = 15;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < bannerImages.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerImages]);

  useEffect(() => {
    setCurrentImage(bannerImages[currentIndex]);
  }, [currentIndex]);

  const handleScrollArrow = () => {
    if (scrollToSection < maxSections) {
      setScrollToSection((prev) => prev + 1);
    }

    if (scrollToSection < maxSections) {
      const element = document.getElementById(`${scrollToSection}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen relative bg-black bg-opacity-50 flex items-start z-0"
    >
      {/* background */}
      {/* <div
        className={`z-10 w-full h-screen relative duration-300 ease-in overflow-hidden `}
      ></div> */}
      <div className="flex z-10 flex-col self-center items-center pt-4 absolute top-1/2 gap-2 transform -translate-y-1/2 right-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${
              index === currentIndex
                ? "border-2 border-white p-[2px] rounded-full"
                : "border-none"
            } `}
          >
            <div
              className={`w-[10px] h-[10px] md:w-[15px] z-10 md:h-[15px] rounded-full flex items-center justify-center cursor-pointer ${
                index === currentIndex
                  ? " bg-white"
                  : " bg-gray-400 blur-[0.6px]"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div
        className={`bottom-4 md:bottom-10 md:pr-[140px] z-10 absolute mx-4 md:ml-16 
        ${isChecked ? "md:pl-[440px] md:animate-translateLeftMenu" : "pl-0"}
        `}
      >
        <h2 className="text-[38px] md:text-[clamp(20px,4.2vw,70px)] text-white z-10 font-[CarotSlab]">
          {title}
        </h2>
      </div>
      <button
        onClick={handleScrollArrow}
        className="hidden md:block bottom-10 right-10 absolute z-10 w-[100px] aspect-square"
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <Image
            className="animate-scrollSpin absolute w-full h-fit text-white"
            src={ScrollImage}
            alt=""
          />
          <IoIosArrowRoundDown className="absolute text-[40px] font-thin" />
        </div>
      </button>
    </div>
  );
}

export default BannerHome;

// "use client";

// import Image from "next/image";
// import React, { useState, useRef, useEffect } from "react";
// import ScrollImage from "../../public/Homepage/BannerHome/scrollWidget.png";
// import { IoIosArrowRoundDown } from "react-icons/io";
// import bannerImage1 from "../../public/Homepage/BannerHome/BannerImage1.webp"
// import bannerImage2 from "../../public/Homepage/BannerHome/BannerImage2.webp"
// import bannerImage3 from "../../public/Homepage/BannerHome/BannerImage3.webp"
// import bannerImage4 from "../../public/Homepage/BannerHome/BannerImage4.webp"
// import bannerImage5 from "../../public/Homepage/BannerHome/BannerImage5.webp"

// function BannerHome({ isChecked }) {

// const bannerImages = [
//   bannerImage1,
//   bannerImage2,
//   bannerImage3,
//   bannerImage4,
//   bannerImage5
// ]

//   const title = (
//     <>
//       <span className="text-[#007A83]">UNLOCK</span> NEW <br />
//       PATHWAYS TO <span className="text-[#007A83]">SUCCESS</span>
//     </>
//   );
//   const paragraph =
//     "Tula’s Institute was established in 2006, under the aegis of Rishabh Educational Trust, Dehradun with the vision of offering excellent academics along with fostering the professional and personal personas of every student of the institute.";
//   // const bannerImages = [
//   //   "https://tulas-assets.s3.ap-south-1.amazonaws.com/BannerImage3.webp",
//   //   "https://tulas-assets.s3.ap-south-1.amazonaws.com/BannerImage2.webp",
//   //   "https://tulas-assets.s3.ap-south-1.amazonaws.com/banner+1.jpg",
//   //   "https://tulas-assets.s3.ap-south-1.amazonaws.com/banner+4.jpg",
//   //   "https://tulas-assets.s3.ap-south-1.amazonaws.com/BannerImage5.webp",
//   // ];
//   const [currentIndex, setCurrentIndex] = useState(2);
//   const [fade, setFade] = useState(false);
//   const containerRef = useRef(null);
//   const intervalRef = useRef(null);
//   const maxSections = 13;
//   const [scrollToSection, setScrollToSection] = useState(1);

//   const changeImage = (index) => {
//     setFade(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setFade(false);
//     }, 300); // Duration of fade out/in
//   };

//   const handleDotClick = (index) => {
//     if (index !== currentIndex) {
//       changeImage(index);
//       resetInterval();
//     }
//     if (containerRef.current) {
//       containerRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const resetInterval = () => {
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex < bannerImages.length - 1 ? prevIndex + 1 : 0
//       );
//     }, 3000);
//   };

//   useEffect(() => {
//     resetInterval();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     changeImage(currentIndex);
//   }, [currentIndex]);

//   const handleScrollArrow = () => {
//     if (scrollToSection < maxSections) {
//       setScrollToSection((prev) => prev + 1);
//     }

//     if (scrollToSection < maxSections) {
//       const element = document.getElementById(`${scrollToSection}`);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen relative flex items-start z-0"
//     >
//       {/* background */}
//       <div
//         className={`-z-10 w-full h-full inset-0 transition-opacity duration-500 overflow-hidden ${
//           fade ? "opacity-20" : "opacity-100"
//         }`}
//       >
//         <Image
//           src={bannerImages[currentIndex]}
//           alt=""
//           width={2000}
//           height={1000}
//           className="object-cover w-full h-screen"
//         />
//       </div>
//       <div className="flex z-10 flex-col self-center items-center pt-4 absolute top-1/2 gap-2 transform -translate-y-1/2 right-2">
//         {bannerImages.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => handleDotClick(index)}
//             className={`${
//               index === currentIndex
//                 ? "border-2 border-white p-[2px] rounded-full"
//                 : "border-none"
//             } `}
//           >
//             <div
//               className={`w-[10px] h-[10px] md:w-[15px] z-10 md:h-[15px] rounded-full flex items-center justify-center cursor-pointer ${
//                 index === currentIndex
//                   ? " bg-white"
//                   : " bg-gray-400 blur-[0.6px]"
//               }`}
//             ></div>
//           </div>
//         ))}
//       </div>
//       <div
//         className={`bottom-4 md:bottom-10 md:pr-[140px] z-10 absolute mx-4 md:ml-16 ${
//           isChecked ? "md:pl-[440px] md:animate-translateLeftMenu" : "pl-0"
//         }`}
//       >
//         <h2 className="text-[38px] md:text-[clamp(20px,4.2vw,70px)] text-white z-10 font-[CarotSlab]">
//           {title}
//         </h2>
//         {/* <h4 className="w-full text-justify md:max-w-[800px] text-[clamp(15px,4.5vw,30px)] text-white md:text-[clamp(12px,1.2vw,30px)] font-[TTChocolates]">
//           {paragraph}
//         </h4> */}
//       </div>
//       <button
//         onClick={handleScrollArrow}
//         className="hidden md:block bottom-10 right-10 absolute z-10 w-[100px] aspect-square"
//       >
//         <div className="relative w-full h-full flex justify-center items-center">
//           <Image
//             className="animate-scrollSpin absolute w-full h-fit text-white"
//             src={ScrollImage}
//             alt=""
//           />
//           <IoIosArrowRoundDown className="absolute text-[40px] font-thin" />
//         </div>
//       </button>
//     </div>
//   );
// }

// export default BannerHome;
