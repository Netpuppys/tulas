"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import "react-phone-input-2/lib/style.css";
import { cities, courses, specializations, state } from "@/data/courses";
import axios from "axios";
import formPopupBackground from "../../../public/Homepage/aboutTulas/formPopup.png";
import OtpInput from "react-otp-input";
import { ThreeDots } from "react-loader-spinner";
import { UtmContext } from "@/component/utmParams";

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1: Deploy Apps Script as a Web App, then paste the full URL below.
//
// The URL looks like:
//   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXX/exec
//                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                                        this whole URL goes below — don't trim it
// ─────────────────────────────────────────────────────────────────────────────
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxOjE3JEAJlP7dbj8ASMBvCJvbHYj2jDtpcDQ95mWFBZKFMR-xVFNfn4K1A4Me2nMIEOw/exec";

export default function LandingFormNew() {
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
      LeadSource: utmParams ? utmSource || 144 : 25,
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

    // ─── PRIMARY: Post to CRM ────────────────────────────────────────────────
    const crmPost = axios.post(
      "https://publisher.extraaedge.com/api/Webhook/addPublisherLead",
      updatedFormData
    );

    // ─── BACKUP: Post to Google Sheets (silent fail — never blocks the form) ─
    // Prepare human-readable values for Google Sheets only
    const selectedCourse =
      courses.find((c) => c.id === Number(updatedFormData.Course))?.name || "";

    const selectedCenter =
      specializations[updatedFormData.Course]?.find(
        (s) => s.id === Number(updatedFormData.Center)
      )?.name || "";

    const selectedState =
      state.find((s) => s.id === Number(updatedFormData.State))?.name || "";

    const selectedCity =
      cities[updatedFormData.State]?.find(
        (c) => c.id === Number(updatedFormData.City)
      )?.name || "";

    const sheetsData = {
      ...updatedFormData,
      Course: selectedCourse,
      Center: selectedCenter,
      State: selectedState,
      City: selectedCity,
    };

    // Google Sheets backup
    const sheetsBackup = fetch(SHEETS_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(sheetsData),
    }).catch((err) => console.warn("Sheets backup failed:", err));

    // Wait for both, but only CRM failure should alert the user
    Promise.all([crmPost, sheetsBackup])
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
        window.location.href = `/admissions-open/thank-you${utmParams}`;
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
      .post("https://otp.tulas.edu.in/verify-otp", {
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
      .post("https://otp.tulas.edu.in/retry-otp", {
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
    <div
      id="2"
      className="flex flex-col-reverse md:flex-row md:gap-[10%] relative px-4 py-8 md:px-[10%] md:py-[5%] justify-between items-center"
    >
      {isOtpSent && (
        <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center flex-col">
          <div
            className="w-full h-screen bg-black bg-opacity-50 pointer-events-auto z-10 absolute"
            onClick={() => setIsOtpSent(false)}
          ></div>
          <div className="p-8 rounded-2xl pointer-events-auto z-20 overflow-hidden relative">
            <Image
              src={formPopupBackground}
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

      <div className="w-full md:w-[100%]  flex flex-col justify-center items-center">
        <div className="w-full max-w-[500px] bg-white backdrop-blur-xl h-fit mx-auto rounded-2xl">
          <form
            className="w-full h-full rounded-2xl overflow-hidden px-5  rounded-2xl border-t-[6px] border-orange-500 shadow-md"
            onSubmit={handleSubmit}
          >
            {/* <h3 className="text-center text-black text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.5vw,45px)] w-full py-6">
              Enquire Now
            </h3> */}
            <h3 className="text-[clamp(20px,6vw,26px)] text-center font-semibold mb-3 pt-6">
          <span className="text-orange-500 ">Enquire</span>{" "}
          <span className="text-gray-800 font-medium">Now</span>
        </h3>
            <input
              type="text"
              placeholder="Enter Student Full Name*"
              value={formData.FirstName}
              onChange={(e) => handleChange("FirstName", e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 focus:outline-none rounded-[10px] text-gray-500 bg-[#FFFFFF] placeholder:text-gray-500 placeholder:opacity-60 mb-3"
            />
            <input
              type="Email"
              placeholder="Enter Email Id*"
              value={formData.Email}
              onChange={(e) => handleChange("Email", e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 focus:outline-none rounded-[10px] text-gray-500 bg-[#FFFFFF] placeholder:text-gray-500 placeholder:opacity-60 mb-3"
            />
            <div className="w-full flex flex-col md:flex-row gap-2 mb-2">
              <div className="flex w-full">
                <select
                  value={countryCode}
                  disabled={verified}
                  onChange={handleCountryCodeChange}
                  className="w-14 py-3 h-full text-center border border-gray-300 focus:outline-none bg-[#FFFFFF] text-gray-500 placeholder:text-gray-500 rounded-[10px]"
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
                  type="tel"
                  maxLength={10}
                  required
                  disabled={verified}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your Mobile No...."
                  className={`py-3 mx-1 px-1 focus:outline-none w-full bg-[#FFFFFF] border border-gray-300 text-gray-500 disabled:opacity-100 disabled:cursor-not-allowed placeholder:text-gray-500 rounded-[10px]`}
                />
              </div>
              <button
                type="button"
                disabled={verified || !/^\d{6,15}$/.test(formData.MobileNumber)}
                onClick={sendOtp}
                className="w-full xl:w-[40%] bg-black rounded-[10px] flex items-center justify-center xl:px-4 py-2 font-bold text-white"
              >
                {verified ? "Verified" : "Send OTP"}
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mb-2">
              <select
                value={formData.State}
                onChange={handleStateChange}
                required
                className="w-full md:w-1/2 classics px-5 py-3 border border-gray-300 focus:outline-none rounded-[10px] text-gray-500 bg-[#FFFFFF] placeholder:text-gray-500 placeholder:opacity-60"
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
                className="w-full md:w-1/2 classics disabled:opacity-100 disabled:cursor-not-allowed px-5 py-3 border border-gray-300 focus:outline-none rounded-[10px] text-gray-500 bg-[#FFFFFF] placeholder:text-gray-500 placeholder:opacity-60"
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
                className="w-full md:w-1/2 classics px-5 py-3 border border-gray-300 focus:outline-none rounded-[10px] text-gray-500 bg-[#FFFFFF] placeholder:text-gray-500 placeholder:opacity-60"
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
                className="w-full md:w-1/2 classics disabled:opacity-100 disabled:cursor-not-allowed px-5 py-3 border border-gray-300 focus:outline-none rounded-[10px] text-gray-500 bg-[#FFFFFF] placeholder:text-gray-500 placeholder:opacity-60"
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
                className="flex items-center text-gray-800 cursor-pointer text-[clamp(5px,3vw,30px)] md:text-[clamp(6px,0.8vw,45px)]"
              >
                I Agree to receive information regarding my submitted
                application by signing up on Tulas Institute
              </label>
            </div>

            <button
              type="submit"
              disabled={!verified}
              title={verified ? "" : "Please Verify Mobile Number"}
              className={`w-full bg-orange-500 text-white cursor-pointer py-2 disabled:opacity-100 disabled:cursor-not-allowed font-semibold mb-10 rounded-[10px]`}
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
