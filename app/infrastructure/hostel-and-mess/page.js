"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../../public/infrastructure/library/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../../public/infrastructure/HostelMess/background.png";
import { useInView } from "react-intersection-observer";
import hostel from "../../../public/infrastructure/HostelMess/hostel.png";
import vibgyor from "../../../public/infrastructure/HostelMess/vibgyor.png";
import medical from "../../../public/infrastructure/Other/medical.png";
import atm from "../../../public/infrastructure/Other/atm.png";
import multiUse from "../../../public/infrastructure/HostelMess/cafeteria.png";
import mess from "../../../public/infrastructure/HostelMess/mess.png";
import Vision from "@/component/Programs/Vision";

function LectureTheater() {
  const { ref, inView } = useInView({
    triggerOnce: false, // This allows the animation to trigger every time the component comes into view
    threshold: 0.1, // 10% of the element must be visible to trigger
  });
  const sections = [
    {
      title: "Facilities for a Hosteler",
      description: (
        <>
          <ul className="list-disc ml-4">
            <li>24-hour Wi-Fi facility</li>
            <li>Separate table and chair for every hosteler</li>
            <li>Separate book shelves</li>
            <li>Attached balcony for each room</li>
            <li>Solar heated water 24×7</li>
            <li>Single & double occupancy rooms are available</li>
          </ul>
          <br />
          Hostel life is an excellent opportunity for the development and
          enrichment of the character and personality of inmates. Tula’s
          Institute is known for being the best engineering college in Dehradun
          for providing 24×7 security for the students living in the hostel and
          making a living on campus safe and comfortable.
        </>
      ),
      image: hostel,
    },
    {
      title: "ATM Facility",
      description:
        "24/7 ATM runs within the Oriental Bank of Commerce campus, making transactions as quick as the blink of an eye. Parents or guardians of students can transfer money online to students, which they can receive immediately. Money transactions can never be an obstacle in a student’s life at Tula’s.",
      image: atm,
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
              First aid boxes have been kept in the labs, workshop, hostel
              blocks and with the receptionist.
            </li>
            <li>
              An ambulance with a driver has been kept stand-by so as to cater
              to the emergent demand of students.
            </li>
            <li>
              The in-house medical facility comprises of basic amenities
              providing treatment by a specialized medical staff within the
              campus. A qualified physician who is our full time medical
              consultant is also available 24×7 on call. An infirmary in the
              campus caters to small ailments.
            </li>
            <li>Hospitals of repute have been kept on the panel.</li>
            <li>
              To keep a check on diseases administration of insecticides is done
              to ensure clean & hygienic ambience avoiding several health
              hazards.
            </li>
          </ul>
        </>
      ),
      image: medical,
    },

    {
      title: "Cafeteria",
      description: (
        <>
          A favorite spot for any student in any college is always the
          cafeteria. It is the place where one can drop by in any frame of mind
          and still have a great time. It is here that success is enjoyed and
          victory is celebrated. College cafeteria not only serve basic
          cuisines but also serves students favorite pasta, macaroni, dim sums,
          pizza, shakes etc at reasonable price. Snacks, soft drinks and fresh
          juices are also available. It functions during Morning 8:30 to Evening
          10:15 which extends to 2:30AM during examinations.
          <br />
          <br />
          Maggie Point (next to the junior hostel) is open for 11:00PM to 2:30AM
          daily.
        </>
      ),
      image: multiUse,
    },
    {
      title: "Mess (Only Vegetarian)",
      description:
        "The students in the hostels roll only have the right to enter into mess premises. The students are required to come to the mess during their specified timing only, not before or after. The students govern mess Committee; the mess committee makes sure that students’ health and nutrition is well taken care of. Mess serves breakfast, lunch, evening tea and dinner every day and the weekly menu (Chinese, North and South Indian cuisines) is available with mess in-charge; the students make menu, and the cuisine is changed twice a month.",
      image: mess,
    },
  ];
  return (
    <>
      <head>
        <title>
          Tula's | Best facilities in Dehradun,Uttarakhand | No-1 college in
          india
        </title>
        <meta
          name="description"
          content="Best facilities college in dehradun,uttarakhand. Got Ranked no-1 college among all colleges.See all facilities in Tula;s Institute."
        />
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col items-center overflow-hidden">
          <Banner
            image={BannerImg}
            title={
              <>
                HOSTEL & MESS <span className="text-[#007A83]">FACILITIES</span>
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
              alt=""
            />
          </div>
          <Vision sections={sections.slice(0, 1)} />
          {/* <div
            ref={ref}
            className="w-full h-fit py-8 md:py-20 bg-white px-6 md:px-[15%] flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center"
          >
            <div className="w-full md:w-[40%] h-fit flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h3
                  className={`font-[CarotSlab] font-medium text-[#3D001B] text-[28px] md:text-[40px] text-center transition-transform duration-1000 ${
                    inView ? "animate-translateLeft" : "opacity-0"
                  }`}
                >
                  Student Council-Vibgyor
                </h3>
                <Image
                  src={vibgyor}
                  alt=""
                  className={`w-fit h-fit ${
                    inView ? "animate-translateLeft" : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <h4
              className={`text-black max-w-[669px] w-full text-[16px] md:text-[22px] font-[TTChocolates] font-medium ${
                inView ? "animate-translateRight" : "opacity-0"
              }`}
            >
              This Committee is a student-run and student-governed Committee
              committed to provide unique, exciting, diverse, fun, educational
              atmosphere for the hostelers. Committee organizes regular movies
              shows at the auditorium, inter hostel sports matches, recreational
              trips. This Committee also focuses on keeping the secular harmony
              among the students by celebrating major religious festivals.
            </h4>
          </div> */}
          <Vision sections={sections.slice(1)} />
          <div className="w-full h-fit z-50">
            <Footer color={true} />
          </div>
        </div>
      </body>
    </>
  );
}

export default LectureTheater;
