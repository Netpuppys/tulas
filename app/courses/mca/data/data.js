import mca from "../../../../public/courses/mca/mca.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import mcaDocument from "../../../../public/courses/mca/MCA.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import drsanjeev from "../../../../public/courses/mca/facultyData/drsanjeev.webp";
import drahmad from "../../../../public/courses/mca/facultyData/drahmad.webp";
import RakeshKumar from "../../../../public/courses/mca/facultyData/RakeshKumar.webp";
import MohdMurshleen from "../../../../public/courses/mca/facultyData/MohdMurshleen.webp";
import GauravMittal from "../../../../public/courses/mca/facultyData/GauravMittal.webp";
import RashmiMishra from "../../../../public/courses/mca/facultyData/RashmiMishra.webp";
import nishagupta from "../../../../public/courses/mca/facultyData/nishagupta.webp";
import AnandKumar from "../../../../public/courses/mca/facultyData/AnandKumar.webp";
import Link from "next/link";

export const images = [
  mca,
  // Add more image paths as needed
];
export const content = (
  <>
    Master of Computer Applications (MCA) is one of the most sought-after
    courses among the post graduates courses. World over IT related technology
    businesses have fuelled growth, created jobs, and turned out with an
    increasing number of successful start-ups. IT sector is one of the country’s
    fastest-growing businesses and has been considered as world’s largest
    information technology destination. With fast growing global digitalization,
    the demand for computer applications specialists is constantly expanding.
    <br />
    <br />
    Department of Computer Applications provides a comprehensive understanding
    of important areas of computer science and its applications providing them
    professional skills in software development. It assists students in
    developing practical abilities to solve a variety of difficulties that may
    arise during computer programming and their applications. In addition, the
    post graduates of MCA also find a way to move to the education sectors.
  </>
);
export const items = [
  {
    title: "USP's",
    description: "Industry-led & Practice Based Curriculum.",
    image: USP,
  },
  {
    title: "Course Outcomes",
    description: <Link href={mcaDocument}>MCA</Link>,
    image: Course,
  },
  {
    title: "Program Outcomes",
    description:
      "Computational Knowledge :Apply knowledge of computing fundamentals, computing specialization, mathematics",
    image: Program,
  },
  {
    title: "Program Educational Outcomes",
    description:
      "PEO 1: Achieve success in professional endeavors by acquiring a solid foundation in mathematical, computing, and engineering principles.",
    image: Course,
  },
  {
    title: "Program Specific Outcomes",
    description:
      "PSO 1: Understand and apply the computing techniques, mathematical principles and industrial concepts to effectively tackle real-time industrial challenges.",
    image: Course,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To become centre of excellence in software development and research.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>To induce ethical values and spirit of social commitment.</li>
          <li>
            To provide a learning ambience to enhance innovations and problem
            solving skills.
          </li>
          <li>
            To provide a comprehensive education, benchmarked against the
            highest global standards.
          </li>
          <li>
            To Collaborate with software industry and adopting technology for
            achieving quality of technical education.
          </li>
          <li>
            To promote research based projects / activities in the emerging
            areas of technology convergence.
          </li>
        </ul>
      </>
    ),
    image: DepartmentalMission,
  },
];
export const cards = [
  { title: "Eligibility" },
  { title: "Curriculum" },
  { title: "Senior Faculty" },
  { title: "FROM THE DESK of HOD" },
];

export const selectedCardTable = [
  {
    sno: 1,
    course: "MCA",
    duration: "2 years",
    eligibility:
      "Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree. Passed B.Sc./ B.Com./ B.A. with Mathematics at 10+2 Level or at Graduation Level (with additional bridge Courses as per the norms of the concerned University). Obtained at least 50% marks (45% marks in case of candidates belonging to reserved category) in the qualifying Examination.",
  },
];
export const semesterData = [
  {
    semester: "MCA I SEMESTER",
    subjects: [
      { code: "MBCT 101", title: "Introduction of Information Technology" },
      { code: "MBCT 102", title: "Programming Fundamentals with C" },
      { code: "MBCT 103", title: "Fundamental Web Technology" },
      { code: "MCAT 101", title: "Discrete Structure" },
      { code: "MCAT 102", title: "Database Management System" },
      { code: "MCAT 103", title: "Operating System" },
      { code: "MCAT 104", title: "Computer Organisation" },
      { code: "MCAT 105", title: "Technical Communication Skills" },
      { code: "Labs" },
      { code: "MCAP 102", title: "Database Management System" },
      { code: "MCAP 103", title: "Operating System" },
      { code: "MCAP 104", title: "Computer Organisation" },
      { code: "MCAP 105", title: "Technical Communication Skills" },
      {
        code: "MCAP 106",
        title: "Python Programming / Unix and Shell Programming",
      },
    ],
  },
  {
    semester: "MCA II SEMESTER",
    subjects: [
      {
        code: "MCAT 201",
        title: "Computer Based Statistical and Numerical Techniques",
      },
      { code: "MCAT 202", title: "Data Structure and Analysis of Algorithms" },
      { code: "MCAT 203", title: "Object Oriented Programming with Java" },
      { code: "MCAT 204", title: "Computer Networks" },
      { code: "MCAT 205", title: "Microprocessor and Interface" },
      {
        code: "MCAT 206",
        title: "Accounting and Financial Management (Non Credit)",
      },
      { code: "Labs" },
      { code: "MCAP 202", title: "Data Structure and Analysis of Algorithms" },
      { code: "MCAP 203", title: "Object Oriented Programming with Java" },
      { code: "MCAP 204", title: "Computer Networks" },
      { code: "MCAP 205", title: "Microprocessor and Interface" },
    ],
  },
  {
    semester: "MCA III SEMESTER",
    subjects: [
      { code: "MCAT 301", title: "Theory of Automata and Formal Language" },
      { code: "MCAT 302", title: "Software Engineering" },
      { code: "MCAT 303", title: "Big Data Analysis" },
      { code: "MCAT 304", title: "Artificial Intelligence & Applications" },
      { code: "MCAT 305", title: "Combinatorics and Graph Theory" },
      { code: "MCAT 306", title: "Universal Human Values" },
      {
        code: "MCAT 307",
        title:
          "Any Online Course specified by AICTE or latest technology (Not Credit Course)",
      },
      { code: "Labs" },
      { code: "MCAP 302", title: "Software Engineering" },
      { code: "MCAP 303", title: "Big Data Analysis" },
    ],
  },
  {
    semester: "MCA IV SEMESTER",
    subjects: [
      { code: "MCAT 401", title: "Net Technology" },
      { code: "MCAT 402", title: "Network & Cyber Security" },
      { code: "MCAT 41X", title: "Elective I" },
      { code: "MCAT 42X", title: "Elective II" },
      { code: "MCAT 43X", title: "Elective III" },
      { code: "MCAT 403", title: "Major Project" },
      { code: "Labs" },
      { code: "MCAP 402", title: "Net Technology" },
      { code: "MCAP 403", title: "Network & Cyber Security" },
      { code: "Elective I" },
      { code: "MCAT 411", title: "Soft Computing" },
      { code: "MCAT 412", title: "Distributed System" },
      { code: "MCAT 413", title: "Data Science" },
      { code: "MCAT 414", title: "Machine Learning" },
      { code: "MCAT 415", title: "Simulation & Modelling" },
      { code: "Elective II" },
      { code: "MCAT 421", title: "Web Technology and Cloud Computing" },
      { code: "MCAT 422", title: "Digital Image Processing" },
      { code: "MCAT 423", title: "Computer Graphics & Multimedia" },
      { code: "MCAT 424", title: "Software Testing & Quality Assurance" },
      { code: "MCAT 425", title: "Compiler Design" },
      { code: "Elective III" },
      { code: "MCAT 431", title: "Neural Networks" },
      { code: "MCAT 432", title: "Internet of Things" },
      { code: "MCAT 433", title: "Blockchain Architecture" },
      { code: "MCAT 434", title: "Natural Language Processing" },
      { code: "MCAT 435", title: "Advanced Java" },
    ],
  },
];
export const facultyData = [
  {
    name: "Dr. Sanjeev Kumar",
    education: "Ph.D (CSE)",
    experience: "17 Years",
    designation: "Professor",
    publications: "51",
    imageUrl: drsanjeev, // Replace with the actual image path
  },
  {
    name: "Dr. Ahamd Jamal",
    education: "Ph.D",
    experience: "9 Years",
    designation: "Associate Professor",
    publications: "08",
    imageUrl: drahmad, // Replace with the actual image path
  },
  {
    name: "Mr. Rakesh Kumar",
    education: "M. Tech. CSE, Ph.D (P)",
    experience: "14 Years",
    designation: "Assistant Professor",
    publications: "7",
    imageUrl: RakeshKumar, // Replace with the actual image path
  },
  {
    name: "Mr. Mohd. Mursleen",
    education: "M. Tech.",
    experience: "4.5 Years",
    designation: "Assistant Professor",
    publications: "11",
    imageUrl: MohdMurshleen, // Replace with the actual image path
  },
  {
    name: "Mr. Gaurav Mittal",
    education: "M. Tech",
    experience: "3 Years",
    designation: "Assistant Professor",
    publications: "03",
    imageUrl: GauravMittal, // Replace with the actual image path
  },
  {
    name: "Ms. Rashmi Mishra",
    education: "M. Tech (CSE)",
    designation: "Assistant Professor",
    publications: "NA", // Not available in image
    imageUrl: RashmiMishra, // Replace with the actual image path
  },
  {
    name: "Ms. Nisha Gupta",
    education: "M. Tech (CSE)",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: nishagupta, // Replace with the actual image path
  },
];
export const hod = [
  {
    name: "Dr. Anand Kumar Gupta",
    email: "cse.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Computer Applications",
    imageUrl: AnandKumar, // Replace with the actual image path
  },
];
export const HODcontent = (
  <>
    Greetings! On behalf of the faculty members, staff, and students of the
    Department of Computer Application at Tula’s Institute, Dehradun, I welcome
    you all to the creative world of computer application. The Department has a
    team of well qualified and experienced faculty members. The Department lays
    maximum stress on student outcomes through industry based curriculum,
    effective teaching learning methods and counselling of students through
    Mentor-Mentee Program.
    <br />
    <br />I believe the computer application discipline has been widely
    recognized as an essential source and technique for the advancements in
    software industry. We prepare our students to meet increasing global
    challenges of ever evolving technologies so as to make them acceptable to
    both industries and higher institution of learning. In Tula’s Institute all
    the students get the opportunity to excel in their academic activities.
  </>
);
export const itemsClubs = [
  {
    title: "Opportunities in Computer Application",
    description: "Computer Programmer",
    image: USP,
  },
  {
    title: "Beyond Curriculum",
    description:
      "Student perform various internship programs, Short term courses, Add on courses for their advancement in the field.",
    image: Course,
  },
  {
    title: "Career Prospects",
    description:
      "After the completion of this program, the students have the option to grow in one of the following fields",
    image: Program,
  },
];
