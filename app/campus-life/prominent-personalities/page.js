"use client";
import React, { useEffect, useState } from "react";
import SakshiMalik from "../../../public/ProminentPersonalities/SakshiMalik.webp";
import VisheshBhriguvanshi from "../../../public/ProminentPersonalities/VisheshBhriguvanshi.webp";
import PrakashiTomar from "../../../public/ProminentPersonalities/PrakashiTomar.webp";
import AbhishekVerma from "../../../public/ProminentPersonalities/AbhishekVerma.webp";
import AditiGopichandSwami from "../../../public/ProminentPersonalities/AditiGopichandSwami.webp";
import JeevanJyotSinghTeja from "../../../public/ProminentPersonalities/JeevanJyotSinghTeja.webp";
import OjasPravinDeotale from "../../../public/ProminentPersonalities/OjasPravinDeotale.webp";
import RajatChauhan from "../../../public/ProminentPersonalities/RajatChauhan.webp";
import DevendraSinghBisht from "../../../public/ProminentPersonalities/DevendraSinghBisht.webp";
import ManishMetani from "../../../public/ProminentPersonalities/ManishMetani.webp";
import LaxmiAgarwal from "../../../public/ProminentPersonalities/LakshmiAgarwal.webp";
import SaurabhJoshi from "../../../public/ProminentPersonalities/SaurabhJoshi.webp";
import ArushiNishank from "../../../public/ProminentPersonalities/ArushiNishank.webp";
import DhanSinghRawat from "../../../public/ProminentPersonalities/DhanSinghRawat.webp";
import TrivendraSinghRawat from "../../../public/ProminentPersonalities/TrivendraSinghRawat.webp";
import SubodhUniyal from "../../../public/ProminentPersonalities/SubodhUniyal.webp";
import AnuragTripathi from "../../../public/ProminentPersonalities/AnuragTripathi.webp";
import RameshPokhriyalNishank from "../../../public/ProminentPersonalities/RameshPokhriyalNishank.webp";
import BhagatSinghKoshyari from "../../../public/ProminentPersonalities/BhagatSinghKoshyari.webp";
import DharmendraPradhan from "../../../public/ProminentPersonalities/DharmendraPradhan.webp";
import ArvindPandey from "../../../public/ProminentPersonalities/ArvindPandey.webp";
import NamamiBansal from "../../../public/ProminentPersonalities/NamamiBansal.webp";
import AbhinavKumar from "../../../public/ProminentPersonalities/AbhinavKumar.webp";
import JanmejayaKhanduri from "../../../public/ProminentPersonalities/JanmejayaKhanduri.webp";
import AshokKumar from "../../../public/ProminentPersonalities/AshokKumar.webp";
import AmitKumarSinha from "../../../public/ProminentPersonalities/AmitKumarSinha.webp";
import SunilUniyalGama from "../../../public/ProminentPersonalities/SunilUniyalGama.webp";
import SahdevSinghPundir from "../../../public/ProminentPersonalities/SahdevSinghPundir.webp";
import ChitranshiRawat from "../../../public/ProminentPersonalities/ChitranshiRawat.webp";
import DeeptiNaval from "../../../public/ProminentPersonalities/DeeptiNaval.webp";
import DipikaChikhlia from "../../../public/ProminentPersonalities/DipikaChikhlia.webp";
import EhsaanQureshi from "../../../public/ProminentPersonalities/EhsaanQureshi.webp";
import GajendraChauhan from "../../../public/ProminentPersonalities/GajendraChauhan.webp";
import HimaniShivpuri from "../../../public/ProminentPersonalities/HimaniShivpuri.webp";
import IlaArun from "../../../public/ProminentPersonalities/IlaArun.webp";
import MadhurBhandarker from "../../../public/ProminentPersonalities/MadhurBhandarker.webp";
import ManishWadhwa from "../../../public/ProminentPersonalities/ManishWadhwa.webp";
import PitabhashTripathi from "../../../public/ProminentPersonalities/PitabhashTripathi.webp";
import PradeepRawat from "../../../public/ProminentPersonalities/PradeepRawat.webp";
import RajeshSharma from "../../../public/ProminentPersonalities/RajeshSharma.webp";
import Ranjeet from "../../../public/ProminentPersonalities/Ranjeet.webp";
import VarunBadola from "../../../public/ProminentPersonalities/VarunBadola.webp";
import VinayPathak from "../../../public/ProminentPersonalities/VinayPathak.webp";
import BiswajitChatterjee from "../../../public/ProminentPersonalities/BiswajitChatterjee.webp";
import DilipSen from "../../../public/ProminentPersonalities/DilipSen.webp";
import DinoMorea from "../../../public/ProminentPersonalities/DinoMorea.webp";
import HemantPandey from "../../../public/ProminentPersonalities/HemantPandey.webp";
import JimmyShergil from "../../../public/ProminentPersonalities/JimmyShergil.webp";
import KanwaljeetSingh from "../../../public/ProminentPersonalities/KanwaljeetSingh.webp";
import Khayali from "../../../public/ProminentPersonalities/Khayali.webp";
import KimSharma from "../../../public/ProminentPersonalities/KimSharma.webp";
import MohanAgashe from "../../../public/ProminentPersonalities/MohanAgashe.webp";
import MousmiChatterjee from "../../../public/ProminentPersonalities/MousmiChatterjee.webp";
import NassarAbdullah from "../../../public/ProminentPersonalities/NassarAbdullah.webp";
import NawabShah from "../../../public/ProminentPersonalities/NawabShah.webp";
import PoojaBhatt from "../../../public/ProminentPersonalities/PoojaBhatt.webp";
import PremChopra from "../../../public/ProminentPersonalities/PremChopra.webp";
import RajaMurad from "../../../public/ProminentPersonalities/RajaMurad.webp";
import RajeevNigam from "../../../public/ProminentPersonalities/RajeevNigam.webp";
import RajendraGupta from "../../../public/ProminentPersonalities/RajendraGupta.webp";
import RajpalYadav from "../../../public/ProminentPersonalities/RajpalYadav.webp";
import RameshSippy from "../../../public/ProminentPersonalities/RameshSippy.webp";
import RaunitRoy from "../../../public/ProminentPersonalities/RaunitRoy.webp";
import RJKaavya from "../../../public/ProminentPersonalities/RJKaavya.webp";
import RoopaGanguly from "../../../public/ProminentPersonalities/RoopaGanguly.webp";
import SaurabhShukla from "../../../public/ProminentPersonalities/SaurabhShukla.webp";
import SharmanJoshi from "../../../public/ProminentPersonalities/SharmanJoshi.webp";
import SubhashGhai from "../../../public/ProminentPersonalities/SubhashGhai.webp";
import SurendraPal from "../../../public/ProminentPersonalities/SurendraPal.webp";
import SushmaSeth from "../../../public/ProminentPersonalities/SushmaSeth.webp";
import ViveckVaswani from "../../../public/ProminentPersonalities/ViveckVaswani.webp";
import YashpalSharma from "../../../public/ProminentPersonalities/YashpalSharma.webp";
import AnilJoshi from "../../../public/ProminentPersonalities/AnilJoshi.webp";
import AnilSahsrabuddhe from "../../../public/ProminentPersonalities/AnilSahsrabuddhe.webp";
import BhimSingh from "../../../public/ProminentPersonalities/BhimSingh.webp";
import David from "../../../public/ProminentPersonalities/David.webp";
import Marcin from "../../../public/ProminentPersonalities/Marcin.webp";
import RahulMishra from "../../../public/ProminentPersonalities/RahulMishra.webp";
import RajeevAhuja from "../../../public/ProminentPersonalities/RajeevAhuja.webp";
import SCHanda from "../../../public/ProminentPersonalities/SCHanda.webp";
import SNSingh from "../../../public/ProminentPersonalities/SNSingh.webp";
import DSChauhan from "../../../public/ProminentPersonalities/DSChauhan.webp";
import GLPahuja from "../../../public/ProminentPersonalities/GLPahuja.webp";
import NSChaudhary from "../../../public/ProminentPersonalities/NSChaudhary.webp";
import PKGarg from "../../../public/ProminentPersonalities/PKGarg.webp";
import RanjeetSingh from "../../../public/ProminentPersonalities/RanjeetSingh.webp";
import SudebDas from "../../../public/ProminentPersonalities/SudebDas.webp";
import VKTiwari from "../../../public/ProminentPersonalities/VKTiwari.webp";
import bannerImg from "../../../public/ProminentPersonalities/bannerImg.webp";
import Footer from "@/component/Footer";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Navbar from "@/component/Navbar/Navbar";
import BannerProgram from "@/component/Programs/BannerProgram";

function ProminentPersonalities() {
  const categories = [
    {
      name: "Sports Person / Social Media Influencer",
      subItems: [
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
          description:
            "(5th Highest World Ranking Arjun Awardee 2016 in Archery)",
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
      ],
    },
    {
      name: "Bollywood Actors",
      subItems: [
        {
          image: ChitranshiRawat,
          name: "Chitranshi Rawat",
          description: "",
        },
        {
          image: DeeptiNaval,
          name: "Deepti Naval",
          description: "",
        },
        {
          image: DipikaChikhlia,
          name: "Dipika Chikhlia",
          description: "",
        },
        {
          image: EhsaanQureshi,
          name: "Ehsaan Qureshi",
          description: "",
        },
        {
          image: GajendraChauhan,
          name: "Gajendra Chauhan",
          description: "",
        },
        {
          image: HimaniShivpuri,
          name: "Himani Shivpuri",
          description: "",
        },
        {
          image: Ranjeet,
          name: "Ranjeet",
          description: "",
        },
        {
          image: IlaArun,
          name: "Ila Arun",
          description: "",
        },
        {
          image: MadhurBhandarker,
          name: "Madhur Bhandarker",
          description: "",
        },
        {
          image: ManishWadhwa,
          name: "Manish Wadhwa",
          description: "",
        },
        {
          image: PitabhashTripathi,
          name: "Pitabhash Tripathi",
          description: "",
        },
        {
          image: PradeepRawat,
          name: "Pradeep Rawat",
          description: "",
        },
        {
          image: RajeshSharma,
          name: "Rajesh Sharma",
          description: "",
        },
        {
          image: VarunBadola,
          name: "Varun Badola",
          description: "",
        },
        {
          image: VinayPathak,
          name: "Vinay Pathak",
          description: "",
        },
        {
          image: BiswajitChatterjee,
          name: "Biswajit Chatterjee",
          description: "",
        },
        {
          image: DilipSen,
          name: "Dilip Sen",
          description: "",
        },
        {
          image: DinoMorea,
          name: "Dino Morea",
          description: "",
        },
        {
          image: HemantPandey,
          name: "Hemant Pandey",
          description: "",
        },
        {
          image: JimmyShergil,
          name: "Jimmy Shergil",
          description: "",
        },
        {
          image: KanwaljeetSingh,
          name: "Kanwaljeet Singh",
          description: "",
        },
        {
          image: Khayali,
          name: "Khayali",
          description: "",
        },
        {
          image: KimSharma,
          name: "Kim Sharma",
          description: "",
        },
        {
          image: MohanAgashe,
          name: "Mohan Agashe",
          description: "",
        },
        {
          image: MousmiChatterjee,
          name: "Mousmi Chatterjee",
          description: "",
        },
        {
          image: NassarAbdullah,
          name: "Nassar Abdullah",
          description: "",
        },
        {
          image: NawabShah,
          name: "Nawab Shah",
          description: "",
        },
        {
          image: PoojaBhatt,
          name: "Pooja Bhatt",
          description: "",
        },
        {
          image: PremChopra,
          name: "Prem Chopra",
          description: "",
        },
        {
          image: RajaMurad,
          name: "Raja Murad",
          description: "",
        },
        {
          image: RajeevNigam,
          name: "Rajeev Nigam",
          description: "",
        },
        {
          image: RajendraGupta,
          name: "Rajendra Gupta",
          description: "",
        },
        {
          image: RajpalYadav,
          name: "Rajpal Yadav",
          description: "",
        },
        {
          image: RameshSippy,
          name: "Ramesh Sippy",
          description: "",
        },
        {
          image: RaunitRoy,
          name: "Raunit Roy",
          description: "",
        },
        {
          image: RJKaavya,
          name: "RJ Kaavya",
          description: "",
        },
        {
          image: RoopaGanguly,
          name: "Roopa Ganguly",
          description: "",
        },
        {
          image: SaurabhShukla,
          name: "Saurabh Shukla",
          description: "",
        },
        {
          image: SharmanJoshi,
          name: "Sharman Joshi",
          description: "",
        },
        {
          image: SubhashGhai,
          name: "Subhash Ghai",
          description: "",
        },
        {
          image: SurendraPal,
          name: "Surendra Pal",
          description: "",
        },
        {
          image: SushmaSeth,
          name: "Sushma Seth",
          description: "",
        },
        {
          image: ViveckVaswani,
          name: "Viveck Vaswani",
          description: "",
        },
        {
          image: YashpalSharma,
          name: "Yashpal Sharma",
          description: "",
        },
      ],
    },
    {
      name: "Leaders of India",
      subItems: [
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
          description:
            "(Technical Education and Forest Minister, Uttarakhand.)",
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
      ],
    },
    {
      name: "Eminent Personalities",
      subItems: [
        {
          image: BhimSingh,
          name: "Prof. (Dr.) Bhim Singh 2022 conference",
          description:
            "SERB National Science Chair & Emeritus Professor Indian Institute of Technology Delhi",
        },
        {
          image: AnilSahsrabuddhe,
          name: "Prof. Anil Sahasrabudhe 2024 student induction",
          description:
            "Chairman of Executive Committee National Assessment and Accreditation Council",
        },
        {
          image: GLPahuja,
          name: "Prof. G.L. Pahuja 2024 conference",
          description:
            "Professor National Institute of Technology, Kurukshetra",
        },
        {
          image: RajeevAhuja,
          name: "Prof. Rajeev Ahuja 2024 cps",
          description: "Director | Indian Institute of Technology Ropar",
        },
        {
          image: David,
          name: "Prof. Dr. David Asirvatham 2022 conference",
          description: "Executive dean Taylor’s University, Malayasia",
        },
        {
          image: SudebDas,
          name: "Prof. Sudeb Das Gupta 2022 conf",
          description: "Professor, IIT Roorkee",
        },
        {
          image: RahulMishra,
          name: "Mr Rahul Mishra, 2024 lecture cyber SECURITY",
          description: "Consultant, Consultants Cyber Security Cell, UP Police",
        },
        {
          image: SCHanda,
          name: "Prof S. C. Handa 2023 lecture",
          description: "Ex. Professor IIT Roorkee",
        },
        {
          image: AnilJoshi,
          name: "Dr. Anil Prakash Joshi 2024 atal fdp",
          description:
            "Renowned environmentalist and founder of the Himalayan Environmental Studies and Conservation Organization (HESCO Padma Bhushan and Padma Shri recipient)",
        },
        {
          image: DSChauhan,
          name: "Prof. D S Chauhan",
          description:
            "Former Vice Chancellor VMSB Uttarakhand Technical University, Derhradun",
        },
        {
          image: NSChaudhary,
          name: "Prof. N. S. Chaudhary 2020 conference",
          description:
            "Former Vice Chancellor VMSB Uttarakhand Technical University, Derhradun and Professor IIT, Indore",
        },
        {
          image: PKGarg,
          name: "Prof. P K Garg",
          description:
            "Former Vice Chancellor VMSB Uttarakhand Technical University, Derhradun Emeritus Professor IIT Roorkee",
        },
        {
          image: VKTiwari,
          name: "Prof. V K Tiwari 2018 imagineering",
          description:
            "Former Vice Chancellor VMSB Uttarakhand Technical University, Derhradun & Former Professor IIT Roorkee",
        },
        {
          image: SNSingh,
          name: "Prof. Sri Niwas Singh 2017 conference",
          description:
            "Director, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, India",
        },
        {
          image: Marcin,
          name: "Marcin Paprzycki 2017 CONFE",
          description: "Polish Academy of Sciences,Poland",
        },
        {
          image: RanjeetSingh,
          name: "Prof. Ranjeet Singh 2024 CONF",
          description: "Sunway University",
        },
      ],
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name);
  const [selectedItem, setSelectedItem] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // Track visible cards

  // Function to handle View More
  const handleViewMore = () => {
    const totalItems =
      categories.find((category) => category.name === selectedCategory)
        ?.subItems.length || 0;
    setVisibleCount((prev) => Math.min(prev + 6, totalItems));
  };

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);
  return (
    <>
      <Navbar />
      <BannerProgram image={bannerImg} title="Prominent Personalities" />
      <div className="w-full h-full pt-8 md:pt-[4%]">
        <div className="w-[calc(100%-2rem)] font-[TTChocolates] md:w-[90%] mx-auto">
          {/* Category Buttons */}
          <div className="flex w-full flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setVisibleCount(6);
                }}
                className={`px-4 w-full md:w-[calc(25%-16px)] py-2 rounded-full shadow-[0px_4px_18.6px_0px_rgba(0,0,0,0.25)] text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1vw,50px)] border border-[#007a83] transition-all ${
                  selectedCategory === category.name
                    ? "bg-[#007a83] text-white"
                    : "bg-white text-[#007a83] "
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Selected Category Content */}
          <div className="flex py-8 flex-wrap justify-center md:py-[3%] gap-4">
            {categories
              .find((category) => category.name === selectedCategory)
              ?.subItems.slice(0, visibleCount) // Show limited items
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className={`bg-white rounded-lg flex flex-col justify-between items-center overflow-hidden border border-[#007a83] shadow-[0px_4px_25.2px_0px_rgba(0,0,0,0.25)] w-full md:w-[calc(33.33%-16px)]`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    placeholder="blur"
                    className="w-full h-fit aspect-[1.5/1] md:aspect-[2/1] object-cover"
                  />
                  <div className="w-full h-fit p-4">
                    <h3 className="uppercase text-[#007a83] text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1.2vw,50px)] leading-tight font-bold mt-2">
                      {item.name}
                    </h3>
                    <p className="text-[clamp(10px,3.8vw,50px)] text-[#494949] italic md:text-[clamp(10px,0.8vw,50px)] mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {/* View More Button */}
          {visibleCount <
            (categories.find((category) => category.name === selectedCategory)
              ?.subItems.length || 0) && (
            <div className="flex w-full flex-wrap gap-4 pb-8 md:pb-[4%] justify-center">
              <button
                onClick={handleViewMore}
                className="px-4 w-full md:w-[calc(25%-16px)] py-2 rounded-full shadow-[0px_4px_18.6px_0px_rgba(0,0,0,0.25)] text-[clamp(10px,4.5vw,50px)] md:text-[clamp(10px,1vw,50px)] border border-[#007a83] transition-all bg-[#007a83] text-white hover:bg-white hover:text-[#007a83] duration-300"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
      {selectedItem && (
        <div className="fixed z-20 w-full inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="p-5 w-[95%] md:w-[40%] mx-auto h-fit rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 bg-[#007a83] text-white aspect-square p-2 rounded-full"
              onClick={() => setSelectedItem(null)}
            >
              <IoClose />
            </button>
            <Image
              src={selectedItem.image}
              alt=""
              loading="lazy"
              placeholder="blur"
              className="w-full h-fit rounded"
            />
          </div>
        </div>
      )}
      <Footer color={true} />
    </>
  );
}

export default ProminentPersonalities;
