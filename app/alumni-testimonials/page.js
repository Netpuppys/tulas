import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import background from "../../public/alumni/background.png";
import Testimonials from "../Component/Testimonials";
import Testimonial from "./testimonials/testimonial";

function AlumniTestimonials() {
  return (
    <>
      <head>
        <title>
          Alumni Testimonials | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Discover inspiring alumni testimonials from graduates of Tula's Institute, the top engineering college in Dehradun, Uttarakhand. Hear firsthand experiences about our supportive faculty, cutting-edge curriculum, and successful career paths. Join a legacy of excellence at Tula's Institute!"
        />
      </head>
      <body>
        <Navbar />
        <Banner
          title={
            <>
              ALUMNI <span className="text-[#007A83]">TESTIMONIALS</span>
            </>
          }
          image={BannerImg}
          description={<></>}
          belowTitle={<>Hear it from our very own</>}
          belowPara={
            <>
              At Tula's Institute, we take pride in the achievements of our
              alumni, who continue to make remarkable strides in their
              respective fields. Their success stories are a testament to the
              foundation of knowledge, skills, and values they gained during
              their time with us. Explore their experiences and see how Tula's
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
        <div className="pb-[6vh] -mb-[6vh] bg-white">
          <Testimonials />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default AlumniTestimonials;
