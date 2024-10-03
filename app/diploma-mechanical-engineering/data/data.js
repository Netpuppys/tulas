import diplomaMech from "../../../public/diploma-in-mechanical-engineering/diploma-in-mechanical-engineering.png";
import DepartmentalVission from "../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../public/courses/bjmc/departmentalMission.png";
import pradeepKothiyal from "../../../public/diploma-in-mechanical-engineering/facultyData/pradeepKothiyal.webp";
import AnkitJain from "../../../public/diploma-in-mechanical-engineering/facultyData/AnkitJain.webp";
import PiyushAgarwal from "../../../public/diploma-in-mechanical-engineering/facultyData/PiyushAgarwal.webp";
import Ashwani from "../../../public/diploma-in-mechanical-engineering/facultyData/Ashwani.webp";
import RahulKumar from "../../../public/diploma-in-mechanical-engineering/facultyData/RahulKumar.webp";
import AnuragBahuguna from "../../../public/diploma-in-mechanical-engineering/facultyData/AnuragBahuguna.webp";
import DeveshSharma from "../../../public/diploma-in-mechanical-engineering/facultyData/DeveshSharma.webp";
import SandeepLakhera from "../../../public/diploma-in-mechanical-engineering/facultyData/SandeepLakhera.webp";
import Anamika from "../../../public/diploma-in-mechanical-engineering/facultyData/Anamika.webp";
import Sachin from "../../../public/diploma-in-mechanical-engineering/facultyData/Sachin.webp";
import GauravSagar from "../../../public/diploma-in-mechanical-engineering/facultyData/GauravSagar.webp";
import AmitMAURYA from "../../../public/diploma-in-mechanical-engineering/facultyData/AmitMAURYA.webp";

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
        <ul classname="list-disc ml-5">
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

export const facultyData = [
  {
    name: "Mr. Pradeep Kothiyal",
    education: "B.Tech, M.Tech, Ph.D (P)",
    experience: "16 Years",
    designation: "Assistant Professor",
    publications: "20+",
    imageUrl: pradeepKothiyal, // Add the path for the image
  },
  {
    name: "Mr. Ankit Jain",
    education: "B.Tech, M.Tech, Ph.D (P)",
    experience: "12 Years",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: AnkitJain, // Add the path for the image
  },
  {
    name: "Mr. Piyush Agrawal",
    education: "B.Tech, M.Tech, Ph.D (P)",
    experience: "12 Years",
    designation: "Assistant Professor",
    publications: "5",
    imageUrl: PiyushAgarwal, // Add the path for the image
  },
  {
    name: "Mr. Ashwani Kumar Ankit",
    education: "B.Tech, M.Tech, Ph.D (P)",
    experience: "9 Years",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: Ashwani, // Add the path for the image
  },
  {
    name: "Mr. Rahul Kumar",
    education: "B.Tech, M.Tech, Ph.D (P)",
    experience: "6 Years",
    designation: "Assistant Professor",
    publications: "1",
    imageUrl: RahulKumar, // Add the path for the image
  },
  {
    name: "Mr. Anurag Bahuguna",
    education: "B.Tech, M.Tech",
    experience: "7.5 Years",
    designation: "Assistant Professor",
    publications: "4",
    imageUrl: AnuragBahuguna, // Add the path for the image
  },
  {
    name: "Mr. Devesh Sharma",
    education: "B.Tech, M.Tech",
    experience: "7.5 Years",
    designation: "Assistant Professor",
    imageUrl: DeveshSharma, // Add the path for the image
  },
  {
    name: "Mr. Sandeep Lakhera",
    education: "B.Tech, M.Tech",
    experience: "2 Years 10 Months",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: SandeepLakhera, // Add the path for the image
  },
  {
    name: "Ms. Anamika Bhandari",
    education: "B.Tech, M.Tech",
    experience: "1.5 Years",
    designation: "Assistant Professor",
    publications: "6",
    imageUrl: Anamika, // Add the path for the image
  },
  {
    name: "Mr. Sachin",
    education: "B.Tech, M.Tech",
    experience: "1 Year",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: Sachin, // Add the path for the image
  },
  {
    name: "Mr. Gaurav Kumar Sagar",
    education: "B.Tech, M.Tech",
    experience: "1 Year",
    designation: "Assistant Professor",
    imageUrl: GauravSagar, // Add the path for the image
  },
  {
    name: "Mr. Amit Moray",
    education: "B.Tech, M.Tech, Ph.D (P)",
    experience: "10 Years",
    designation: "Assistant Professor",
    publications: "35",
    imageUrl: AmitMAURYA, // Add the path for the image
  },
];
