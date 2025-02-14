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

const CareersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    phoneNumber: "",
    email: "",
    address: "",
    position: "",
    department: "",
    post: "",
    qualification: "",
    education: "",
    experience: "",
    experienceIndustry: "",
    publications: "",
    resume: "",
  });
  const [submitLoader, setSubmitLoader] = useState(false);
  const [resume, setEvidence] = useState();

  const serviceId = "service_jnrgjfb";
  const templateId = "template_c94lxfc";
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
      handleChange("resume", file);

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
      name: formData.name,
      date: formData.date,
      gender: formData.gender,
      nationality: formData.nationality,
      maritalStatus: formData.maritalStatus,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      address: formData.address,
      position: formData.position,
      department: formData.department,
      post: formData.post,
      qualification: formData.qualification,
      education: formData.education,
      experience: formData.experience,
      experienceIndustry: formData.experienceIndustry,
      publications: formData.publications,
      resume: resume,
    };

    emailjs
      .send(serviceId, templateId, emailData, {
        publicKey: publicKey,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert('Message sent successfully!');
        toast.success("Thank you for applying at Tula's Institute.");
        setSubmitLoader(false);
        setFormData({
          name: "",
          date: "",
          gender: "",
          nationality: "",
          maritalStatus: "",
          phoneNumber: "",
          email: "",
          address: "",
          position: "",
          department: "",
          post: "",
          qualification: "",
          experience: "",
          experienceIndustry: "",
          publications: "",
          resume: "",
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
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Full Name</label>
          <input
            name="name"
            placeholder="Full Name"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Date of Birth</label>
          <input
            name="date"
            placeholder="Date of Birth"
            type="date"
            required
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]
            } // Today minus 18 years
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Select Gender</label>
          <select
            name="gender"
            placeholder="Select"
            required
            className={`rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium ${
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
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Nationality</label>
          <input
            name="nationality"
            placeholder="Enter your Nationality"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Marital Status</label>
          <input
            name="maritalStatus"
            placeholder="Married/ Unmarried"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
          />
        </div>
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Contact Number</label>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            type="tel"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter your email ID"
            type="email"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Address</label>
          <input
            name="address"
            placeholder="Enter your Address"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Select Position</label>
          <select
            name="position"
            placeholder="Select"
            className={`rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium ${
              !formData.position ? "text-gray-400" : "text-black"
            }`}
            required
            value={formData.position}
            onChange={(e) => handleChange("position", e.target.value)}
          >
            <option value="" disabled selected>
              Select Position
            </option>
            <option value="Teaching">Teaching</option>
            <option value="Non- Teaching">Non- Teaching</option>
          </select>
        </div>

        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Department</label>
          <select
            name="department"
            placeholder="Select"
            className={`rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium ${
              !formData.department ? "text-gray-400" : "text-black"
            }`}
            required
            value={formData.department}
            onChange={(e) => handleChange("department", e.target.value)}
          >
            <option value="" disabled selected>
              Select N/A if Non Teaching
            </option>
            <option value="CSE">CSE</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Data Science">Data Science</option>
            <option value="AIML">AIML</option>
            <option value="Computer Application">Computer Application</option>
            <option value="ME">ME</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="Civil">Civil</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Management">Management</option>
            <option value="Mass Communication">Mass Communication</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Post Applied for</label>
          <select
            name="post"
            placeholder="Select"
            className={`rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium ${
              !formData.post ? "text-gray-400" : "text-black"
            }`}
            required
            value={formData.post}
            onChange={(e) => handleChange("post", e.target.value)}
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="Assistant Professor">Assistant Professor</option>
            <option value="Associate Professor">Associate Professor</option>
            <option value="Professor">Professor</option>
          </select>
        </div>

        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Qualification (Highest Only)</label>
          <input
            name="qualification"
            placeholder="Enter your Qualification"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.qualification}
            onChange={(e) => handleChange("qualification", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Education Qualification</label>
          <input
            name="education"
            placeholder="Enter your Education Qualification"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.education}
            onChange={(e) => handleChange("education", e.target.value)}
          />
        </div>

        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Experience in Teaching</label>
          <input
            name="experience"
            placeholder="Enter your Teaching Experience (Years)"
            type="number"
            max={50}
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.experience}
            onChange={(e) => handleChange("experience", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[1.75rem] md:gap-16">
        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Experience in Industry</label>
          <input
            name="experienceIndustry"
            placeholder="Enter your Experience in Industry (Years)"
            type="number"
            required
            max={50}
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.experienceIndustry}
            onChange={(e) => handleChange("experienceIndustry", e.target.value)}
          />
        </div>

        <div className="w-full md:w-[calc(50%-2rem)] flex flex-col">
          <label>Publications (if any)</label>
          <input
            name="publications"
            placeholder="Enter N/A if 0 publications"
            type="text"
            required
            className="rounded-lg bg-white border-0 focus:outline w-full h-14 px-6 text-black font-medium"
            value={formData.publications}
            onChange={(e) => handleChange("publications", e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[1.75rem] md:gap-16 md:mt-2">
        <div className="flex max-w-[40%] items-center md:justify-center gap-6 md:mt-2 relative">
          <div>
            <label className="block mb-2">Resume</label>
            <div className="w-48 h-8 flex items-center justify-center bg-white rounded-lg relative overflow-hidden">
              <input
                type="file"
                name="resume"
                required
                // value={formData.resume}
                className="absolute top-0 -left-28 w-[30rem] scale-150 h-[20rem] z-10 cursor-pointer opacity-0"
                onChange={(e) => handleFileInput(e)}
              />
              <p className="text-[#007A83] text-sm font-medium z-0">
                Choose file
              </p>
            </div>
            <p className="text-sm font-medium">
              {formData.resume ? formData.resume.name : "No File Chosen"}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full md:w-[55%] font-[MontserratMedium] text-[1.5rem] font-semibold h-14 rounded-lg bg-[#007A83] flex items-center justify-center"
        >
          {submitLoader ? <ThreeDots color="#FFFFFF" height={30} /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

function Careers() {
  return (
    <div className="w-full h-fit">
      <Navbar />
      <Banner
        title={"Career"}
        image={bannerImage}
        belowTitle={"Careers at Tula's Institute, Dehradun"}
        belowPara={
          <>
            Join the journey of academic excellence and innovation at Tula's
            Institute, a premier institution committed to shaping the future of
            education and nurturing tomorrow’s leaders. We believe in empowering
            individuals to grow professionally and personally while contributing
            to our mission of excellence in education.
            <br />
            <br />
            <strong>Why Choose Tula's Institute for Your Career?</strong>
            <br />
            <ul className="ml-5 list-disc ">
              <li>
                Reputation for Excellence: Recognized among the Top 50 Private
                Colleges in India for eight consecutive years (2016–2024).
              </li>
              <li>
                Leadership in Engineering Education: Ranked in the Top 20
                Private Engineering Colleges in North India for three
                consecutive years, as per The Times of India Engineering Survey.
              </li>
              <li>
                Industry Recognition: Awarded an AA+ rating by Career360,
                reflecting our dedication to quality education and innovation.
              </li>
            </ul>
            At Tula’s, you’ll work in a dynamic, collaborative environment that
            fosters creativity, growth, and professional development. We offer
            opportunities for educators, administrators, and professionals
            passionate about shaping a brighter future for students.
            <br />
            If you’re ready to make an impact in education, explore career
            opportunities with us and become a part of a community that values
            innovation, integrity, and excellence.
          </>
        }
      />

      <Image
        src={formBackground}
        className="fixed w-screen h-screen top-0 left-0 -z-10"
        alt=""
      />

      <div className="w-full h-fit flex flex-col items-center justify-start px-10 py-20 gap-10">
        <CareersForm />
      </div>

      <ToastContainer closeButton closeOnClick={true} />

      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Careers;
