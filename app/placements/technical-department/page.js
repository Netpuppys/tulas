import Banner from '@/component/Banner'
import bannerImage from "../../../public/Homepage/BannerHome/Banner1.webp";
import Navbar from '@/component/Navbar/Navbar';
import background from "../../../public/AboutDehradun/background.png";
import Image from 'next/image';

const TealText = ({children}) => {
    return <span className="text-[#007A83] font-[TTChocolatesBold] font-semibold">{children}</span>
}

const description = <>
    <TealText>Career Innovation Centre (CIC)</TealText> at Tula’s Institute is a dynamic hub dedicated to revolutionizing career planning and development for students. The CIC serves as a bridge between <TealText>academic learning</TealText> and <TealText>real-world employment</TealText>, equipping students with the skills and insights necessary to excel in their chosen fields. 
    <br/>
    <br/>
    <TealText>Our mission</TealText> is to foster a forward-thinking approach to career growth by integrating cutting-edge tools, personalized guidance, and industry connections.
</>

const page = () => {

  return (
    <div className='w-full'>
        <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
        />

        <Navbar />
        <Banner
            title={<>TECHNICAL <span className='text-[#007A83]'>PLACEMENT RECORD</span></>}
            image={bannerImage}
            belowPara={description}
        />
        <div className="h-screen">

        </div>
    </div>
  )
}

export default page