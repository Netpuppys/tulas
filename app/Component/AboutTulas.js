"use client";
import React, { useEffect } from "react";

function AboutTulas() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const aboutTulas = (
    <>
      <span className="text-[#007A83] italic">Tula’s Institute </span>was
      established in <span className="text-[#007A83] italic">2006,</span> under
      the aegis of{" "}
      <span className="text-[#007A83] italic">
        Rishabh Educational Trust, Dehradun
      </span>{" "}
      with the vision of offering excellent academics along with fostering the
      professional and personal personas of every student of the institute.
      <span className="text-[#007A83] italic"> Tula’s Institute</span> is
      dedicated to serve the communities by recognizing the{" "}
      <span className="text-[#007A83] italic">
        diverse needs of individuals.
      </span>
      <br />
      <br />
      With this vision,{" "}
      <span className="text-[#007A83] italic"> Tula’s Institute </span>has been
      ranked in{" "}
      <span className="text-[#007A83] italic">
        {" "}
        Top 50 Private Engineering college of India{" "}
      </span>
      for the last 6 years consecutively (from 2016-2021) and also has been
      ranked in{" "}
      <span className="text-[#007A83] italic">
        {" "}
        Top 20 Private Engineering college of North India{" "}
      </span>
      for the past 3 years by{" "}
      <span className="text-[#007A83] italic">
        {" "}
        “The Times of India-Engineering Survey”{" "}
      </span>
      ,ranked{" "}
      <span className="text-[#007A83] italic"> AA+ by “Career 360”.</span>
    </>
  );
  return (
    <div className="h-screen w-screen bg-white flex flex-row justify-between px-24 items-center">
      <h3 className="text-[#2B2B2B] font-[Rothwood] font-semibold text-2xl w-1/2 px-8">
        {aboutTulas}
      </h3>
      <div
        className="w-[40%] px-8 py-8 bg-[#C0E1E3]"
        style={{
          boxShadow: "0px 3.29px 35.039px 0px rgba(0, 0, 0, 0.50)",
          borderRadius: "30px",
        }}
      >
        <div
          className="npf_wgts"
          data-height="450px"
          style={{
            width: "100%",
            margin: "auto",
            marginBottom: "2rem",
          }}
          data-w="43cde486b796708909f0caeb58a1cd48"
        ></div>
      </div>
    </div>
  );
}

export default AboutTulas;
