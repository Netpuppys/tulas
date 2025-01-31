import React from "react";
import SakshiMalik from "../../public/Homepage/Famous/SakshiMalik.webp";
import VisheshBhriguvanshi from "../../public/Homepage/Famous/VisheshBhriguvanshi.webp";
import PrakashiTomar from "../../public/Homepage/Famous/PrakashiTomar.webp";
import AbhishekVerma from "../../public/Homepage/Famous/AbhishekVerma.webp";
import AditiGopichandSwami from "../../public/Homepage/Famous/AditiGopichandSwami.webp";
import JeevanJyotSinghTeja from "../../public/Homepage/Famous/JeevanJyotSinghTeja.webp";
import OjasPravinDeotale from "../../public/Homepage/Famous/OjasPravinDeotale.webp";
import RajatChauhan from "../../public/Homepage/Famous/RajatChauhan.webp";
import DevendraSinghBisht from "../../public/Homepage/Famous/DevendraSinghBisht.webp";
import ManishMetani from "../../public/Homepage/Famous/ManishMetani.webp";
import LaxmiAgarwal from "../../public/Homepage/Famous/LakshmiAgarwal.webp";
import SaurabhJoshi from "../../public/Homepage/Famous/SaurabhJoshi.webp";
import ArushiNishank from "../../public/Homepage/Famous/ArushiNishank.webp";
import DhanSinghRawat from "../../public/Homepage/Famous/DhanSinghRawat.webp";
import TrivendraSinghRawat from "../../public/Homepage/Famous/TrivendraSinghRawat.webp";
import SubodhUniyal from "../../public/Homepage/Famous/SubodhUniyal.webp";
import AnuragTripathi from "../../public/Homepage/Famous/AnuragTripathi.webp";
import RameshPokhriyalNishank from "../../public/Homepage/Famous/RameshPokhriyalNishank.webp";
import BhagatSinghKoshyari from "../../public/Homepage/Famous/BhagatSinghKoshyari.webp";
import DharmendraPradhan from "../../public/Homepage/Famous/DharmendraPradhan.webp";
import ArvindPandey from "../../public/Homepage/Famous/ArvindPandey.webp";
import NamamiBansal from "../../public/Homepage/Famous/NamamiBansal.webp";
import AbhinavKumar from "../../public/Homepage/Famous/AbhinavKumar.webp";
import JanmejayaKhanduri from "../../public/Homepage/Famous/JanmejayaKhanduri.webp";
import AshokKumar from "../../public/Homepage/Famous/AshokKumar.webp";
import AmitKumarSinha from "../../public/Homepage/Famous/AmitKumarSinha.webp";
import SunilUniyalGama from "../../public/Homepage/Famous/SunilUniyalGama.webp";
import SahdevSinghPundir from "../../public/Homepage/Famous/SahdevSinghPundir.webp";
import Image from "next/image";
function Famous() {
  const sports = [
    {
      image: SakshiMalik,
      name: "Sakshi Malik",
      description:
        "(First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014. Common Wealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shree Awardee 2017)",
    },
    {
      image: VisheshBhriguvanshi,
      name: "Vishesh Bhriguvanshi",
      description:
        "(Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008)",
    },
    {
      image: PrakashiTomar,
      name: "Prakashi Tomar & Late Ms Chandro Tomar",
      description:
        "(Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner)",
    },
    // {
    //   image: AnwarKhan,
    //   name: "Anwar khan",
    //   description: "(Indian team hockey player)",
    // },
    {
      image: AbhishekVerma,
      name: "Abhishek Verma",
      description:
        "(6th Highest World Ranking, Arjuna Awardee, Asian Game Gold Medalist in Archery 2013)",
    },
    {
      image: AditiGopichandSwami,
      name: "Aditi Gopichand Swami",
      description:
        "(7th Highest World Ranking, Arjun Awardee, World Champion in Archery 2024)",
    },
    {
      image: JeevanJyotSinghTeja,
      name: "Jeevan Jyot Singh Teja",
      description: "(Drona Chari Awardee in Archery 2022)",
    },
    {
      image: OjasPravinDeotale,
      name: "Ojus Devtale",
      description:
        "(9th Highest World Ranking, Arjun Awardee 2023 and current world champion in Archery)",
    },
    {
      image: RajatChauhan,
      name: "Rajat Chauhan",
      description: "(5th Highest World Ranking Arjun Awardee 2016 in Archery)",
    },
    {
      image: DevendraSinghBisht,
      name: "Devendra Singh Bisht",
      description: "(under 18 School Indian Football Team Selector)",
    },
    {
      image: ManishMetani,
      name: "Manish Metani",
      description: "(Indian Football Player)",
    },
    {
      image: SaurabhJoshi,
      name: "Saurabh Joshi",
      description: "(Influencer with 30 Million Subscribers on Youtube)",
    },
    {
      image: ArushiNishank,
      name: "Arushi Nishank",
      description:
        "(Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga",
    },
    {
      image: LaxmiAgarwal,
      name: "Laxmi Agarwal",
      description:
        "(International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Bip Pic Movie “Chappak” based on her)",
    },
  ];
  const leaders = [
    {
      image: DhanSinghRawat,
      name: "Shri Dhan Singh Rawat Ji",
      description: "(Minister of Higher Education, Uttarakhand)",
    },
    {
      image: TrivendraSinghRawat,
      name: "Shri Trivendra Singh Rawat Ji",
      description:
        "(Member of Parliament & Former Chief Minister, Uttarakhand)",
    },
    {
      image: SubodhUniyal,
      name: "Shri Subodh Uniyal Ji",
      description: "(Technical Education and Forest Minister, Uttarakhand.)",
    },
    {
      image: RameshPokhriyalNishank,
      name: "Dr Ramesh Pokhriyal Nishank Ji",
      description:
        "(Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand)",
    },
    {
      image: BhagatSinghKoshyari,
      name: "Shri Bhagat Singh Koshyari Ji",
      description:
        "(Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand)",
    },
    {
      image: DharmendraPradhan,
      name: "Shri Dharmendra Pradhan Ji",
      description: "(Union Minister of Education for India.)",
    },
    {
      image: AnuragTripathi,
      name: "Shri Anurag Tripathi Ji",
      description: "(CBSE Secretary Uttarakhand)",
    },
    {
      image: ArvindPandey,
      name: "Shri Arvind Pandey Ji",
      description: "(MLA, Former Education Minister)",
    },
    {
      image: NamamiBansal,
      name: "Shri Namami Bansal Ji",
      description: "(I.A.S Municipal Commissioner Uttarakhand)",
    },
    {
      image: AbhinavKumar,
      name: "Shri Abhinav Kumar Ji",
      description: "(ADG and former DGP of Uttarakhand Police)",
    },
    {
      image: JanmejayaKhanduri,
      name: "Shri Janmejaya khanduri Ji",
      description: "(IG Dehradun - Government of India)",
    },
    {
      image: AshokKumar,
      name: "Shri Ashok Kumar Ji",
      description: "(Former DGP, Uttarakhand)",
    },
    {
      image: AmitKumarSinha,
      name: "Shri Amit Kumar Sinha Ji",
      description: "(ADG, Principal Secretary Sports, Uttarakhand)",
    },
    {
      image: SunilUniyalGama,
      name: "Shri Sunil Uniyal Gama Ji",
      description: "(Former Mayor Municipal Corp, Dehradun.)",
    },
    // {
    //   image: AmandeepKaur,
    //   name: "Shri Amandeep Kaur Ji",
    //   description: "(IRS)",
    // },
    {
      image: SahdevSinghPundir,
      name: "Shri Sahdev Singh Pundir Ji",
      description: "(MLA Sahaspur, Uttarakhand)",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Influential Personalitites On Campus
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <h2 className="text-[#5F5F5F] text-center leading-none font-[CarotSlab] text-[clamp(20px,4.5vw,55px)] pt-6 md:text-[clamp(20px,1.5vw,55px)]">
        Sports Person/Social Media Influencers
      </h2>
      <div className="w-full h-full overflow-hidden whitespace-nowrap">
        <div className="w-full animate-marquee hover:animate-none hover:overflow-auto py-6 flex gap-2 md:py-[3%]">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col items-end overflow-hidden border border-[#494949] min-w-[60%] max-w-[60%] md:max-w-[22vw] md:min-w-[22vw] mx-auto"
            >
              <div className="w-full h-full flex flex-col justify-between">
                <Image
                  src={sport.image}
                  alt=""
                  className="w-full h-full aspect-[1.5/1] object-cover"
                />
              </div>
              <div className="p-[3%] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_72.96%,rgba(0,0,0,0.70)_100%)] absolute bottom-0 z-20 flex items-end w-full h-full">
                <h2 className="text-[clamp(10px,3.2vw,50px)] text-wrap md:text-[clamp(10px,1.1vw,50px)] text-white font-[TTChocolates] font-extrabold">
                  {sport.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-[#5F5F5F] leading-none text-center font-[CarotSlab] text-[clamp(20px,4.5vw,55px)] md:text-[clamp(20px,1.5vw,55px)]">
        Leaders Of India
      </h2>
      <div className="w-full h-full overflow-hidden whitespace-nowrap">
        <div className="w-full animate-marqueeOpposite hover:animate-none hover:overflow-auto py-6 flex gap-2 md:py-[3%]">
          {leaders.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col overflow-hidden border border-[#494949] min-w-[60%] max-w-[60%] md:max-w-[22vw] md:min-w-[22vw] mx-auto"
            >
              <div className="w-full h-full relative flex flex-col justify-between">
                <Image
                  src={sport.image}
                  alt=""
                  className="w-full h-full aspect-[1.5/1] object-cover"
                />
              </div>
              <div className="p-[3%] w-full absolute bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_72.96%,rgba(0,0,0,0.70)_100%)] bottom-0 z-20 flex items-end h-full">
                <h2 className="text-[clamp(10px,3.2vw,50px)] text-wrap md:text-[clamp(10px,1.1vw,50px)] text-white font-[TTChocolates] font-extrabold">
                  {sport.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Famous;
