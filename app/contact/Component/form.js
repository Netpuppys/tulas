"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ contactRef }) => {
  const serviceId = "service_jnrgjfb";
  const templateId = "template_vaeep7h";
  const publicKey = "o2Jsamn0XRedAmc8d";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, subject, message } = formData;

    const templateParams = {
      name,
      email,
      mobile,
      subject,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        // alert('Message sent successfully!');
        toast("Thank you for showing interest. We shall get in touch soon.");

        setFormData({
          name: "",
          mobile: "",
          subject: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);

        alert("Message failed to send.");
      });
  };

  return (
    <div
      ref={contactRef}
      id="contact"
      className="w-full bg-[#3D001B] py-8 md:py-28 px-8 md:px-[13%]"
    >
      <ToastContainer closeButton closeOnClick={true} />
      <h3 className="text-[30px] text-white font-[CarotSlab] md:text-[40px] text-center">
        CONTACT US
      </h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" h-fit w-full py-10 font-[MontserratLight] text-[16px] border-b-[1px] border-white"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
            />
          </div>
          <div>
            <label className="block mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
            />
          </div>
          <div>
            <label className="block mb-2">Mobile No.</label>
            <input
              type="tel"
              placeholder="Phone"
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
            />
          </div>
          <div>
            <label className="block mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2">Message</label>
          <textarea
            type="text"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black"
            placeholder="(Optional)"
            rows="3"
          />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            type="submit"
            className="w-fit px-14 py-1 md:px-44 md:py-2 bg-white text-[#760135] rounded-3xl text-[24px] hover:bg-[#59032f] hover:text-white transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
