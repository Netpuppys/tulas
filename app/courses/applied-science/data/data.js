import appliedScience from "../../../../public/courses/applied-science/applied-science.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import ASCdocument from "../../../../public/courses/applied-science/ASC.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";

import Link from "next/link";
export const images = [
  appliedScience,
  // Add more image paths as needed
];
export const content = (
  <>
    Established to foster a holistic educational experience, our department
    ensures that students are equipped with theoretical understanding and the
    practical skills necessary to thrive in modern, technology-driven careers by
    providing them with foundational knowledge and practical skills that bridge
    theory and real-world application. Our dedicated faculty is committed to
    creating an engaging learning environment through innovative teaching
    methods, continuous guidance, and a student-centred approach. Each faculty
    member brings expertise in their respective disciplines, helping students
    develop a strong base in science and communication that is vital for
    technical and professional success.
    <br />
    <br />
    The Department of Applied Sciences and Humanities has state-of-the-art
    laboratories, including Physics, Chemistry, and language labs designed to
    enhance students' communication skills.
    <br />
    <br />
    In addition to academic excellence, we encourage students to participate in
    extracurricular activities, seminars, and workshops that broaden their
    perspectives and enhance their soft skills.
  </>
);
export const items = [
  {
    title: "STRENGTHS AND USP’S OF THE DEPARTMENT",
    description: [
      "The department is dedicated to educational and soft-skills excellence.",
      "The department strives to make new student accustomed to the new college environment and make them comfortable at new home away from home.",
      "Department bridges the gap between school and college education through orientation program which instils leadership, team building & management and social work.",
    ],
    image: USP,
    points: [
      "It aspires to develop and maintain a conducive environment for learning, inquiry, and the generation of new ideas in order to support the education of future engineers and scientists.",
      "The teaching methodology of the department is based on ‘Learning by Practicing’ strategy.",
      "It encourage students in developing strong fundamentals in the subject(s) as well as the abilities needed to solve scientific, technological, analytical, and mathematical challenges.",
      "The department clearly defined teaching and learning process that includes problem-solving sessions, open discussions during tutorials, holding seminars, workshops, and projects, among other things.",
      "The knowledge gained through laboratory work forms a major component while preparing future professionals.",
    ],
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
        <ul className="list-disc ml-5">
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
  {
    name: "Dr. Vijay Upadhaya",
    designation: "Professor",
    education: "",
    publications: "",
    experience: "",
  },
  {
    name: "Dr. Tarun Kumar",
    designation: "Professor",
    education: "Ph.d",
    publications: "9",
    experience: "18",
  },
  {
    name: "Dr. Ashish Mishra",
    designation: "Associate Professor",
    education: "Ph.d",
    publications: "15",
    experience: "6",
  },
  {
    name: "Dr. Sugam Gupta",
    designation: "Associate Professor",
    education: "Ph.d",
    publications: "15",
    experience: "5",
  },
  {
    name: "Mr. Sanoj Mandal",
    designation: "Assistant Professor",
    education: "M.Sc",
    publications: "0",
    experience: "4.5",
  },
  {
    name: "Dr. Sanket Kumar Saxena",
    designation: "Assistant Professor",
    education: "Ph.d",
    publications: "8",
    experience: "17",
  },
  {
    name: "Dr. Rachna Sharma",
    designation: "Assistant Professor",
    education: "Ph.d",
    publications: "13",
    experience: "5",
  },
  {
    name: "Ms. Shaista Hasan",
    designation: "Assistant Professor",
    education: "MA",
    publications: "0",
    experience: "15",
  },
  {
    name: "Mr. Tikaram",
    designation: "Assistant Professor",
    education: "M.sc Ph.d (P)",
    publications: "2",
    experience: "8",
  },
  {
    name: "Mr Deepak Chandola",
    designation: "Assistant Professor",
    education: "M.sc Ph.d (P)",
    publications: "0",
    experience: "5",
  },
  {
    name: "Ms. Nidhi Tiwari",
    designation: "Assistant Professor",
    education: "M.sc Ph.d (P)",
    publications: "0",
    experience: "0",
  },
  {
    name: "Ms. Gurleen kaur",
    designation: "Assistant Professor",
    education: "M.Sc",
    publications: "0",
    experience: "0",
  },
  {
    name: "Mr Sagar Pundir",
    designation: "Assistant Professor",
    education: "M.Sc",
    publications: "0",
    experience: "1",
  },
  {
    name: "Dr. Ruchika Attri",
    designation: "Assistant Professor",
    education: "Ph.d",
    publications: "8",
    experience: "7",
  },
  {
    name: "Mr. Chandrashekhar",
    designation: "Assistant Professor",
    education: "M.Sc",
    publications: "0",
    experience: "5",
  },
  {
    name: "Dr. Neelima Bangwal",
    designation: "Assistant Professor",
    education: "Ph.d",
    publications: "11",
    experience: "8",
  },
  {
    name: "Mr. Shubham Joshi",
    designation: "Assistant Professor",
    education: "M.Sc",
    publications: "0",
    experience: "2",
  },
  {
    name: "Ms. Aanchal Baniyal",
    designation: "Assistant Professor",
    education: "M.sc Ph.d (P)",
    publications: "0",
    experience: "3",
  },
  {
    name: "Ms. Niharika Parashar",
    designation: "Assistant Professor",
    education: "M.sc Ph.d (P)",
    publications: "0",
    experience: "2",
  },
  {
    name: "Dr. Dimpal",
    designation: "Assistant Professor",
    education: "Ph.d",
    publications: "0",
    experience: "2.5",
  },
  {
    name: "Ms. Tanuja Uniyal",
    designation: "Assistant Professor",
    education: "M.sc Ph.d (P)",
    publications: "12",
    experience: "8",
  },
  {
    name: "Ms. Shalini Binjola",
    designation: "Assistant Professor",
    education: "MA Ph.d (P)",
    publications: "2",
    experience: "15",
  },
  {
    name: "Ms. Riya Dariyal",
    designation: "Assistant Professor",
    education: "MA",
    publications: "0",
    experience: "10",
  },
];
