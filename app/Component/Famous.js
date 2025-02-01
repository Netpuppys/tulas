import React, { useEffect, useRef } from "react";
import ChitranshiRawat from "../../public/Homepage/Famous/ChitranshiRawat.webp";
import DeeptiNaval from "../../public/Homepage/Famous/DeeptiNaval.webp";
import DipikaChikhlia from "../../public/Homepage/Famous/DipikaChikhlia.webp";
import EhsaanQureshi from "../../public/Homepage/Famous/EhsaanQureshi.webp";
import GajendraChauhan from "../../public/Homepage/Famous/GajendraChauhan.webp";
import HimaniShivpuri from "../../public/Homepage/Famous/HimaniShivpuri.webp";
import IlaArun from "../../public/Homepage/Famous/IlaArun.webp";
import MadhurBhandarker from "../../public/Homepage/Famous/MadhurBhandarker.webp";
import ManishWadhwa from "../../public/Homepage/Famous/ManishWadhwa.webp";
import PitabhashTripathi from "../../public/Homepage/Famous/PitabhashTripathi.webp";
import PradeepRawat from "../../public/Homepage/Famous/PradeepRawat.webp";
import RajeshSharma from "../../public/Homepage/Famous/RajeshSharma.webp";
import Ranjeet from "../../public/Homepage/Famous/Ranjeet.webp";
import VarunBadola from "../../public/Homepage/Famous/VarunBadola.webp";
import VinayPathak from "../../public/Homepage/Famous/VinayPathak.webp";
import BiswajitChatterjee from "../../public/Homepage/Famous/BiswajitChatterjee.webp";
import DilipSen from "../../public/Homepage/Famous/DilipSen.webp";
import DinoMorea from "../../public/Homepage/Famous/DinoMorea.webp";
import HemantPandey from "../../public/Homepage/Famous/HemantPandey.webp";
import JimmyShergil from "../../public/Homepage/Famous/JimmyShergil.webp";
import KanwaljeetSingh from "../../public/Homepage/Famous/KanwaljeetSingh.webp";
import Khayali from "../../public/Homepage/Famous/Khayali.webp";
import KimSharma from "../../public/Homepage/Famous/KimSharma.webp";
import MohanAgashe from "../../public/Homepage/Famous/MohanAgashe.webp";
import MousmiChatterjee from "../../public/Homepage/Famous/MousmiChatterjee.webp";
import NassarAbdullah from "../../public/Homepage/Famous/NassarAbdullah.webp";
import NawabShah from "../../public/Homepage/Famous/NawabShah.webp";
import PoojaBhatt from "../../public/Homepage/Famous/PoojaBhatt.webp";
import PremChopra from "../../public/Homepage/Famous/PremChopra.webp";
import RajaMurad from "../../public/Homepage/Famous/RajaMurad.webp";
import RajeevNigam from "../../public/Homepage/Famous/RajeevNigam.webp";
import RajendraGupta from "../../public/Homepage/Famous/RajendraGupta.webp";
import RajpalYadav from "../../public/Homepage/Famous/RajpalYadav.webp";
import RameshSippy from "../../public/Homepage/Famous/RameshSippy.webp";
import RaunitRoy from "../../public/Homepage/Famous/RaunitRoy.webp";
import RJKaavya from "../../public/Homepage/Famous/RJKaavya.webp";
import RoopaGanguly from "../../public/Homepage/Famous/RoopaGanguly.webp";
import SaurabhShukla from "../../public/Homepage/Famous/SaurabhShukla.webp";
import SharmanJoshi from "../../public/Homepage/Famous/SharmanJoshi.webp";
import SubhashGhai from "../../public/Homepage/Famous/SubhashGhai.webp";
import SurendraPal from "../../public/Homepage/Famous/SurendraPal.webp";
import SushmaSeth from "../../public/Homepage/Famous/SushmaSeth.webp";
import ViveckVaswani from "../../public/Homepage/Famous/ViveckVaswani.webp";
import YashpalSharma from "../../public/Homepage/Famous/YashpalSharma.webp";
import Image from "next/image";
function Famous() {
  const sports = [
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
  ];
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 2; // Speed of scrolling
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset to start for continuous effect
        }
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(20px,6.3vw,55px)] md:text-[clamp(20px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Bollywood Actors in Our Campus
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>

      <div className="w-full h-full overflow-hidden ">
        <div
          ref={scrollContainerRef}
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="w-full py-6 flex gap-2 md:py-[3%] whitespace-nowrap"
        >
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col items-end overflow-hidden rounded-xl border border-[#494949] min-w-[60%] max-w-[60%] md:max-w-[22vw] md:min-w-[22vw] mx-auto"
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
    </div>
  );
}

export default Famous;
