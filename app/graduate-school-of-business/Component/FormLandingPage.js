"use client";
import React, { useContext, useEffect, useState } from "react";
import mba from "../../../public/graduate-school-of-business/mba/mba.png";
import tulasLogo from "../../../public/graduate-school-of-business/mba/tulasLogo.png";
import Image from "next/image";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import { cities, courses, specializations, state } from "@/data/courses";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import formPopup from "../../../public/Homepage/aboutTulas/formPopup.png";
import OtpInput from "react-otp-input";
import { ThreeDots } from "react-loader-spinner";
import { UtmContext } from "@/component/utmParams";
function FormLandingPage({ course, thankYOu }) {
  const {utmParams} = useContext(UtmContext);
  const [formData, setFormData] = useState({
    AuthToken: "TULAS-27-12-2023",
    Source: "tulas",
    FirstName: "",
    Email: "",
    MobileNumber: "+91",
    LeadSource: 52,
    LeadCampaign: "",
    LeadChannel: 7,
    Course: course,
    Center: "",
    State: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [verified, setVerified] = useState(false);
  const mobileInputRef = React.useRef(null);
  const [timer, setTimer] = useState(30); // Timer for the Resend OTP button
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "MobileNumber") {
      setIsPhoneValid(value.length >= 10 && /^\d+$/.test(value)); // Example validation for length and digits only
    }
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

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value; // Ensure it's an integer
    setFormData((prev) => ({
      ...prev,
      State: Number(selectedStateId),
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

    // Extract UTM parameters from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmTerm = searchParams.get("utm_term");
    const searchQuery = searchParams.get("search_query");
    // Prepare the form data for submission
    const updatedFormData = {
      ...formData,
      LeadChannel: utmParams ? 7 : 2, 
      LeadSource: utmParams ? utmSource || 52 : 25,
      LeadCampaign: utmParams
          ? utmCampaign || "Landing Page Ads"
          : "Landing Page Organic",
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
        setVerified(false);
        setIsPhoneValid(false);
        setFormData({
          AuthToken: "TULAS-27-12-2023",
          Source: "tulas",
          FirstName: "",
          Email: "",
          MobileNumber: "+91",
          LeadSource: 52,
          LeadCampaign: "",
          LeadChannel: 7,
          Course: course,
          Center: "",
          State: "",
        });
        setOtp("");
        window.location.href = thankYOu;
      })
      .catch((error) => {
        setLoading(false);
        alert.error(error);
      });
  };
  const sendOtp = async () => {
    setLoading(true);
    axios
      .post("https://otp.tulas.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        message:
          "Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.", // Replace with your SMS template
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
      .post("https://otp.tulas.edu.in/verify-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
        otp: otp,
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
      .post("https://otp.tulas.edu.in/retry-otp", {
        mobileNumber: formData.MobileNumber, // Replace with dynamic mobile number
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
    <div className="relative flex pointer-events-none flex-col justify-center items-center w-full md:w-[80%] mx-auto h-full z-20 -mt-[50%] md:-mt-[10%]">
      <div className="w-full flex flex-col justify-center items-center">
        {/* <Image src={mba} className="w-fit h-fit " alt="" />
        <h1 className="font-[MontserratMedium] leading-tight my-4 text-center font-semibold text-[30px] md:text-[clamp(10px,2.5vw,50px)]">
          Get the skills. Gain the edge.
          <br />
          <span className="text-[#007A83]">
            Own the future with an MBA from Tula’s.
          </span>
        </h1> */}
        <div
          style={{ boxShadow: "0px -7px 69.127px 0px rgba(0, 0, 0, 0.25)" }}
          className="flex pointer-events-auto bg-[#3D001B] w-[95%] md:w-full mx-auto z-30 rounded-3xl overflow-hidden"
        >
          <div className="hidden bg-white md:flex flex-col rounded-r-3xl px-7 py-7 pb-4 max-w-[410px]">
            <h3 className="text-[clamp(10px,4.5vw,30px)] md:text-[clamp(10px,1.3vw,45px)] font-[MontserratMedium] text-black">
              Enquire Now
            </h3>
            <p className="text-sm font-[MontserratLight] text-black">
              Subscribe to be notified about our latest endeavours, and your IT
              horizons.
            </p>
            <a
              href="tel:+91-8069204028"
              className="flex text-sm font-[MontserratLight] text-black items-center justify-start mt-4 gap-4"
            >
              <IoCall />
              +91-80692 04028
            </a>
            <a
              href="mailTo:info@tulas.edu.in"
              className="flex text-sm font-[MontserratLight] text-black items-center justify-start mt-4 gap-4"
            >
              <IoMail />
              info@tulas.edu.in
            </a>
            <a
              href="https://www.google.com/maps/place/Tula's+Institute/@30.3430543,77.8834028,17z/data=!3m1!4b1!4m6!3m5!1s0x390929fa74538275:0x3cb757428c691de3!8m2!3d30.3430497!4d77.8859777!16s%2Fm%2F010qjbdj?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="flex text-sm font-[MontserratLight] text-black items-center justify-start mt-4 gap-4"
            >
              <IoLocation className="min-w-[16px] h-[16px]" />
              Tula's Institute, Dhoolkot Near Selaqui, Dhulkot Rd,
              Dehradun, Uttarakhand
            </a>
            <div className="w-full flex justify-end">
              <Image src={tulasLogo} alt="" className="mt-4 max-w-[114px]" />
            </div>
          </div>
          <form className="p-7 w-full" onSubmit={handleSubmit}>
            <h3 className="md:hidden text-center text-white text-[25px] pb-7 w-full">
              Enquire Now
            </h3>
            <div className="md:flex items-center justify-between gap-7">
              <input
                type="text"
                placeholder="Enter Full Name*"
                value={formData.FirstName}
                onChange={(e) => handleChange("FirstName", e.target.value)}
                required
                className="w-full px-5 py-3 border-none focus:outline-none rounded-[3px] text-[#3D001B] bg-[#FFFFFF] placeholder:text-[#3D001B] placeholder:opacity-60 mb-3"
              />
              <input
                type="email"
                placeholder="Enter Email Id*"
                value={formData.Email}
                onChange={(e) => handleChange("Email", e.target.value)}
                required
                className="w-full px-5 py-3 text-base border-none focus:outline-none rounded-[3px] text-[#3D001B] bg-[#FFFFFF] placeholder:text-[#3D001B] placeholder:opacity-60 mb-3"
              />
            </div>
            <div className="mb-3 flex flex-col xl:flex-row gap-3 xl:gap-7">
              <PhoneInput
                ref={mobileInputRef}
                country={"in"}
                disabled={verified}
                value={formData.MobileNumber}
                onChange={(value) => handleChange("MobileNumber", value)}
                placeholder="Enter Mobile No."
                inputProps={{
                  name: "phone",
                  id: "phone",
                  required: true,
                  autoFocus: false,
                }}
                inputStyle={{
                  width: "100%",
                  borderRadius: "3px",
                  border: "none",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  backgroundColor: "#FFFFFF",
                  padding: "1.50rem 3.25rem",
                  color: "#3D001B",
                  outline: "none",
                }}
                containerStyle={{
                  width: "100%",
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  border: "none",
                  width: "40px",
                  color: "black", // Flag icon color
                }}
              />
              {/* <input
                type="tel"
                placeholder="Enter Mobile No."
                value={formData.MobileNumber}
                onChange={(value) => handleChange("MobileNumber", value)}
                required
                className="w-full px-5 py-3 text-base border-none focus:outline-none rounded-[3px] text-[#3D001B] bg-[#FFFFFF] placeholder:text-[#3D001B] placeholder:opacity-60 mb-3"
              /> */}
              <button
                type="button"
                disabled={verified || !isPhoneValid}
                onClick={sendOtp}
                className={`w-full xl:w-[40%] rounded-[3px] flex items-center justify-center md:px-4 py-3 font-bold text-white bg-[#007A83] ${
                  isPhoneValid && !verified
                    ? " cursor-pointer"
                    : "opacity-100 cursor-not-allowed"
                }`}
              >
                {verified ? "Verified" : "Send OTP"}
              </button>
            </div>
            <div className="w-full mb-3">
              <select
                value={formData.State}
                onChange={handleStateChange}
                required
                className="w-full classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#3D001B] bg-[#FFFFFF]"
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
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-7 mb-3">
              <select
                value={formData.Course}
                onChange={handleCourseChange}
                required
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#3D001B] bg-[#FFFFFF]"
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
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#3D001B] bg-[#FFFFFF]"
                disabled={!formData.Course}
              >
                <option value="">Select Specialization</option>
                {formData.Course &&
                  specializations[formData.Course].map((spec, index) => (
                    <option key={index} value={spec.id}>
                      {spec.name}
                    </option>
                  ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={!verified}
              title={verified ? "" : "Please Verify Mobile Number"}
              style={{
                boxShadow:
                  "8.247px 13.401px 25.77px 0px rgba(255, 255, 255, 0.50)",
              }}
              className={`w-full xl:w-[40%] mx-auto bg-white text-[#007A83] cursor-pointer py-3 rounded-[3px] disabled:opacity-100 disabled:cursor-not-allowed font-semibold`}
            >
              Submit
            </button>
          </form>
        </div>
        {isOtpSent && (
          <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center flex-col">
            <div
              className="w-full h-screen pointer-events-auto z-10 absolute bg-black bg-opacity-50"
              onClick={() => setIsOtpSent(false)}
            ></div>
            <div className="p-8 rounded-2xl pointer-events-auto z-20 overflow-hidden relative">
              <Image
                src={formPopup}
                alt=""
                className="absolute top-0 w-full h-full -z-10 left-0 object-cover"
              />
              <h3 className="text-white z-20 text-2xl font-[MontserratMedium] font-bold mb-1">
                Verify Mobile Number
              </h3>
              <h4 className="max-w-[415px] text-[15px] font-[MontserratMedium] ">
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
                  className="bg-[#3D001B] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed text-[15px] font-[MontserratMedium] px-4 py-1 my-2"
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
                className="text-[#3D001B] bg-white w-full rounded-md text-2xl font-[MontserratMedium] py-1"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      {loading && (
        <div className="fixed w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 z-[9999999] flex justify-center items-center">
          <div className="">
            <ThreeDots color="#FFF" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FormLandingPage;
