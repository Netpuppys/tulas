import diplomaMech from "../../../public/diploma-in-mechanical-engineering/diploma-in-mechanical-engineering.png";
import DepartmentalVission from "../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../public/courses/bjmc/departmentalMission.png";
import AnkitJain from "../../../public/courses/btech/mechanical-engineering/facultyData/AnkitJain.webp";
import AnkitResume from "../../../public/courses/btech/mechanical-engineering/facultyData/AnkitJainResume.pdf";
import AmitMAURYA from "../../../public/courses/btech/mechanical-engineering/facultyData/AmitMAURYA.webp";
import AmitResume from "../../../public/courses/btech/mechanical-engineering/facultyData/AmitResume.pdf";
import AnuragBahuguna from "../../../public/courses/btech/mechanical-engineering/facultyData/AnuragBahuguna.webp";
import AnuragResume from "../../../public/courses/btech/mechanical-engineering/facultyData/AnuragResume.pdf";
import AnupamGautam from "../../../public/courses/btech/mechanical-engineering/facultyData/AnupamGautam.webp";
import AnupamResume from "../../../public/courses/btech/mechanical-engineering/facultyData/AnupamResume.pdf";
import Sachin from "../../../public/courses/btech/mechanical-engineering/facultyData/Sachin.webp";
import SachinResume from "../../../public/courses/btech/mechanical-engineering/facultyData/SachinResume.pdf";
// import Sanjay from "../../../public/courses/btech/mechanical-engineering/facultyData/Sanjay.webp";
// import SanjayResume from "../../../public/courses/btech/mechanical-engineering/facultyData/SanjayResume.pdf";
// import Subhash from "../../../public/courses/btech/mechanical-engineering/facultyData/Subhash.webp";
// import SubhashResume from "../../../public/courses/btech/mechanical-engineering/facultyData/SubhashResume.pdf";
import Satish from "../../../public/courses/btech/mechanical-engineering/facultyData/Satish.webp";
import SatishResume from "../../../public/courses/btech/mechanical-engineering/facultyData/SatishResume.pdf";
import Rahul from "../../../public/courses/btech/mechanical-engineering/facultyData/Rahul.webp";
import RahulResume from "../../../public/courses/btech/mechanical-engineering/facultyData/RahulResume.pdf";
import Himanshu from "../../../public/courses/btech/mechanical-engineering/facultyData/Himanshu.webp";
import HimanshuResume from "../../../public/courses/btech/mechanical-engineering/facultyData/HimanshuResume.pdf";
import DeveshSharma from "../../../public/courses/btech/mechanical-engineering/facultyData/DeveshSharma.webp";
import DeveshResume from "../../../public/courses/btech/mechanical-engineering/facultyData/DeveshSharmaResume.pdf";
import Abhishek from "../../../public/courses/btech/mechanical-engineering/facultyData/Abhishek.webp";
import AbhishekResume from "../../../public/courses/btech/mechanical-engineering/facultyData/AbhishekResume.pdf";
import Manoj from "../../../public/courses/btech/mechanical-engineering/facultyData/Manoj.webp";
import ManojResume from "../../../public/courses/btech/mechanical-engineering/facultyData/ManojResume.pdf";

export const images = [
  diplomaMech,
  // Add more image paths as needed
];
export const content = (
  <>
    The Mechanical Engineering department of Tula’s Institute offers a
    three-year diploma in Mechanical Engineering, approved by AICTE and
    affiliated to Uttarakhand Board of Technical Education, Roorkee. This branch
    applies engineering, physics, and material science concepts for design,
    manufacturing, operations, and maintenance of mechanical systems. The course
    consists of 6 semesters. The student’s progress is monitored semester wise
    through two Internal Sessional Exams and one End Semester Exam conducted by
    the Board of Technical Education, Roorkee, Uttarakhand.
  </>
);

export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To develop the department as an innovation centre & centre of excellence to produce engineers with knowledge, skills and character.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            To impart high quality education to the students to develop
            technical skills and make them a competitive mechanical engineer.
          </li>
          <li>To promote inter-disciplinary research.</li>
          <li>
            To nurture students to excel professionally and personally to serve
            the society.
          </li>
          <li>
            To recruit world class faculties and improve their advance skills
            through appropriate training and development.
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
  { title: "From the Desk of HOD" },
];
export const selectedCardTable = [
  {
    sno: 1,
    course: "DIPLOMA – ME",
    duration: "3 years",
    eligibility:
      "Passed 10th Std./ SSC examination. Obtained at least 35% marks in the qualifying examination.",
  },
  {
    sno: 2,
    course: "DIPLOMA – ME (Lateral Entry)",
    duration: "2 years",
    eligibility:
      "Passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics/ Biology subject. OR 10+2 Science (with Mathematics as one of the Subject) or 10+2 Science with Technical Vocational subject. OR 10th + (2 years ITI) with appropriate Trade in that order shall be eligible for admission to Second Year Diploma Course(s) of appropriate Programme.",
  },
];
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "991001", title: "English and Communication Skills-I" },
      { code: "991002", title: "Applied Mathematics-I" },
      { code: "991003", title: "Applied Physics-I" },
      { code: "991004", title: "Applied Chemistry-I" },
      { code: "991005", title: "Computer Fundamentals" },
      { code: "PRACTICAL" },
      { code: "991006", title: "Engineering Drawing-I" },
      { code: "991007", title: "General Workshop Practice-I" },
      { code: "991051", title: "Industrial Exposure" },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "992001", title: "English and Communication Skills-II" },
      { code: "992002", title: "Applied Mathematics-II" },
      { code: "992003", title: "Applied Physics-II" },
      { code: "992004", title: "Applied Chemistry-II" },
      { code: "992005", title: "Environmental Science" },
      { code: "992006", title: "Engineering Graphics-II" },
      { code: "PRACTICAL" },
      { code: "GWP-II-1082", title: "General Workshop Practice-II" },
      { code: "PHYP-II-2003", title: "Applied Physics-II Lab" },
      { code: "CHEMP-II-2004", title: "Applied Chemistry-II Lab" },
      {
        code: "ESCP-II-2001",
        title: "English and Communication Skills-II Lab",
      },
    ],
  },
  {
    semester: "III SEMESTER",
    subjects: [
      { code: "3008", title: "Applied Mechanics" },
      { code: "3034", title: "Material Science & Metallurgy" },
      { code: "3035", title: "Workshop Technology" },
      { code: "3036", title: "Machine Drawing" },
      { code: "3037", title: "Thermodynamics" },
      { code: "3038", title: "Basic Electrical and Electronics" },
      { code: "PRACTICAL" },
      { code: "P-3038", title: "Basic Electrical and Electronics Lab" },
      { code: "P-3037", title: "Thermodynamics Lab" },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "4035", title: "Strength of Material" },
      { code: "4036", title: "Applied Thermal Engineering" },
      { code: "4037", title: "Basic Civil Engineering" },
      { code: "4038", title: "Production Technology" },
      { code: "4039", title: "Hydraulic & Hydraulic Machines" },
      { code: "4040", title: "Metrology" },
      { code: "PRACTICAL" },
      { code: "P-4035", title: "Strength of Material Lab" },
      { code: "P-4036", title: "Applied Thermal Engineering Lab" },
      { code: "P-4037", title: "Basic Civil Engineering Lab" },
      { code: "P-4038", title: "Production Technology Lab" },
      { code: "P-4039", title: "Hydraulic & Hydraulic Machines Lab" },
      { code: "P-4040", title: "Metrology Lab" },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "5043", title: "Dynamics of Machine" },
      { code: "5044", title: "Machine Element Design" },
      { code: "5045", title: "Operations Management" },
      { code: "5046", title: "CNC Machines & Automation" },
      { code: "5047", title: "Maintenance Engineering" },
      { code: "PRACTICAL" },
      { code: "PME 552", title: "Theory of Machines & Design Lab" },
      { code: "PME 555", title: "Heat and Mass Transfer Lab" },
      { code: "P-5046", title: "CNC Machines & Automation Lab" },
      { code: "P-5047", title: "Maintenance Engineering Lab" },
      { code: "P-5042", title: "CAD Lab" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "6037", title: "Advanced Machine Design" },
      { code: "6038", title: "Automobile Engineering" },
      { code: "6039", title: "Power Plant Engineering" },
      { code: "6040", title: "Mechatronics" },
      { code: "7001", title: "Entrepreneurship Development & Management" },
      { code: "PRACTICAL" },
      { title: "Project" },
      { code: "ES", title: "Employable Skills" },
    ],
  },
];
export const hod = [
  {
    name: "Mr.Ankit Jain",
    email: "me.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Mechanical Engineering",
    imageUrl: AnkitJain, // Replace with the actual image path
  },
];

export const HODcontent = (
  <>
    Welcome to the department of Mechanical Engineering at Tula’s Institute,
    Dehradun. The aim of the department is to disseminate knowledge and
    technologies through quality teaching, research and its applications in
    mechanical and allied disciplines. In curriculum, we strive to assimilate
    the latest developments in every field of Mechanical Engineering. Our
    department has a team of highly qualified and experienced faculty, good
    infrastructure and laboratory facilities having latest instruments. For
    skill upgradation of the students, the department organizes regular training
    programs for software & hardware, arranges workshops and guest lectures as
    well as personality development programs. By adopting tools of outcome based
    education, the department helps students to learn, grow, develop, and
    achieve their goals in their pursuit to excel in their professional career.
    I wish students to join us on the journey of quality education and to have a
    great learning experience with my excellent, loving & caring team.
  </>
);

export const facultyData = [
  {
    name: "Mr. Ankit Jain",
    education: "Ph.D.(P)",
    experience: "14 Yrs.",
    designation: "Assistant Professor",
    publications: "6",
    imageUrl: AnkitJain,
    resume: AnkitResume,
  },
  // {
  //   name: "Dr. Sanjay Sharma",
  //   education: "Ph.D.",
  //   experience: "33 Yrs.",
  //   designation: "Prof ME & Dean Student Welfare",
  //   publications: "12",
  //   imageUrl: Sanjay,
  //   resume: SanjayResume,
  // },
  // {
  //   name: "Dr. Subash Chandra Ram",
  //   education: "Ph.D.",
  //   experience: "14 Yrs.",
  //   designation: "Associate Professor",
  //   publications: "42",
  //   imageUrl: Subhash,
  //   resume: SubhashResume,
  // },
  {
    name: "Mr. Rahul Kumar",
    education: "M.Tech",
    experience: "9 Yrs.",
    designation: "Assistant Professor",
    publications: "03",
    imageUrl: Rahul,
    resume: RahulResume,
  },
  {
    name: "Mr. Anurag Bahuguna",
    education: "B.Tech, M.Tech",
    experience: "17 Yrs.",
    designation: "Assistant Professor",
    publications: "7",
    imageUrl: AnuragBahuguna,
    resume: AnuragResume,
  },
  {
    name: "Mr. Anupam Gautam",
    education: "M.Tech",
    experience: "12 Yrs.",
    designation: "Assistant Professor",
    publications: "9",
    imageUrl: AnupamGautam,
    resume: AnupamResume,
  },
  {
    name: "Mr. Sachin Kaushik",
    education: "M.Tech",
    experience: "11 Yrs.",
    designation: "Assistant Professor",
    publications: "6",
    imageUrl: Sachin,
    resume: SachinResume,
  },
  {
    name: "Mr. Devesh Sharma",
    education: "B.Tech, M.Tech",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "5",
    imageUrl: DeveshSharma,
    resume: DeveshResume,
  },
  {
    name: "Mr. Amit Moray",
    education: "B.Tech, M.Tech, Ph.D. (Pursuing)",
    experience: "15 Yrs.",
    designation: "Assistant Professor",
    publications: "40",
    imageUrl: AmitMAURYA,
    resume: AmitResume,
  },
  {
    name: "Manoj Singh",
    education: "B.Tech, M.Tech",
    experience: "3 Yrs.",
    designation: "Assistant Professor",
    publications: "02",
    imageUrl: Manoj,
    resume: ManojResume,
  },
  {
    name: "Mr. Abhishek Singh",
    education: "B.Tech, M.Tech",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "02",
    imageUrl: Abhishek,
    resume: AbhishekResume,
  },
  {
    name: "Mr. Himanshu Kala",
    education: "B.Tech, M.Tech",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "03",
    imageUrl: Himanshu,
    resume: HimanshuResume,
  },
  {
    name: "Mr. Satish Kumar",
    education: "B.Tech, M.Tech",
    experience: "7 Yrs.",
    designation: "Assistant Professor",
    publications: "02",
    imageUrl: Satish,
    resume: SatishResume,
  },
];
