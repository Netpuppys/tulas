import appliedScience from "../../../../public/courses/applied-science/applied-science.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import ASCdocument from "../../../../public/courses/applied-science/ASC.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import MukeshPathela from "../../../../public/courses/applied-science/facultyData/MukeshPathela.webp";
import DrTarunKumar from "../../../../public/courses/applied-science/facultyData/DrTarunKumar.webp";
import DrBalendraPratap from "../../../../public/courses/applied-science/facultyData/DrBalendraPratap.webp";
import AshishMishra from "../../../../public/courses/applied-science/facultyData/AshishMishra.webp";
import SanketSaxena from "../../../../public/courses/applied-science/facultyData/SanketSaxena.webp";
import Tikaram from "../../../../public/courses/applied-science/facultyData/Tikaram.webp";
import SanojMandal from "../../../../public/courses/applied-science/facultyData/SanojMandal.webp";
import DeepakChandola from "../../../../public/courses/applied-science/facultyData/DeepakChandola.webp";
import SugamGupta from "../../../../public/courses/applied-science/facultyData/SugamGupta.webp";
import Shubhamjoshi from "../../../../public/courses/applied-science/facultyData/Shubhamjoshi.webp";
import SmitaNegi from "../../../../public/courses/applied-science/facultyData/SmitaNegi.webp";
import SHAKUNTLA from "../../../../public/courses/applied-science/facultyData/SHAKUNTLA.webp";
import ShaistaHasan from "../../../../public/courses/applied-science/facultyData/ShaistaHasan.webp";
import pooja from "../../../../public/courses/applied-science/facultyData/pooja.webp";
import SachinArora from "../../../../public/courses/applied-science/facultyData/SachinArora.webp";
import YaminiGoyal from "../../../../public/courses/applied-science/facultyData/YaminiGoyal.webp";
import kanchan from "../../../../public/courses/applied-science/facultyData/kanchan.webp";
import Navjot from "../../../../public/courses/applied-science/facultyData/Navjot.webp";
import Rachna from "../../../../public/courses/applied-science/facultyData/Rachna.webp";
import Neelima from "../../../../public/courses/applied-science/facultyData/Neelima.webp";
import Link from "next/link";
export const images = [
  appliedScience,
  // Add more image paths as needed
];
export const content = (
  <>
    The Department of Applied Sciences & Engineering is an initiating and
    supporting department for the Institute’s engineering and other departments.
    Mathematics, Physics, Chemistry, Environmental Science, foundation of
    Engineering and Professional Communication are among the core courses
    covered by the department. The department boasts a highly qualified and
    knowledgeable faculty, as well as well-equipped laboratories. The
    department, which was established in 2006 as one of the faculty’s
    departments, participates in the institute’s B.Tech., MCA, BCA, B.Sc.
    Agriculture, and Polytechnic programs.
  </>
);
export const items = [
  {
    title: "STRENGTHS AND USP’S OF THE DEPARTMENT",
    description:
      ["The department is dedicated to educational and soft-skills excellence."],
    image: USP,
  },
  {
    title: "Course Outcomes",
    description: [<Link href={ASCdocument}>B.Tech 1st Year</Link>],
    image: Course,
  },
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To equip students with skills and strong conceptual understanding in applied sciences and basic engineering domains to pursue higher learning.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To enable engineering students master the fundamental concepts of
            applied sciences.
          </li>
          <li>
            To impart essential knowledge through fundamental subjects related
            to various engineering disciplines.
          </li>
          <li>
            To prepare students for their successful career based on strong
            moral and ethical principles.
          </li>
          <li>
            To develop lifelong learning abilities and developing understanding
            of social requirements and problems from the outset of a
            professional life.
          </li>
          <li>
            To build strong outreach and communication skills so that students
            can effectively communicate scientific knowledge to a variety of
            stakeholders and audiences.
          </li>
        </ul>
      </>
    ),
    image: DepartmentalMission,
  },
];
export const cards = [{ title: "Senior Faculty" }];

export const facultyData = [
  // Existing faculty members...

  {
    name: "Mr. Mukesh Pathela",
    education: "B.E, M.Tech, Ph.D (P)",
    experience: "17 Years",
    designation: "Assistant Professor and HoD",
    specialization:
      "Analog Circuits, Digital Communication, Digital Image Processing",
    publications:
      "14 Research publications in reputed journals and conferences",
    imageUrl: MukeshPathela, // Add the path for the image
  },
  {
    name: "Dr. Tarun Kumar",
    education: "B.Sc, M.Sc, Ph.D",
    experience: "12 Years",
    designation: "Professor",
    specialization: "Chemistry",
    publications:
      "08 Research publications in reputed journals and conferences",
    imageUrl: DrTarunKumar, // Add the path for the image
  },
  {
    name: "Dr. Balendra Pratap Singh",
    education: "B.Sc, M.Sc, Ph.D",
    experience: "3 Years",
    designation: "Assistant Professor",
    specialization: "Physics",
    publications:
      "04 Research publications in reputed journals and conferences",
    imageUrl: DrBalendraPratap, // Add the path for the image
  },
  {
    name: "Dr. Ashish Mishra",
    education: "B.Sc, M.Sc, Ph.D",
    experience: "3 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics",
    publications:
      "14 Research publications in reputed journals and conferences",
    imageUrl: AshishMishra, // Add the path for the image
  },
  {
    name: "Dr. Sanket Saxena",
    education: "B.Sc, M.Sc, Ph.D",
    experience: "17 Years",
    designation: "Assistant Professor",
    specialization: "Chemistry",
    publications:
      "06 Research publications in reputed journals and conferences",
    imageUrl: SanketSaxena, // Add the path for the image
  },
  {
    name: "Mr. Tikaram",
    education: "B.Sc, M.Sc",
    experience: "6.6 Years",
    designation: "Assistant Professor",
    specialization: "Physics",
    imageUrl: Tikaram, // Add the path for the image
  },
  {
    name: "Mr. Sanoj Kumar Mandal",
    education: "B.Sc, M.Sc",
    experience: "3 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics",
    imageUrl: SanojMandal, // Add the path for the image
  },
  {
    name: "Mr. Deepak Chandola",
    education: "B.Sc, M.Sc",
    experience: "9 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics",
    imageUrl: DeepakChandola, // Add the path for the image
  },
  {
    name: "Dr. Sugam Gupta",
    education: "B.Sc, M.Sc, Ph.D",
    experience: "5 Years",
    designation: "Assistant Professor",
    specialization: "Environmental Science",
    publications: "15",
    imageUrl: SugamGupta, // Add the path for the image
  },
  {
    name: "Mr. Shubham Joshi",
    education: "B.Sc, M.Sc",
    experience: "2 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics",
    imageUrl: Shubhamjoshi, // Add the path for the image
  },
  {
    name: "Dr. Smita Negi",
    education: "Ph.D",
    experience: "2 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics",
    imageUrl: SmitaNegi, // Add the path for the image
  },
  {
    name: "Dr. Shakuntala Pandey",
    education: "Ph.D",
    experience: "5 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics",
    imageUrl: SHAKUNTLA, // Add the path for the image
  },
  {
    name: "Ms. Shaista Hasan",
    education: "B.Sc, M.Sc",
    experience: "9 Years",
    designation: "Assistant Professor",
    specialization: "English",
    imageUrl: ShaistaHasan, // Add the path for the image
  },
  {
    name: "Dr. Pooja",
    education: "B.Sc, M.Sc",
    experience: "1 Year",
    designation: "Assistant Professor",
    specialization: "Environmental Radioactivity",
    imageUrl: pooja, // Add the path for the image
  },
  {
    name: "Mr. Sachin Arora",
    education: "B.Sc (PCM), M.Sc (Math)",
    experience: "10 Years",
    designation: "Assistant Professor",
    specialization: "Mathematics and Quantitative Aptitude",
    imageUrl: SachinArora, // Add the path for the image
  },
  {
    name: "Ms. Yamini Goyal",
    education: "B.A, M.A (English)",
    experience: "10 Years",
    designation: "Assistant Professor",
    specialization: "English and Soft Skills",
    imageUrl: YaminiGoyal, // Add the path for the image
  },
  {
    name: "Ms. Kanchan",
    education: "B.A, M.A",
    experience: "1 Year",
    designation: "Assistant Professor",
    specialization: "English",
    imageUrl: kanchan, // Add the path for the image
  },
  {
    name: "Ms. Navjyoti Singhal",
    education: "B.A, M.A",
    experience: "10 Years",
    designation: "Assistant Professor",
    specialization:
      "Indian Fiction, Linguistics, Identity Crisis, Feminism & ESL",
    publications: "1",
    imageUrl: Navjot, // Add the path for the image
  },
  {
    name: "Dr. Rachna Sharma",
    education: "B.Sc, M.Sc, Ph.D",
    experience: "5 Years",
    designation: "Assistant Professor",
    specialization: "Hydrogel, Nanogel, Nanoparticles",
    publications: "8",
    imageUrl: Rachna, // Add the path for the image
  },
  {
    name: "Dr. Neelima Bangwal",
    education: "B.Com, M.A (English), Ph.D",
    experience: "14 Years",
    designation: "Assistant Professor",
    specialization:
      "English Communication, Professional Communication, Diasporic Studies, South Asian Canadian Studies, Indian Writing in English, Women Studies",
    publications: "5",
    imageUrl: Neelima, // Add the path for the image
  },
];
