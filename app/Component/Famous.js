import React, { useRef } from "react";
import ChitranshiRawat from "../../public/ProminentPersonalities/ChitranshiRawat.webp";
import DeeptiNaval from "../../public/ProminentPersonalities/DeeptiNaval.webp";
import DipikaChikhlia from "../../public/ProminentPersonalities/DipikaChikhlia.webp";
import EhsaanQureshi from "../../public/ProminentPersonalities/EhsaanQureshi.webp";
import GajendraChauhan from "../../public/ProminentPersonalities/GajendraChauhan.webp";
import HimaniShivpuri from "../../public/ProminentPersonalities/HimaniShivpuri.webp";
import IlaArun from "../../public/ProminentPersonalities/IlaArun.webp";
import MadhurBhandarker from "../../public/ProminentPersonalities/MadhurBhandarker.webp";
import ManishWadhwa from "../../public/ProminentPersonalities/ManishWadhwa.webp";
import PitabhashTripathi from "../../public/ProminentPersonalities/PitabhashTripathi.webp";
import PradeepRawat from "../../public/ProminentPersonalities/PradeepRawat.webp";
import RajeshSharma from "../../public/ProminentPersonalities/RajeshSharma.webp";
import Ranjeet from "../../public/ProminentPersonalities/Ranjeet.webp";
import VarunBadola from "../../public/ProminentPersonalities/VarunBadola.webp";
import VinayPathak from "../../public/ProminentPersonalities/VinayPathak.webp";
import BiswajitChatterjee from "../../public/ProminentPersonalities/BiswajitChatterjee.webp";
import DilipSen from "../../public/ProminentPersonalities/DilipSen.webp";
import DinoMorea from "../../public/ProminentPersonalities/DinoMorea.webp";
import HemantPandey from "../../public/ProminentPersonalities/HemantPandey.webp";
import JimmyShergil from "../../public/ProminentPersonalities/JimmyShergil.webp";
import KanwaljeetSingh from "../../public/ProminentPersonalities/KanwaljeetSingh.webp";
import Khayali from "../../public/ProminentPersonalities/Khayali.webp";
import KimSharma from "../../public/ProminentPersonalities/KimSharma.webp";
import MohanAgashe from "../../public/ProminentPersonalities/MohanAgashe.webp";
import MousmiChatterjee from "../../public/ProminentPersonalities/MousmiChatterjee.webp";
import NassarAbdullah from "../../public/ProminentPersonalities/NassarAbdullah.webp";
import NawabShah from "../../public/ProminentPersonalities/NawabShah.webp";
import PoojaBhatt from "../../public/ProminentPersonalities/PoojaBhatt.webp";
import PremChopra from "../../public/ProminentPersonalities/PremChopra.webp";
import RajaMurad from "../../public/ProminentPersonalities/RajaMurad.webp";
import RajeevNigam from "../../public/ProminentPersonalities/RajeevNigam.webp";
import RajendraGupta from "../../public/ProminentPersonalities/RajendraGupta.webp";
import RajpalYadav from "../../public/ProminentPersonalities/RajpalYadav.webp";
import RameshSippy from "../../public/ProminentPersonalities/RameshSippy.webp";
import RaunitRoy from "../../public/ProminentPersonalities/RaunitRoy.webp";
import RJKaavya from "../../public/ProminentPersonalities/RJKaavya.webp";
import RoopaGanguly from "../../public/ProminentPersonalities/RoopaGanguly.webp";
import SaurabhShukla from "../../public/ProminentPersonalities/SaurabhShukla.webp";
import SharmanJoshi from "../../public/ProminentPersonalities/SharmanJoshi.webp";
import SubhashGhai from "../../public/ProminentPersonalities/SubhashGhai.webp";
import SurendraPal from "../../public/ProminentPersonalities/SurendraPal.webp";
import SushmaSeth from "../../public/ProminentPersonalities/SushmaSeth.webp";
import ViveckVaswani from "../../public/ProminentPersonalities/ViveckVaswani.webp";
import YashpalSharma from "../../public/ProminentPersonalities/YashpalSharma.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
function Famous() {
  const swiperRef = useRef();
  const sports = [
    {
      image: ChitranshiRawat,
      name: "Chitranshi Rawat",
      image2: DeeptiNaval,
      name2: "Deepti Naval",
      image3: DipikaChikhlia,
      name3: "Dipika Chikhlia",
    },
    {
      image: EhsaanQureshi,
      name: "Ehsaan Qureshi",
      image2: GajendraChauhan,
      name2: "Gajendra Chauhan",
      image3: HimaniShivpuri,
      name3: "Himani Shivpuri",
    },
    {
      image: Ranjeet,
      name: "Ranjeet",
      image2: IlaArun,
      name2: "Ila Arun",
      image3: MadhurBhandarker,
      name3: "Madhur Bhandarker",
    },
    {
      image: ManishWadhwa,
      name: "Manish Wadhwa",
      image2: PitabhashTripathi,
      name2: "Pitabhash Tripathi",
      image3: PradeepRawat,
      name3: "Pradeep Rawat",
    },
    {
      image: RajeshSharma,
      name: "Rajesh Sharma",
      image2: VarunBadola,
      name2: "Varun Badola",
      image3: VinayPathak,
      name3: "Vinay Pathak",
    },
    {
      image: BiswajitChatterjee,
      name: "Biswajit Chatterjee",
      image2: DilipSen,
      name2: "Dilip Sen",
      image3: DinoMorea,
      name3: "Dino Morea",
    },
    {
      image: HemantPandey,
      name: "Hemant Pandey",
      image2: JimmyShergil,
      name2: "Jimmy Shergil",
      image3: KanwaljeetSingh,
      name3: "Kanwaljeet Singh",
    },
    {
      image: Khayali,
      name: "Khayali",
      image2: KimSharma,
      name2: "Kim Sharma",
      image3: MohanAgashe,
      name3: "Mohan Agashe",
    },
    {
      image: MousmiChatterjee,
      name: "Mousmi Chatterjee",
      image2: NassarAbdullah,
      name2: "Nassar Abdullah",
      image3: NawabShah,
      name3: "Nawab Shah",
    },
    {
      image: PoojaBhatt,
      name: "Pooja Bhatt",
      image2: PremChopra,
      name2: "Prem Chopra",
      image3: RajaMurad,
      name3: "Raja Murad",
    },
    {
      image: RajeevNigam,
      name: "Rajeev Nigam",
      image2: RajendraGupta,
      name2: "Rajendra Gupta",
      image3: RajpalYadav,
      name3: "Rajpal Yadav",
    },
    {
      image: RameshSippy,
      name: "Ramesh Sippy",
      image2: RaunitRoy,
      name2: "Raunit Roy",
      image3: RJKaavya,
      name3: "RJ Kaavya",
    },
    {
      image: RoopaGanguly,
      name: "Roopa Ganguly",
      image2: SaurabhShukla,
      name2: "Saurabh Shukla",
      image3: SharmanJoshi,
      name3: "Sharman Joshi",
    },
    {
      image: SubhashGhai,
      name: "Subhash Ghai",
      image2: SurendraPal,
      name2: "Surendra Pal",
      image3: SushmaSeth,
      name3: "Sushma Seth",
    },
    {
      image: ViveckVaswani,
      name: "Viveck Vaswani",
      image2: YashpalSharma,
      name2: "Yashpal Sharma",
      image3: NawabShah,
      name3: "Nawab Shah",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-[CarotSlab] text-center pt-8 md:pt-[3%] px-4 text-wrap text-[clamp(10px,6.3vw,55px)] md:text-[clamp(10px,2.3vw,55px)] text-[#242424] w-fit whitespace-nowrap leading-tight md:leading-none z-10">
        Bollywood Actors in Our Campus
        <div className="h-[4px] bg-[#007A83] w-[80%] mx-auto rounded-full"></div>
      </div>
      <div className="py-6 flex gap-2 md:py-[3%] w-[90%] md:w-[95%] overflow-hidden">
        <Swiper
          ref={swiperRef}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          spaceBetween={20}
          className="mySwiper"
          slidesPerView={1}
        >
          {sports.map((sport, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[2%]">
                <div className="relative flex overflow-hidden rounded-xl border border-[#494949] w-full mx-auto">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src={sport.image}
                      alt=""
                      priority
                      className="w-full h-full aspect-[1.5/1] object-cover"
                    />
                  </div>
                  <div className="p-[3%] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_72.96%,rgba(0,0,0,0.70)_100%)] absolute bottom-0 z-20 flex items-end w-full h-full">
                    <h2 className="text-[clamp(10px,4.5vw,50px)] text-wrap md:text-[clamp(10px,1.3vw,50px)] text-white font-[TTChocolates] leading-tight font-extrabold">
                      {sport.name}
                    </h2>
                  </div>
                </div>
                <div className="relative flex overflow-hidden rounded-xl border border-[#494949] w-full mx-auto">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src={sport.image2}
                      alt=""
                      priority
                      className="w-full h-full aspect-[1.5/1] object-cover"
                    />
                  </div>
                  <div className="p-[3%] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_72.96%,rgba(0,0,0,0.70)_100%)] absolute bottom-0 z-20 flex items-end w-full h-full">
                    <h2 className="text-[clamp(10px,4.5vw,50px)] text-wrap md:text-[clamp(10px,1.3vw,50px)] text-white font-[TTChocolates] leading-tight font-extrabold">
                      {sport.name2}
                    </h2>
                  </div>
                </div>
                <div className="relative flex overflow-hidden rounded-xl border border-[#494949] w-full mx-auto">
                  <div className="w-full h-full flex flex-col justify-between">
                    <Image
                      src={sport.image3}
                      alt=""
                      priority
                      className="w-full h-full aspect-[1.5/1] object-cover"
                    />
                  </div>
                  <div className="p-[3%] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_72.96%,rgba(0,0,0,0.70)_100%)] absolute bottom-0 z-20 flex items-end w-full h-full">
                    <h2 className="text-[clamp(10px,4.5vw,50px)] text-wrap md:text-[clamp(10px,1.3vw,50px)] text-white font-[TTChocolates] leading-tight font-extrabold">
                      {sport.name3}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Famous;
