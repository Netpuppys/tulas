import React from "react";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";

export const metadata = {
  title: "Tulas University, Dehradun, Uttarakhand | Admissions Open 2026",
  description:
    "Tulas University, Dehradun is UGC approved and NAAC A+ accredited. Study B.Tech, MBA, BBA, BCA, MCA, B.Pharm, LLB and B.Sc Agriculture. Admissions 2026 open.",
  alternates: {
    canonical: "https://tulas.edu.in/",
  },
  openGraph: {
    title: "Tulas University, Dehradun, Uttarakhand | Admissions Open 2026",
    description:
      "Tulas University, Dehradun is UGC approved and NAAC A+ accredited. Study B.Tech, MBA, BBA, BCA, MCA, B.Pharm, LLB and B.Sc Agriculture. Admissions 2026 open.",
    url: "https://tulas.edu.in/",
    type: "website",
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
