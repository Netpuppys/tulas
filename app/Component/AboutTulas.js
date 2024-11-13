"use client";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import deleteForm from "../../public/admissions/deleteForm.png";
import formBanner from "../../public/Homepage/aboutTulas/formBanner.png";

const aboutTulas = (
  <>
    Tulas Institute was established in 2006, under the aegis of Rishabh
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
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    course: "",
    specialization: "",
    agreeToTerms: false,
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: !prev.agreeToTerms,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div
      id="2"
      className="bg-transparent flex flex-col-reverse md:flex-row gap-8 md:gap-0 relative justify-between px-8 lg:px-24 py-20 items-center"
    >
      <div className="w-full md:w-[50%] py-8 md:py-20">
        <h3 className="text-[#fff] font-[TTChocolates] font-semibold text-[clamp(18px,1.3vw,45px)] ml-0 mr-auto">
          {aboutTulas}
        </h3>
      </div>
      <div className="w-full md:w-[50%] py-8 md:py-20 flex flex-col justify-center items-center">
        <div className="max-w-[478px] w-full bg-[#D9d9d9] bg-opacity-20 backdrop-blur-xl h-fit mx-auto border-2 border-white rounded-3xl">
          <form
            className="w-full h-full bg-black bg-opacity-25 px-5"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center text-white text-[clamp(18px,1.3vw,45px)] w-full py-6">
              Enquire Now
            </h3>
            <input
              type="text"
              placeholder="Enter Student Full Name*"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full px-5 py-3 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9] mb-2"
            />
            <input
              type="email"
              placeholder="Enter Email Id*"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full px-5 py-3 text-base border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9] mb-2"
            />
            <div className="mb-2 flex gap-2">
              <PhoneInput
                country={"in"}
                value={formData.mobile}
                onChange={(value) => handleChange("mobile", value)}
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
                  color: "black", // Flag icon color
                }}
              />
              <div className="w-[40%] bg-white rounded-[3px] text-[#007A83] cursor-pointer flex items-center justify-center">
                Send OTP
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <select
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="select-custom w-1/2 px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9]"
              >
                <option value="">Select State</option>
                {/* Add options */}
              </select>
              <select
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="select-custom w-1/2 px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9]"
              >
                <option value="">Select City</option>
                {/* Add options */}
              </select>
            </div>
            <div className="flex gap-2 mb-2">
              <select
                value={formData.course}
                onChange={(e) => handleChange("course", e.target.value)}
                className="select-custom w-1/2 px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9]"
              >
                <option value="">Select Course</option>
                {/* Add options */}
              </select>
              <select
                value={formData.specialization}
                onChange={(e) => handleChange("specialization", e.target.value)}
                className="select-custom w-1/2 px-5 py-3 h-12 border-none focus:outline-none rounded-[3px] text-white bg-[#007A83] placeholder:text-[#D9D9D9]"
              >
                <option value="">Select Specialization</option>
                {/* Add options */}
              </select>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <input
                id="consent1"
                type="checkbox"
                name="consent1"
                className=""
                value="no"
                required
                selected={formData.agreeToTerms === "yes"}
                onChange={handleCheckboxChange}
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
              className="w-full bg-white text-[#007A83] py-3 rounded-[3px] font-semibold mb-6"
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
