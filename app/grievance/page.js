"use client";

import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../../public/About/whyTulasBanner.png";
import Footer from "@/component/Footer";
import formBackground from "../../public/grievance/formbackground.jpg";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formTypes = ["Student", "Parent", "Staff"];

const GrievanceForm = ({ formState }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    department: "",
    grievanceType: "",
    message: "",
    evidence: "",
  });
  const [submitLoader, setSubmitLoader] = useState(false);
  const [evidence, setEvidence] = useState();

  const serviceId = "service_jnrgjfb";
  const templateId = "template_27vadyn";
  const publicKey = "o2Jsamn0XRedAmc8d";
  const formRef = useRef();

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 500 * 1024) {
        e.target.value = "";
        alert("File size should be 500KB or less.");
        return;
      }
      const fileType = file.type;
      const validFileTypes = ["application/pdf"];
      if (!validFileTypes.includes(fileType)) {
        e.target.value = "";
        alert("Please upload a PDF file.");
        return;
      }
      handleChange("evidence", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setEvidence(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      e.target.value = "";
      alert("No file selected.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitLoader(true);
    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,
      department: formData.department,
      grievanceType: formData.grievanceType,
      message: formData.message,
      evidence: evidence,
      formTypes: formState,
    };

    emailjs
      .send(serviceId, templateId, emailData, {
        publicKey: publicKey,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert('Message sent successfully!');
        toast.success("Thank you for submitting Grievance.");
        setSubmitLoader(false);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          gender: "",
          department: "",
          grievanceType: "",
          message: "",
          evidence: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error(
          `Message failed to send. Error: ${error.text || error.message}`
        );
        setSubmitLoader(false);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-[60rem] flex flex-col gap-[1.75rem]"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <input
          name="firstName"
          placeholder="First Name"
          type="text"
          required
          className="rounded-lg bg-white border-0 focus:outline w-full md:w-[calc(50%-2rem)] h-14 px-6 text-black font-medium"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-full md:w-[calc(50%-2rem)] h-14 px-6 text-black font-medium"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          type="tel"
          required
          className="rounded-lg bg-white border-0 focus:outline w-full md:w-[calc(50%-2rem)] h-14 px-6 text-black font-medium"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
        />
        <select
          name="gender"
          placeholder="Select"
          className={`rounded-lg bg-white border-0 focus:outline w-full md:w-[calc(50%-2rem)] h-14 px-6 text-black font-medium ${
            !formData.gender ? "text-gray-400" : "text-black"
          }`}
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
        >
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <input
          name="department"
          placeholder="Enter your Department"
          type="text"
          required
          className="rounded-lg bg-white border-0 focus:outline w-full md:w-[calc(50%-2rem)] h-14 px-6 text-black font-medium"
          value={formData.department}
          onChange={(e) => handleChange("department", e.target.value)}
        />
        <select
          name="grievanceType"
          placeholder="Select grievance"
          className={`rounded-lg bg-white border-0 focus:outline w-full md:w-[calc(50%-2rem)] h-14 px-6 text-black font-medium ${
            !formData.grievanceType ? "text-gray-400" : "text-black"
          }`}
          value={formData.grievanceType}
          onChange={(e) => handleChange("grievanceType", e.target.value)}
        >
          <option value="" disabled selected>
            Select Grievance
          </option>
          <option value="Sexual Harassment">Sexual Harassment</option>
          <option value="Mental Harassment">Mental Harassment</option>
          <option value="Ragging">Ragging</option>
          <option value="Fight">Fight</option>
          <option value="Hostel Issues">Hostel Issues</option>
          <option value="Academic Issues">Academic Issues</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Grievance Message-"
        type="text"
        required
        className="rounded-lg py-4 bg-white border-0 focus:outline w-full h-40 px-6 text-black font-medium"
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
      />
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[1.75rem] md:gap-16 md:mt-2">
        <div className="flex max-w-full md:max-w-[40%] items-center md:justify-center gap-6 md:mt-2 relative">
          <div>
            <label className="block mb-2">Evidence</label>
            <div className="w-48 h-8 flex items-center justify-center bg-white rounded-lg relative overflow-hidden">
              <input
                type="file"
                name="evidence"
                required
                // value={formData.evidence}
                className="absolute top-0 -left-28 w-[30rem] scale-150 h-[20rem] z-10 cursor-pointer opacity-0"
                onChange={(e) => handleFileInput(e)}
              />
              <p className="text-[#007A83] text-sm font-medium z-0">
                Choose file
              </p>
            </div>
            <p className="text-sm font-medium">
              {formData.evidence ? formData.evidence.name : "No File Chosen"}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full md:w-[55%] font-[TTChocolatesBold] text-[1.5rem] font-semibold h-14 rounded-lg bg-[#007A83] flex items-center justify-center"
        >
          {submitLoader ? (
            <ThreeDots color="#FFFFFF" height={30} />
          ) : (
            "Submit Grievance"
          )}
        </button>
      </div>
    </form>
  );
};

function Grievance() {
  const formRef = useRef(null);

  const [formState, setFormState] = useState(null);

  useEffect(() => {
    if (formState && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formState]);

  return (
    <div className="w-full h-fit">
      <Navbar />
      <Banner title={"Grievance"} image={bannerImage} />

      <div className="w-full bg-white flex flex-col items-center justify-start py-8 md:py-20 px-10">
        <p className="font-[carotSlab] text-[2.6rem] font-medium text-[#760135] text-center">
          Grievance Form
        </p>
        <p className="font-[TTChocolates] text-[1.3rem] text-center text-[#404040]">
          Here are the Grievane Forms for Parents, Staff Members & Students
        </p>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-12 mt-8">
          {formTypes.map((item, id) => (
            <button
              key={id}
              onClick={() => setFormState(item)}
              className="w-[22rem] h-12 bg-[#3D001B] rounded-full flex items-center justify-center text-white font-[TTChocolatesBold] text-[1.8rem] font-medium "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Image
        src={formBackground}
        className="fixed w-screen h-screen top-0 left-0 -z-10"
        alt=""
      />
      {formState && (
        <div
          ref={formRef}
          className="w-full h-fit flex flex-col items-center justify-start px-10 py-20 gap-10"
        >
          <p className="text-white capitalize font-[TTChocolatesBold] font-semibold text-[2.6rem]">
            {formState}
            <span className="block w-full bg-white h-1 rounded-full"></span>
          </p>
          <GrievanceForm formState={formState} />
        </div>
      )}
      <ToastContainer closeButton closeOnClick={true} />

      <div className="pt-[6vh] -mt-[6vh] w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Grievance;
