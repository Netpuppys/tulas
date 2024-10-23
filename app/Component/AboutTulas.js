"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import deleteForm from "../../public/admissions/deleteForm.png"
import formBanner from "../../public/Homepage/aboutTulas/formBanner.png"

const aboutTulas = <>
  Tulas Institute was established in 2006, under the aegis of Rishabh Educational Trust, Dehradun with the vision of offering excellent academics along with fostering the professional and personal personas of every student of the institute. Tula’s Institute is dedicated to serve the communities by recognizing the diverse needs of individuals.
  <br/>
  <br/>
  With this vision, Tula’s Institute has been ranked in Top 50 Private Engineering college of India for the last 6 years consecutively (from 2016-2021) and also has been ranked in Top 20 Private Engineering college of North India for the past 3 years by “The Times of India-Engineering Survey” ,ranked AA+ by “Career 360”.
  </>

function AboutTulas() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.async = true;
  //   script.src = "https://widgets.nopaperforms.com/emwgts.js";
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  // const aboutTulas = (
  //   <>
  //     <span className="text-[#007A83] italic">Tula’s Institute </span>was
  //     established in <span className="text-[#007A83] italic">2006,</span> under
  //     the aegis of{" "}
  //     <span className="text-[#007A83] italic">
  //       Rishabh Educational Trust, Dehradun
  //     </span>{" "}
  //     with the vision of offering excellent academics along with fostering the
  //     professional and personal personas of every student of the institute.
  //     <span className="text-[#007A83] italic"> Tula’s Institute</span> is
  //     dedicated to serve the communities by recognizing the{" "}
  //     <span className="text-[#007A83] italic">
  //       diverse needs of individuals.
  //     </span>
  //     <br />
  //     <br />
  //     <br />
  //     With this vision,{" "}
  //     <span className="text-[#007A83] italic"> Tula’s Institute </span>has been
  //     ranked in{" "}
  //     <span className="text-[#007A83] italic">
  //       {" "}
  //       Top 50 Private Engineering college of India{" "}
  //     </span>
  //     for the last 6 years consecutively (from 2016-2021) and also has been
  //     ranked in{" "}
  //     <span className="text-[#007A83] italic">
  //       {" "}
  //       Top 20 Private Engineering college of North India{" "}
  //     </span>
  //     for the past 3 years by{" "}
  //     <span className="text-[#007A83] italic">
  //       {" "}
  //       “The Times of India-Engineering Survey”,{" "}
  //     </span>
  //     ranked{" "}
  //     <span className="text-[#007A83] italic"> AA+ by “Career 360”.</span>
  //   </>
  // );

  return (
    <div
      id="2"
      className="bg-transparent flex flex-row relative justify-between px-24 py-20 items-center"
    >
      <div className="w-[50%]">
        <h3 className="text-[#fff] font-[TTChocolates] font-semibold text-xl 2xl:text-2xl max-w-[682px] ml-0 mr-auto">
          {aboutTulas}
        </h3>
      </div>
      <div className="w-[50%]">
        <div
          className="max-w-[429px] h-fit ml-auto mr-0 "
        >
          <Image
            src={deleteForm}
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>

      {/* bg image */}
      <Image
        src={formBanner}
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        alt=""
      />
    </div>
  );
}

export default AboutTulas;

// tis widget
// <div
// className="npf_wgts"
// data-height="500px"
// style={{
//   width: "100%",
//   margin: "auto",
//   marginBottom: "2rem",
// }}
// data-w="43cde486b796708909f0caeb58a1cd48"
// ></div>
