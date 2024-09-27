"use client";

import React, { useEffect, useRef, useState } from "react";
import mba from "../../../../public/courses/mba/mba.png";
function MBA({ parentRef }) {
  const images = [
    mba,
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
          Master of Business Administration (MBA) program is a two year degree
          program planned to encourage the capacities expected from world class
          managers and entrepreneurs. The scope of MBA aspirant, regardless,
          isn’t limited rigidly to the business world but also to the public
          region, government, private industry, and various areas.
          <br />
          <br />
          In current scenario MBA is the well-known master certification program
          globally. Today, there are more than 2,500 MBA program specializations
          available all over the planet; most are introduced in English. First
          MBA program was introduced at universities in the United States around
          the turn of the 20th century.
          <br />
          <br />
          A Master in Business Administration degree is the entryway to
          different open positions in countless regions like Marketing,
          Education, Finance, Sales, Production, operations, administration and
          so on. The MBA program involves tutoring and planning in organization
          and give capacities to prepare students for regulatory positions
          globally. This program is well designed for those individuals who need
          to seek career in the corporate sector.
          <br />
          <br />
          <ul className="list-disc ml-5">
            <li>
              Marketing: Since the beginning of modern business world, the
              economics has revolved around how well you market your product or
              service. The success and failure of any product or service depends
              upon only one situation that how well you have analyzed the market
              and how well you have marketed your product or service. With
              marketing as a specialization, the students learn the key aspects
              of the modern marketing strategies and can make marketing plans
              keeping in mind the very context of product promotion and
              positioning.
            </li>
            <br />
            <li>
              Human Resource: There is always a scarcity of this type of able
              and competent resource in any organization. With Human Resource as
              your specialization one can learn the basics to advanced aspects
              of Training and development, recruiting, Compensation, leadership
              etc. and can gain access to entry level to advanced position in an
              organization.
            </li>
            <br />
            <li>
              Finance: With Finance as a specialization, the students learn the
              basics to advanced aspects of behavioral finance, corporate
              finance, financial mathematics, financial accounting and analysis
              etc. and get and easy access to finance level market both in
              private and government sector.
            </li>
            <br />
            <li>
              International Business: The specialization teaches the core
              aspects of Export and Import Management, International Marketing,
              Foreign Exchange Management, International Finance International
              Logistics etc. and can give the entry level position in jobs and
              business opportunities beyond the borders of the nation.
            </li>
            <br />
            <li>
              Entrepreneurship and Venture development: The management
              specialization on Entrepreneurship & Venture development provides
              a diverse set of options for students to hone their
              entrepreneurial skills and can access immense possibilities of
              setting up their own business based upon their requirements and
              market situation.
            </li>
            <br />
            <li>
              Agri-Business Management: The backbone of the Indian Economy –
              Agriculture and Agribusiness provides 54% employment to the Indian
              Population. The recent spurt in full time MBA specialization in
              Agri Business Management program offers focus on development of
              agri-managerial skills, in the curriculum. The programme aims at
              enabling meritorious agricultural graduates acquire the critical
              competencies to function as effective Agri-business managers.
            </li>
            <br />
            <li>
              Business Analytics: Business analytics (BA) is defined as an
              iterative process of methodical exploration of data from a
              business or other organization. The practice relies heavily on
              statistical analysis, and is employed by organizations to drive
              informed decision-making. Business analytics helps companies get
              insights about their performance, which serves as a corporate
              asset, giving them a competitive edge. Business analytics also
              allows companies to optimize and even automate business processes.
              Business analytics gives a company important competitive
              advantages, such as:
            </li>
            <br />
            <ul className="list-disc ml-5">
              <li>Faster answers to business questions</li>
              <li>Answers based on information instead of guesswork</li>
              <li>Insights into customer behaviour</li>
              <li>
                Discovering opportunities for cross-selling and up-selling
              </li>
              <li>On-demand business metrics reports</li>
            </ul>
          </ul>
        </h5>
      </div>
    </div>
  );
}

export default MBA;
