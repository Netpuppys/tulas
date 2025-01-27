import React, { useRef } from "react";
import jimmy from "../../public/Homepage/Famous/jimmy.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useMobile } from "@/component/IsMobileContext";
function Famous() {
  const { isMobile } = useMobile();
  const sports = [
    {
      name: "Sakshi Malik",
      description:
        "(First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014. Common Wealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shree Awardee 2017)",
    },
    {
      name: "Vishesh Bhriguvanshi",
      description:
        "(Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008)",
    },
    {
      name: "Prakashi Tomar & Late Ms Chandro Tomar",
      description:
        "(Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner)",
    },
    {
      name: "Anwar khan",
      description: "(Indian team hockey player)",
    },
    {
      name: "Laxmi Agarwal",
      description:
        "(InternaMonal Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Bip Pic Movie “Chappak” based on her)",
    },
    {
      name: "Saurabh Joshi",
      description: "(influencer with 30 Million Subscribers on Youtube)",
    },
    {
      name: "Arushi Nishank",
      description:
        "(Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga",
    },
    {
      name: "Abhishek Verma",
      description:
        "(6th Highest World Ranking, Arjuna Awardee, Asian Game Gold Medalist in Archery 2013)",
    },
    {
      name: "Aditi Gopichand Swami",
      description:
        "(7th Highest World Ranking, Arjun Awardee, World Champion in Archery 2024)",
    },
    {
      name: "Jeevan Jyot Singh Teja",
      description: "(Drona Chari Awardee in Archery 2022)",
    },
    {
      name: "Ojus Devtale",
      description:
        "(9th Highest World Ranking, Arjun Awardee 2023 and current world champion in Archery)",
    },
    {
      name: "Rajat Chauhan",
      description: "(5th Highest World Ranking Arjun Awardee 2016 in Archery)",
    },
    {
      name: "Devendra Singh Bisht",
      description: "(under 18 School Indian Football Team Selector)",
    },
    {
      name: "Manish Metani ",
      description: "(Indian Football Player)",
    },
  ];
  const leaders = [
    {
      name: "Shri Dhan Singh Rawat Ji",
      description: "(Minister of Higher Education, Uttarakhand)",
    },
    {
      name: "Shri Trivendra Singh Rawat Ji",
      description:
        "(Member of Parliament & Former Chief Minister, Uttarakhand)",
    },
    {
      name: "Shri Subodh Uniyal Ji",
      description: "(Technical Education and Forest Minister, Uttarakhand.)",
    },
    {
      name: "Dr Ramesh Pokhriyal Nishank Ji",
      description:
        "(Former Union Cabinet Minister for EducaMon, Government of India | Former Chief Minister of Uttarakhand)",
    },
    {
      name: "Shri Bhagat Singh Koshyari Ji",
      description:
        "(Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand)",
    },
    {
      name: "Shri Dharmendra Pradhan Ji",
      description: "(Union Minister of EducaMon for India.)",
    },
    {
      name: "Shri Anurag Tripathi Ji",
      description: "(CBSE Secretary Uttarakhand)",
    },
    {
      name: "Shri Arvind Pandey Ji",
      description: "(MLA, Former EducaMon Minister)",
    },
    {
      name: "Shri Namami Bansal Ji",
      description: "(I.A.S Municipal Commissioner UYarakhand)",
    },
    {
      name: "Shri Abhinav Kumar Ji",
      description: "(ADG and former DGP of UYarakhand Police)",
    },
    {
      name: "Shri Janmejaya khanduri Ji",
      description: "(IG Dehradun - Government of India)",
    },
    {
      name: "Shri Ashok Kumar Ji",
      description: "(Former DGP, UYarakhand)",
    },
    {
      name: "Shri Amit Kumar Sinha Ji",
      description: "(ADG, Principal Secretary Sports, Uttarakhand)",
    },
    {
      name: "Shri Sunil Uniyal Gama Ji",
      description: "(Former Mayor Municipal Corp, Dehradun.)",
    },
    {
      name: "Shri Amandeep Kaur Ji",
      description: "(IRS)",
    },
    {
      name: "Shri Sahdev Singh Pundir Ji",
      description: "(MLA Sahaspur, Uttarakhand)",
    },
  ];
  const swiperRef = useRef();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-none z-10">
        Influential Personalitites On Campus
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <h2 className="text-[#5F5F5F] text-center font-[CarotSlab] text-[clamp(20px,4.5vw,55px)] pt-6 md:text-[clamp(20px,1.5vw,55px)]">
        Sports Person/Social Media Influencers
      </h2>
      <div className="w-full overflow-hidden py-6 md:py-[2%]">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={isMobile ? 2 : 5}
          spaceBetween={10}
        >
          {sports.map((sport, index) => (
            <SwiperSlide
              key={index}
              className="relative flex flex-col md:flex-row h-full px-4 w-full md:px-0 mx-auto"
            >
              <div className="w-full h-full relative flex flex-col justify-between">
                <Image
                  src={jimmy}
                  alt=""
                  className="rounded-xl w-full md:rounded-2xl h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 p-[4%]">
                <h2 className="text-[clamp(10px,3.2vw,50px)] md:text-[clamp(10px,1.1vw,50px)] text-white font-[TTChocolates] font-extrabold">
                  {sport.name}
                </h2>
                <p2 className="text-white text-[clamp(10px,2.5vw,50px)] md:text-[clamp(10px,0.8vw,50px)]">
                  {sport.description}
                </p2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Famous;
