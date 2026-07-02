import React from "react";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";

export const metadata = {
  title: "Best College in Dehradun, Uttarakhand | Admission Open 2026 | Tulas Institute",
  description:
    "Tulas Institute, Dehradun offers UGC recognized, NAAC A+ accredited BTech, MBA, MCA, BBA, BCA, BSc Agriculture & Many More Programs. Admissions 2026 Open. Apply Now!",
};
export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <NewHomePage/>
    </>
  );
}
