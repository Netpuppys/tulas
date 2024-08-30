import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";
import iphoneFrame from "../../public/Homepage/Testimonials/iphoneFrame.png"
import placeHolder from "../../public/Homepage/Courses/Agriculture.png"
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-10 px-40 relative">
        <button className="bg-transparent p-2 rounded-full hover:bg-black hover:bg-opacity-80 text-5xl text-black hover:text-white text-opacity-80 flex items-center justify-center">
            <HiOutlineChevronLeft />
        </button>
        <div className="flex z-10 items-center justify-center h-full pb-20">
            <div className="h-4/5">
                <Image
                    src={iphoneFrame}
                    className="h-full w-full"
                    alt=""
                />
            </div>
            <div className="h-full scale-125 rounded-2xl overflow-hidden">
                <Image
                    src={iphoneFrame}
                    className="h-full w-full"
                    alt=""
                />
            </div>
            <div className=" h-4/5 rounded-2xl overflow-hidden">
                <Image
                    src={iphoneFrame}
                    className="h-full w-full"
                    alt=""
                />
            </div>
        </div>
        <button className="bg-transparent p-2 rounded-full hover:bg-black hover:bg-opacity-50 text-5xl text-black hover:text-white text-opacity-80 flex items-center justify-center">
            <HiOutlineChevronRight />
        </button>

        <div className="p-16 absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E69706]">
            <div className="w-[18rem] aspect-square rounded-full bg-[#007A83] shadow-2xl"></div>
        </div>
    </div>
  )
}

export default Testimonials