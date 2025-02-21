import DepartmentalVission from "../../../public/bsc-agriculture/vision.png";
import DepartmentalMission from "../../../public/bsc-agriculture/mission.png";
import anushka from "../../../public/bsc-agriculture/facultyData/anushka.webp";
import anushkaResume from "../../../public/bsc-agriculture/facultyData/anushkaResume.pdf";
import ASHISHUPADHYAY from "../../../public/bsc-agriculture/facultyData/ASHISHUPADHYAY.webp";
import ASHISHUPADHYAYResume from "../../../public/bsc-agriculture/facultyData/ASHISHUPADHYAYResume.pdf";
import divya from "../../../public/bsc-agriculture/facultyData/divya.webp";
import divyaResume from "../../../public/bsc-agriculture/facultyData/divyaResume.pdf";
import Mukesh from "../../../public/bsc-agriculture/facultyData/Mukesh.webp";
import MukeshResume from "../../../public/bsc-agriculture/facultyData/MukeshResume.pdf";
import pankajNegi from "../../../public/bsc-agriculture/facultyData/pankajNegi.webp";
import pankajNegiResume from "../../../public/bsc-agriculture/facultyData/pankajNegiResume.pdf";
import Prem from "../../../public/bsc-agriculture/facultyData/Prem.webp";
import PremResume from "../../../public/bsc-agriculture/facultyData/PremResume.pdf";
import RekhaDhani from "../../../public/bsc-agriculture/facultyData/RekhaDhani.webp";
import RekhaDhaniResume from "../../../public/bsc-agriculture/facultyData/RekhaDhaniResume.pdf";
import Rupali from "../../../public/bsc-agriculture/facultyData/Rupali.webp";
import RupaliResume from "../../../public/bsc-agriculture/facultyData/RupaliResume.pdf";
import RupendraKaur from "../../../public/bsc-agriculture/facultyData/RupendraKaur.webp";
import RupendraKaurResume from "../../../public/bsc-agriculture/facultyData/RupendraKaurResume.pdf";
import shivangi from "../../../public/bsc-agriculture/facultyData/shivangi.webp";
import shivangiResume from "../../../public/bsc-agriculture/facultyData/shivangiResume.pdf";
import shivaniSharma from "../../../public/bsc-agriculture/facultyData/shivaniSharma.webp";
import shivaniSharmaResume from "../../../public/bsc-agriculture/facultyData/shivaniSharmaResume.pdf";
import ShivendraMishra from "../../../public/bsc-agriculture/facultyData/ShivendraMishra.webp";
import ShivendraMishraResume from "../../../public/bsc-agriculture/facultyData/ShivendraMishraResume.pdf";
import Suresh from "../../../public/bsc-agriculture/facultyData/Suresh.webp";
import SureshResume from "../../../public/bsc-agriculture/facultyData/SureshResume.pdf";
import USP from "../../../public/bsc-agriculture/Crousel/USP.png";
import Course from "../../../public/bsc-agriculture/Crousel/Course.png";
import Program from "../../../public/bsc-agriculture/Crousel/Program.png";
import AGRICULTURE from "../../../public/bsc-agriculture/AGRICULTURE.pdf";
import placement3 from "../../../public/Homepage/Placement/placement3.png";
import placement4 from "../../../public/Homepage/Placement/placement4.png";
import Link from "next/link";

export const features = [
  {
    image: placement3,
    image2: placement4,
  },
  {
    image: placement3,
    image2: placement4,
  },
];
export const content = (
  <>
    B.Sc. Agriculture is a four-year UG (Undergraduate) degree program that
    focuses on theoretical and practical training in various agricultural
    techniques. B.Sc. Agriculture offers a wide range of opportunities for
    graduates to work in various sectors of agriculture, from technical aspects
    to commercial opportunities, and from production to sales.
    <br />
    <br />
    A bachelor’s degree in agriculture is a broad-based program with a lot of
    promise. It covers topics such as food production, gardening, animal
    husbandry, rural economy and development, environmental health and so on.
    Other businesses may face layoffs, but agriculture will never be one of them
    because “food” is a basic human need. There will never be a recession or a
    slowdown when it comes to feeding the planet. Truly speaking, advances in
    technology, research, and inventions in this field have greatly expanded the
    scope of agriculture.
    <br />
    <br />
    A student pursuing B.Sc. Agriculture degree will study Agronomy, Soil
    Science, Horticulture, Plant Breeding and Genetics, Entomology, Plant
    Pathology, Animal Science, Extension Education, Plant Biochemistry,
    Agriculture Economics and Fundamentals of Biotechnology, among other
    subjects. The course is based on ICAR (Indian Council of Agricultural
    Research) recommendations and is intended to teach students how to improve
    crop production in a sustainable manner while also providing a broad
    understanding of agriculture and allied fields.
    <br />
    <br />
    <strong>The primary goal of this program is to:</strong>
    <br />
    <br />
    <ul className="list-disc ml-5">
      <li>
        Instil subject-specific knowledge while also establishing a link between
        practical solutions and theory.
      </li>
      <br />
      <li>
        Encourage students’ personal development and self-confidence, which will
        provide them with opportunities to work in the agribusiness.
      </li>
      <br />
      <li>
        Using scientific and experimental evidence to make agriculture-related
        issues appealing.
      </li>
      <br />
      <li>
        Use practical applications and research to hone problem-solving skills.
      </li>
    </ul>
  </>
);
export const items = [
  {
    title: "USPs",
    description: [
      "Collaborative and integrative pedagogy helps to adopt concepts quickly.",
      "Wide practical field exposure with individual allotment of working areas to various modules of Agriculture viz Hydroponics, Aeroponics, Mushroom Cultivation, Apiculture, Crop Cafeteria and many more designed in house by the students.",
      "Interaction based ‘Flipped Classroom’ Learning Methodology.",
      "25+ research papers and articles published in reputed journals.",
    ],
    image: USP,
    points: [
      "3 funded research projects from UCOST, Dehradun, Uttarakhand.",
      "300+ alumni working with Government and Private Sectors.",
      "Comprehend the theories and techniques used in successful organizations using “Practical Based” teaching pedagogy.",
      "In close proximity to wide range of flora and fauna to be explored with the given curriculum.",
      "Prepares students for entrepreneurship and employment.",
      "MoU’s with Krishi Vigyan Kendra and other registered agriculture and farm development centers.",
    ],
  },
  {
    title: "Course Outcomes",
    description: [
      <Link href={AGRICULTURE} target="_blank" rel="noopener noreferrer">
        Click here to download AGRICULTURE Course Outcomes
      </Link>,
    ],
    image: Course,
  },
  {
    title: "Program Outcomes",
    description: [
      "PO1. Create, select, and apply appropriate techniques, resources, and modern tools and software for 	prediction and forecast of outcomes based on agricultural sciences",
      "PO2. To identify, review, formulate and analyze problems in various sectors of Agriculture &amp; 	Forestry.",
    ],
    image: Program,
    points: [
      "PO3. Design Solutions of various problems found in farming system with due consideration of farmers 	health and safety.",
      "PO4. To develop scientific aptitude which is beneficial for the society.",
      "PO5. To develop communication skills such as reading, writing, speaking etc which will help in 	expressing ideas and views clearly &amp; effectively.",
      "PO6. Function effectively as an individual and as a member for leader in diverse organizations.",
      "PO7. Recognize the need for, and have the preparation &amp; ability to engage in independent & Life-long learning in the broadest context of technological &amp; professional changes",
    ],
  },
  {
    title: "Program Specific Outcome",
    description: [
      "PSO 1: Students make use of digital and farm technology to build models for enhancing farming industry.",
      "PSO 2: An ability to apply the acquired skills and knowledge to experiment, innovate and demonstrate 	sustainable agricultural practices at grass root level for rural upliftment.",
    ],
    image: Course,
    points: [
      "PSO 3: Students develop entrepreneurial skills by applying knowledge gained through participation in 	workshops and start-up boot camps.",
    ],
  },
  {
    title: "Program Educational Objective",
    description: [
      "PEO1: To develop competencies in various aspects of agriculture and allied sciences.",
      "PEO2: To promote use of technology in order to solve problems related to agricultural production.",
      "PEO3: To develop entrepreneurial skills, creativity and innovation in the field of agricultural science.",
      "PEO4: To produce industry ready graduates with ethical and moral values.",
      "PEO5: To explore future opportunities in higher studies.",
      "PEO6: To provide a base for independent and life-long learning in the domain of agricultural practices.",
    ],
    image: Program,
  },

  // Add other carousel items here
];
export const sections = [
  {
    title: "Departmental Vision",
    description:
      "To cultivate a future for organic farming, enhanced crop diversity, access to technology, education and environmental harmony through innovative, sustainable and research based agricultural practices, cutting-edge technologies and empowered farming communities.",
    image: DepartmentalVission,
  },
  {
    title: "Departmental Mission",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            To create and share information about sustainable farming methods
            that boost productivity, save resources, and help combat climate
            change.
          </li>
          <li>
            To foster innovation in agricultural technologies to improve
            efficiency, reduce waste, and ensure access to healthy and
            affordable food for all.
          </li>
          <li>
            To strengthen farming communities by providing education, training,
            and outreach services, enabling them to improve their quality of
            life and adapt to economic and environmental hardships.
          </li>
          <li>
            To encourage cooperation among all players in the food system –
            researchers, policy-makers, industry figures, and consumers – to
            develop a food chain that is both sustainable and fair.
          </li>
          <li>
            To advocate for the protection of biodiversity and the well-being of
            ecosystems within agricultural areas, endorsing methods that
            safeguard natural resources and facilitate the production of
            nutritious food in a sustainable manner.
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
    <span className="font-[Arapey] pb-[1%] leading-tight">
      Admission Eligibility
    </span>
    <ul className="font-[TTChocolates] list-disc ml-5 leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
      <li>
        Passed 10+2 examination with Physics, Chemistry,
        Mathematics/Biology/Agriculture Obtained at least 45% marks (40% marks
        in case of candidates belonging to reserved category) in the above
        subjects taken together.
      </li>
    </ul>
  </>
);
export const semesterData = [
  {
    semester: "I SEMESTER",
    subjects: [
      { code: "BSAC 101", title: "Fundamental of Horticulture" },
      {
        code: "BSAC 102",
        title: "Fundamentals of Plant Biochemistry and Biotechnology",
      },
      { code: "BSAC 103", title: "Fundamentals of Soil Science" },
      { code: "BSAC 104", title: "Introduction to Forestry" },
      {
        code: "BSAC 105",
        title: "Comprehension and Communication Skills in English",
      },
      { code: "BSAC 106", title: "Fundamentals of Agronomy" },
      { code: "BSAR 107", title: "Introductory Biology" },
      { code: "BSAR 108", title: "Elementary Mathematics" },
      { code: "BSAR 109", title: "Agriculture Heritage" },
      { code: "BSAR 110", title: "Rural Sociology and Educational Psychology" },
      { code: "BSAN 111", title: "Human Values and Ethics (Non-gradial)" },
    ],
  },
  {
    semester: "II SEMESTER",
    subjects: [
      { code: "BSAC-201", title: "Fundamentals of Genetics" },
      { code: "BSAC-202", title: "Agricultural Microbiology" },
      { code: "BSAC-203", title: "Soil and Water Conservation Engineering" },
      { code: "BSAC-204", title: "Fundamentals of Crop Physiology" },
      { code: "BSAC-205", title: "Fundamentals of Agricultural Economics" },
      { code: "BSAC-206", title: "Fundamentals of Plant Pathology" },
      { code: "BSAC-207", title: "Fundamentals of Entomology" },
      {
        code: "BSAC-208",
        title: "Fundamentals of Agricultural Extension Education",
      },
      {
        code: "BSAC-209",
        title: "Communication Skills and Personality Development",
      },
      {
        code: "BSAN-110",
        title: "NSS/NCC/Physical Education and Yoga Practices",
      },
    ],
  },
  {
    semester: "III SEMESTER",
    subjects: [
      {
        code: "BSAC 301",
        title: "Crop Production Technology -1 (Kharif Crops)",
      },
      { code: "BSAC 302", title: "Fundamentals of Plant Breeding" },
      {
        code: "BSAC 303",
        title: "Agriculture Finance and Cooperation",
      },
      { code: "BSAC 304", title: "Agri-informatics" },
      {
        code: "BSAC 305",
        title: "Farm Machinery and Power",
      },
      {
        code: "BSAC 306",
        title: "Production Technology of Vegetables and Spices",
      },
      {
        code: "BSAC 307",
        title: "Environmental Studies and Disaster Management",
      },
      { code: "BSAC 308", title: "Statistical Methods" },
      { code: "BSAC 309", title: "Livestock and Poultry Management" },
    ],
  },
  {
    semester: "IV SEMESTER",
    subjects: [
      { code: "BSAC-401", title: "Crop Production Technology-II (Rabi)" },
      {
        code: "BSAC-402",
        title:
          "Production Technology For ornamental Crops, MAP and Landscaping",
      },
      { code: "BSAC-403", title: "Renewable Energy and Green Technology" },
      { code: "BSAC-404", title: "Problematic Soils and their Management" },
      {
        code: "BSAC-405",
        title: "Production Technology for Fruit and Plantation Crops",
      },
      { code: "BSAC-406", title: "Principles of Seed technology " },
      { code: "BSAC-407", title: "Farming System & Sustainable Agriculture" },
      { code: "BSAC-408", title: "Agricultural Marketing, Trade and Prices " },
      {
        code: "BSAC-409",
        title: "Introductory Agrometeorology & Climate Change ",
      },
      { code: "BSAE- 110", title: "Weed Management (E)" },
    ],
  },
  {
    semester: "V SEMESTER",
    subjects: [
      {
        code: "BSAC 501",
        title: "Princples of Integrated Pest and Disease Management",
      },
      {
        code: "BSAC 502",
        title: "Manures, Fertilizers and Soil Fertility Management",
      },
      {
        code: "BSAC 503",
        title: "Pest of Crops and Stored Grains and their Management",
      },
      {
        code: "BSAC 504",
        title:
          "Dieases of Field Crops and Horticultural Crops and their Management-I",
      },
      { code: "BSAC 505", title: "Crop Improvement-I (Kharif Crops)" },
      {
        code: "BSAC 506",
        title: "Entrepreneurship Development and Business Communication",
      },
      {
        code: "BSAC 507",
        title: "Geoinformatics and Nano-technology and Precision Farming",
      },
      { code: "BSAC 508", title: "Practical Crop Production- I" },
      { code: "BSAC 509", title: "Intellectual Property Rights (IPR)" },
      { code: "BSAE 107", title: "Protected Cultivation" },
    ],
  },
  {
    semester: "VI SEMESTER",
    subjects: [
      {
        code: "BSAC-601",
        title: "Rainfed Agriculture & Watershed Agriculture",
      },
      {
        code: "BSAC-602",
        title: "Protected Cultivation and Secondary Agriculture ",
      },
      {
        code: "BSAC-603",
        title:
          "Diseases of Field and Horticultural Crops and Their management-II",
      },
      {
        code: "BSAC-604",
        title:
          "Post-harvest Management and Value Addition of Fruits and Vegetables",
      },
      { code: "BSAC-605", title: "Management of Beneficial Insects " },
      { code: "BSAC-606", title: "Crop Improvement -II (Rabi crops)" },
      {
        code: "BSAC-607",
        title: "Practical Crop Production (PCP)-II (Rabi crops)",
      },
      { code: "BSAC-608", title: "Principles of Organic Farming" },
      {
        code: "BSAC-609",
        title: "Farm Management Production and Resource Economics",
      },
      { code: "BSAC-610", title: "Principles of Food Science and Nutrition" },
      { code: " BSAE- 102", title: "Agrochemicals (E)" },
    ],
  },
  {
    semester: "VII SEMESTER",
    subjects: [
      { code: "BSAG 701", title: "General Economics" },
      { code: "BSAG 702", title: "Breeding & Improvement of Farm Animals" },
      { code: "BSAG 703", title: "Principles of Animal Nutrition" },
      { code: "BSAG 704", title: "Element of Food Technology" },
      { code: "BSAG 705", title: "Human Food & Nutrition" },
      { code: "BSAG 706", title: "Soil Taxonomy, Survey & Remote Sensing" },
      {
        code: "BSAG 707",
        title: "Production Technology of Medicinal & Aromatic Plants",
      },
    ],
  },
  {
    semester: "VIII SEMESTER",
    subjects: [
      { code: "BSAG 801", title: "RAWE (Rural Agriculture Work Experience)" },
    ],
  },
];
export const facultyData = [
  {
    name: "Mr. Ashish Upadhyay",
    designation: "Asst Prof",
    education: "M.sc P.hd (P)",
    publications: "23",
    experience: "13",
    imageUrl: ASHISHUPADHYAY,
    resume: ASHISHUPADHYAYResume,
  },
  {
    name: "Dr. Rupinder Kaur",
    designation: "Assoct Prof",
    education: "P.hd",
    publications: "26",
    experience: "11",
    imageUrl: RupendraKaur,
    resume: RupendraKaurResume,
  },
  {
    name: "Dr. Rekha Dhanai",
    designation: "Assoct Prof",
    education: "P.hd",
    publications: "40",
    experience: "11",
    imageUrl: RekhaDhani,
    resume: RekhaDhaniResume,
  },
  {
    name: "Dr. Prem Singh Verma",
    designation: "Asst Prof",
    education: "P.hd",
    publications: "12",
    experience: "16",
    imageUrl: Prem,
    resume: PremResume,
  },
  {
    name: "Dr. Suresh Kumar",
    designation: "Asst Prof",
    education: "P.hd",
    publications: "2",
    experience: "6",
    imageUrl: Suresh,
    resume: SureshResume,
  },
  {
    name: "Mr. Pankaj Singh Negi",
    designation: "Asst Prof",
    education: "M.sc",
    publications: "1",
    experience: "3",
    imageUrl: pankajNegi,
    resume: pankajNegiResume,
  },
  {
    name: "Mr. Shivendra Mishra",
    designation: "Asst Prof",
    education: "M.sc P.hd (P)",
    publications: "7",
    experience: "3",
    imageUrl: ShivendraMishra,
    resume: ShivendraMishraResume,
  },
  {
    name: "Ms. Rupali Kaushik",
    designation: "Asst Prof",
    education: "M.sc P.hd (P)",
    publications: "4",
    experience: "2",
    imageUrl: Rupali,
    resume: RupaliResume,
  },
  {
    name: "Ms. Divya Rawat",
    designation: "Asst Prof",
    education: "M.sc P.hd (P)",
    publications: "4",
    experience: "4",
    imageUrl: divya,
    resume: divyaResume,
  },
  {
    name: "Ms. Shivani Sharma",
    designation: "Asst Prof",
    education: "M.sc",
    publications: "2",
    experience: "2",
    imageUrl: shivaniSharma,
    resume: shivaniSharmaResume,
  },
  {
    name: "Dr. Mukesh Kumar",
    designation: "Asst Prof",
    education: "P.hd",
    publications: "7",
    experience: "2",
    imageUrl: Mukesh,
    resume: MukeshResume,
  },
  {
    name: "Dr. Shivangi Negi",
    designation: "Asst Prof",
    education: "P.hd",
    publications: "31",
    experience: "4",
    imageUrl: shivangi,
    resume: shivangiResume,
  },
  {
    name: "Ms. Anushka Kala",
    designation: "Asst Prof",
    education: "M.sc P.hd (P)",
    publications: "2",
    experience: "4",
    imageUrl: anushka,
    resume: anushkaResume,
  },
];
const careers = [
  {
    carrer: "Agriculture Research Scientist",
    title:
      "Subject Matter Specialist in different Krishi Vigyan Kendras (KVKs)",
  },
  {
    carrer: "Extension Officer",
    title: "Field Officer",
  },
  {
    carrer: "Agriculture Officer",
    title: "Farm Manager",
  },
  {
    carrer: "Plantation Manager",
    title: "Research Officer",
  },
  {
    carrer: "Officer in Quality Assurance in Related Fields",
    title: "Agriculture Loan Officer in Banks",
  },
  {
    carrer: "Production Manager",
    title: "Operations Manager in Fertilizer Units",
  },
  {
    carrer: "Business Development Manager",
    title: "Food Processing Units in Government",
  },
  {
    carrer: "Agri-Preneurship",
    title: "Seed Technologies Firm",
  },
];
export const itemsClubs = [
  {
    title: "Clubs/Societies/ Memberships",
    description: [
      "Following Clubs/Societies/ Memberships are running in the department",
      "IAAS- International Association of Students in Agriculture and related Sciences.",
      "Vibgyor",
      "Victree",
    ],
    image: USP,
  },
  {
    title: "Beyond Curriculum",
    description: [
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
      "Theatre reviews",
      "Quizzes",
      "Social Work",
      "Volunteering in Social cause campaigns",
      "Conducting Events and Festivals",
      "And lots more to add to the overall bucket of beyond curriculum activities",
    ],
    image: Course,
  },
  {
    title: "Career Prospects",
    description: [""],
    image: Program,
    points: [
      <div className="w-full max-w-full overflow-scroll">
        <table className="overflow-x-scroll w-fit border border-black text-[clamp(10px,0.7vw,20px)]">
          <tbody>
            {careers.map((data, index) => (
              <tr key={index}>
                <td className="text-[#353535] border border-black">
                  {data.carrer}
                </td>
                <td className="text-[#353535] border border-black">
                  {data.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    ],
  },

  // Add other carousel items here
];
