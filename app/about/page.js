import NewAbout from "./Components/NewAbout";


export const metadata = {
  title: "About Tulas University, Dehradun | 20 Years of Excellence",
  description: "Learn about Tulas University, Dehradun: our history, vision, NAAC A+ accreditation, campus, faculty and 20 years of delivering industry-focused education.",
  alternates: {
    canonical: "https://tulas.edu.in/about/",
  },
  openGraph: {
    title: "About Tulas University, Dehradun | 20 Years of Excellence",
    description: "Learn about Tulas University, Dehradun: our history, vision, NAAC A+ accreditation, campus, faculty and 20 years of delivering industry-focused education.",
    url: "https://tulas.edu.in/about/",
    type: "website",
  },
};
export default function NewHome() {
  return (
    <>
    <NewAbout/>
    </>
  );
}