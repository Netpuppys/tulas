import React from "react";
import AdmissionPage from "./Components/AdmissionPage";

export const metadata = {
  title: "Admission Procedure 2026 | How to Apply | Tulas University",
  description: "Step-by-step admission procedure at Tulas University, Dehradun. Check eligibility, required documents, entrance criteria, fee payment and counselling dates.",
  alternates: {
    canonical: "https://tulas.edu.in/admission-procedure/",
  },
  openGraph: {
    title: "Admission Procedure 2026 | How to Apply | Tulas University",
    description: "Step-by-step admission procedure at Tulas University, Dehradun. Check eligibility, required documents, entrance criteria, fee payment and counselling dates.",
    url: "https://tulas.edu.in/admission-procedure/",
    type: "website",
  },
};

function AdmissionProcedure() {
  return (
    <>

        <AdmissionPage />
      
    </>
  );
}

export default AdmissionProcedure;
