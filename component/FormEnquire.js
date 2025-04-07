"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import "react-phone-input-2/lib/style.css";
import { cities, courses, specializations, state } from "@/data/courses";
import axios from "axios";
import OtpInput from "react-otp-input";
import { ThreeDots } from "react-loader-spinner";
import { UtmContext } from "./utmParams";
import formPopupbackground from "../public/Homepage/aboutTulas/formPopup.png";
function FormEnquire({ formPopup }) {
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
  const [verified, setVerified] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(30); // Timer for the Resend OTP button
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCourseChange = (e) => {
    const selectedCourseId = e.target.value; // Ensure it's an integer
    setFormData((prev) => ({
      ...prev,
      Course: Number(selectedCourseId),
      Center: "", // Reset Center if Course changes
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
    setPhoneNumber(number);
    setFormData({
      ...formData,
      MobileNumber: `${countryCode}${number}`,
    });
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
    if (isOtpSent || formPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOtpSent, formPopup]);

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
        ? utmCampaign || "Enquire Now Ads"
        : "Enquire Now Organic",
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
        window.location.href = `/admission-thank-you/${utmParams}`;
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
    <div className="w-full h-full">
      {isOtpSent && (
        <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center flex-col">
          <div
            className="w-full h-screen bg-black bg-opacity-50 pointer-events-auto z-10 absolute"
            onClick={() => setIsOtpSent(false)}
          ></div>
          <div className="p-8 rounded-2xl pointer-events-auto z-20 overflow-hidden relative">
            <Image
              src={formPopupbackground}
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
              {timer > 0 && <p className="text-[15px]">{`${timer} Seconds`}</p>}
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
      <form
        className="w-full h-full rounded-2xl overflow-hidden bg-white px-5"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-[#404040] text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.5vw,45px)] w-full py-6">
          Enquire Now
        </h3>
        <input
          type="text"
          placeholder="Enter Student Full Name*"
          value={formData.FirstName}
          onChange={(e) => handleChange("FirstName", e.target.value)}
          required
          className="px-5 py-2 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#760135] text-[#4B4B4B] placeholder:text-[#4B4B4B] disabled:opacity-100 disabled:cursor-not-allowed mb-2"
        />
        <input
          type="Email"
          placeholder="Enter Email Id*"
          value={formData.Email}
          onChange={(e) => handleChange("Email", e.target.value)}
          required
          className="px-5 py-2 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#760135] text-[#4B4B4B] placeholder:text-[#4B4B4B] disabled:opacity-100 disabled:cursor-not-allowed mb-2"
        />
        <div className="w-full flex flex-col md:flex-row gap-2 mb-2">
          <div className="flex w-full">
            <select
              value={countryCode}
              disabled={verified}
              onChange={handleCountryCodeChange}
              className="w-14 h-[42px] text-center focus:outline-none bg-[#F4F4F4] border-b-2 border-[#760135] text-[#4B4B4B] placeholder:text-[#4B4B4B]"
            >
              <option value="91">{`+${getCountryCallingCode("IN")}`}</option>
              {getCountries()
                .filter((country) => country !== "IN") // Exclude India from the mapped options
                .map((country) => (
                  <option key={country} value={getCountryCallingCode(country)}>
                    {`(+${getCountryCallingCode(country)})`}
                  </option>
                ))}
            </select>
            <input
              type="text"
              required
              disabled={verified}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your Mobile No...."
              className={`py-2 focus:outline-none w-full bg-[#F4F4F4] border-b-2 border-[#760135] text-[#4B4B4B] disabled:opacity-100 disabled:cursor-not-allowed placeholder:text-[#4B4B4B]`}
            />
          </div>
          <button
            type="button"
            disabled={verified || !/^\d{6,15}$/.test(formData.MobileNumber)}
            onClick={sendOtp}
            className="min-w-[140px] w-full md:w-[40%] bg-black border-b-2 border-black flex items-center justify-center md:px-4 h-10 font-bold text-[#FFFFFF] cursor-pointer disabled:opacity-100 disabled:cursor-not-allowed"
          >
            {verified ? "Verified" : "Send OTP"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <select
            value={formData.State}
            onChange={handleStateChange}
            required
            className="w-full md:w-1/2 classics px-5 py-2 h-10 border-b-2 border-[#760135] focus:outline-none text-[#4B4B4B] bg-[#F4F4F4] placeholder:text-[#4B4B4B]"
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
            className="w-full md:w-1/2 classics disabled:opacity-100 disabled:cursor-not-allowed px-5 py-2 h-10 border-b-2 border-[#760135] focus:outline-none text-[#4B4B4B] bg-[#F4F4F4] placeholder:text-[#4B4B4B]"
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
            className="w-full md:w-1/2 classics px-5 py-2 h-10 border-b-2 border-[#760135] focus:outline-none text-[#4B4B4B] bg-[#F4F4F4] placeholder:text-[#4B4B4B]"
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
            className="w-full md:w-1/2 classics disabled:opacity-100 disabled:cursor-not-allowed px-5 py-2 h-10 border-b-2 border-[#760135] focus:outline-none text-[#4B4B4B] bg-[#F4F4F4] placeholder:text-[#4B4B4B]"
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
            className="flex items-center text-[#4B4B4B] cursor-pointer text-[clamp(5px,3vw,30px)] md:text-[clamp(6px,0.8vw,45px)]"
          >
            I Agree to receive information regarding my submitted application by
            signing up on Tula's Institute
          </label>
        </div>

        <button
          type="submit"
          disabled={!verified}
          title={verified ? "" : "Please Verify Mobile Number"}
          className={`w-full bg-[#760135] text-white cursor-pointer py-2 disabled:opacity-100 disabled:cursor-not-allowed font-semibold mb-10`}
        >
          Submit
        </button>
      </form>
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

export default FormEnquire;
