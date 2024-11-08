"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useState, useRef, useEffect } from "react";
import BannerImg from "../../public/Components/Banner/bannerImg.png";
import background from "../../public/AboutDehradun/background.png";
import Footer from "@/component/Footer";
import Image from "next/image";
import DegreeForm from "./Components/form"; // Import the DegreeForm component

const title = (
  <>
    DEGREE <span className="text-[#007A83]">REQUEST FORM</span>
  </>
);

function DegreeRequestForm() {
  const [showForm, setShowForm] = useState(false);
  const modalRef = useRef();

  // Handle closing the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowForm(false); // Close the form modal when clicking outside
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <>
      <head>
        <title>
          Degree Request Form | Best Engineering College in Dehradun,
          Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Submit your Degree Request Form at Tula's Institute, Dehradun's premier engineering college. Easily request your academic degree with our streamlined process for graduates and alumni."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={title}
          description={<></>}
          belowTitle={"Attention all alumni students!!"}
          belowPara={
            "We are thrilled to inform you that we have streamlined our degree collection process for your convenience. You no longer need to make the journey back to the institute to obtain your degree. Instead, we are now offering a hassle-free service where your degree will be posted directly to your residence. All you need to do is pay a minimal degree fee, which includes the cost of posting and handling. This means you can receive your hard-earned degree right at your doorstep, saving you time and effort. We believe this new system will make the degree collection process much more convenient for all our esteemed alumni. Kindly fill the attached form if you wish to avail this service:"
          }
        />

        {/* Background and Form Button */}
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
          <div className="py-10 md:py-20">
            <div className="w-full items-center flex justify-center">
              <button
                onClick={() => setShowForm(true)} // Show the form modal when clicked
                className="font-[TTChocolatesBold] mb-8 bg-white rounded-full text-[#760135] text-[18px] md:text-[24px] text-center items-center py-2 px-10 md:px-20"
              >
                Degree Request Form
              </button>
            </div>
            <ul className="list-disc text-white font-[TTChocolates] w-[90%] max-w-[1200px] px-2 text-[14px] md:text-[25px] mx-auto">
              <li>
                <strong>Payment of mailing fee:</strong> A nominal fee of Rs
                800/- (Eight Hundred Only) for domestic and Rs  2300/- (Two
                thousand three Hundred only) where 300 is the degree fee and
                rest for  International postage and handling of your degree will
                be applicable. Payment instructions  have been given in the
                Degree Request Form. Please make the necessary payment to
                the  college account shared with the Degree Request Form and
                confirm the payment by attaching  the receipt with the form.
                Once the payment is confirmed, your degree will be dispatched.
              </li>
              <br />
              <li>
                <strong>Shipment tracking:</strong>
                Upon dispatching your degree through DTDC most preferably, we
                will  provide you with a tracking number or a shipment reference
                code. This will enable you to  monitor the progress of your
                package and ensure its safe arrival at the designated
                address.  Please keep this information safe for future
                reference.
              </li>
              <br />
              <li>
                <strong>Estimated delivery time:</strong>
                In most cases, domestic deliveries can be expected within
                5-10  business days, while international shipments may take
                longer due to customs and local postal  services.
              </li>
              <br />
              <li>
                <strong>Delivery confirmation:</strong>
                Once your degree is delivered, we kindly request that you
                acknowledge  the receipt by notifying the administration office
                via email or phone call. Your confirmation will  help us ensure
                that the degree reached you successfully. {" "}
              </li>
              <br />
              <li>
                <strong>Re-issuance and lost packages:</strong>
                In the unfortunate event that your degree is lost or
                damaged  during transit, please contact the administration
                office immediately. We will initiate the  necessary procedures
                for re-issuing your degree or resolving any issues that may
                arise.
              </li>
            </ul>
          </div>
        </div>

        {/* Modal for Degree Form */}
        {showForm && (
          <div className="fixed inset-0 z-[9999] bg-black bg-opacity-30 flex justify-center items-center">
            <div
              ref={modalRef}
              className="w-[95%] md:w-[60%] py-4 md:py-8 px-4 md:px-[5%] backdrop-blur-md bg-[#760135] bg-opacity-50 rounded-3xl shadow-2xl"
            >
              <DegreeForm Degreeref={modalRef} showForm={showForm} />
            </div>
          </div>
        )}

        <div className="w-full h-fit z-40">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default DegreeRequestForm;
