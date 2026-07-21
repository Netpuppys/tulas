import React from "react";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";

export const metadata = {
  title: "Tulas Institute in Dehradun, Uttarakhand | Admission Open 2026 | Tulas Institute",
  description:
    "Tulas Institute is a leading Institute in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
  alternates: {
    canonical:
      "https://tulas.edu.in/",
  },
};
export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <NewHomePage/>
    </>
  );
}
