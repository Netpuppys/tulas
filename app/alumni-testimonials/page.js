import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import BannerImg from "../../public/alumni/bannerImg.png";
import background from "../../public/alumni/background.png";
import Testimonials from "../Component/Testimonials";
import Testimonial from "./testimonials/testimonial";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";

function AlumniTestimonials() {
  return (
    <>
      <head>
        <title>
          Alumni Testimonials | Best Engineering College in Dehradun,
          Uttarakhand | Tulas University
        </title>
        <meta
          name="description"
          content="Discover inspiring alumni testimonials from graduates of Tulas University, the top engineering college in Dehradun, Uttarakhand. Hear firsthand experiences about our supportive faculty, cutting-edge curriculum, and successful career paths. Join a legacy of excellence at Tulas University!"
        />
      </head>
      <body>
        {/* <Navbar /> */}
        <div className="hidden md:block">
  <MegaMenu />
</div>

<div className="block md:hidden">
  <NewNavbar fullBanner={true}/>
</div>
        <Banner
          title={
            <>
              ALUMNI <span className="text-[#f97316]">TESTIMONIALS</span>
            </>
          }
          image={BannerImg}
          description={<></>}
          belowTitle={<>Hear it from our very own</>}
          belowPara={
            <>
              At Tulas University, we take pride in the achievements of our
              alumni, who continue to make remarkable strides in their
              respective fields. Their success stories are a testament to the
              foundation of knowledge, skills, and values they gained during
              their time with us. Explore their experiences and see how Tulas
              has been a stepping stone to their continued growth and impact!
            </>
          }
        />
        {/* fixed background */}
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
          <div className="py-10">
            <Testimonial />
          </div>
        </div>
        <div className=" bg-white">
          <Testimonials />
        </div>
        <NewFooter />
      </body>
    </>
  );
}

export default AlumniTestimonials;
