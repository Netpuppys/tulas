"use client";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import deleteForm from "../../public/admissions/deleteForm.png";
import formBanner from "../../public/Homepage/aboutTulas/formBanner.png";

const aboutTulas = (
  <>
    Tulas Institute was established in 2006, under the aegis of Rishabh
    Educational Trust, Dehradun with the vision of offering excellent academics
    along with fostering the professional and personal personas of every student
    of the institute. Tula’s Institute is dedicated to serve the communities by
    recognizing the diverse needs of individuals.
    <br />
    <br />
    With this vision, Tula’s Institute has been ranked in Top 50 Private
    Engineering college of India for the last 6 years consecutively (from
    2016-2021) and also has been ranked in Top 20 Private Engineering college of
    North India for the past 3 years by “The Times of India-Engineering Survey”
    ,ranked AA+ by “Career 360”.
  </>
);

function AboutTulas() {
  // useLayoutEffect(() => {
  //   const loadScriptAndStyles = () => {
  //     window.ee_form_widget_baseurl = "https://eewidget.extraaedge.com/";

  //     if (!document.getElementById("__formWidgetCss")) {
  //       const linkElement = document.createElement("link");
  //       linkElement.id = "__formWidgetCss";
  //       linkElement.rel = "stylesheet";
  //       linkElement.href =
  //         window.ee_form_widget_baseurl + "css/stylesheet.min.css";
  //       linkElement.type = "text/css";
  //       document.getElementsByTagName("head")[0].appendChild(linkElement);
  //     }
  //     const scriptElement = document.createElement("script");
  //     scriptElement.type = "text/javascript";
  //     scriptElement.src =
  //       window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
  //     scriptElement.onload = async function () {
  //       const _eeFormWidget = new eeFormWidget();
  //       await _eeFormWidget.init("tulas", "form-14", "ee-form-14");
  //     };

  //     document.getElementsByTagName("head")[0].appendChild(scriptElement);
  //   };

  //   loadScriptAndStyles();
  // }, []);

  return (
    <div
      id="2"
      className="bg-transparent flex flex-col-reverse md:flex-row gap-8 md:gap-0 relative justify-between px-8 lg:px-24 py-20 items-center"
    >
      <div className="w-full md:w-[50%]">
        <h3 className="text-[#fff] font-[TTChocolates] font-semibold text md:text-2xl max-w-[682px] ml-0 mr-auto">
          {aboutTulas}
        </h3>
      </div>
      <div className="w-full md:w-[50%]">
        <div className="max-w-[429px] h-fit ml-auto mr-0 ">
          <div id="ee-form-14"></div>
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
