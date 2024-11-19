"use client";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import formBanner from "../../public/Homepage/aboutTulas/formBanner.png";
import { cities, courses, specializations, state } from "@/data/courses";
import axios from "axios";

const aboutTulas = (
  <>
    Tula's Institute was established in 2006, under the aegis of Rishabh
    Educational Trust, Dehradun with the vision of offering excellent academics
    along with fostering the professional and personal personas of every student
    of the institute. Tula’s Institute is dedicated to serve the communities by
    recognizing the diverse needs of individuals.
    <br />
    <br />
    With this vision, Tula’s Institute has been ranked in Top 50 Private
    Engineering college of India for the last 6 years consecutively (from
    2016-2021) and also has been ranked in Top 20 Private Engineering college of
    North India for the past 3 years by “The Times of India-Engineering Survey”,
    ranked AA+ by “Career 360”.
  </>
);

function AboutTulas() {
  const [formData, setFormData] = useState({
    AuthToken: "TULAS-27-12-2023",
    Source: "tulas",
    FirstName: "",
    Email: "",
    MobileNumber: "",
    LeadSource: "25",
    LeadChannel: "2",
    Course: "",
    Center: "",
    State: "",
    City: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(formData);
    if (key === "MobileNumber") {
      setIsPhoneValid(value.length >= 10 && /^\d+$/.test(value)); // Example validation for length and digits only
    }
  };

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setFormData((prev) => ({
      ...prev,
      Course: selectedCourse,
      Center: "",
    }));
  };
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({
      ...prev,
      State: selectedState,
      City: "",
    }));
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post(
        "http://api.msg91.com/api/sendotp.php",
        {
          authkey: "412590AKveCHLSBnd4658bcea0P1", // Replace with your MSG91 Auth Key
          mobile: formData.MobileNumber,
          message: `Hello, ##OTP## is your One Time Password(OTP) forTulas This OTP is valid till 3mins Tulas.`, // Replace with your SMS template
          sender: "TULASD", // Replace with your MSG91 Sender ID
          otp_expiry: "3",
          DLT_TE_ID: "1007161822185716704", // Replace with your DLT Template ID
        }
      );
      if (response.data.type === "success") {
        setIsOtpSent(true);
        setMessage("OTP sent successfully!");
      } else {
        setMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error while sending OTP.");
      console.error(error);
    }
    //   axios.post("http://api.msg91.com/api/sendotp.php",
    //       {
    //         authkey: "412590AKveCHLSBnd4658bcea0P1", // Replace with your MSG91 Auth Key
    //         mobile: formData.MobileNumber,
    //         message: `Hello, ##OTP## is your One Time Password (OTP) for Tulas. This OTP is valid for 3 minutes.`, // Replace with your SMS template
    //         sender: "TULASD", // Replace with your MSG91 Sender ID
    //         otp_expiry: "3",
    //         DLT_TE_ID: "1007161822185716704", // Replace with your DLT Template ID
    //       })
    //       .then(res => console.log(res))
    //       .catch(err => console.error(err))
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.get(
        `https://control.msg91.com/api/v5/otp/verify?mobile=${formData.MobileNumber}&otp=${otp}`,
        {
          headers: { authkey: "412590AKveCHLSBnd4658bcea0P1" }, // Replace with your MSG91 Auth Key
        }
      );
      if (response.data.type === "success") {
        setMessage("OTP verified successfully!");
      } else {
        setMessage("OTP verification failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error while verifying OTP.");
      console.error(error);
    }
  };

  const resendOtp = async () => {
    try {
      const response = await axios.get(
        `https://control.msg91.com/api/v5/otp/retry?retrytype=text&mobile=${formData.MobileNumber}&authkey=412590AKveCHLSBnd4658bcea0P1`
      );
      if (response.data.type === "success") {
        setMessage("OTP resent successfully!");
      } else {
        setMessage("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error while resending OTP.");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div
      id="2"
      className="bg-transparent flex flex-col-reverse md:flex-row  md:gap-0 relative justify-between px-4 md:px-8 py-8 lg:px-24 md:py-20 items-center"
    >
      <div className="w-full px-6 md:px-0 md:w-[50%] py-10 md:py-20">
        <h3 className="text-[#fff] text-justify font-[TTChocolates] font-semibold text-[clamp(15px,4.5vw,30px)] md:text-[clamp(18px,1.3vw,45px)] ml-0 mr-auto">
          {aboutTulas}
        </h3>
      </div>
      <div className="w-full md:w-[50%] py-8 md:py-20 flex flex-col justify-center items-center">
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
            <div className="mb-3 flex gap-3">
              <PhoneInput
                country={"in"}
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
                  borderRadius: "0.375rem",
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
                disabled={!isPhoneValid}
                onClick={sendOtp}
                className={`w-[40%] bg-[#007A83] rounded-[3px] flex items-center justify-center px-4 py-3 font-bold text-white ${
                  isPhoneValid
                    ? " cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                Send OTP
              </button>
            </div>
            {isOtpSent && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-5 py-3 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9] mb-3"
              />
            )}
            {isOtpSent && (
              <div className="flex gap-3">
                <button
                  type="button"
                  className="bg-[#007A83] text-white px-5 py-3 rounded-[3px]"
                  onClick={verifyOtp}
                >
                  Verify OTP
                </button>
                <button
                  type="button"
                  className="bg-[#007A83] text-white px-5 py-3 rounded-[3px]"
                  onClick={resendOtp}
                >
                  Resend OTP
                </button>
              </div>
            )}
            {message && <p className="text-white mt-3">{message}</p>}
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <select
                value={formData.State}
                onChange={handleStateChange}
                className="w-full md:w-1/2 classic px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-[#D9D9D9] bg-[#007A83] placeholder:text-[#D9D9D9]"
              >
                <option value="">Select State</option>
                {state
                  .slice() // create a shallow copy to avoid modifying the original array
                  .sort((a, b) => a.name.localeCompare(b.name)) // sort by name alphabetically
                  .map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
              </select>
              <select
                value={formData.City}
                onChange={(e) => handleChange("City", e.target.value)}
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
                onChange={(e) => handleChange("Center", e.target.value)}
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
              className="w-full bg-white text-[#007A83] py-3 rounded-[3px] font-semibold mb-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* bg image */}
      <Image
        src={formBanner}
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
        alt="Form background image"
      />
    </div>
  );
}

export default AboutTulas;
