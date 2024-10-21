"use client";

import React, { useEffect, useState } from "react";
import sunil from "../../../public/About/sunil.png";
import silky from "../../../public/About/silky.png";
import raghav from "../../../public/About/raghav.png";
import raunak from "../../../public/About/raunak.png";
import sandip from "../../../public/About/sandip.png";
import vijay from "../../../public/About/vijay.png";
import kothari from "../../../public/About/kothari.png";
import sunilSemwal from "../../../public/About/sunilSemwal.png";
import nishant from "../../../public/About/nishant.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import Modal from "./Modal";
import AboutFacultyModal from "./AboutFacultyModal";

const cards = [
  {
    image: sunil,
    name: "Sunil Kumar Jain",
    profile: "Chairman - TULA's Group",
    description:
      "Let me take this opportunity on behalf of the faculty and staff, to welcome you all to realize a convincing path with us. “There is not one blade of grass, there is no color in this world that is not intended to make us rejoice”, said by John Calvin. Tula’s vision stands on our beliefs and vows to change every student into an ambassador for their own semblance. Education is not only a way of learning new things but also looking at the world in a different way.",
    desc2:
      "Let me accumulate my content experience of 30 years in a magic listing that can help make the correct decisions in your life. We have always followed our rewards in your success and this truly translates into a long and honouring relationship with every student who graduates from Tula’s. We take immense pride in the relationship we share because each one of you will be an encouragement to those one day who face the same crossroads as you are on today.",
    awards: [
      "Recipient of Indira Gandhi Sadbhavna Award – 2008",
      "Rajeev Gandhi Shiromani Award – 2010",
      "Edupreneurs award for valuable contribution in engineering education in India – 2013",
      "Sardar Vallabh Bhai Patel Rashtriya Ekta Award – 2015",
      "Awarded with Dr. APJ Abdul Kalam Excellence Award- 2016",
    ],
  },
  {
    image: silky,
    name: "Silky Jain",
    profile: "Executive Director",
    description:
      "On behalf of the management, faculty, staff and Tulaites, I would like to welcome you all to Tula’s where not only will you get opportunities to shine in your future but also have the most memorable journey while you are on your golden path to attain success. Opportunities are many, future is great but to make the most of it you have to strive hard and give your best and I assure that we will be guiding you at every step and help you cross all impediments that come your way.",
    desc2:
      "At Tula’s, your dreams are our dreams, your aspirations are our aspirations,it’s in your victory that we celebrate our success. Let’s join hands in this journey where success is assured and let’s leave no stone unturned in creating a future that will make your parents, friends and the society take pride in you.",
    awards: [
      "Alumnus – Symbiosis Institute of Design, Pune",
      "Awarded as an Inspiring Women Eduleader for the year 2014 by Engineering Watch",
      "Awarded as Education Evangelist 2015 by Skill tree",
      "Awarded Certification in Leadership from Oxford University, London 2015",
      "Awarded Certification in Leadership from Harvard University, USA 2017",
      "Awarded with Today’s Woman Award by I-next 2017",
    ],
  },
  {
    image: raunak,
    name: "Raunak Jain",
    profile: "Vice President",
    description:
      "Tula’s, as the name suggests, carefully weighs and maintains a balance that is not only enriching academically but also lays special emphasis on the overall development of every student. With this, I would like to take the opportunity to welcome you at Tula’s, a place where your dreams are not yours alone. We at Tula’s have a mission to create and impart quality education and knowledge by developing and widening the quest quotient of our students.",
    desc2:
      "We believe that education cannot be confined within the boundaries of an institution and grows with every passing moment of a student’s life. Our state of the art infrastructure along with our corporate interface program provides the students with the ideal platform to harness their energies allowing them to pursue their goals. Our faculty comprises highly qualified professors who provide the students with the correct guidance and required support, be it academically or otherwise.",
    awards: [
      "M.Sc. International Management from RHUL (Royal Holloway University of London)",
      "Vice president (Welfare) National Taekwondo Committe",
      "Member – Cricket Association of Uttarakhand",
    ],
  },
  {
    image: raghav,
    name: "Dr. Raghav Garg",
    profile: "Vice President",
    description:
      "Tula’s, as the name suggests creates a balance and strives to develop and unearth the intrinsic potential and capability of the students, thereby preparing them to take on the global challenges. Our vision is to make Tula’s, a centre of excellence in learning, innovation, technology, agriculture, and management. Our students are groomed holistically to become industry ready and successful entrepreneurs. We at Tula’s envision our students to become employers and create jobs for others. At Tula’s, education is planned as an entire end-to-end process from the very first day. From making the student feel at home to equipping the student to be productive in industry and society.",
    desc2:
      "Our Institute has good relations with leading Universities of the world which gives Tulaites an edge over other students elsewhere. Tula’s is recognised for having state of the art infrastructure. Besides technical and professional competence, we make every possible effort to equally absorb in them the moral and ethical values and transform them into good human beings. We nurture our students with the sense of social commitment, humanitarian values, ethical practices and professionalism making them global citizens who can look beyond geographical boundaries.",
    awards: [
      "Vice President Technology",
      "B.Tech CS (VIT, Vellore)",
      "M.S. (University of Texas at Dallas)",
      "Ph.D (Banasthali University)",
      "MBA (IIMK)",
    ],
  },
];

const cardsFaculty = [
  {
    image: sandip,
    name: "Dr. Sandip Vijay",
    profile: "Director",
    description:
      "Tula’s Institute, Dehradun, established in 2006, is a thriving campus run by the Rishabh Educational Trust. Dehradun’s Tula’s Institute has established itself as a fully integrated technical and professional higher education institution. Our Vision for the institute is to emerge as an academic centre by creating and developing world-class professionals and promoting innovation and research. The goal of Tula’s Institute in Dehradun is to create professionals who are socially conscious, ethical, and responsible individuals who have a solid understanding of modern technical and professional principles.",
    desc2: (
      <>
        The four pillars of high-quality education—teaching, training, research,
        and incubation—are what make Tula’s Institute stand out among other
        organisations. Tula’s Institute in Dehradun was founded on the strength
        of these pillars.
        <br />
        <br />
        Future leaders who have the potential to change society are fostered and
        developed by the Institute. The institution collaborates closely with
        business, and it actively solicits business executives’ involvement in
        research projects in newly emerging fields. Additionally, it enables us
        to keep our services current and pertinent to the demands of the market.
        <br />
        <br />
        The main tenets of education at Tula’s Institute in Dehradun are the
        creation of knowledge, the dissemination of knowledge, and the
        application of knowledge. In their efforts to build new lives for
        themselves through hard work and sacrifice, the Engineering, Management,
        and Agriculture student batches have excelled beyond expectations and
        frequently traversed unmarked terrain, making it simple for the future
        batches to follow in their footsteps. This was made possible in great
        part by the faculty at Tula’s Institute in Dehradun, which is a diverse,
        knowledgeable, and dedicated group of professionals from many streams of
        study.
        <br />
        <br />
        Tula’s Institute, Dehradun, chooses intelligent people from a variety of
        backgrounds who are committed to providing a participatory learning
        process for its flagship UG and PG programs in Engineering, Management,
        agriculture, and Computer Applications. The Tula’s Institute works to
        instill in its students the high ethical standards and effective
        professional practises that are crucial in the globalised world of
        today. Our students participate in a variety of activities, including
        social and developmental work in nearby towns. The positive
        relationships between the teachers and students at Tula’s Institute
        Dehradun have also led to the development and exploration of novel
        solutions as well as the preparation of the students for the
        increasingly difficult problems of the working world.
        <br />
        <br />
        The school thinks that a comprehensive and all-encompassing student
        experience will maximise learning chances. To do this, the school offers
        a course curriculum that has been created to help students sharpen their
        managerial abilities and familiarise themselves with recent advancements
        in business. The faculty members’ use of pedagogical tools motivates
        students to be competent, innovative, and creative. Our highly qualified
        faculty’s instruction encourages students to instill in themselves the
        ideals of independence, which will help them become great technocrats,
        managers, and brand representatives for their organisations.
        <br />
        <br />
        Tula’s Institute Dehradun is an example of a modern-day “Gurukul,” where
        talent is developed, polished, and launched into the corporate world. It
        is situated in an ecologically stimulating environment.
        <br />
        <br />
        I’d like to use this chance to personally invite you to Tula’s Institute
        in Dehradun to see how world leaders are developed there.
      </>
    ),
    awards: [
      "Ph.D. IIT Roorkee",
      "Fellow of ACEEE, Finland",
      "FIE, New Delhi",
      "SMIEEE, USA",
      "SMISoC, USA",
    ],
  },
  {
    image: vijay,
    name: "Vijay Kumar Upadhyay",
    profile: "Registrar",
    description:
      "We believe education will play a significant role in accomplishing future productivity, economic goals, and higher standards of living throughout the world. I would like to applaud the student’s community for their hard work, discipline and analytical thinking that has propelled Tula’s Institute to the new heights, year after year. The Institute campus is pollution free, ragging free with conducive studying environment, a beautiful landscape, a picturesque view of modern buildings, plethora of state-of-the-art facilities, modern libraries well equipped gymnasium, indoor and outdoor games/sports facilities, ultra-modern laboratories – are at the service of students.",
    desc2: (
      <>
        Tula’s Institute provide best hostel life, efficient medical facilities
        and 24×7 securities.
        <br />
        <br />
        Those who are in search of excellence and have set higher goals to climb
        ladder of success in life must join the Tula’s Institute to explore new
        horizon of unlimited opportunities.
        <br />
        <br />I heartily welcome the students seeking admission in the program
        offered by Tula’s Institute.
      </>
    ),
    awards: ["Email ID: registrar@tulas.edu.in"],
  },
  {
    image: kothari,
    name: "DP Kothari",
    profile: "Adjunct Professor",
    description:
      "The goal of Tula’s Institute is to equip our students with the skills they need to successfully navigate an unpredictable future. Tula’s believes that a technical education’s DNA is dependent on collaboration between four major stakeholders: students, industry, faculty members, and the parents. In contrast to traditional techniques of memorising and rote learning, students at Tula’s acquire knowledge through a dynamic learning process that incorporates research, innovation, instilling social and cultural behaviour, and cooperation.",
    desc2: (
      <>
        In a completely safe and loving environment, arts, music, drama, sports,
        social, cultural, and other co & extracurricular activities are absorbed
        into the programme. These variables combine to provide a holistic
        learning experience that moulds our pupils into well-balanced citizens
        of the future.
        <br />
        <br />
        We devote the same amount of attention to our faculty members, who must
        mould the future of our pupils. We provide them with the most up-to-date
        technology tools, mentor their professional growth, and provide a
        productive and positive work atmosphere in which they can put their
        experience and skills to good use for the benefit of the students and
        themselves.
        <br />
        <br />
        We also recognise that parents play an important role in the development
        of our students. Maintaining a system of ongoing collaboration and open
        communication with them contributes to a meaningful educational journey
        that we all strive to provide for our students.
        <br />
        <br />
        Our technological investments complement our human efforts. As India
        enters a new era of education and scientific progress, we feel that
        modern infrastructure and technological development would be critical in
        bolstering our efforts to be relevant and capable educational providers.
        <br />
        <br />
        Our goal is to give our students with an education that meets
        international standards. They must be conscious and grateful of their
        personal and cultural history in order to leave an indelible mark on the
        pages of human achievement. We must provide them with the wind that
        their wings require to fly as they strive to be grounded like the Tula
        family tree.
      </>
    ),
    awards: [
      "B.Tech, M.Tech., Ph.D.",
      "Adjunct Professor Tula’s Institute",
      "Fellow-INAE,Fellow-INASc, Fellow-IEEE, Hon. Fellow, ISTE, FIE (India), Fellow-IETE , MCSI",
      "Emeritus Director general,VITS Indore",
      "Former VC, VIT Vellore",
      "Former Director i/c IIT Delhi",
      "Former Principal VRCE, Nagpur",
      "Visiting Fellow, R.M.I.T., Melbourne  Australia",
      <span className="italic">“Change is the only constant in life”.</span>,
    ],
  },
  {
    image: sunilSemwal,
    name: "Sunil Semwal",
    profile: "Dean R&D",
    description:
      "Tula’s Institute is dedicated to societal requirements through research and innovation. Challenges such as sustainable development, water conservation, energy and environment, and many others are addressed with innovation-friendly atmosphere which encourages industry-academic collaborations. Tula’s Institute’s Research and Development cell promotes research in a variety of areas in sciences, engineering, agriculture and management domains to support our research vision. Quality publications are encouraged with an attractive Research Policy, which incentivise the good researchers and propels faculty members to pursue quality research.",
    desc2: (
      <>
        Several government-funded research projects and initiatives are ongoing
        at the institute. Faculty members collaborate with worldwide and
        national research specialists to generate cutting-edge, innovative
        research.
        <br />
        <br />
        In confirmation with the above, the numbers of research papers, patents,
        and funded projects are steadily increasing.
      </>
    ),
    awards: [
      "B.Tech., M.Tech., Ph.D.",
      "Senior Member IEEE",
      "30+ Publications, 5 Patents, 4 Funded Projects",
    ],
  },
  {
    image: nishant,
    name: "Dr Nishant Saxena",
    profile: "Dean Academics",
    description:
      "From a modest beginning in 2006, Tula’s Institute has now grown into a fully integrated engineering and management college. The guiding philosophy of the institute has been the creation of awareness among students so they can face the challenges globally. Tula’s Institute through its various development programmes gives students an edge over their counterparts in enabling them to prepare themselves for a world that is yet to be created, for jobs yet to be invented, and technologies yet undreamt of. In short, we create skilled individuals who are industry-ready. ",
    desc2: (
      <>
        The objectives of imparting quality education, combined with creation
        are being met in an integrated form to create a synergetic impact. My
        focus has been on:
        <br />
        <br />
        <ul className="list-disc ml-5">
          <li>Inter and intradisciplinary research</li>
          <li>Vertical specialisation of students</li>
          <li>360-degree learning</li>
          <li>Continual training of faculty and students</li>
          <li>Setup potential centres of excellence</li>
          <li>Be a lead partner in the nation’s growth</li>
        </ul>
        <br />
        <br />I feel confident that the college is progressing in the right
        direction to build an academic institution of great social impact. In
        the end, I take this opportunity to welcome you all at Tula’s Institute
        and wish you all the very best in accomplishing your dreams.
      </>
    ),
    awards: [
      "B.Tech., M.Tech. ,Ph.D.",
      "MISTE,EMIAET",
      "25+ Publication ,Funded Project, 04 Patents",
    ],
  },
];

function Management() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeProfile, setActiveProfile] = useState(null);

  useEffect(() => {
    if (activeProfile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProfile]);

  const handleCardClick = (card) => {
    setModalContent(
      <div>
        <Image src={card.image} alt="" />
        <h2>{card.name}</h2>
        <h4>{card.profile}</h4>
        {/* Add more content as needed */}
      </div>
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-fit bg-transparent py-20 px-4">
      {activeProfile && (
        <AboutFacultyModal
          activeProfile={activeProfile.profile}
          setActiveProfile={setActiveProfile}
          relatedProfiles={activeProfile.related}
        />
      )}

      <div
        ref={ref}
        className="w-full h-fit flex flex-col justify-center items-center"
      >
        <h3
          className={`font-[CarotSlab] text-white text-[52px] ${
            inView ? "animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          MEET OUR MANAGEMENT
        </h3>
        <h5
          className={`font-[Rothwood] text-white text-[20px] max-w-[665px] italic text-center font-medium ${
            inView ? "animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          The Institute provides excellent infrastructural and ICT facilities
          with well-equipped laboratories, a modern computer centre, spacious
          and well-furnished classrooms, seminar hall, library, workshop, and
          fully airconditioned &amp; spacious auditorium.
        </h5>
      </div>
      <div className="py-20 block">
        {[cards, cardsFaculty].map((cardGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-center gap-5 px-20 py-4"
          >
            {cardGroup.map((card, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[265px] cursor-pointer"
                onClick={() =>
                  setActiveProfile({ profile: card, related: cardGroup })
                }
                // onClick={() => handleCardClick(card)}
              >
                <Fade>
                  <Image
                    src={card.image}
                    alt=""
                    className="rounded-3xl mb-2 w-[265px] h-[372px] object-cover"
                  />
                </Fade>
                <h2 className="font-[TTChocolatesBold] text-white font-semibold text-[37px] text-center">
                  {card.name}
                </h2>
                <h4 className="font-[TTChocolates] text-[#C2C2C2] text-[22px] text-center">
                  {card.profile}
                </h4>
              </div>
            ))}
          </div>
        ))}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={modalContent}
        />
      </div>
    </div>
  );
}

export default Management;
