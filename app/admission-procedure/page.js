import React from "react";
import AdmissionPage from "./Components/AdmissionPage";

export const metadata = {
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/admission-procedure",
  },
};

function AdmissionProcedure() {
  return (
    <>
      <head>
        <title>
          Admission Procedure for Btech, Mtech, Mba, Diploma, Bba, Bca, Mca
        </title>
        <meta
          name="description"
          content="Admission procedure and criteria for Btech,Mtech,Bba,Mba,Bca,Mca,Diploma.Tula is situated in Dehradun,Uttarakhand,India.Top College 9837983721."
        />
      </head>
      <body>
        <AdmissionPage />
      </body>
    </>
  );
}

export default AdmissionProcedure;
