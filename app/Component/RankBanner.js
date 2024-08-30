import Image from "next/image"
import banner from "../../public/Homepage/BannerHome/rankBanner.png"

const RankBanner = () => {
  return (
    <div className="w-full h-fit pt-10">
        <Image
            src={banner}
            className="w-full"
            alt=""
        />
    </div>
  )
}

export default RankBanner