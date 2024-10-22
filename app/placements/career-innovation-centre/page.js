
import Banner from '@/component/Banner'
import Navbar from '@/component/Navbar/Navbar'
import bannerImage from "../../../public/Homepage/BannerHome/Banner1.webp"
import background from "../../../public/AboutDehradun/background.png"
import hostel from "../../../public/infrastructure/HostelMess/hostel.png"
import Image from 'next/image'

const content = <>The Career Innovation Centre (CIC) at Tula’s Institute is a dynamic hub aimed at transforming students' career planning and development. Acting as a bridge between academic knowledge and real-world employment, the CIC is dedicated to equipping students with the necessary skills and insights to excel in their chosen professions. 
    <br />
    <br />
    Our mission is to promote a progressive approach to career development by integrating advanced tools, personalised guidance, and strong industry connections. The CIC offers an extensive range of services, including career counselling, skills assessment, and CV-building support. We host innovative workshops and seminars that provide students with current industry trends, interview techniques, and effective networking strategies. 
    <br />
    <br />
    In collaboration with leading companies and industry experts, we ensure that our students are well-prepared to navigate the constantly evolving job market. Furthermore, we emphasise entrepreneurial development, encouraging students to explore and launch their own business ventures. By leveraging our extensive resources and networks, the CIC empowers students to transform their aspirations into actionable career pathways. 
    <br />
    <br />
    At Tula's Institute's Career Innovation Centre, we are committed to unlocking the full potential of each student, ensuring they are not merely job-ready but prepared for long-term career success.</>

const Highlight = ({children}) => {
    return (
        <strong className='text-[#007A83] !font-bold'>
            {children}
        </strong>
    )
}

const description = <>
    <Highlight>{"Career Innovation Centre (CIC)"}</Highlight> at Tula's Institute is a dynamic hub dedicated to revolutionizing career planning and development for students. The CIC serves as a bridge between <Highlight>academic learning</Highlight> and <Highlight>real-world employment</Highlight>, equipping students with the skills and insights necessary to excel in their chosen fields.
    <br />
    <br />
    <Highlight>Our mission</Highlight> is to foster a forward-thinking approach to career growth by integrating cutting-edge tools, personalized guidance, and industry connections.
 </>

// Our mission is to foster a forward-thinking approach to career growth by integrating cutting-edge tools, personalized guidance, and industry connections."

const page = () => {
  return (
    <div className='w-full min-h-screen'>
        <Image
            src={background}
            className='fixed -z-10 w-full object-cover top-0 left-0'
            alt=''
        />

        <div className='w-full'>
            <Navbar />
        </div>

        <Banner
            title={"CAREER INNOVATION CENTRE"}
            belowPara={description}
            image={bannerImage}
        />

        <div className='flex min-h-screen items-start justify-between gap-10 py-24'>
            <div className='pl-20 w-1/2'>
                <p className='text-[2.5rem] font-semibold'>
                    <span className='h-full w-[2px] rounded-full bg-white text-opacity-0'>.</span> Career Innovation Centre (CIC)
                </p>
                <p className='pt-10'>
                    {content}
                </p>
            </div>
            <div className='w-1/2 pl-20'>
                <Image
                    src={hostel}
                    className='w-full h-full object-cover'
                    alt=''
                />
            </div>
        </div>

        <div className='w-full h-96 bg-white'>

        </div>

        <div className='flex min-h-screen items-start justify-between gap-10 py-24'>
            <div className='w-1/2 pr-20'>
                <Image
                    src={hostel}
                    className='w-full h-full object-cover'
                    alt=''
                />
            </div>
            <div className='pl-20 w-1/2'>
                <p className='text-[2.5rem] font-semibold'>
                    <span className='h-full w-[2px] rounded-full bg-white text-opacity-0'>.</span> Career Innovation Centre (CIC)
                </p>
                <p className='pt-10'>
                    {content}
                </p>
            </div>
        </div>

    </div>
  )
}

export default page