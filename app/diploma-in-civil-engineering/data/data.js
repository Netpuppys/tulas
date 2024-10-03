import diplomaCivil from "../../../public/diploma-in-civil-engineering/diploma-in-civil-engineering.png";
import DepartmentalVission from "../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../public/courses/bjmc/departmentalMission.png";
import AshishKumar from "../../../public/courses/btech/civil-engineering/facultyData/AshishKumar.webp";
import SunnySaini from "../../../public/courses/btech/civil-engineering/facultyData/SunnySaini.webp";
import mohitSharma from "../../../public/courses/btech/civil-engineering/facultyData/mohitSharma.webp";
import PreetiKumari from "../../../public/courses/btech/civil-engineering/facultyData/PreetiKumar.webp";
import PrashantGussain from "../../../public/courses/btech/civil-engineering/facultyData/PrashantGussain.webp";
import ArunAgarwal from "../../../public/courses/btech/civil-engineering/facultyData/ArunAgarwal.webp";

export const images = [
  diplomaCivil,
  // Add more image paths as needed
];
export const content = (
  <>
    Department of Civil engineering Offers Diploma in Civil Engineering of a
    duration of 3 years. With rapidly booming infrastructure developments all
    around, civil engineers today are in much higher demand than ever before.
    Civil diploma holders can make building plans, devise solutions for building
    materials, and work onsite as an assistant to the supervisor and site
    manager. Students are taught various skills and learning during the course,
    which make them proficient at what they do.
  </>
);

export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To become a centre of Modern industrial skills and collaborative research work.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To provide learning domain for researchers in the field of
            Innovation & Research.
          </li>
          <li>To develop the capacity of students to think inventively.</li>
          <li>
            To promote research based projects in area of Construction,
            Transportation, Structural Engineering etc.
          </li>
          <li>
            To build Industry Partnerships to share first hand practical
            knowledge & to see the real life working of the organizations.
          </li>
          <li>
            To develop High Academic Standards as entrepreneurship development.
          </li>
        </ul>
      </>
    ),
    image: DepartmentalMission,
  },
];
export const cards = [{ title: "Eligibility" }, { title: "Senior Faculty" }];
export const selectedCardTable = [
  {
    sno: 1,
    course: "DIPLOMA – CE",
    duration: "3 years",
    eligibility:
      "Passed 10th Std./ SSC examination. Obtained at least 35% marks in the qualifying examination.",
  },
  {
    sno: 2,
    course: "DIPLOMA – CE (Lateral Entry)",
    duration: "2 years",
    eligibility:
      "Passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics/ Biology subject. OR 10+2 Science (with Mathematics as one of the Subject) or 10+2 Science with Technical Vocational subject. OR 10th + (2 years ITI) with appropriate Trade in that order shall be eligible for admission to Second Year Diploma Course(s) of appropriate Programme.",
  },
];

export const facultyData = [
  {
    name: "Dr. Arun Agarwal",
    education: "Ph.D, M.Tech",
    experience: "36 Yrs.",
    designation: "Professor, HOD",
    imageUrl: ArunAgarwal, // Add the path for the image
  },
  {
    name: "Mr. Ashish Kumar",
    education: "M.TECH (STRUCTURAL ENGG)",
    experience: "6.5 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: AshishKumar, // Add the path for the image
  },
  {
    name: "Mr. Sunny Saini",
    education: "M.Tech (Structural Engineering)",
    experience: "5 Yrs.",
    designation: "Assistant Professor",
    imageUrl: SunnySaini, // Add the path for the image
  },
  {
    name: "Mr. Mohit Sharma",
    education: "M.Tech (Construction Planning & Management)",
    experience: "7 Yrs.",
    designation: "Assistant Professor",
    imageUrl: mohitSharma, // Add the path for the image
  },
  {
    name: "Ms. Preeti Kumari",
    education: "M.Tech. ( Hydraulic Engineering )",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: PreetiKumari, // Add the path for the image
  },
  {
    name: "Mr. PRASHANT GUSAIN",
    education: "M.TECH (STRUCTURAL ENGG)",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "4",
    imageUrl: PrashantGussain, // Add the path for the image
  },
];
