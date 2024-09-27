"use client";

import React, { useEffect, useRef, useState } from "react";
import bba from "../../../../public/courses/bba/bba.png";
function Bba({ parentRef }) {
  const images = [
    bba,
    // Add more image paths as needed
  ];
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [randomImage, setRandomImage] = useState(images[0]);
  // Function to pick a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Change image on component mount and every specific event
  useEffect(() => {
    const randomImg = getRandomImage();
    setRandomImage(randomImg);
  }, []); // Run on mount, or you can trigger this on specific events (e.g., onClick)

  const [componentHeight, setComponentHeight] = useState();

  const ref = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    if (childRef.current) {
      const compHeight = childRef.current.getBoundingClientRect().height;
      setComponentHeight(compHeight);
      console.log(compHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && childRef.current) {
        const parentTop = parentRef.current.getBoundingClientRect().top;
        const childTop = childRef.current.getBoundingClientRect().top;

        const positionFromTop = childTop - parentTop;
        const scrollValue = Math.max(window.scrollY - positionFromTop, 0);
        const scroll = Math.min(scrollValue, componentHeight);

        setScrollY(scroll);
        setScaleLeaf(1 + scroll * 0.001);
        setOpacity(Math.max(1 - scroll * 0.001, 0));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [componentHeight]);

  return (
    <div ref={childRef} className="w-full h-fit">
      <div className="w-full h-[200vh] relative bg-transparent overflow-hidden">
        <div
          className={`${
            scrollY > 0 ? "fixed" : "absolute"
          } top-0 left-0 w-screen h-screen z-[9] bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `url(${randomImage.src})`,
            transform: `scale(${scaleLeaf})`,
            opacity: opacity,
          }}
        ></div>
      </div>

      <div ref={ref} className="z-40 bg-transparent h-fit relative pl-4">
        <h5 className="w-full text-white md:w-[50%] px-4 mx-auto py-10 md:py-20 text-[16px] md:text-[22px] font-[TTChocolates] font-normal">
          The three-year Bachelor of Business Administration (BBA) program is
          designed keeping in mind the needs of the bright students who are
          looking for a career in entrepreneurship, management profession or
          towards higher education in business administration. This program is
          open to the students with diverse educational background including,
          humanities, science, arts and commerce. However, being a program with
          challenging curricula and contents, it is accessible mainly to those
          students who have excellent academic record and high potential for
          success. BBA degree helps students to build managerial skills and
          prepares them for business administration positions by adopting some
          of the specialization subjects that are most sought-after in the
          business world.
          <br />
          <br />
          Bachelor in Business Administration degree is the gateway to numerous
          job opportunities in a multitude of sectors like Marketing, Education,
          Finance, Sales, and Government & Private. The BBA program offers
          education and training in management and leadership skills to prepare
          students for managerial roles and entrepreneurship. Students learn
          multiple aspects of business management through lectures, practical
          projects, internships, hands on workshops and symposiums etc.
          <br />
          <br />
          The BBA curriculum is designed by Academia and Industry experts in
          such a way that the students get ample industry exposure and training.
          It helps student to prepare for real-world experiences and reach smart
          business conclusions through empirical analysis, such as planning on
          how an organization operates day-to-day in the face of ongoing changes
          and challenges.
          <br />
          <br />
          The basic goal of this program is to:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Understand and implement concepts related to local and global
              business
            </li>
            <li>Discuss, and apply regulatory and ethical practices</li>
            <li>
              Enhance research, communication, and presentation skills using
              professional literature
            </li>
            <li>
              Demonstrate a combination of knowledge and professional skills.
            </li>
          </ul>
        </h5>
      </div>
    </div>
  );
}

export default Bba;
