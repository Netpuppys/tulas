"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import OtpInput from "react-otp-input";
import { ThreeDots } from "react-loader-spinner";
import { getCountryCallingCode } from "react-phone-number-input/input";

import { specializations, state } from "@/data/courses";
import { UtmContext } from "@/component/utmParams";

function FormLandingPage({ course, thankYOu, showCourse = false }) {
  const { utmParams } = useContext(UtmContext);
  const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none";
  const [formData, setFormData] = useState({
    AuthToken: "TULAS-27-12-2023",
    Source: "tulas",
    FirstName: "",
    Email: "",
    MobileNumber: "+91",
    LeadSource: 144,
    LeadCampaign: "",
    LeadChannel: 7,
    Course: course,
    Center: "",
    State: "",
  });

  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [countryCode, setCountryCode] = useState(getCountryCallingCode("IN")); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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
    setIsPhoneValid(number.length === 10 && /^\d+$/.test(number));
    setFormData({
      ...formData,
      MobileNumber: `+${countryCode}${number}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://thirdpartyapi.extraaedge.com/api/SaveRequest", formData)
      .then(() => {
        setLoading(false);
        window.location.href = thankYOu;
      })
      .catch(() => setLoading(false));
  };

  /* ---------------- OTP ---------------- */
  const sendOtp = () => {
    setLoading(true);
    axios
      .post("https://otp.tulas.edu.in/send-otp", {
        mobileNumber: formData.MobileNumber,
        message:
          "Hello, ##OTP## is your One Time Password(OTP) for Tulas University.",
        authkey: "412590AKveCHLSBnd4658bcea0P1",
      })
      .then(() => {
        setIsOtpSent(true);
        setTimer(30);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const verifyOtp = () => {
    setLoading(true);
    axios
      .post("https://otp.tulas.edu.in/verify-otp", {
        mobileNumber: formData.MobileNumber,
        otp,
        authkey: "412590AKveCHLSBnd4658bcea0P1",
      })
      .then(() => {
        setVerified(true);
        setIsOtpSent(false);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Wrong OTP entered");
        setLoading(false);
      });
  };

  const resendOtp = () => {
    setLoading(true);
    axios
      .post("https://otp.tulas.edu.in/retry-otp", {
        mobileNumber: formData.MobileNumber,
        authkey: "412590AKveCHLSBnd4658bcea0P1",
      })
      .then(() => {
        setTimer(30);
        setMessage("");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-[95%] md:w-[720px] bg-white rounded-2xl border-t-[6px] border-orange-500 shadow-xl px-6 md:px-10 py-8">
        <h3 className="text-center text-2xl md:text-3xl font-semibold mb-6">
          <span className="text-orange-500">Apply</span>{" "}
          <span className="text-gray-800">Now</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
  {/* Full Name */}
  <input
    className={inputClass}
    placeholder="Enter Your Full Name*"
    required
    onChange={(e) => handleChange("FirstName", e.target.value)}
  />

  {/* Email */}
  <input
    className={inputClass}
    type="email"
    placeholder="Enter Your Email Address*"
    required
    onChange={(e) => handleChange("Email", e.target.value)}
  />

  {/* Mobile + OTP */}
<div className="flex flex-col xl:flex-row gap-3">
  {/* Country code + mobile */}
<div className="flex w-full items-center gap-3">
  {/* Country code + mobile */}
  <div className="flex flex-1 overflow-hidden rounded-lg border border-gray-300 focus-within:border-orange-500">
    <select
      value={countryCode}
      disabled={verified}
      onChange={handleCountryCodeChange}
      className="
        w-16
        bg-white
        text-gray-700
        text-sm
        text-center
        outline-none
        border-r
        border-gray-300
        disabled:opacity-100
      "
    >
      <option value="91">{`+${getCountryCallingCode("IN")}`}</option>
      <option value="977">{`+${getCountryCallingCode("NP")}`}</option>
    </select>

    <input
      type="tel"
      required
      disabled={verified}
      value={phoneNumber}
      maxLength={10}
      onChange={handlePhoneNumberChange}
      placeholder="Mobile Number*"
      className="
        w-full
        px-4
        py-3
        outline-none
        text-gray-800
        placeholder:text-gray-400
        disabled:opacity-100
        disabled:cursor-not-allowed
      "
    />
  </div>

  {/* Send OTP */}
  <button
    type="button"
    disabled={verified || !isPhoneValid}
    onClick={sendOtp}
    className="
      min-w-[120px]
      bg-black
      text-white
      py-3
      rounded-lg
      font-medium
      hover:bg-gray-900
      disabled:opacity-50
      disabled:cursor-not-allowed
      whitespace-nowrap
    "
  >
    {verified ? "Verified" : "Send OTP"}
  </button>
</div>

  {/* Send OTP */}
  {/* <button
    type="button"
    disabled={verified || !isPhoneValid}
    onClick={sendOtp}
    className="
      xl:w-[40%]
      w-full
      bg-black
      text-white
      py-3
      rounded-lg
      font-medium
      hover:bg-gray-900
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    {verified ? "Verified" : "Send OTP"}
  </button> */}
</div>

  {/* State */}
  <select
    className={inputClass}
    required
    onChange={(e) => handleChange("State", e.target.value)}
  >
    <option value="">Select State*</option>
    {state.map((s) => (
      <option key={s.id} value={s.id}>
        {s.name}
      </option>
    ))}
  </select>

  {/* Specialization */}
  <select
    className={inputClass}
    required
    onChange={(e) => handleChange("Center", e.target.value)}
  >
    <option value="">Select Specialization*</option>
    {specializations[course]?.map((s) => (
      <option key={s.id} value={s.id}>
        {s.name}
      </option>
    ))}
  </select>

  {/* Submit */}
  <button
    disabled={!verified}
    className="
      w-full
      mt-6
      bg-orange-500
      hover:bg-orange-600
      transition
      text-white
      py-2
      rounded-xl
      font-semibold
      text-lg
      disabled:opacity-50
    "
  >
    Submit
  </button>
</form>
      </div>

      {/* OTP MODAL */}
      {isOtpSent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
           <OtpInput
  value={otp}
  onChange={(val) => setOtp(val)}
  numInputs={4}
  isInputNum
  renderInput={(props) => (
    <input
      {...props}
      style={{
        width: "48px",
        height: "48px",
        margin: "0 6px",
        fontSize: "18px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        textAlign: "center",
      }}
    />
  )}
/>

            <div className="flex justify-between mt-3">
              <button
                disabled={timer !== 0}
                onClick={resendOtp}
                className="text-orange-500"
              >
                Resend OTP
              </button>
              {timer > 0 && <span>{timer}s</span>}
            </div>

            <button
              onClick={verifyOtp}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <ThreeDots color="#fff" />
        </div>
      )}
    </div>
  );
}

export default FormLandingPage;