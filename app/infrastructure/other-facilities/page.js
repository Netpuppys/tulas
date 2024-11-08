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
import Vision from "@/component/Programs/Vision";
const sections = [
  {
    title: "Wifi Facility",
    description: (
      <>
        Availability of 24Hrs Wi-Fi internet access in the campus with 1 Gbps
        speed and Comprehensive e-learning environment provided in the campus,
        enables all the students and faculty members to be connected which is
        essential for effective learning.
        <br />
        <br />
        Our Digital library has over 59000+ e-books available round the clock
        through a FTP server on the intranet. Students can access the material
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
  {
    title: "Gymnasium",
    description:
      "The students have access to a well-equipped gymnasium, allowing them to work out at a time convenient to them. The gym is open in the morning and in the evening. Various equipment like Treadmill, Rowing machine, Cycle, Cross trainer, Twister, Steppers, Ab rollers etc. have been provided. Special trainers have also been employed for the gym. This has been done keeping in mind that a healthy mind can only exist in a healthy body.",
    image: Gymnasium,
  },
  {
    title: "Medical",
    description: (
      <>
        A shopping arcade has been set up within the campus. It has the facility
        of laundry, a barber’s shop, stationary and a tuck shop. Reprographic
        facility is also available.
        <br />
        <ul className="list-disc ml-4">
          <li>
            First aid boxes have been kept in the Labs, workshop, hostel blocks
            and with the receptionist.
          </li>
          <li>
            An Ambulance with a driver has been kept stand-by so as to cater to
            the emergent demand of students.
          </li>
          <li>
            The in-house medical facility comprises of basic amenities providing
            treatment by a specialized medical staff within the campus. A
            qualified Physician who is our full time medical consultant is also
            available 24×7 on call. An infirmary in the campus caters to small
            ailments.
          </li>
          <li> Hospitals of repute have been kept on the panel.</li>
          <li>
            To keep a check on diseases administration of insecticides is done
            to ensure clean & hygienic ambience avoiding several health hazards.
          </li>
        </ul>
      </>
    ),
    image: medical,
  },
  {
    title: "Play Ground",
    description:
      "A play ground facility is available for sports like cricket, football, volley ball, throw ball, basket ball, badminton and many other outdoor games.A play ground facility is available for sports like cricket, football, volley ball, throw ball, basket ball, badminton and many other outdoor games.",
    image: playGround,
  },
  {
    title: "Transportation",
    description: (
      <>
        The college offers transportation to all students and members of faculty
        to the prime locations. Safe and comfortable transportation buses are
        provided by the Tula`s Institute. Students are picked up and dropped at
        fixed points within 500 metre radius of their residences.
        <br />
        <br />
        The Institute provides transportation facilities to students. The
        parents who want to send their children to Institute by Institute l bus
        should apply for it at the beginning of the academic year. Bus fees will
        be collected in three instalments. The Institute bus facility should be
        availed for an entire term. One months’ notice in writing should be
        given for discontinuance of the bus facility. Requests for change of
        boarding points must be made in writing one month in advance. Nobody
        without a valid bus pass will be allowed to board the bus.
        <br />
        <br />
        Loss of the pass shall be reported promptly at the Institute office.
        Commuting by Institute bus is an occasion for the pupils to cultivate
        good habits like patience, forbearance, tolerance, sympathy, team
        spirit, cooperation and consideration for others. Gentlemanly and
        exemplary behaviour is expected of all the students in the bus and at
        the boarding points where they wait for the bus. Strong and prompt
        disciplinary action will be taken against the students who misbehave. If
        the Institute bus fails to ply on any day on account of some unforeseen
        difficulty, the students should come to Institute by other means. No
        complaint will be entertained on such issues.
      </>
    ),
    image: TulasTransportation,
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
        <div className="flex flex-col items-center">
          <Navbar />
          <Banner
            image={BannerImg}
            title={
              <>
                OTHER <span className="text-[#007A83]">FACILITIES</span>
              </>
            }
            description={<></>}
            belowTitle={<></>}
            belowPara={
              "Tula’s Institute is one of the best engineering colleges in Dehradun, which provides the best hostel life; the hostel atmosphere forms an essential part of the young budding engineers and management graduates. 6 hostels are located in Tula’s campus, out of which 4 are boy’s hostels and 2 are girl’s hostels. Each room is on twin sharing; rooms are spacious, ventilated, airy, and well lit."
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

          <Vision sections={sections.slice(0, 2)} />

          <div className="w-full h-fit py-8 md:py-20 bg-white px-6 md:px-[15%] flex flex-col justify-between items-center">
            <h3 className="font-[CarotSlab] font-medium text-[#3D001B] text-[28px] text-center md:text-[40px] transition-transform duration-1000">
              Book Bank
            </h3>
            <h4 className="text-black w-full md:w-[80%] max-w-[928px] text-[16px] md:text-[22px] font-[TTChocolates] text-center font-medium">
              Book bank concept has been implemented in the institute. Under
              this scheme, every student gets 6 to 8 books for the complete
              semester. In addition to the support available from library, this
              scheme supports students to get latest set of books of core
              subjects for each semester from the college without any hassle.
              Every student is required to pay a nominal annual fee to benefit
              from this scheme.
            </h4>
          </div>

          <Vision sections={sections.slice(2, 4)} />

          <div className="w-full h-fit py-8 md:py-20 bg-white px-6 md:px-[15%] flex flex-col justify-between items-center">
            <h3 className="font-[CarotSlab] font-medium text-[#3D001B] text-[28px] text-center md:text-[40px] transition-transform duration-1000">
              Shopping Arcade
            </h3>
            <h4 className="text-black w-full md:w-[80%] max-w-[928px] text-[16px] md:text-[22px] font-[TTChocolates] text-center font-medium">
              A shopping arcade has been set up within the campus. It has the
              facility of laundry, a barber’s shop, stationary and a tuck shop.
              Reprographic facility is also available. First aid boxes have been
              kept in the Labs, workshop, hostel blocks and with the
              receptionist. An Ambulance with a driver has been kept stand-by so
              as to cater to the emergent demand of students. The in-house
              medical facility comprises of basic amenities providing treatment
              by a specialized medical staff within the campus. A qualified
              Physician who is our full time medical consultant is also
              available 24×7 on call. An infirmary in the campus caters to small
              ailments.
            </h4>
          </div>

          <Vision sections={sections.slice(4)} />

          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default OtherFacilities;
