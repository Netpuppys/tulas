import AboutPage from "@/app/about-backup/Components/AboutPage";
import React from "react";
export const metadata = {
  title: "Management Messages | Tulas University, Dehradun",
  description: "Read messages from the Chairman, Vice Chancellor and senior leadership of Tulas University, Dehradun on our academic vision, values and student commitment.",
  alternates: {
    canonical: "https://tulas.edu.in/about/management-messages/",
  },
  openGraph: {
    title: "Management Messages | Tulas University, Dehradun",
    description: "Read messages from the Chairman, Vice Chancellor and senior leadership of Tulas University, Dehradun on our academic vision, values and student commitment.",
    url: "https://tulas.edu.in/about/management-messages/",
    type: "website",
  },
};
function ManagementPage() {
  return (
    <>
      <AboutPage/>
    </>
  );
}

export default ManagementPage;
