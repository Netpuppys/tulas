
import Banner from '@/component/Banner'
import Navbar from '@/component/Navbar/Navbar'
import bannerImage from "../../../public/Homepage/BannerHome/Banner1.webp"
import background from "../../../public/AboutDehradun/background.png"
import hostel from "../../../public/infrastructure/HostelMess/hostel.png"
import Image from 'next/image'
import Footer from '@/component/Footer'

const content = <>
        The Career Innovation Centre (CIC) at Tula's Institute is a dynamic hub aimed at transforming students' career planning and development. Acting as a bridge between academic knowledge and real-world employment, the CIC is dedicated to equipping students with the necessary skills and insights to excel in their chosen professions. 
        <br />
        <br />
        Our mission is to promote a progressive approach to career development by integrating advanced tools, personalised guidance, and strong industry connections. The CIC offers an extensive range of services, including career counselling, skills assessment, and CV-building support. We host innovative workshops and seminars that provide students with current industry trends, interview techniques, and effective networking strategies. 
        <br />
        <br />
        In collaboration with leading companies and industry experts, we ensure that our students are well-prepared to navigate the constantly evolving job market. Furthermore, we emphasise entrepreneurial development, encouraging students to explore and launch their own business ventures. By leveraging our extensive resources and networks, the CIC empowers students to transform their aspirations into actionable career pathways. 
        <br />
        <br />
        At Tula's Institute's Career Innovation Centre, we are committed to unlocking the full potential of each student, ensuring they are not merely job-ready but prepared for long-term career success.
    </>

const content2 = {
    para: "The Career Innovation Centre, supported by faculty members from various departments, delivers effective career guidance services to students. This includes counselling for higher education, such as GRE, GATE, CAT, among others. Each year, the AMCAT exam is administered for 5th and 7th-semester students to evaluate their readiness for the job market, providing tailored guidance based on their sectoral fit.",
    roles: [
        "To provide guidance on educational and vocational/career matters through individual and group counselling sessions.",
        "To offer pre-placement guidance and counselling for postgraduate studies.", 
        "To assist students in making informed decisions about their education and career trajectories.", 
        "To help students understand that career management is a lifelong process requiring continual development.", 
        "To educate students on the influence of technological trends on career management and progression.", 
        "To promote student independence and self-confidence in career decision-making.", 
        "To raise awareness of the wide range of opportunities available to students following graduation, whether in higher education or career development."
    ]
}

const content4 = {
    para: "The CIC actively collaborates with prominent organisations to facilitate internships and placement opportunities for students. Acting as a liaison between students, alumni, and the employment community, the department bridges the gap between industry expectations and academic preparation.",
    roles: [
        "To establish a robust interface between the institution and the industry.",
        "To formalise Memoranda of Understanding (MoUs) with leading companies for academic collaboration and student placements.",
        "To provide industrial connections for both students and faculty members.",
        "To encourage industries to engage with the institution, enhancing familiarisation with the academic environment.",
        "To organise industrial visits for students, providing practical exposure to various sectors.",
        "To facilitate corporate-student engagement activities such as workshops and recruitment drives.",
        "To generate on-campus and off-campus employment opportunities for students."
    ],
    conclusion: "This strategic focus ensures that students are well-prepared to transition smoothly into the workforce, aligning their academic achievements with industry demands."
};

const content3 = <>
        The Training Department provides a structured Personality Development programme, integrated into the regular curriculum, to prepare students for their professional journeys. Core to securing employment, subjects such as soft skills development, aptitude enhancement, and attitude building are delivered through weekly sessions lasting four hours. 
        <br />
        <br />
        The Training Department is committed to developing students in multiple dimensions, ensuring they can confidently face the challenges of the corporate world upon graduation. The School of Lifelong Learning organises activities such as presentation skills workshops, group discussions, debates, and job fairs to enhance student engagement and skill development. 
        <br />
        <br />
        For students in the 6th semester, the department runs a specialised industry-focused programme, "Campus to Corporate", which bridges academic learning with corporate expectations. The department also collaborates with top industry trainers to deliver these modules, ensuring students receive the highest standard of professional development training.
    </>

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
    <div className='w-full min-h-screen font-[TTChocolates]'>
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

        {/* section 1 */}
        <div className='flex min-h-screen items-center justify-between gap-10 py-24'>
            <div className='pl-20 w-1/2'>
                <p className='text-[2.5rem] font-semibold'>
                    <span className='h-full w-[2px] rounded-full bg-white text-opacity-0'>.</span> Career Innovation Centre (CIC)
                </p>
                <p className='pt-10 text-xl'>
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

        {/* section 2 */}
        <div className='flex min-h-screen items-center justify-between gap-10 py-24'>
            <div className='w-1/2 pr-20 min-h-[40rem]'>
                <div className='w-full h-full rounded-r-3xl bg-black min-h-[40rem]'></div>
                {/* <Image
                    src={hostel}
                    className='w-full h-full object-cover'
                    alt=''
                /> */}
            </div>
            <div className='pr-20 w-1/2'>
                <p className='text-[2.5rem] font-semibold'>
                    <span className='h-full w-[2px] rounded-full bg-white text-opacity-0'>.</span> Career Innovation Centre
                </p>
                <p className='pt-10 text-xl'>
                    {content2.para}
                </p>

                <div className='mt-12 text-xl'>
                    <p className='font-semibold'>
                        Roles and Responsibilities
                    </p>
                    <ul className='pl-4 pt-5'>
                        {content2.roles.map((item, index) => (
                            <li key={index} className='list-disc'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* section 3 */}
        <div className='flex min-h-screen items-center justify-between gap-10 py-24'>
            <div className='pl-20 w-1/2'>
                <p className='text-[2.5rem] font-semibold'>
                    <span className='h-full w-[2px] rounded-full bg-white text-opacity-0'>.</span> Training Department
                </p>
                <p className=' font-semibold mt-8 text-xl'>
                    Roles and Responsibilities
                </p>
                <p className='pt-10 font-normal text-xl font-[TTChocolates]'>
                    {content3}
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

        {/* section 4 */}
        <div className='flex min-h-screen items-center justify-between gap-10 py-24'>
            <div className='w-1/2 pr-20 min-h-[40rem]'>
                <div className='w-full h-full rounded-r-3xl bg-black min-h-[40rem]'></div>
                {/* <Image
                    src={hostel}
                    className='w-full h-full object-cover'
                    alt=''
                /> */}
            </div>
            <div className='pr-20 w-1/2'>
                <p className='text-[2.5rem] font-semibold'>
                    <span className='h-full w-[2px] rounded-full bg-white text-opacity-0'>.</span> Placement Department
                </p>
                <p className='pt-10 text-xl'>
                    {content4.para}
                </p>

                <div className='mt-12 text-xl'>
                    <p className='font-semibold'>
                        Roles and Responsibilities
                    </p>
                    <ul className='pl-4 pt-5'>
                        {content4.roles.map((item, index) => (
                            <li key={index} className='list-disc'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className='pt-10 text-xl'>
                    {content4.conclusion}
                </p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default page