"use client";
import React from "react";
import Navbar from "@/component/Navbar/Navbar";
import bannerImage from "../../../public/placements/bannerImg.webp";
import placement1 from "../../../public/placements/placement1.webp";
import placement2 from "../../../public/placements/placement2.webp";
import placement3 from "../../../public/placements/placement3.webp";
import Footer from "@/component/Footer";
import Vision from "@/component/Programs/Vision";
import TopRecruiter from "@/component/topRecruiter";
import BannerProgram from "@/component/Programs/BannerProgram";

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
    image: placement1,
  },
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
    image: placement2,
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
    image: placement3,
  },
];

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
        <BannerProgram title={"Placement at Tula’s"} image={bannerImage} />
        <div className="w-full bg-white">
          <div className="min-h-fit pt-8 md:pt-[3%] h-fit md:min-h-[15vh] w-full overflow-hidden flex flex-col justify-center max-w-[1000px] px-8 mx-auto">
            <h4 className="leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] text-[#404040]">
              {description}
            </h4>
          </div>
        </div>

        <Vision sections={section.slice(0, 1)} color={true} />
        <TopRecruiter padding={true} />
        <Vision sections={section.slice(1)} color={true} />
        <div className="w-full h-fit z-50">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default page;
