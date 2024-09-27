"use client";

import React, { useEffect, useRef, useState } from "react";
import bjmc from "../../../../public/courses/bjmc/bjmc.png";
function BJMC({ parentRef }) {
  const images = [
    bjmc,
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
          Bachelor of Journalism & Mass Communication is a three year
          interdisciplinary program in which students learn holistically about
          media and its various aspects. Students learn the underpinning
          theories related to media, its history, and its legal and ethical
          obligations. They also learn to frame news, design the headlines and
          outlet of the newspaper. Students are taught about the media laws,
          constitution and other relevant laws which are required in public life
          as a Journalist. Apart from it, program also nurtures creative aspects
          of students that includes photography, film-making, editing and other
          aspects of visual story telling like screen writing and story
          boarding. Students who aspire to develop their taste in the field of
          advertising & public relations get to learn about history and theories
          related to respective field. Subjects like Development Communication,
          Visual Communication & Media research are also taught to the students.
          <br />
          <br />
          In addition, the program not only develops media related skills but
          also enriches students to provide pervasive understanding of media and
          its function’s historicity and totality.
          <br />
          <br />
          The Department conducts outdoor photography walks, educational
          excursions, movie screenings followed by discussions, random
          extempore, interactive sessions from industry experts and
          extracurricular activities which enrich students’ social engagements.
          <br />
          <br />
          Apart from it, students are engaged with diverse communities like
          media fraternity, cultural groups, regional artists, film stars, award
          winning athletes and reformers via different modes of engagement.
        </h5>
      </div>
    </div>
  );
}

export default BJMC;
