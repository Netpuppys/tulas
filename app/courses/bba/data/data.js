import bba from "../../../../public/courses/bba/bba.png";
import USP from "../../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../../public/bsc-agriculture/Crousel/Program.png";
import bbaDocument from "../../../../public/courses/bba/BBA.pdf";
import DepartmentalVission from "../../../../public/courses/bjmc/departmentalVision.png";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalMission.png";
import DrRanitKishore from "../../../../public/courses/bba/facultyData/DrRanitKishore.webp";
import Emmanuel from "../../../../public/courses/bba/facultyData/EmanuelGabriel.webp";
import AnupamNautiyal from "../../../../public/courses/bba/facultyData/AnupamNautiyal.webp";
import MeghaAhuja from "../../../../public/courses/bba/facultyData/MeghaAhuja.webp";
import SonalBahuguna from "../../../../public/courses/bba/facultyData/SonalBahuguna.webp";
import BharatBhushan from "../../../../public/courses/bba/facultyData/BharatBhushan.webp";
import Link from "next/link";

export const images = [
  bba,
  // Add more image paths as needed
];
export const content = (
  <>
    The three-year Bachelor of Business Administration (BBA) program is designed
    keeping in mind the needs of the bright students who are looking for a
    career in entrepreneurship, management profession or towards higher
    education in business administration. This program is open to the students
    with diverse educational background including, humanities, science, arts and
    commerce. However, being a program with challenging curricula and contents,
    it is accessible mainly to those students who have excellent academic record
    and high potential for success. BBA degree helps students to build
    managerial skills and prepares them for business administration positions by
    adopting some of the specialization subjects that are most sought-after in
    the business world.
    <br />
    <br />
    Bachelor in Business Administration degree is the gateway to numerous job
    opportunities in a multitude of sectors like Marketing, Education, Finance,
    Sales, and Government & Private. The BBA program offers education and
    training in management and leadership skills to prepare students for
    managerial roles and entrepreneurship. Students learn multiple aspects of
    business management through lectures, practical projects, internships, hands
    on workshops and symposiums etc.
    <br />
    <br />
    The BBA curriculum is designed by Academia and Industry experts in such a
    way that the students get ample industry exposure and training. It helps
    student to prepare for real-world experiences and reach smart business
    conclusions through empirical analysis, such as planning on how an
    organization operates day-to-day in the face of ongoing changes and
    challenges.
    <br />
    <br />
    The basic goal of this program is to:
    <br />
    <br />
    <ul className="ml-5 list-disc">
      <li>
        Understand and implement concepts related to local and global business
      </li>
      <li>Discuss, and apply regulatory and ethical practices</li>
      <li>
        Enhance research, communication, and presentation skills using
        professional literature
      </li>
      <li>Demonstrate a combination of knowledge and professional skills.</li>
    </ul>
  </>
);
export const items = [
  {
    title: "USP's",
    description: [
      "Fully equipped modern amphitheater kind classrooms for better reach and visibility.",
      "200+ alumni network in various startups, Entrepreneurships, governmental and blue-chip companies.",
      "50+ placement opportunities given during the semester.",
      "research articles and papers in journals of repute.",
    ],
    image: USP,
    points: [
      "MoU’s with various companies to assist students in their needs of training, placement and internships.",
      "Collaborative and integrative pedagogy helps to adopt concepts quickly.",
      "Interaction based ‘Flipped Classroom’ Learning Methodology.",
      "Comprehend the theories and techniques used in successful organizations using “Case Based” Teaching pedagogy.",
      "Prepare students for entrepreneurship and employment",
    ],
  },

  {
    title: "Program Outcomes",
    description: [
      "PO1: Apply the management domain knowledge to solve routine and specific business problems.",
      "PO2: Develop capability of analysing and critical thinking to take informed and real time data based decisions.",
      "PO3: Foster the technological know how to solve business and management related problems in technologically driven environment.",
    ],
    image: Program,
    points: [
      "PO4: Ability to take leadership positions based on ethical, value driven, sustainable, holistic and entrepreneurial approach.",
      "PO5: Develop various managerial and entrepreneurial skills for catering to the local and global business scenarios.",
      "PO6: Imbibe and practice the different domain knowledge and develop skills required for specialized functional areas.",
    ],
  },
  {
    title: "Program Specific Outcome",
    description: [
      "PSO1: To analyse complex data, understanding the financial implications of managerial decision making.",
      "PSO2: To be able to perform business analytics using tools such as spreadsheets.",
      "PSO3: To analyse business management for domestic and international organisation.",
    ],
    image: Course,
  },
  {
    title: "Program Educational Objective",
    description: [
      "PEO1: To provide value based professional education to management aspirants.",
      "PEO2: To prepare learners to address the managerial challenges.",
      "PEO3: To prepare young minds with a positive attitude for excellent performance and committed service.",
      "PEO4: To develop and promote entrepreneurial mindset among learners.",
    ],
    image: Program,
  },
  {
    title: "Course Outcomes",
    description: [<Link href={bbaDocument}>BBA</Link>],
    image: Course,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To pave the way for business administration, amalgamating human capital development, research  and innovation with strong commitment towards society.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul classname="list-disc ml-5">
          <li>
            To equip proteges with a comprehensive set of analytical, technical
            and behavioral skills to navigate global business dynamism.
          </li>
          <li>
            To foster a culture of innovation and ethical practices encouraging
            individuals to be professional and responsible value creators for
            the society and stakeholders.
          </li>
          <li>
            To nurture entrepreneurial mind sets of aspirants by unleashing
            enterprising skills, opportunities and facilities.
          </li>
          <li>
            To contribute for sustainable future by industrial and institutional
            collaboration for contemporary research settings.
          </li>
          <li>
            To cultivate strong leadership traits among learners by bridging the
            gap between theory and practices through real world learning
            experiences.
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
export const selectedCard1 = (
  <>
    {" "}
    <span className="font-[Arapey]">Admission Eligibility</span> <br />
    <ul className="list-disc ml-5 font-[TTChocolates] text-[14px] md:text-[23px] text-black">
      <li>
        Passed XII or equivalent course in any discipline from any recognized
        Board / Council / University with minimum 45% marks for general (open)
        category and 40% marks for students of SC and ST category.
      </li>
    </ul>
  </>
);
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "BBA 101 PPM", title: "Principles and Practice of Management" },
      { code: "BBA 102 CAB", title: "Computer Applications in Business" },
      { code: "BBA 103", title: "Business Communication" },
      { code: "BBA 104", title: "Financial Accounting" },
      { code: "BBA 105", title: "Business Economics" },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "201", title: "Marketing Management" },
      { code: "202", title: "Human Resource Management" },
      { code: "203", title: "Business Environment" },
      { code: "204", title: "Production Management" },
      { code: "205", title: "Business Finance" },
    ],
  },
  {
    semester: "III SEMESTER",
    subjects: [
      { code: "301", title: "International Business" },
      { code: "302", title: "Organizational Behaviour" },
      { code: "303", title: "Business Laws" },
      { code: "304", title: "Accounting for Management" },
      { code: "305", title: "Quantitative Analysis" },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "401", title: "Company Law" },
      { code: "402", title: "Research Methodology" },
      { code: "403", title: "Logistics Management" },
      { code: "404", title: "Marketing of Services" },
      { code: "405", title: "Consumer Behaviour" },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      { code: "501", title: "Business Policy and Strategy" },
      { code: "502", title: "Entrepreneurship and Small Business" },
      { code: "503", title: "Project and Project Presentation/Seminar" },
      { code: "M-2", title: "Marketing Communication and Advertising" },
      { code: "M-03", title: "Sales and Distribution Management" },
      { code: "H-1", title: "Industrial Relations" },
      { code: "H-2", title: "Training and Development" },
      { code: "F-2", title: "Working Capital Management" },
      { code: "F-3", title: "Financial Institutions and Markets" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      { code: "601", title: "Management Information System" },
      { code: "602", title: "Project Management" },
      { code: "M-1", title: "International Marketing" },
      { code: "M-3", title: "Rural Marketing" },
      { code: "H-1", title: "Human Resource Planning and Development" },
      { code: "H-3", title: "Social Security and Labour Welfare" },
      { code: "F-1", title: "International Financial Management" },
      { code: "F-2", title: "Management of Financial Service" },
    ],
  },
];
export const facultyData = [
  {
    name: "Dr Ranit Kishore",
    education: "B.Com, MBA , Ph.D.",
    experience: "23 Years",
    designation: "Dean",
    specialization: "Marketing and Information Technology",
    publications: "22+",
    imageUrl: DrRanitKishore, // Add the path for the image
  },
  {
    name: "Emmanuel Elgin Gabriel",
    education: "MBA, Ph.D.(P)",
    experience: "07 Years",
    designation: "Assistant Professor",
    specialization: "Finance and Marketing",
    publications: "02",
    imageUrl: Emmanuel,
  },
  {
    name: "Anupam Nautiyal",
    education: "MBA, Ph.D.(P)",
    experience: "07 Years",
    designation: "Assistant Professor",
    specialization: "MBA HR",
    publications: "1",
    imageUrl: AnupamNautiyal,
  },
  {
    name: "Megha Ahuja",
    education:
      "MBA (Educational Leadership) from Finland, M.Com., PGDBA (Finance), IPTE from Finland",
    experience: "7 Years",
    designation: "Assistant Professor (Finance)",
    specialization: "Finance",
    publications: "",
    imageUrl: MeghaAhuja,
  },
  {
    name: "Sonal Bahuguna",
    education: "MBA, PhD(P)",
    experience: "03 Years",
    designation: "Assistant professor",
    specialization: "Finance and Marketing",
    publications: "",
    imageUrl: SonalBahuguna,
  },
  {
    name: "Mr. Bharat Bhushan",
    education: "MBA, Ph.D.(P)",
    experience: "01 Years",
    designation: "Assistant Professor",
    specialization: "HRM",
    publications: "",
    imageUrl: BharatBhushan,
  },
];
const bbacourse = [
  { carrer: "Sales / Inside Sales", title: "Entry Level Sales Executives" },
  { carrer: "Marketing", title: "Marketing Executives" },
  { carrer: "Retail Management", title: "Store In charges" },
  {
    carrer: "Supply Chain and Analytics",
    title: "Asst Managers/Logistic Mgrs.",
  },
  { carrer: "Operations", title: "Production Executives/Mgrs" },
  { carrer: "Human Resources", title: "Executives/Asst Managers" },
  { carrer: "Digital Marketing", title: "DM Executives/Managers" },
  { carrer: "Finance", title: "Analyst" },
];
export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: ["VIBGYOR", "VICTREE", "COMPETERE"],
    image: USP,
  },
  {
    title: "Edge over others",
    description: [
      "A Versatile degree",
      "Personal Development",
      "Gateway to number of job opportunities in various fields of management",
      "Gives in-depth knowledge of business at the earliest stage of career",
    ],
    image: Course,
    points: [
      "Trains well in various qualities like entrepreneurial, leadership and management",
      "Global accepted degree course with wide range of possibilities",
      "Dearth of management graduates in middle east, Europe and Canadian countries",
      "Course acts as a precursor to management studies, and hence, it is updated regularly to incorporate major developments in the business world.",
      "Kick Start to a global, reputed and overgrowing career.",
    ],
  },
  {
    title: "Beyond Curriculum",
    description: [
      "At the point when various sorts of co-curricular exercises are incorporated at the everyday schedule level, their fundamental objective is to contribute towards an overall improvement of the understudy. The accompanying pointers clarify the main targets of co-curricular exercises:",
      "To impart students with the importance of teamwork.",
      "To provide children with plentiful opportunities to imbibe a varied skillset, from furnishing their social and communication skillsto imbibing them with leadership and decision-making abilities.",
    ],
    image: Program,
    points: [
      "To facilitate motivation for learning",
      "To assist them in developing the spirit for healthy competition",
      "Work as incredible avenues of socialization and teaches students about the essentials of planning, management, co-operation and co-ordination.",
      "To promote psychological, ethical, civic, social, disciplinary, cultural and recreational values.",
      "By getting involved in various types of co-curricular activities, you can relax, rejuvenate and boost your creativity and thinking skills.",
      "Activities for various types of personal and professional development are a part of daily activity for the students at Tula’s. some of the activities which are regularly conducted for the students are:",
      "NCC",
      "NSS",
      "Picnics",
      "Educational Tours",
      "Industrial Visits",
      "Leisure Tours",
      "Seminars",
      "Workshops",
      "Symposiums",
      "Athletic meets",
      "Cultural Meets",
      "Sport Meets",
      "Debates",
      "Extempore",
      "Mock Interview sessions",
      "Business plan developments",
      "Theatre reviews",
      "Quizzes",
      "Social Work",
      "Volunteering in Social cause campaigns",
      "Conducting Events and Festivals",
      "And lots more to add to the overall bucket of beyond curriculum activities",
    ],
  },
  {
    title: "Career Prospects",
    description: [
      "BBA is a  professional degree that nurtures its students who are passionate about getting into business and management careers. Students can get placed directly into good known brands immediately after getting their BBA degrees. This is the reason that BBA degree holders are among the highest employment rate category as compared to other bachelor’s degrees.",
    ],
    image: Course,
    points: [
      <div className="w-full max-w-full overflow-scroll">
        <table className="overflow-x-scroll w-fit border border-black text-[clamp(10px,0.7vw,20px)]">
          <thead>
            <tr>
              <th className="p-2">Specialization</th>
              <th className="p-2">Jobs</th>
            </tr>
          </thead>
          <tbody>
            {bbacourse.map((data, index) => (
              <tr key={index}>
                <td className="text-black border border-black">
                  {data.carrer}
                </td>
                <td className="text-black border border-black">{data.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    ],
  },
  // Add other carousel items here
];
