"use client";
import React, { useState } from "react";
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
function Management() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });
  const cards = [
    {
      image: sunil,
      name: "Sunil Kumar Jain",
      profile: "Chairman - TULA’s Group",
    },
    {
      image: silky,
      name: "Silky Jain",
      profile: "Executive Director",
    },
    {
      image: raghav,
      name: "Dr. Raghav Garg",
      profile: "Vice President",
    },
    {
      image: raunak,
      name: "Raunak Jain",
      profile: "Vice President",
    },
  ];
  const cardsFaculty = [
    {
      image: sandip,
      name: "Dr. Sandip Vijay",
      profile: "Director",
    },
    {
      image: vijay,
      name: "Vijay Kumar Upadhyay",
      profile: "Registrar",
    },
    {
      image: kothari,
      name: "DP Kothari",
      profile: "Adjunct Professor",
    },
    {
      image: sunilSemwal,
      name: "Sunil Semwal",
      profile: "Dean R&D",
    },
    {
      image: nishant,
      name: "Dr Nishant Saxena",
      profile: "Dean Academics",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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
      <div
        ref={ref}
        className="w-full h-fit flex flex-col justify-center items-center"
      >
        <h3
          className={`font-[CarotSlab] text-[52px] ${
            inView ? "animate-translateBottom overflow-hidden" : "opacity-0"
          }`}
        >
          MEET OUR MANAGEMENT
        </h3>
        <h5
          className={`font-[Rothwood] text-[20px] max-w-[665px] italic text-center font-medium ${
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
                // onClick={() => handleCardClick(card)}
              >
                <Fade>
                  <Image
                    src={card.image}
                    alt=""
                    className="rounded-3xl mb-2 w-[265px] h-[372px] object-cover"
                  />
                </Fade>
                <h2 className="font-[TTChocolatesBold] font-semibold text-[37px] text-center">
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
