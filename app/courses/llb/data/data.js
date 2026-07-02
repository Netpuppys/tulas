import USP from "../../../../public/courses/btech/usp.png";
import CourseOutcomes from "../../../../public/courses/btech/CourseOutcomes.png";
import ProgramOutcomes from "../../../../public/courses/btech/ProgramOutcomes.png";
import ProgramSpecificOutcome from "../../../../public/courses/btech/ProgramSpecificOutcome.png";
import ProgramEducationalOutcome from "../../../../public/courses/mca/ProgramEducationalOutcome.webp";
import clubs from "../../../../public/courses/bjmc/clubs.png";
import beyondCurriculum from "../../../../public/courses/bca/beyondCurriculum.webp";
import careerProspectus from "../../../../public/courses/bjmc/careerProspectus.png";
import mcaDocument from "../../../../public/courses/mca/all-course-mca-course-outcomes.pdf";
import erepositry from "../../../../public/courses/mca/qr-code.pdf";
import DepartmentalVission from "../../../../public/courses/mca/departmentVission.webp";
import DepartmentalMission from "../../../../public/courses/bjmc/departmentalVision.png";
import Priya from "../../../../public/courses/mca/facultyData/PriyaMatta.webp";
import PriyaResume from "../../../../public/courses/mca/newresume/priya-latest26.pdf";
import RASHMI from "../../../../public/courses/mca/facultyData/RASHMI.webp";
import RASHMIResume from "../../../../public/courses/mca/facultyData/RASHMIResume.pdf";
import sidhartha from "../../../../public/courses/mca/facultyData/sidhartha.webp";
import sidharthaResume from "../../../../public/courses/mca/newresume/siddarth-latest26.pdf";
import RakeshKumar from "../../../../public/courses/mca/facultyData/RakeshKumar.webp";
import RakeshKumarResume from "../../../../public/courses/mca/newresume/RakeshKumarResume.pdf";
import ShikaTayal from "../../../../public/courses/mca/facultyData/ShikaTayal.webp";
import ShikaTayalResume from "../../../../public/courses/mca/newresume/ShikaTayalResume.pdf";
import Musheer from "../../../../public/courses/mca/facultyData/Musheer.webp";
import MusheerResume from "../../../../public/courses/mca/newresume/musheer-updated-resume.pdf";
import SanjeevKumnar from "../../../../public/courses/mca/facultyData/SanjeevKumnar.webp";
import SanjeevKumnarResume from "../../../../public/courses/mca/newresume/SanjeevKumnarResume.pdf";
import Link from "next/link";
import content1 from "../../../../public/courses/mca/content1.webp";
import content2 from "../../../../public/courses/mca/content2.webp";
import AayushRaj from "../../../../public/courses/mca/PlacementDesign/AayushRaj.webp";
import DheerajKumar from "../../../../public/courses/mca/PlacementDesign/DheerajKumar.webp";
import JyotiPriya from "../../../../public/courses/mca/PlacementDesign/JyotiPriya.webp";
import Nitin from "../../../../public/courses/mca/PlacementDesign/Nitin.webp";
import PriyankaKumari from "../../../../public/courses/mca/PlacementDesign/PriyankaKumari.webp";
import RanjanKumar from "../../../../public/courses/mca/PlacementDesign/RanjanKumar.webp";
import RishabhSingh from "../../../../public/courses/mca/PlacementDesign/RishabhSingh.webp";
import TanyaChauhan from "../../../../public/courses/mca/PlacementDesign/TanyaChauhan.webp";
import AhmadJmal from "../../../../public/courses/btech/computer-science/facultyData/AhmadJmal.webp";
import AhmadJmalResume from "../../../../public/courses/mca/newresume/ahmadlatest26.pdf";
import aizaz from "../../../../public/courses/bca/facultyData/aizaz.webp";
import aizazResume from "../../../../public/courses/mca/newresume/aizazlatest26.pdf";

export const features = [
  {
    image: AayushRaj,
    image2: DheerajKumar,
  },
  {
    image: JyotiPriya,
    image2: Nitin,
  },
  {
    image: PriyankaKumari,
    image2: RanjanKumar,
  },
  {
    image: RishabhSingh,
    image2: TanyaChauhan,
  },
];
export const sideImages = [content1, content2];
export const heading = (
  <>
    Approved by {" "}
    <span className="text-[#f97316]">Bar Council of India (BCI)</span>
  </>
);
export const quotes = (
  <>
    “Code your future, innovate with technology, and transform the world with{" "}
    <strong className="text-[#f97316]">
      Tulas University Masters in Computer Applications Program.
    </strong>
    ”
  </>
);
export const content = (
  <>
    The School of Law at Tulas Institute offers integrated law programs designed to build a strong foundation in legal principles while developing analytical rigour, professional ethics, and a nuanced understanding of constitutional, corporate, and regulatory frameworks. The programs are structured to move beyond theoretical instruction, combining academic depth with practice-oriented learning to prepare students for the evolving demands of the legal profession.
    <br />
    <br />
    The curriculum is aligned with contemporary legal and industry requirements, integrating core areas such as constitutional law, criminal law, contract law, corporate law, and emerging domains alongside interdisciplinary inputs from social sciences and business studies. Through a focus on case law analysis, statutory interpretation, legal drafting, and research methodologies, students develop the ability to critically evaluate complex legal issues and apply structured legal reasoning. 
     <br />
     <br />
     The pedagogy emphasises experiential learning through moot court exercises, simulated trials, legal research projects, and clinical legal education. Students gain practical exposure through internships with law firms, corporate legal departments, courts, and regulatory bodies, enabling them to understand litigation processes, compliance frameworks, dispute resolution mechanisms, and corporate governance practices.
    <br />
     <br />
     Complemented by legal aid initiatives, workshops, and industry interactions, the program fosters professional competence, advocacy skills, and ethical responsibility. This comprehensive approach ensures that graduates are equipped not only with legal knowledge, but with the strategic, analytical, and professional capabilities required to succeed across litigation, corporate law, policy, and allied legal domains.
  </>
);
export const items = [
  {
    title: "USPs",
    // intro: "Here’s why Tulas Institute stands out as the ideal place to pursue your LLB",
    image: USP,
    outro: "Join Tulas University and propel your tech career to new heights!",

    points: [
       <>
        Comprehensive, Industry-Relevant Curriculum aligned with contemporary legal practices
      </>,
      <>
        Moot Court Training & Simulations to build advocacy and courtroom skills
      </>,
      <>
        Internships & Industry Exposure with law firms, courts, and corporate organisations
      </>,
      <>
        Focus on Legal Research, Drafting & Case Analysis
      </>,
      <>
       Experienced Faculty & Personalised Mentorship
      </>,
      <>
        Legal Aid Activities & Social Engagement to build real-world understanding
      </>,
      <>
       Career Support & Professional Development Initiatives
      </>
    ],
  },
    {
    title: "Program Outcomes",
    description: [
      "Demonstrate a comprehensive understanding of legal systems, constitutional frameworks, and regulatory environments.",
      "Analyse complex legal and socio-economic issues using structured reasoning and critical thinking",
      "Apply legal knowledge to real-world situations across litigation, corporate, and public domains",
      "Exhibit strong communication, advocacy, and negotiation skills in professional settings",
      "Uphold ethical standards, integrity, and social responsibility in legal practice",
      "Adapt to evolving legal and business environments with a continuous learning mindset "
    ],
    image: ProgramOutcomes,
  },

    {
    title: "Course Outcomes",
    description: [
      "Interpret and apply core areas of law such as constitutional law, contract law, criminal law, and corporate law",
      "Conduct legal research using appropriate methodologies, tools, and case analysis techniques",
      "Draft legal documents including contracts, petitions, and case briefs with clarity and precision",
      "Participate effectively in moot courts, mock trials, and legal simulations",
      "Understand the interface between law, business, and society through interdisciplinary learning",
      "Develop practical insights through internships, case studies, and real-world legal exposure"
    ],
    image: CourseOutcomes,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To be a centre of excellence in legal education that nurtures competent professionals with strong ethical values, a sense of justice, and the ability to contribute meaningfully to society and the legal profession.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>To provide high-quality legal education aligned with industry and societal needs</li>
          <li>To promote experiential learning through practical exposure and research</li>
          <li>To develop ethical, responsible, and professionally competent individuals</li>
          <li>To foster critical thinking, advocacy, and leadership skills</li>
          <li>To prepare students for diverse career opportunities in the legal domain</li>
        </ul>
      </>
    ),
    image: DepartmentalMission,
  },
];
export const cards = [
  { title: "Eligibility" },
];

export const selectedCardTable = [
  {
    sno: 1,
    course: "BA LL.B (Hons.)",
    duration: "5 years",
    eligibility:
      "10+2 or equivalent from a recognised board with minimum 50% marks (45% for reserved categories), as per BCI norms",
  },
    {
    sno: 2,
    course: "BBA LL.B (Hons.)",
    duration: "5 years",
    eligibility:
      "10+2 or equivalent from a recognised board with minimum 50% marks (45% for reserved categories), as per BCI norms",
  },
    {
    sno: 3,
    course: "LL.B",
    duration: "3 years",
    eligibility:
      "Graduation in any discipline with minimum 50% marks (45% for reserved categories), as per BCI norms",
  },
];

export const itemsClubs = [
  {
    title: "Opportunities in Computer Application",
    description: [
      "Some job titles are listed here:",
      "Computer Programmer",
      "Software Developer",
      "Web Designer",
      "Database Administrator",
      "Web/Multimedia Programmer",
      "Software Consultant",
      "Technical Writer",
      "System Analyst",
    ],
    image: clubs,
  },
  {
    title: "Beyond the Curriculum - More Than Just a Degree",
    description: [
      "At Tulas University, the MCA program offers more than just academic knowledge, preparing you to be a well-rounded tech leader:",
      <>
        <strong className="font-bold">Internships & Industry Projects:</strong>
        <br />
        Gain hands-on experience working with top tech companies on real-world
        challenges.
      </>,
    ],
    image: beyondCurriculum,
    points: [
      <>
        <strong className="font-bold">Add-On Certifications:</strong>
        <br />
        Stay ahead with certifications in emerging technologies like Blockchain,
        Data Analytics, and Cloud Computing.
      </>,
      <>
        <strong className="font-bold">Industrial Visits: </strong>
        <br />
        Get a firsthand look at cutting-edge technology during guided visits to
        major IT companies.
      </>,
      <>
        <strong className="font-bold">Entrepreneurial Focus:</strong>
        <br />
        Access mentorship, resources, and incubation support to launch your own
        tech startup.
      </>,
      <>
        <strong className="font-bold">Soft Skills Development:</strong>
        <br />
        Enhance leadership, communication, and problem-solving skills through
        workshops and activities.
      </>,
      <italic className="italic font-bold">
        Tulas MCA program prepares you for both technical expertise and
        professional success in the tech industry.
      </italic>,
    ],
  },
  {
    title: "Career Prospectus – A Future Filled with Limitless Potential",
    description: [
      "An MCA degree from Tulas University unlocks a world of rewarding, high-paying career opportunities in the rapidly evolving tech industry:",
      <>
        <strong className="font-bold">Software Engineer/Developer:</strong>
        <br />
        Design and develop software solutions for various platforms and
        industries.
      </>,
    ],
    image: careerProspectus,
    points: [
      <>
        <strong className="font-bold">Data Scientist/Analyst: </strong>
        <br />
        Analyze big data to drive informed decisions in sectors like finance,
        healthcare, and retail.
      </>,
      <>
        <strong className="font-bold">Cybersecurity Specialist: </strong>
        <br />
        Protect sensitive data and networks from cyber threats in an
        increasingly digital world.
      </>,
      <>
        <strong className="font-bold">AI/ML Expert:</strong>
        <br />
        Develop intelligent systems and applications that learn and adapt from
        data.
      </>,
      <>
        <strong className="font-bold">System Architect: </strong>
        <br />
        Design large-scale IT systems and manage complex projects for seamless
        integration.
      </>,
      <>
        <strong className="font-bold">IT Consultant: </strong>
        <br />
        Optimize IT infrastructure and digital strategies for organizations
        across industries.
      </>,
      <>
        <strong className="font-bold">Tech Entrepreneur:</strong>
        <br />
        Launch your own tech venture or offer consultancy services in the tech
        space.
      </>,
      <>
        <strong className="font-bold">Further Education & Research:</strong>
        <br />
        Pursue advanced degrees or research, leading to roles in academia or
        specialized tech sectors.
      </>,
      "Tulas MCA program equips you with the skills, insights, and leadership potential to excel in these dynamic fields and shape the future of technology.",
      <italic className="italic font-bold">
        "The tech world is waiting—are you ready to lead?"
      </italic>,
    ],
  },
];
