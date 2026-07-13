import React from "react";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";

export const metadata = {
  title: "Tulas University in Dehradun, Uttarakhand | Admission Open 2026 | Tulas University",
  description:
    "Tulas University is a leading university in Dehradun, Uttarakhand, known for academic excellence, modern infrastructure and strong placement outcomes. UGC Approved and NAAC A+ Accredited",
};
export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <NewHomePage/>
    </>
  );
}
