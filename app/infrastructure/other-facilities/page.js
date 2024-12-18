"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/HostelMess/background.png";
import wifi from "../../../public/infrastructure/Other/wifi.png";
import atm from "../../../public/infrastructure/Other/atm.png";
import Gymnasium from "../../../public/infrastructure/Other/gymnasium.png";
import guestHouse from "../../../public/infrastructure/Other/guestHouse.png";
import medical from "../../../public/infrastructure/Other/medical.png";
import playGround from "../../../public/infrastructure/Other/playGround.png";
import TulasTransportation from "../../../public/infrastructure/Other/TulasTransportation.png";
import shopping from "../../../public/infrastructure/Other/shopping.png";
import bookBank from "../../../public/infrastructure/Other/bookBank.png";
import Vision from "@/component/Programs/Vision";
const sections = [
  {
    title: "Wi-Fi Facility",
    description: (
      <>
        Availability of 24 hours Wi-Fi internet access in the campus with 1 Gbps
        speed and comprehensive E-Learning environment provided in the campus,
        enables all the students and faculty members to be connected which is
        essential for effective learning.
        <br />
        <br />
        Our Digital library has over 59000+ e-books available round the clock
        through a FTP server on the internet. Students can access the material
        and books anytime from anywhere on the campus.
      </>
    ),
    image: wifi,
  },
  {
    title: "ATM Facility",
    description:
      "24/7 ATM runs within the Oriental Bank of Commerce campus, making transactions as quick as the blink of an eye. Parents or guardians of students can transfer money online to students, which they can receive immediately. Money transactions can never be an obstacle in a student’s life at Tula’s.",
    image: atm,
  },
  {
    title: "Guest House",
    description:
      "The institute provides guest room facilities within the campus for students’ parents, relatives and guests coming to meet their wards. They can avail the facility for a brief stay along with meals from the hostel mess, and cafeteria. However they are charged a nominal amount for the same.",
    image: guestHouse,
  },
  // {
  //   title: "Gymnasium",
  //   description:
  //     "The students have access to a well-equipped gymnasium, allowing them to work out at a time convenient to them. The gym is open in the morning and in the evening. Various equipment like Treadmill, Rowing machine, Cycle, Cross trainer, Twister, Steppers, Ab rollers etc. have been provided. Special trainers have also been employed for the gym. This has been done keeping in mind that a healthy mind can only exist in a healthy body.",
  //   image: Gymnasium,
  // },
  {
    title: "Shopping Arcade",
    description:
      "There’s a shopping arcade right on campus! You’ll find everything you need here—a laundry service, a barber’s shop to keep you looking sharp, a stationery store for all your supplies, and a tuck shop to grab snacks and treats. Plus, there’s a reprographic facility to take care of all your printing and copying needs.",
    image: shopping,
  },
  {
    title: "Medical",
    description: (
      <>
        A fully qualified MBBS Doctor is available at the campus.
        <br />
        <br />
        <ul className="list-disc ml-4">
          <li>
            First aid boxes have been kept in the labs, workshop, hostel blocks
            and with the receptionist.
          </li>
          <li>
            An ambulance with a driver has been kept stand-by so as to cater to
            the emergent demand of students.
          </li>
          <li>
            The in-house medical facility comprises of basic amenities providing
            treatment by a specialized medical staff within the campus. A
            qualified physician who is our full time medical consultant is also
            available 24×7 on call. An infirmary in the campus caters to small
            ailments.
          </li>
          <li>Hospitals of repute have been kept on the panel.</li>
          <li>
            To keep a check on diseases administration of insecticides is done
            to ensure clean & hygienic ambience avoiding several health hazards.
          </li>
        </ul>
      </>
    ),
    image: medical,
  },
  // {
  //   title: "Play Ground",
  //   description:
  //     "A play ground facility is available for sports like cricket, football, volley ball, throw ball, basket ball, badminton and many other outdoor games.A play ground facility is available for sports like cricket, football, volley ball, throw ball, basket ball, badminton and many other outdoor games.",
  //   image: playGround,
  // },
  {
    title: "Transportation",
    description: (
      <>
        Tula’s Institute offers safe and reliable transportation, ensuring a
        stress-free commute for students and faculty. With pick-up and drop-off
        points conveniently located within a 500-meter radius of residences, the
        service prioritizes both comfort and efficiency.
        <br />
        <br />
        Riding the Institute bus isn’t just about transportation—it’s an
        opportunity to build life skills. Students develop habits like patience,
        teamwork, and respect for others, making every journey meaningful.
        <br />
        <br />
        Parents can apply for the bus service at the beginning of the academic
        year. Fees are collected in three easy installments, and a one-month
        written notice is required to discontinue or modify the service. Only
        students with valid passes are allowed to board, and lost passes must be
        reported immediately.
        <br />
        <br />
        With Tula’s, every ride is safe, convenient, and comfortable.
      </>
    ),
    image: TulasTransportation,
  },
  {
    title: "Book Bank",
    description: (
      <>
        Book bank concept has been implemented in the institute. Under this
        scheme, every student gets 6 to 8 books for the complete semester. In
        addition to the support available from library, this scheme supports
        students to get latest set of books of core subjects for each semester
        from the college without any hassle. Every student is required to pay a
        nominal annual fee to benefit from this scheme.
      </>
    ),
    image: bookBank,
  },
];

function OtherFacilities() {
  return (
    <>
      <head>
        <title>Best Facilities Among all colleges in Dehradun,Uttrakhand</title>
        <meta
          name="description"
          content="Tula's Institute is committed to offer the best infrastructure and facilities like: Wifi,Canteen,Gym,Playground,shopping mall...."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center">
          <Banner
            image={BannerImg}
            title={
              <>
                Campus <span className="text-[#007A83]">Facilities</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "Set against a backdrop of natural beauty, Tula’s Institute offers an environment that inspires growth and discovery. From thoughtfully planned spaces to an environment that balances focus and recreation, the campus sets the stage for holistic growth. It’s where innovation meets comfort, creating the perfect backdrop for academic and personal journeys."
            }
          />
          {/* fixed background */}
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt="Background"
            />
          </div>

          <Vision sections={sections} />

          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default OtherFacilities;
