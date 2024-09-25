"use client";

import React, { useEffect, useRef, useState } from "react";
import plant from "../../../public/bsc-agriculture/pLANT.png";
import Table from "./table";
import Carousel from "./Crousel";
function Plant({ parentRef }) {
  const [scaleLeaf, setScaleLeaf] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
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
            backgroundImage: `url(${plant.src})`,
            transform: `scale(${scaleLeaf})`,
            opacity: opacity,
          }}
        ></div>
      </div>

      <div ref={ref} className="z-40 bg-transparent h-fit relative pl-4">
        <h5 className="w-full md:w-[50%] px-4 mx-auto py-10 md:py-20 text-[16px] md:text-[22px] font-[TTChocolates] font-normal">
          A bachelor’s degree in agriculture is a broad-based program with a lot
          of promise. It covers topics such as food production, gardening,
          animal husbandry, rural economy and development, environmental health
          and so on. Other businesses may face layoffs, but agriculture will
          never be one of them because “food” is a basic human need. There will
          never be a recession or a slowdown when it comes to feeding the
          planet. Truly speaking, advances in technology, research, and
          inventions in this field have greatly expanded the scope of
          agriculture.
          <br />
          <br />
          A student pursuing B.Sc. Agriculture degree will study Agronomy, Soil
          Science, Horticulture, Plant Breeding and Genetics, Entomology, Plant
          Pathology, Animal Science, Extension Education, Plant Biochemistry,
          Agriculture Economics and Fundamentals of Biotechnology, among other
          subjects. The course is based on ICAR (Indian Council of Agricultural
          Research) recommendations and is intended to teach students how to
          improve crop production in a sustainable manner while also providing a
          broad understanding of agriculture and allied fields.
          <br />
          <br />
          <strong>The primary goal of this program is to:</strong>
          <br />
          <br />
          <ul className="list-disc ml-5">
            <li>
              Instil subject-specific knowledge while also establishing a link
              between practical solutions and theory.
            </li>
            <br />
            <li>
              Encourage students’ personal development and self-confidence,
              which will provide them with opportunities to work in the
              agribusiness.
            </li>
            <br />
            <li>
              Using scientific and experimental evidence to make
              agriculture-related issues appealing.
            </li>
            <br />
            <li>
              Use practical applications and research to hone problem-solving
              skills.
            </li>
          </ul>
        </h5>
      </div>
      <Carousel />
      <Table />
    </div>
  );
}

export default Plant;
