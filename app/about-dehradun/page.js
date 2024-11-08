"use client";

import Banner from "@/component/Banner";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/component/Footer";
import background from "../../public/AboutDehradun/background.png";
import trainImage from "../../public/AboutDehradun/train.png";
import planeImage from "../../public/AboutDehradun/plane.png";
import roadImage from "../../public/AboutDehradun/road.png";
import hillsImage from "../../public/AboutDehradun/hills.png";
import Cards from "./components/Cards";
import { Fade } from "react-awesome-reveal";
const title = (
  <>
    <span className="text-[#007A83]">ABOUT</span>
    <br />
    DEHRADUN, <span className="text-[#007A83]">UTTARAKHAND</span>
  </>
);

const mainDescription =
  "Cradled in the foothills of the Himalayas, Dehradun is the capital of the state Uttarakhand. Flanked by river Ganga on the east and Yamuna on the west, Tula’s Institute adds to the verdant greenery to the campus. Dehradun is the education capital of India. The scenic beauty and pleasant weather attract students from different parts of India and the neighbouring country as well. Doon Valley has some of the most esteemed schools and colleges in Dehradun. Dehradun is known to provide the best education in India. Being home to premier education institutions such as Natural Gas Corporation, Indian Institute of Remote Sensing, Indian Institute of Petroleum, Wildlife Institute of India, Instruments Research and Development (DRDO) and Wadia Institute of Himalayan Geology, and Ordnance Factory Dehradun; students get several opportunities to explore more in their field of study. To nurture our assets and create value, we believe that there needs to be a serene and tranquil environment. This led us to choose Dehradun as the location of our campus. Dehradun is located 256 km north of India's Capital, New Delhi. Doon valley has a sub-tropical climate with cool winters, warm and crisp springs, moderate summers and heavy monsoon, which offer an ideal environment to nurture talent and create the visionaries of India in the years to come.";

const cardData = [
  {
    title: "By Train",
    image: trainImage,
    description:
      "Dehradun is connected with an effective rail network with the rest of the country. Most of the major trains are available to Dehradun daily. It is well connected with all the metro cities of India. There are also trains to other important places such as Varanasi, Lucknow, Mussoorie etc.",
  },
  {
    title: "By Plane",
    image: planeImage,
    description:
      "The capital city Dehradun is connected by air to India’s capital New Delhi. Dehradun has a domestic airport. Located in the outskirts of the city, the airport lies only 25kms away.",
  },
  {
    title: "By Road",
    image: roadImage,
    description:
      "Dehradun is linked with an extensive network comprised of National Highways. It makes Dehradun easily accessible from any part of northern India. A few prominent cities, which have road connections to Dehradun, are Agra (381kms), Delhi (235kms), Jaipur (493kms), Lucknow (582kms).",
  },
];

function Contact() {
  return (
    <>
      <head>
        <title>About Capital City of Uttarakhand</title>
        <meta
          name="description"
          content="The capital city of Uttarakhand is a complete blend of city and hill culture. It is set in the foot hills of Himalayas with the holy Ganges.."
        />
      </head>
      <body>
        <div>
          <Navbar />
          <Banner
            image={BannerImg}
            title={title}
            description={
              "Uttarakhand has many historical temples with mythical tales and it is also a gateway to some of the most popular hill stations in the country like Mussoorie and Nainital. Apart from this, India’s most holy pilgrimage sites such as Haridwar and Rishikesh are also an hour’s drive away from Dehradun. Dehradun is also home to some renowned and important establishments like the ONGC, Survey of India, the IMA, Forest Research Institute etc."
            }
            belowTitle={"HOW TO REACH DEHRADUN"}
            belowPara={
              "Being the capital city, Dehradun is well-connected by roads, rail and air and is easily accessible from most parts of the country. It is 235 km away from India’s capital, New Delhi. Dehradun is easy to reach and an accessible destination that you can visit any time of the year."
            }
          />
          {/* fixed background */}
          <div className="w-full relative overflow-hidden md:-mb-[6vh]">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
            <div className="bg-transparent w-full py-20 md:h-[37rem] text-pretty flex flex-col md:flex-row items-center md:items-start justify-center gap-14">
              {cardData.map((card, index) => (
                <Fade>
                  <div key={index} className="w-fit h-full">
                    <Cards
                      title={card.title}
                      image={card.image}
                      description={card.description}
                    />
                  </div>
                </Fade>
              ))}
            </div>
            <div className="w-full p-5 md:p-10 md:pb-40">
              <div className="w-full overflow-hidden rounded-3xl shadow-2xl bg-white bg-opacity-20 backdrop-blur-lg flex flex-col-reverse md:flex-row">
                <div
                  // ref={compRef}
                  className="w-full md:w-1/2 py-10 md:py-20 px-6 md:pl-10 md:pr-5 md:border-r-2 border-white"
                >
                  <p className="text-white mb-5 text-2xl md:text-3xl font-[CarotSlab] font-medium">
                    Soothe your senses with the beautiful aesthetics offered at{" "}
                    <span className="text-[#E69706]">
                      Tula&apos;s Institute
                    </span>
                  </p>
                  <div className="text-[#D1D1D1] text-sm md:text-base 2xl:text-lg md:pr-10 text-pretty font-[TTChocolates]">
                    <Fade delay={500}>{mainDescription}</Fade>
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/2 h-[70vh] md:h-fit overflow-hidden`}
                >
                  <Fade delay={300}>
                    <Image
                      src={hillsImage}
                      className="w-full h-[70vh] md:h-fit object-cover rounded-3xl"
                      alt="bg"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-fit z-50">
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}

export default Contact;
