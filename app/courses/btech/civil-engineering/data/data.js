import civil from "../../../../../public/courses/btech/civil-engineering/civil-engineering.png";
import USP from "../../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../../public/bsc-agriculture/Crousel/Program.png";
import civilDocument from "../../../../../public/courses/btech/civil-engineering/civil.pdf";
import DepartmentalVission from "../../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../../public/courses/bjmc/departmentalMission.png";
import Tripti from "../../../../../public/courses/btech/civil-engineering/facultyData/Tripti.webp";
import PreetiKumar from "../../../../../public/courses/btech/civil-engineering/facultyData/PreetiKumar.webp";
import AshishKumar from "../../../../../public/courses/btech/civil-engineering/facultyData/AshishKumar.webp";
import SunnySaini from "../../../../../public/courses/btech/civil-engineering/facultyData/SunnySaini.webp";
import mohitSharma from "../../../../../public/courses/btech/civil-engineering/facultyData/mohitSharma.webp";
import ankitavats from "../../../../../public/courses/btech/civil-engineering/facultyData/ankitavats.webp";
import shipra from "../../../../../public/courses/btech/civil-engineering/facultyData/shipra.webp";
import MohitBisht from "../../../../../public/courses/btech/civil-engineering/facultyData/MohitBisht.webp";
import ArunAgarwal from "../../../../../public/courses/btech/civil-engineering/facultyData/ArunAgarwal.webp";
import Link from "next/link";

export const images = [
  civil,
  // Add more image paths as needed
];

export const content = (
  <>
    The Civil Engineering Department of Tula’s Institute came into existence in
    the year 2011. The department offers Diploma, Undergraduate, and
    Postgraduate programs in civil engineering. The Department of civil
    engineering offers specialization in the field of Energy Engineering in UG
    program. Civil engineers work to sustain the natural environment while
    creating and maintaining the built environment. Civil engineers are
    essential to provide the necessities of human beings like water, shelter,
    infrastructure and energy in more efficient and renewable ways. If one has
    the zeal to take a new challenge every day, civil engineering will be the
    right choice.
  </>
);

export const items = [
  {
    title: "USP's",
    description:
      "The programs emphasize on industry and research based projects, which would enhance skills to become successful professionals.",
    image: USP,
    points: [
      "The infrastructure sector has become the biggest focus area for the Government of India.",
      "The Govt. is providing special allocations in budget to complement infrastructure growth and housing for all schemes which in turn generates employment for the civil engineers. Also, India and Japan have joined hands for infrastructure development in India’s Northeast states to undertake strategic infrastructure projects for the region.",
      "It is the oldest branch of engineering & serves as the base of engineering."
    ]
  },
  {
    title: "Course Outcomes",
    description: <Link href={civilDocument}>B.Tech Civil</Link>,
    image: Course,
  },
  {
    title: "Program Outcomes",
    description:
      "Engineering Knowledge : Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    image: Program,
  },
  {
    title: "Program Specific Outcome",
    description:
      "Understanding and providing innovative and ethical solutions to problems of natural and built environment using fundamentals of applied science, structural, hydraulics, geotechnical, transportation, environmental, water resources engineering, geomatics and interdisciplinary areas.",
    image: Course,
  },
  {
    title: "Program Educational Objective",
    description:
      "PEO1 : Civil Engineering Professionals: The graduates will be equipped with the theoretical concepts of civil engineering subjects like structural, hydraulics, geotechnical, transportation, environmental, water resources engineering, geomatics and their application in planning, analysis, design and construction of infrastructure and development in associated fields of civil engineering.",
    image: Program,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To be a leading centre for developing exceptional civil engineers who can create sustainable and resilient infrastructure through innovative design, research, and ethical practices.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To equip aspiring civil engineers with a robust understanding of
            fundamental principles and cutting-edge technologies, empowering
            them to create, construct, and uphold sustainable infrastructure.
          </li>
          <li>
            To cultivate an environment of innovation and rigorous research,
            where civil engineers tackle real-world infrastructure challenges
            while championing environmental sustainability.
          </li>
          <li>
            To empower students with effective communication, collaboration, and
            leadership skills, enabling them to excel in a diverse and
            globalized engineering profession.
          </li>
          <li>
            To promote ethical conduct and social responsibility, inspiring
            graduates to contribute to the betterment of society through their
            work.
          </li>
          <li>
            To provide students with an environment conducive to lifelong
            learning and success in industry, research, higher education, and
            entrepreneurship, especially in socio-culturally diverse societies
            worldwide
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
    course: "B.Tech",
    duration: "4 years",
    eligibility:
      "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ Information Technology/ Informatics Practices/Agriculture/ Engineering Graphics/ Business Studies. Obtained at least 45% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together. OR Passed Diploma (in Engineering and Technology) examination with at least 45% marks (40% marks in case of candidates belonging to reserved category) subject to vacancies in the First Year, in case the vacancies at lateral entry are exhausted.",
  },
  {
    sno: 2,
    course: "B.Tech (Lateral Entry/Second Year)",
    duration: "3 years",
    eligibility:
      "a. Passed Diploma examination with at least 45% marks (40% marks in case of candidates belonging to reserved category) in ANY branch of Engineering and Technology. b. Passed B.Sc. Degree from a recognized University as defined by UGC, with at least 45% marks (40% marks in case of candidates belonging to reserved category) and passed 10+2 examination with Mathematics as a subject. c. Provided that the students belonging to B.Sc. Stream, shall clear the subjects Engineering Graphics/ Engineering Drawing and Engineering Mechanics of the First Year Engineering Programme along with the Second year subjects. d. Provided that the students belonging to B.Sc. Stream shall be considered only after filling the supernumerary seats in this category with students belonging to the Diploma stream. e. Passed D.Voc. Stream in the same or allied sector. f. In the above cases, a suitable bridge Courses, if required such as in Mathematics may be conducted.",
  },
];
export const semesterData = [
  {
    semester: "B.Tech Civil Engg.  I SEMESTER",
    subjects: [
      { code: "BAST 101", title: "Engineering Chemistry" },
      { code: "BAST 102", title: "Mathematics-I" },
      { code: "BAST 103", title: "English for Communication" },
      { code: "BEET 101", title: "Basic Electrical & Electronics Engineering" },
      {
        code: "PRACTICAL",
      },
      { code: "BASP 101", title: "Engineering Chemistry lab" },
      { code: "BASP 103", title: "English for Communication lab" },
      {
        code: "BEEP 101",
        title: "Basic Electrical & Electronics Engineering lab",
      },
      {
        code: "BCSP 101",
        title: "Fundamentals of Computers & Programming in C",
      },
      {
        code: "BMEP 101",
        title: "Manufacturing Practices/Workshop",
      },
      {
        code: "BASP 102",
        title: "Internship-I",
      },
      {
        code: "BASP 105",
        title: "Swachh Bharat Summer Internship",
      },
    ],
  },
  {
    semester: "B.Tech Civil Engg. II Sem.",
    subjects: [
      { code: "BAST 104", title: "Engineering Physics" },
      { code: "BAST 102", title: "Mathematics-I" },
      { code: "BMET 102", title: "Basic Mechanical Engineering" },
      { code: "BCET 101", title: "Basic Civil Engineering & Mechanics" },
      { code: "BEST 101", title: "Environmental Studies" },
      { code: "PRACTICAL" },
      { code: "BASP 104", title: "Engineering Physics Lab" },
      { code: "BMEP 102", title: "Basic Mechanical Engineering Lab" },
      { code: "BCEP 101", title: "Basic Civil Engineering & Mechanics Lab" },
      { code: "BMEP 103", title: "Engineering Graphics" },
      { code: "BASP 106", title: "Language Lab & Seminars" },
      { code: "BASP 102", title: "Internship-I" },
    ],
  },

  {
    semester: "B.Tech Civil Engg. IIIrd Sem.",
    subjects: [
      { code: "BAST 301", title: "Mathematics-III" },
      { code: "BCET 302", title: "Construction Materials" },
      { code: "BCET 303", title: "Surveying" },
      { code: "BCET 304", title: "Building Planning and Architecture" },
      { code: "BCET 305", title: "Strength of Material" },
      { code: "Labs" },
      { code: "BCEP 303", title: "Surveying Lab." },
      { code: "BCEP 304", title: "Building Planning & Architecture Lab." },
      { code: "BCEP 305", title: "Strength of Materials" },
      {
        code: "BCEP 306",
        title: "Study of Historical & Ancient Civil Engineering Practices",
      },
      {
        code: "BASP 107",
        title: "Evaluation of Internship – I (completed at 1 year level)",
      },
      {
        code: "BASP 307",
        title:
          "90 hrs Internship based on using various software – Internship-II",
      },
    ],
  },
  {
    semester: "B.Tech Civil Engg. IVth Sem.",
    subjects: [
      { code: "BCET 401", title: "Energy & Environmental Engg" },
      { code: "BCET 402", title: "Concrete Technology" },
      { code: "BCET 403", title: "Structural Analysis-I" },
      { code: "BCET 404", title: "Transportation Engg.-I" },
      { code: "BCET 405", title: "Engg Geology & Remote Sensing" },
      { code: "BHUT 401", title: "Universal Human Values" },
      { code: "PRACTICAL" },
      { code: "BCEP 402", title: "Concrete Technology lab" },
      { code: "BCEP 403", title: "Structural Analysis-I lab" },
      { code: "BCEP 404", title: "Transportation Engg.-I lab" },
      { code: "BCEP 405", title: "Engg Geology & Remote lab" },
      { code: "BCEP 406", title: "Software Lab" },
      {
        code: "BCEP 407",
        title:
          "90 hrs Internship based on using various software’s – Internship",
      },
    ],
  },
  {
    semester: "B.tech Civil Engg. Vth Sem.",
    subjects: [
      { code: "BCET 501", title: "Design of RC Elements" },
      { code: "BCET 502", title: "Geotechnical Engineering I" },
      { code: "BCET 503", title: "Fluid Mechanics" },
      { code: "BCET 504 (A/B/C/D)", title: "Departmental Electives" },
      { code: "BOEC 505 (A/B/C/D)", title: "Open Electives" },
      { code: "Labs" },
      { code: "BCEP 501", title: "Design of RC Elements" },
      { code: "BCEP 502", title: "Geotechnical Engineering I" },
      { code: "BCEP 503", title: "Fluid Mechanics" },
      { code: "BCEP 506", title: "Material Testing Lab" },
      {
        code: "BCEP 507",
        title: "Evaluation of Internship-II completed at II year level",
      },
      {
        code: "Internship -III",
        title:
          "To be completed any time during Fifth/ Sixth semester. Its evaluation/credit to be added in Seventh semester",
      },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BCET 504 (A)", title: "Structural Analysis II" },
      { code: "BCET 504 (B)", title: "Quantity Surveying and Costing" },
      { code: "BCET 504 (C)", title: "Environmental Impact Assessment" },
      { code: "BCET 504 (D)", title: "Disaster Preparedness and Planning" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC 505 (A)", title: "Renewable Energy Resources" },
      { code: "BOEC 505 (B)", title: "Transportation Engineering II" },
      { code: "BOEC 505 (C)", title: "Operations Research" },
      { code: "BOEC 505 (D)", title: "Subject from SWAYAM" },
    ],
  },
  {
    semester: "B.tech Civil Engg. VIth Sem.",
    subjects: [
      { code: "BCET 601", title: "Design of RC Structures" },
      { code: "BCET 602", title: "Environmental Engineering I" },
      { code: "BCET 603", title: "Open Channel Flow" },
      { code: "BCET 604(A/B/C/D)", title: "Departmental Electives" },
      { code: "BOEC 605(A/B/C/D)", title: "Open Electives" },
      { code: "Labs" },
      { code: "BCEP 601", title: "Design of RC Structures" },
      { code: "BCEP 602", title: "Environmental Engineering I" },
      { code: "BCEP 603", title: "Open Channel Flow" },
      { code: "BCEP 606", title: "OE Lab/Advance Surveying Lab" },
      { code: "BCEP 507", title: "Minor Project I" },
      { code: "Internship – III", title: "During Semester 5/6" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BCET 604(A)", title: "Geotechnical Engineering II" },
      { code: "BCET 604(B)", title: "Precast and Modular Construction" },
      {
        code: "BCET 604(C)",
        title: "Cost Effective and Eco Friendly Structures",
      },
      { code: "BCET 604(D)", title: "Urban and Town Planning" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC 605(A)", title: "Principles of Management" },
      {
        code: "BOEC 605(B)",
        title: "Environmental Management & Sustainable Development",
      },
      { code: "BOEC 605(C)", title: "Advance Pavement Design" },
      { code: "BOEC 605(D)", title: "Subject from SWAYAM" },
    ],
  },
  {
    semester: "B.Tech Civil Engg. VIIth Sem.",
    subjects: [
      { code: "BCET 701", title: "Environmental Engineering II" },
      { code: "BCET 702", title: "Design of Steel Structures" },
      { code: "BCET 703(A/B/C)", title: "Departmental Elective" },
      { code: "BOEC 704(A/B/C)", title: "Open Elective" },
      { code: "Labs" },
      { code: "BCEP 701", title: "Environmental Engineering II" },
      { code: "BCEP 702", title: "Design of Steel Structures" },
      { code: "BCEP 705", title: "Departmental Lab" },
      {
        code: "BCEP 706",
        title: "Evaluation of Internship-III completed at III year level",
      },
      { code: "BCEP 707", title: "Minor Project II" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BCET 703(A)", title: "Railway & Airport Engineering" },
      { code: "BCET 703(B)", title: "Bridge Engineering" },
      { code: "BCET 703(C)", title: "Ground Water Engineering" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC 704(A)", title: "Hydrology" },
      { code: "BOEC 704(B)", title: "Infrastructure Planning and Management" },
      { code: "BOEC 704(C)", title: "Subject from SWAYAM" },
    ],
  },
  {
    semester: "B.Tech Civil Engg. VIIIth Sem.",
    subjects: [
      { code: "BCET 801", title: "Construction Planning and Management" },
      {
        code: "BCET 802",
        title: "Seismology and Earthquake Resistance Design of Buildings",
      },
      { code: "BCET 803(A/B/C)", title: "Departmental Elective" },
      { code: "BOEC 804(A/B/C)", title: "Open Elective" },
      { code: "Labs" },
      { code: "BCEP 805", title: "Major Project" },
      { code: "BCEP 806", title: "Seminar" },
      { code: "GP", title: "General Proficiency" },
      { code: "DEPARTMENTAL ELECTIVES" },
      { code: "BCET 803(A)", title: "Irrigation Engineering" },
      { code: "BCET 803(B)", title: "River Engineering" },
      { code: "BCET 803(C)", title: "Repair & Rehabilitation of Structures" },
      { code: "OPEN ELECTIVES" },
      { code: "BOEC 804(A)", title: "Hydropower Engineering" },
      { code: "BOEC 804(B)", title: "Prestressed Concrete" },
      { code: "BOEC 804(C)", title: "Subject using SWAYAM" },
    ],
  },
];

export const facultyData = [
  {
    name: "Dr. Tripti Khanduri",
    education: "Ph.D",
    experience: "16 Yrs.",
    designation: "Associate Professor & Head of Department",
    publications: "11",
    imageUrl: Tripti, // Add the path for the image
  },
  {
    name: "Ms. Preeti Kumari",
    education: "M.Tech.",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: PreetiKumar, // Add the path for the image
  },
  {
    name: "Mr. Ashish Kumar",
    education: "M.Tech.",
    experience: "6.5 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: AshishKumar, // Add the path for the image
  },
  {
    name: "Mr. Sunny Saini",
    education: "M.Tech.",
    experience: "5 Yrs.",
    designation: "Assistant Professor",

    imageUrl: SunnySaini, // Add the path for the image
  },
  {
    name: "Mr. Mohit Sharma",
    education: "M.Tech.",
    experience: "7 Yrs.",
    designation: "Assistant Professor",
    publications: "3",
    imageUrl: mohitSharma, // Add the path for the image
  },
  {
    name: "Ms. Ankita Vats",
    education: "M.Tech.",
    experience: "6 Yrs.",
    designation: "Assistant Professor",
    publications: "2",
    imageUrl: ankitavats, // Add the path for the image
  },
  {
    name: "Ms. Shipra Thapliyal",
    education: "M.Tech.",
    experience: "4 Yrs.",
    designation: "Assistant Professor",
    publications: "1",
    imageUrl: shipra, // Add the path for the image
  },
  {
    name: "Mr. Mohit Bisht",
    education: "M.Tech.",
    experience: "8 Yrs.",
    designation: "Assistant Professor",

    imageUrl: MohitBisht, // Add the path for the image
  },
];

export const hod = [
  {
    name: "Dr. Arun Agarwal",
    email: "civil.hod@tulas.edu.in",
    designation: "Head of the Department,",
    department: "Civil Engineering Department",
    imageUrl: ArunAgarwal, // Replace with the actual image path
  },
];
export const HODcontent =
  "I would like to welcome you at Tula’s Civil Engineering Department where students are encouraged to engage in extra-curricular and co-curricular activities which are essential for their personality development as well as development of organizational skills. Our faculty members are dedicated, highly qualified with vast industry experience in diverse fields of civil engineering. Our main objective is to nurture our students to make them industry-ready in the field of construction & designing so as to serve the nation.";
export const itemsClubs = [
  {
    title: "Work carried out by Civil Engineer",
    description:
      "There is an opportunity for Civil Engineers to get a job in government, public & private sectors. Some job titles are listed here:",
    image: USP,
  },
  {
    title: "Clubs/Societies/ Memberships",
    description: "Society of Civil Engineering",
    image: Course,
  },
  {
    title: "Edge over others",
    description:
      "The infrastructure sector has become the biggest focus area for the Government of India.",
    image: Program,
  },
  {
    title: "Beyond Curriculum",
    description:
      "Apart from the regular curriculum as specified by the university, we also conducts various workshops/ seminar/ Short term courses/ Expert Talks as add on certifications to the students. ",
    image: Program,
  },
  {
    title: "Career Prospects",
    description:
      "Civil engineers create and implement solutions to a wide range of challenges, increasing efficiency in a variety of sectors.",
    image: Program,
  },
];
