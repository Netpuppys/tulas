"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import "react-phone-input-2/lib/style.css";
import { cities, courses, specializations, state } from "@/data/courses";
import axios from "axios";
import formPopup from "../../public/Homepage/aboutTulas/formPopup.png";
import OtpInput from "react-otp-input";
import { ThreeDots } from "react-loader-spinner";
import { UtmContext } from "@/component/utmParams";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import btechBannerImg from "../../public/courses/btech/btechBanner.webp";
import BannerProgram from "@/component/Programs/BannerProgram";
import comprehensiveCurriculam from "../../public/graduate-school-of-business/mba/comprehensiveCurriculam.png";
import highCareerDemand from "../../public/graduate-school-of-business/mba/highCareerDemand.png";
import paathwayToProfessionalCertification from "../../public/graduate-school-of-business/mba/paathwayToProfessionalCertification.png";
import diverseIndustryApplications from "../../public/graduate-school-of-business/mba/diverseIndustryApplications.png";
import marketingIcon from "../../public/graduate-school-of-business/mba/marketingIcon.png";
import finance from "../../public/graduate-school-of-business/mba/finance.png";
import entreprenurship from "../../public/graduate-school-of-business/mba/entreprenurship.png";
import cuttingEdgeBackground from "../../public/graduate-school-of-business/mba/cuttingEdgeBackground.png";
import Image from "next/image";
import TableProgram from "@/component/Programs/tableProgram";
import DownloadFeeStructure from "@/component/Programs/DownloadFeeStructure";
import MTechFee from "../../public/FeeStructure/MTech.pdf";
function MTech() {
  const whyData = [
    {
      icon: comprehensiveCurriculam,
      title: "Specialized Knowledge",
      description: "Advanced expertise in emerging technologies.",
    },
    {
      icon: diverseIndustryApplications,
      title: "Career Advancement",
      description: "Enhanced job prospects with a higher qualification.",
    },
    {
      icon: highCareerDemand,
      title: "Research Opportunities",
      description: "Engage in innovative and impactful research.",
    },
    {
      icon: paathwayToProfessionalCertification,
      title: "Industry Collaboration",
      description:
        "Opportunities to work with leading companies and institutions.",
    },
  ];
  const department = [
    {
      title: "Computer Science & Engineering",
      icon: marketingIcon,
    },
    {
      title: "Thermal Engineering",
      icon: finance,
    },
    {
      title: "Civil Engineering",
      icon: entreprenurship,
    },
  ];
  const { utmParams } = useContext(UtmContext);
  const [formData, setFormData] = useState({
    AuthToken: "TULAS-27-12-2023",
    Source: "tulas",
    FirstName: "",
    Email: "",
    MobileNumber: "+91",
    LeadSource: 25,
    LeadChannel: 2,
    Course: "",
    Center: "",
    State: "",
    City: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(30); // Timer for the Resend OTP button
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCountryCodeChange = (e) => {
    const selectedCode = e.target.value;
    setCountryCode(selectedCode);
    setFormData({
      ...formData,
      MobileNumber: `${selectedCode}${phoneNumber}`,
    });
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setIsPhoneValid(number.length >= 10 && /^\d+$/.test(number));
    setPhoneNumber(number);
    setFormData({
      ...formData,
      MobileNumber: `${countryCode}${number}`,
    });
  };

  const handleCourseChange = (e) => {
    const selectedCourseId = e.target.value; // Ensure it's an integer
    setFormData((prev) => ({
      ...prev,
      Course: Number(selectedCourseId),
      Center: "", // Reset Center if Course changes
    }));
  };

  const handleCenterChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      Center: Number(value),
    }));
  };
  const handleCityChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      City: Number(value),
    }));
  };

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value; // Ensure it's an integer
    setFormData((prev) => ({
      ...prev,
      State: Number(selectedStateId),
      City: "", // Reset City if State changes
    }));
  };

  const handleChangeNumber = () => {
    setFormData((prev) => ({
      ...prev,
      MobileNumber: "+91",
    }));
    setIsOtpSent(false);
  };

  useEffect(() => {
    if (isOtpSent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOtpSent]);

  const startTimer = () => {
    setTimer(30); // Reset the timer to 30 seconds
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown); // Stop the timer when it reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer(30);
  }, []);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmTerm = searchParams.get("utm_term");
    const searchQuery = searchParams.get("search_query");
    const updatedFormData = {
      ...formData,
      LeadChannel: utmParams ? 7 : 2,
      LeadSource: utmParams ? utmSource || 31 : 25,
      LeadCampaign: utmParams
        ? utmCampaign || "MTech page Ads"
        : "MTech page Organic",
      Field5: utmParams
        ? utmTerm || "No Term Found"
        : "Organic Lead Search Term not available",
      Field6: utmParams
        ? searchQuery || "No search Query Available"
        : "Organic Lead Search Query not available",
    };
    axios
      .post(
        "https://thirdpartyapi.extraaedge.com/api/SaveRequest",
        updatedFormData
      )
      .then(() => {
        setLoading(false);
        window.location.href = `/admission-thank-you/${utmParams}`;
        setVerified(false);
        setFormData({
          AuthToken: "TULAS-27-12-2023",
          Source: "tulas",
          FirstName: "",
          Email: "",
          MobileNumber: "+91",
          LeadSource: 25,
          LeadChannel: 2,
          Course: "",
          Center: "",
          State: "",
          City: "",
        });
        setOtp("");
      })
      .catch((error) => {
        setLoading(false);
        alert.error(error);
      });
  };

  const sendOtp = async () => {
    setLoading(true);
    axios
      .post("https://otpapi.tis.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        message:
          "Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.", // Replace with your SMS template
        authkey: "412590AKveCHLSBnd4658bcea0P1",
      })
      .then(() => {
        setLoading(false);
        setIsOtpSent(true);
        startTimer();
      })
      .catch((error) => {
        setLoading(false);
        alert("Error while Sending Otp");
      });
  };

  const verifyOtp = async () => {
    setLoading(true);
    axios
      .post("https://otpapi.tis.edu.in/verify-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        otp: otp,
        authkey: "412590AKveCHLSBnd4658bcea0P1",
      })
      .then((response) => {
        setLoading(false);
        setVerified(true);
        setIsOtpSent(false);
        alert(response.data.message); // Corrected this to access response.data.message
      })
      .catch((error) => {
        setLoading(false);
        setMessage("Wrong Otp Entered");
      });
  };

  const resendOtp = async () => {
    setLoading(true);
    axios
      .post("https://otpapi.tis.edu.in/retry-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        authkey: "412590AKveCHLSBnd4658bcea0P1",
      })
      .then((response) => {
        setLoading(false);
        startTimer();
        setMessage("OTP sent successfully!");
        alert(response.data.message); // Corrected this to access response.data.message
      })
      .catch((error) => {
        setLoading(false);
        alert(
          error.response ? error.response.data.message : "An error occurred"
        ); // Handle error message properly
      });
  };

  return (
    <>
      <head>
        <title>
          Best Engineering College in Dehradun, India | Tula's Institute
        </title>
        <meta
          name="description"
          content="Looking for the Top Engineering and Degree College in Dehradun(Uttarakhand)? Look No Further Than Tula's Institute. We Offer the Best Engineering Courses Across India. Visit Now!"
        />
      </head>
      <body>
        {isOtpSent && (
          <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center flex-col">
            <div
              className="w-full h-screen bg-black bg-opacity-50 pointer-events-auto z-10 absolute"
              onClick={() => setIsOtpSent(false)}
            ></div>
            <div className="p-8 rounded-2xl pointer-events-auto z-20 overflow-hidden relative">
              <Image
                src={formPopup}
                alt=""
                className="absolute top-0 w-full h-full -z-10 left-0 object-cover"
              />
              <h3 className="text-white z-20 text-2xl font-[TTChocolatesMedium] font-bold mb-1">
                Verify Mobile Number
              </h3>
              <h4 className="max-w-[415px] text-[15px] font-[TTChocolatesMedium] ">
                OTP has been sent to you on your mobile number, Please enter it
                below{" "}
                <button
                  onClick={handleChangeNumber}
                  className="bg-[#3D001B] mx-2 py-1 px-2"
                >
                  Change Number
                </button>
              </h4>
              <div className="flex flex-col items-center justify-center">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  disabled={verified}
                  placeholder="XXXX"
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0.8rem 0.5rem 0rem 0.5rem",
                    fontSize: "1.5rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #ccc",
                    textAlign: "center",
                    color: "black",
                    outline: "none",
                  }}
                  containerStyle={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
                {message && <p className="text-[#FF0000]">{message}</p>}
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  className="bg-[#3D001B] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed text-[15px] font-[TTChocolatesMedium] px-4 py-1 my-2"
                  onClick={resendOtp}
                  disabled={timer !== 0} // Disable resend if cooldown is active
                >
                  Resend OTP
                </button>
                {timer > 0 && (
                  <p className="text-[15px]">{`${timer} Seconds`}</p>
                )}
              </div>
              <button
                onClick={verifyOtp}
                className="text-[#3D001B] bg-white w-full rounded-md text-2xl font-[TTChocolatesMedium] py-1"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div className="fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 z-[9999999] flex justify-center items-center">
            <div className="">
              <ThreeDots color="#FFF" />
            </div>
          </div>
        )}
        <Navbar />
        <BannerProgram
          image={btechBannerImg}
          title={"Master of Technology (M.Tech)"}
        />
        <div className="py-8 md:py-[4%] w-full h-fit">
          <div className="w-full h-fit">
            <div className="w-[92%] mx-auto">
              <div
                className={`flex flex-col-reverse md:flex-row justify-center w-full items-start gap-8 md:gap-[2%]`}
              >
                <div className="w-full text-[#353535] md:w-full px-4 md:px-0">
                  <h5 className="w-fit mx-auto text-[#353535] text-center pb-4 md:pb-[3%] leading-tight text-[clamp(10px,5.5vw,30px)] md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
                    About the Course
                    <div className="h-[4px] bg-[#007A83] w-[55%] mx-auto rounded-full"></div>
                  </h5>
                  <h5 className="w-full text-[#353535] md:w-full text-justify mx-auto leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] font-[TTChocolates] font-normal">
                    The Master of Technology (M.Tech) is a two-year postgraduate
                    program aimed at professionals and students looking to
                    deepen their expertise in engineering and technology. This
                    advanced degree offers a robust curriculum that integrates
                    theoretical concepts with practical applications, focusing
                    on specialized knowledge, research methodologies, and
                    industry-driven innovations.
                    <div className="mt-4 md:mt-[1%]"></div>
                    M.Tech programs provide students with an opportunity to
                    enhance their technical acumen and analytical abilities in
                    specific domains such as Computer Science, Mechanical
                    Engineering, Electrical Engineering, Civil Engineering, and
                    emerging fields like Artificial Intelligence, Robotics, and
                    Data Science. The curriculum is designed to equip students
                    with cutting-edge skills, ensuring they remain competitive
                    in the rapidly evolving technological landscape.
                    <div className="mt-4 md:mt-[1%]"></div>
                    One of the key aspects of an M.Tech degree is its emphasis
                    on research and development (R&D). Students engage in thesis
                    work, innovative projects, and industrial collaborations
                    that foster independent thinking and innovation. Many
                    universities and institutes have dedicated research centers
                    where students work on breakthrough technologies, patents,
                    and solutions for real-world challenges.
                    <div className="mt-4 md:mt-[1%]"></div>
                    The program also includes industry exposure through
                    internships, guest lectures from industry experts, and
                    collaborations with global technology firms. This practical
                    learning component helps students understand the nuances of
                    contemporary engineering problems and prepares them for
                    leadership roles in academia, R&D, and high-tech industries.
                  </h5>
                </div>
                <div className="w-full max-w-[500px] bg-[#007a83] overflow-hidden backdrop-blur-xl h-fit mx-auto rounded-2xl">
                  <form className="w-full h-full px-5" onSubmit={handleSubmit}>
                    <h3 className="text-center text-white text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.5vw,45px)] w-full py-6">
                      Enquire Now
                    </h3>
                    <input
                      type="text"
                      placeholder="Enter Student Full Name*"
                      value={formData.FirstName}
                      onChange={(e) =>
                        handleChange("FirstName", e.target.value)
                      }
                      required
                      className="w-full px-5 py-2 border-none focus:outline-none rounded-[3px] text-[#161616] bg-[#E9E9E9] placeholder:text-[#161616] mb-2"
                    />
                    <input
                      type="Email"
                      placeholder="Enter Email Id*"
                      value={formData.Email}
                      onChange={(e) => handleChange("Email", e.target.value)}
                      required
                      className="w-full px-5 py-2 text-base border-none focus:outline-none rounded-[3px] text-[#161616] bg-[#E9E9E9] placeholder:text-[#161616] mb-2"
                    />
                    <div className="w-full mb-2 flex flex-col xl:flex-row gap-2">
                      <div className="flex w-full rounded-[3px] overflow-hidden">
                        <select
                          value={countryCode}
                          disabled={verified}
                          onChange={handleCountryCodeChange}
                          className="w-14 h-[42px] text-center focus:outline-none bg-[#E9E9E9] text-[#161616] placeholder:text-[#161616]"
                        >
                          <option value="91">{`+${getCountryCallingCode(
                            "IN"
                          )}`}</option>
                          <option value="977">{`+${getCountryCallingCode(
                            "NP"
                          )}`}</option>
                          {/* {getCountries()
                                          .filter((country) => country !== "IN") // Exclude India from the mapped options
                                          .map((country) => (
                                            <option key={country} value={getCountryCallingCode(country)}>
                                              {`(+${getCountryCallingCode(country)})`}
                                            </option>
                                          ))} */}
                        </select>
                        <input
                          type="text"
                          required
                          disabled={verified}
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          placeholder="Enter your Mobile No...."
                          className={`py-2 focus:outline-none w-full bg-[#E9E9E9] text-[#161616] disabled:opacity-100 disabled:cursor-not-allowed placeholder:text-[#161616]`}
                        />
                      </div>
                      <button
                        type="button"
                        disabled={verified || !isPhoneValid}
                        onClick={sendOtp}
                        className={`w-full xl:w-[40%] bg-black rounded-[3px] flex items-center justify-center xl:px-4 py-2 font-bold text-white ${
                          isPhoneValid && !verified
                            ? "cursor-pointer"
                            : "opacity-100 cursor-not-allowed"
                        }`}
                      >
                        {verified ? "Verified" : "Send OTP"}
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 mb-2">
                      <select
                        value={formData.State}
                        onChange={handleStateChange}
                        required
                        className="w-full md:w-1/2 classic px-5 py-2 h-10 border-none focus:outline-none rounded-[3px] text-[#161616] bg-[#E9E9E9] placeholder:text-[#161616]"
                      >
                        <option value="">Select State</option>
                        {state
                          .slice()
                          .sort((a, b) => a.name.localeCompare(b.name)) // sort by name alphabetically
                          .map((state) => (
                            <option key={state.id} value={state.id}>
                              {state.name}
                            </option>
                          ))}
                      </select>
                      <select
                        value={formData.City}
                        onChange={(e) => handleCityChange(e.target.value)}
                        required
                        disabled={!formData.State}
                        title={!formData.State ? "Please Select State" : ""}
                        className="w-full md:w-1/2 classic disabled:opacity-100 disabled:cursor-not-allowed px-5 py-2 h-10 border-none focus:outline-none rounded-[3px] text-[#161616] bg-[#E9E9E9] placeholder:text-[#161616]"
                      >
                        <option value="">Select City</option>
                        {formData.State &&
                          cities[formData.State]
                            .slice()
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((city, index) => (
                              <option key={index} value={city.id}>
                                {city.name}
                              </option>
                            ))}
                      </select>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mb-2">
                      <select
                        value={formData.Course}
                        onChange={handleCourseChange}
                        required
                        className="w-full md:w-1/2 classic px-5 py-2 h-10 border-none focus:outline-none rounded-[3px] text-[#161616] bg-[#E9E9E9] placeholder:text-[#161616]"
                      >
                        <option value="">Select Course</option>
                        {courses.map((Course) => (
                          <option key={Course.id} value={Course.id}>
                            {Course.name}
                          </option>
                        ))}
                      </select>
                      <select
                        value={formData.Center}
                        onChange={(e) => handleCenterChange(e.target.value)}
                        required
                        disabled={!formData.Course}
                        title={!formData.Course ? "Please Select Course" : ""}
                        className="w-full md:w-1/2 classic disabled:opacity-100 disabled:cursor-not-allowed px-5 py-2 h-10 border-none focus:outline-none rounded-[3px] text-[#161616] bg-[#E9E9E9] placeholder:text-[#161616]"
                      >
                        <option value="">Select Specialization</option>
                        {formData.Course &&
                          specializations[formData.Course].map(
                            (spec, index) => (
                              <option key={index} value={spec.id}>
                                {spec.name}
                              </option>
                            )
                          )}
                      </select>
                    </div>

                    <div className="flex items-center justify-center gap-2 py-[2%] mb-2">
                      <input
                        id="consent1"
                        type="checkbox"
                        name="consent1"
                        className=""
                        value="no"
                        required
                      />
                      <label
                        for="consent1"
                        className="flex items-center cursor-pointer text-[clamp(5px,3vw,30px)] md:text-[clamp(6px,0.8vw,45px)]"
                      >
                        I Agree to receive information regarding my submitted
                        application by signing up on Tula's Institute
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!verified}
                      title={verified ? "" : "Please Verify Mobile Number"}
                      className={`w-full bg-white text-[#007A83] cursor-pointer py-2 rounded-[3px] disabled:opacity-100 disabled:cursor-not-allowed font-semibold mb-10`}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-6 flex flex-col items-center justify-center w-full">
          <h8 className="text-[#353535] px-4 text-center text-[clamp(10px,5.5vw,50px)] leading-tight md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
            Why Choose TULA’s
            <div className="h-[4px] bg-[#007A83] w-[55%] mx-auto rounded-full"></div>
          </h8>
          <div className="flex flex-wrap gap-4 w-full pt-8 md:pt-[3%] md:w-[95%] mx-auto">
            {whyData.map((card, index) => (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row md:w-[calc(25%-1rem)] mb-[2%] relative"
              >
                <div className="flex flex-col justify-between items-start w-full h-full">
                  <div className="rounded-md px-4 font-semibold">
                    <Image
                      src={card.icon}
                      alt=""
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <h3 className="text-[#4E4E4E] px-4 mt-4 leading-tight text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1vw,45px)] text-wrap font-[TTChocolatesMedium] font-normal">
                    {card.title}
                  </h3>
                  <h3 className="text-[#4E4E4E] px-4 mt-2 text-[clamp(10px,3.8vw,30px)] md:text-[clamp(10px,1vw,45px)] leading-tight text-wrap font-[TTChocolates] font-normal">
                    {card.description}
                  </h3>
                </div>
                {whyData.length - 1 != index && index != 3 && (
                  <div className="bg-[#4E4E4E] border-dotted h-[1px] w-[calc(100%-32px)] md:w-[1px] md:h-auto mx-auto mt-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[95%] mx-auto pt-6 md:pt-[3%]  h-full">
          <div className="relative w-full h-full rounded-xl overflow-hidden z-20">
            <Image
              src={cuttingEdgeBackground}
              alt=""
              className="w-full absolute -z-10 h-full object-cover"
            />
            <div className="py-8 md:py-[4%] flex flex-col  gap-8 items-center">
              <h8 className="text-white px-4 text-center text-[clamp(10px,5.5vw,50px)] leading-tight md:text-[clamp(10px,2.5vw,45px)] font-[CarotSlab] font-medium">
                Specializations Offered
              </h8>
              {department && (
                <div className="flex justify-center flex-wrap gap-4 gap-y-8 w-[90%] mx-auto">
                  {department.map((card, index) => (
                    <div
                      key={index}
                      className="w-full md:w-[calc(25%-1rem)] items-start justify-start flex"
                    >
                      <div className="flex gap-6 justify-start items-center w-full h-full">
                        <Image
                          src={card.icon}
                          alt=""
                          className="bg-white p-2 w-[65px] aspect-square rounded-xl"
                        />
                        <h3 className="text-[#FFFFFF] leading-tight text-[clamp(10px,4.2vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-wrap font-[TTChocolates] font-normal">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <TableProgram
          selectedCard1={
            <>
              <span className="font-[Arapey] pb-[1%] leading-tight">
                Admission Eligibility
              </span>
              <ul className="list-disc ml-5 font-[TTChocolates] leading-tight text-[clamp(10px,4vw,30px)] md:text-[clamp(10px,1.1vw,45px)] text-[#353535]">
                <li>
                  <strong>Duration:</strong> 2 years (4 semesters).
                </li>
                <li>
                  <strong>Eligibility:</strong> B.Tech/B.E. in a relevant field
                  with qualifying entrance exam scores (GATE or
                  university-specific tests).
                </li>
                <li>
                  <strong>Mode:</strong> Full-time.
                </li>
              </ul>
            </>
          }
        />
        <DownloadFeeStructure pdf={MTechFee} />
        <div className="pt-8 md:pt-[3%]"></div>
        <Footer color={true} />
      </body>
    </>
  );
}

export default MTech;
