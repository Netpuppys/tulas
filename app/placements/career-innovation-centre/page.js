"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import bannerImage from "../../../public/Homepage/BannerHome/Banner1.webp";
import background from "../../../public/AboutDehradun/background.png";
import hostel from "../../../public/infrastructure/HostelMess/hostel.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import Vision from "@/component/Programs/Vision";
import TopRecruiter from "@/component/topRecruiter";

const section = [
  {
    title: "Career Innovation Centre (CIC)",
    description: (
      <>
        Worried about what’s next after college? Wondering how to land your
        dream job or prepare for competitive exams? Don’t worry, we’ve got your
        back! The Career Innovation Centre (CIC) at Tula’s is here to help you
        turn your career goals into reality.
        <br />
        <br />
        <strong>Career Counselling:</strong> Struggling to figure out what comes
        next? Our personalised guidance helps you choose the right path, whether
        it’s a job or further studies.
        <br />
        <br />
        <strong>Skill Development:</strong> Need to make your resume stand out
        or ace that interview? We’ll teach you how to build the skills that
        employers look for.
        <br />
        <br />
        <strong>Higher Education Support:</strong> Planning for exams like GRE,
        GATE, or CAT? We’ll help you prepare and guide you through the entire
        process.
        <br />
        <br />
        <strong>Industry Insights:</strong> Want to know the latest trends in
        the job market? Our workshops and seminars keep you up to date with
        industry knowledge and networking tips.
        <br />
        <br />
        <strong>Connections with Recruiters:</strong> Want to work with the
        finest organisation in your field? We connect you with top recruiters to
        give your career a head start.
      </>
    ),
    image: hostel,
  },
  // {
  //   title: "Career Innovation Centre",
  //   description: (
  //     <>
  //       The Career Innovation Centre, supported by faculty members from various
  //       departments, delivers effective career guidance services to students.
  //       This includes counselling for higher education, such as GRE, GATE, CAT,
  //       among others. Each year, the AMCAT exam is administered for 5th and
  //       7th-semester students to evaluate their readiness for the job market,
  //       providing tailored guidance based on their sectoral fit.
  //       <br />
  //       <br />
  //       Roles and Responsibilities
  //       <ul className="list-disc ml-5">
  //         <li>
  //           To provide guidance on educational and vocational/career matters
  //           through individual and group counselling sessions.
  //         </li>
  //         <li>
  //           To offer pre-placement guidance and counselling for postgraduate
  //           studies.
  //         </li>
  //         <li>
  //           To assist students in making informed decisions about their
  //           education and career trajectories.
  //         </li>
  //         <li>
  //           To help students understand that career management is a lifelong
  //           process requiring continual development.
  //         </li>
  //         <li>
  //           To educate students on the influence of technological trends on
  //           career management and progression.
  //         </li>
  //         <li>
  //           To promote student independence and self-confidence in career
  //           decision-making.
  //         </li>
  //         <li>
  //           To raise awareness of the wide range of opportunities available to
  //           students following graduation, whether in higher education or career
  //           development.
  //         </li>
  //       </ul>
  //     </>
  //   ),
  //   image: hostel,
  // },
  {
    title: "The Training Department",
    description: (
      <>
        The Training Department offers an immersive{" "}
        <strong>Personality Development program</strong> integrated into the
        regular curriculum to prepare students for their professional careers.
        Through weekly four-hour sessions, students enhance their soft skills,
        aptitude, and attitude—essential for securing employment.
        <br />
        <br />
        The department focuses on developing students holistically, ensuring
        they are equipped to tackle corporate challenges post-graduation.{" "}
        <strong>The School of Lifelong Learning</strong> organizes workshops,
        group discussions, debates, and job fairs to boost engagement and
        skill-building.
        <br />
        <br />
        For 6th-semester students, the{" "}
        <strong>"Campus to Corporate" program</strong> connects academic
        knowledge with industry expectations, featuring top industry trainers
        for high-quality professional development.
      </>
    ),
    image: hostel,
  },
  {
    title: "The Placement Department",
    description: (
      <>
        The Placement Department at CIC is the bridge between students and
        leading organizations, creating opportunities for internships and
        placements. We connect academic talent with industry needs, ensuring
        students are ready for the professional world.
        <br />
        <br />
        <strong>What We Do:</strong>
        <br />
        <ul className="list-disc ml-5">
          <li>
            Bring top-tier companies to you by building strong industry ties.
          </li>
          <li>
            Create partnerships (MoUs) with leading companies for job
            placements.
          </li>
          <li>Help you connect with industry professionals</li>
          <li>
            Invite companies to campus so you can show them what you’ve got.
          </li>
          <li>
            Organize field visits to let you experience different industries up
            close.
          </li>
          <li>
            Set up workshops and job fairs to get you face-to-face with
            employers.
          </li>
          <li>
            Find both on-campus and off-campus job opportunities just for you.
          </li>
        </ul>
      </>
    ),
    image: hostel,
  },
];

const content4 = {
  para: "",
  roles: [],
  conclusion: "",
};

const content3 = <></>;

const Highlight = ({ children }) => {
  return <strong className="text-[#007A83] !font-bold">{children}</strong>;
};

const description = (
  <>
    Your time at Tula’s Institute is just the beginning. With connections to
    top-tier companies, expert career guidance, and real-world experiences, we
    ensure you transition smoothly from classroom to career. It’s not just about
    landing a job — it’s about stepping into the right role, and we’re here to
    guide you every step of the way!
  </>
);

// Our mission is to foster a forward-thinking approach to career growth by integrating cutting-edge tools, personalized guidance, and industry connections."

const page = () => {
  return (
    <>
      <head>
        <title>
          Career Innovation Centre | Tula's Institute | Shaping Future Leaders
        </title>
        <meta
          name="description"
          content="Discover the Career Innovation Centre at Tula's Institute, where students are empowered with career planning, skills development, and industry connections to excel in their chosen fields."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          title={"Placement at Tula’s"}
          belowPara={description}
          image={bannerImage}
        />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <Vision sections={section.slice(0, 1)} />

        <TopRecruiter />

        <Vision sections={section.slice(1)} />
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default page;
