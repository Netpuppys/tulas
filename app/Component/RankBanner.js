import Image from "next/image";
import banner from "../../public/Homepage/BannerHome/rankBanner.png";
import bannerMobile from "../../public/Homepage/BannerHome/rankBanneMobile.png";

const RankBanner = () => {
  return (
    <div className="w-full h-fit md:pt-10">
      <Image src={banner} className="w-full hidden md:block" alt="" />
      <Image src={bannerMobile} className="w-full md:hidden" alt="" />
    </div>
  );
};

export default RankBanner;
