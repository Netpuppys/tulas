"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import formBanner from "../../public/Homepage/aboutTulas/formBanner.png";
import { cities, courses, specializations, state } from "@/data/courses";
import axios from "axios";
import formPopup from "../../public/Homepage/aboutTulas/formPopup.png";
import OtpInput from "react-otp-input";
import { ThreeDots } from "react-loader-spinner";
const aboutTulas = (
  <>
    Tula's Institute is dedicated to providing top-notch education, preparing
    students for success in their professional careers.
    <br />
    This commitment to excellence has earned Tula’s Institute prestigious
    accolades:
    <br />
    <br />
    <ul className="list-disc ml-5">
      <li>
        Ranked among the Top 50 Private Colleges in India for eight consecutive
        years (2016–2024)
      </li>
      <li>
        Secured a spot in the Top 20 Private Engineering Colleges of North India
        for the past three years, as per The Times of India Engineering Survey
      </li>
      <li>
        Awarded an AA+ rating by Career360, cementing its reputation as a
        leading educational institution
      </li>
    </ul>
  </>
);

function AboutTulas() {
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
    axios
      .post("https://thirdpartyapi.extraaedge.com/api/SaveRequest", formData)
      .then(() => {
        setLoading(false);
        alert("Enquiry Submitted Successfully");
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
    <div
      id="2"
      className="bg-[#3d001b] flex flex-col-reverse md:flex-row  md:gap-0 relative justify-between px-4 md:px-8 py-8 lg:px-24 md:py-10 items-center"
    >
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
            <h3 className="text-white z-20 text-2xl font-[TTChocolatesBold] font-bold mb-1">
              Verify Mobile Number
            </h3>
            <h4 className="max-w-[415px] text-[15px] font-[TTChocolatesBold] ">
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
                className="bg-[#3D001B] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed text-[15px] font-[TTChocolatesBold] px-4 py-1 my-2"
                onClick={resendOtp}
                disabled={timer !== 0} // Disable resend if cooldown is active
              >
                Resend OTP
              </button>
              {timer > 0 && <p className="text-[15px]">{`${timer} Seconds`}</p>}
            </div>
            <button
              onClick={verifyOtp}
              className="text-[#3D001B] bg-white w-full rounded-md text-2xl font-[TTChocolatesBold] py-1"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <div className="w-full px-6 md:px-0 md:w-[50%] py-10 md:py-20">
        <h3 className="text-[#fff] font-[TTChocolates] text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] ml-0 mr-auto">
          {aboutTulas}
        </h3>
      </div>
      <div className="w-full md:w-[50%] py-8 md:py-5 flex flex-col justify-center items-center">
        <div className="max-w-[478px] w-full bg-[#D9d9d9] overflow-hidden bg-opacity-20 backdrop-blur-xl h-fit mx-auto border-2 border-white rounded-2xl">
          <form
            className="w-full h-full bg-black bg-opacity-25 px-5"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center text-white text-[clamp(18px,1.3vw,45px)] w-full py-10 pb-6">
              Enquire Now
            </h3>
            <input
              type="text"
              placeholder="Enter Student Full Name*"
              value={formData.FirstName}
              onChange={(e) => handleChange("FirstName", e.target.value)}
              required
              className="w-full px-5 py-3 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9] mb-3"
            />
            <input
              type="Email"
              placeholder="Enter Email Id*"
              value={formData.Email}
              onChange={(e) => handleChange("Email", e.target.value)}
              required
              className="w-full px-5 py-3 text-base border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9] mb-3"
            />
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
                  backgroundColor: "#007A83",
                  padding: "1.50rem 3.25rem",
                  color: "#D9D9D9",
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
              <button
                type="button"
                disabled={verified || !isPhoneValid}
                onClick={sendOtp}
                className={`w-full xl:w-[40%] bg-white rounded-[3px] flex items-center justify-center md:px-4 py-3 font-bold text-[#007A83] ${
                  isPhoneValid && !verified
                    ? "cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                {verified ? "Verified" : "Send OTP"}
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <select
                value={formData.State}
                onChange={handleStateChange}
                required
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#D9D9D9] bg-[#007A83] placeholder:text-[#D9D9D9]"
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
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#D9D9D9] bg-[#007A83] placeholder:text-[#D9D9D9]"
                disabled={!formData.State}
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
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <select
                value={formData.Course}
                onChange={handleCourseChange}
                required
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#D9D9D9] bg-[#007A83] placeholder:text-[#D9D9D9]"
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
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#D9D9D9] bg-[#007A83] placeholder:text-[#D9D9D9]"
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

            <div className="flex items-center justify-center gap-4 mb-3">
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
                className="flex items-center cursor-pointer text-sm"
              >
                I Agree to receive information regarding my submitted
                application by signing up on Tula's Institute
              </label>
            </div>

            <button
              type="submit"
              disabled={!verified}
              title={verified ? "" : "Please Verify Mobile Number"}
              className={`w-full bg-white text-[#007A83] cursor-pointer py-3 rounded-[3px] disabled:opacity-60 disabled:cursor-not-allowed font-semibold mb-10`}
            >
              Submit
            </button>
          </form>
        </div>
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

export default AboutTulas;
