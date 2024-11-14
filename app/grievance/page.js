'use client'

import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../../public/About/whyTulasBanner.png"
import Footer from "@/component/Footer";
import formBackground from "../../public/grievance/formbackground.jpg"
import Image from "next/image";

const formTypes = [
  "student", "parent", "staff"
]

const GrievanceForm = ({ formState }) => {
  const [ formData, setFormData ] = useState({})

  useEffect(() => {
    if (formState) {
      setFormData((prevData) => ({
        ...prevData,
        userType: formState,
      }));
    }
  }, [formState])

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return(
    <div className="w-full max-w-[60rem] flex flex-col gap-[1.75rem]">
      <div className="w-full flex items-center justify-between gap-16">
        <input
          name="firstName"
          placeholder="First Name"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-[calc(50%-2rem)] h-14 px-6 text-black font-medium placeholder:text-[#404040]"
          value={formData.firstName || ''}
          onChange={handleInput}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-[calc(50%-2rem)] h-14 px-6 text-black font-medium placeholder:text-[#404040]"
          value={formData.lastName || ''}
          onChange={handleInput}
        />
      </div>
      <div className="w-full flex items-center justify-between gap-16">
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-[calc(50%-2rem)] h-14 px-6 text-black font-medium placeholder:text-[#404040]"
          value={formData.phoneNumber || ''}
          onChange={handleInput}
        />
        <input
          name="gender"
          placeholder="Select Male / Female"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-[calc(50%-2rem)] h-14 px-6 text-black font-medium placeholder:text-[#404040]"
          value={formData.gender || ''}
          onChange={handleInput}
        />
      </div>
      <div className="w-full flex items-center justify-between gap-16">
        <input
          name="department"
          placeholder="Select Department"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-[calc(50%-2rem)] h-14 px-6 text-black font-medium placeholder:text-[#404040]"
          value={formData.department || ''}
          onChange={handleInput}
        />
        <input
          name="grievanceType"
          placeholder="Select grievance"
          type="text"
          className="rounded-lg bg-white border-0 focus:outline w-[calc(50%-2rem)] h-14 px-6 text-black font-medium placeholder:text-[#404040]"
          value={formData.grievanceType || ''}
          onChange={handleInput}
        />
      </div>
      <textarea
        name="message"
        placeholder="Grievance Message-"
        type="text"
        className="rounded-lg py-4 bg-white border-0 focus:outline w-full h-40 px-6 text-black font-medium placeholder:text-[#404040]"
        value={formData.message || ''}
        onChange={handleInput}
      />
      <div className="w-full flex items-center justify-between gap-16 mt-2">
        <div className="flex max-w-2/5 items-center justify-center gap-6 mt-2 relative">
          <p className="text-white font-medium absolute top-[-1.8rem] left-0">
            Evidence
          </p>
          <div className="w-48 h-8 flex items-center justify-center bg-white rounded-lg relative overflow-hidden">
            <input
              name="evidence"
              type="file"
              className="absolute top-0 -left-28 w-[30rem] scale-150 h-[20rem] z-10 cursor-pointer opacity-0"
              onChange={handleInput}
            />
            <p className="text-[#007A83] text-sm font-medium z-0">Choose file</p>
          </div>
          <p className="text-sm font-medium">
            {formData.evidence ? formData.evidence.name : "No File Chosen"}
          </p>
        </div>
        <button 
          onClick={() => console.log(formData)}
          className="w-[55%] font-[TTChocolatesBold] text-[1.5rem] font-semibold h-14 rounded-lg bg-[#007A83] flex items-center justify-center"
        >
          Submit Grievance
        </button>
      </div>
    </div>
  )
}

function Grievance() {
  const formRef = useRef(null)

  const [ formState, setFormState ] = useState(null)

  useEffect(() => {
    if (formState && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [formState])

  return (
  <div className="w-full min-h-screen">
    <Navbar />
    <Banner
      title={"NAAC"}
      image={bannerImage}
    />

    <div className="w-full bg-white flex flex-col items-center justify-start pt-8 py-28 px-10">
      <p className="font-[carotSlab] text-[2.6rem] font-medium text-[#760135] text-center">
        Grievance Form
      </p>
      <p className="font-[TTChocolates] text-[1.3rem] text-center text-[#404040]">
        Here are the Grievane Forms for Parents, Staff Members & Students
      </p>
      <div className="flex w-full items-center justify-center gap-12 mt-8">
        {formTypes.map((item, id) => (
        <button
          key={id}
          onClick={() => setFormState(item)}
          className="w-[22rem] h-12 capitalize bg-[#3D001B] rounded-full flex items-center justify-center text-white font-[TTChocolatesBold] text-[1.8rem] font-medium "
        >
          {item}
        </button>))}
      </div>
    </div>

    <Image
      src={formBackground}
      className="fixed w-screen h-screen top-0 left-0 -z-10"
      alt=""
    />
    {formState &&
    <div ref={formRef} className="w-full min-h-screen flex flex-col items-center justify-start px-10 pt-20 pb-40 gap-10">
      <p className="text-white capitalize font-[TTChocolatesBold] font-semibold text-[2.6rem]">
        {formState}
        <span className="block w-full bg-white h-1 rounded-full"></span>
      </p>
      <GrievanceForm formState={formState} />
    </div>}


    {!formState && <div className="w-full h-20 bg-white"></div>}
    <div className="-mt-[6vh] w-full">
      <Footer />
    </div>
  </div>);
}

export default Grievance;
