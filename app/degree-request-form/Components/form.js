"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
const DegreeForm = ({ Degreeref, showForm }) => {
  const serviceId = "service_jnrgjfb";
  const templateId = "template_i666a73";
  const publicKey = "o2Jsamn0XRedAmc8d";
  const [paymentSlip, setPaymentSlip] = useState();
  const [submitLoader, setSubmitLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    enrollmentNumber: "",
    collegeID: "",
    branch: "",
    otherBranch: "",
    address: "",
    pinCode: "",
    mobile: "",
    email: "",
    paid: "",
    paymentSlip: "",
  });

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
      handleChange("paymentSlip", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentSlip(reader.result);
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
      fatherName: formData.fatherName,
      enrollmentNumber: formData.enrollmentNumber,
      collegeID: formData.collegeID,
      branch: formData.branch,
      otherBranch: formData.otherBranch,
      address: formData.address,
      pinCode: formData.pinCode,
      mobile: formData.mobile,
      email: formData.email,
      paid: formData.paid,
      paymentSlip: paymentSlip,
    };

    emailjs
      .send(serviceId, templateId, emailData, {
        publicKey: publicKey,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert('Message sent successfully!');
        toast.success(
          "Thank you for your Request. We will send your Degree to your respective address."
        );
        setSubmitLoader(false);
        setFormData({
          name: "",
          fatherName: "",
          enrollmentNumber: "",
          collegeID: "",
          branch: "",
          otherBranch: "",
          address: "",
          pinCode: "",
          mobile: "",
          email: "",
          paid: "",
          paymentSlip: "",
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
    <>
      {showForm && (
        <div
          ref={Degreeref}
          id="contact"
          className="w-full px-0 md:px-8 max-h-[80vh] overflow-y-auto"
        >
          <ToastContainer closeButton closeOnClick={true} />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" h-fit w-full py-4 md:py-10 font-[TTChocolates] text-[16px]"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Name of Applicant</label>
                <input
                  type="text"
                  placeholder="Enter your Name..."
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Fathers Name</label>
                <input
                  type="text"
                  placeholder="Enter your Fathers Name.."
                  value={formData.fatherName}
                  onChange={(e) => handleChange("fatherName", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">
                  University Enrollment Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your University Enrollment Number..."
                  value={formData.enrollmentNumber}
                  onChange={(e) =>
                    handleChange("enrollmentNumber", e.target.value)
                  }
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">College Id Number</label>
                <input
                  type="text"
                  placeholder="Enter your College Id Number..."
                  value={formData.collegeID}
                  onChange={(e) => handleChange("collegeID", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Course</label>
                <select
                  value={formData.branch}
                  onChange={(e) => handleChange("branch", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="Computer Science and Engineering">
                    Computer Science and Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electrical and Electronics Engineering">
                    Electrical and Electronics Engineering
                  </option>
                  <option value="Electronics and Communication">
                    Electronics and Communication
                  </option>
                  <option value="Master of Computer Application">
                    Master of Computer Application
                  </option>
                  <option value="Bachelor Of Business Administration">
                    Bachelor Of Business Administration
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {formData.branch === "Other" && (
                <div>
                  <label className="block mb-2">Other</label>
                  <input
                    type="text"
                    placeholder="Please Specify your Branch..."
                    value={formData.otherBranch}
                    onChange={(e) =>
                      handleChange("otherBranch", e.target.value)
                    }
                    required={formData.branch === "Other" ? true : false}
                    className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                  />
                </div>
              )}
              <div>
                <label className="block mb-2">
                  Current Address to Recieve Degree
                </label>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Pin Code</label>
                <input
                  type="number"
                  placeholder="Enter your Pin Code"
                  value={formData.pinCode}
                  onChange={(e) => handleChange("pinCode", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Contact Number</label>
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Personal Email address</label>
                <input
                  type="email"
                  placeholder="Enter your Email Id"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-[#353535] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="paid" className="block mb-2">
                  Degree Handling and Posting Charges Paid
                </label>
                <div className="flex items-center justify-start gap-6">
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="radio1"
                      type="radio"
                      name="paid"
                      className="hidden"
                      value="yes"
                      checked={formData.paid === "yes"}
                      onChange={(e) => handleChange("paid", e.target.value)}
                    />
                    <label
                      htmlFor="radio1"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="radio2"
                      type="radio"
                      name="paid"
                      className="hidden"
                      value="no"
                      checked={formData.paid === "no"}
                      onChange={(e) => handleChange("paid", e.target.value)}
                    />
                    <label
                      htmlFor="radio2"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      NO
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">
                  Handling and Posting Charges Receipt
                </label>
                <div className="w-48 h-8 flex items-center justify-center bg-white rounded-lg relative overflow-hidden">
                  <input
                    type="file"
                    required
                    name="paymentSlip"
                    // value={formData.paymentSlip}
                    className="absolute top-0 -left-28 w-[30rem] scale-150 h-[20rem] z-10 cursor-pointer opacity-0"
                    onChange={(e) => handleFileInput(e)}
                  />
                  <p className="text-[#007A83] text-sm font-medium z-0">
                    Choose file
                  </p>
                </div>
                <p className="text-sm font-medium">
                  {formData.paymentSlip
                    ? formData.paymentSlip.name
                    : "No File Chosen"}
                </p>
              </div>
            </div>
            <div className="w-full mt-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <input
                  id="consent"
                  type="checkbox"
                  name="consent"
                  className=""
                  required
                />
                <label
                  htmlFor="consent"
                  className="flex items-center cursor-pointer"
                >
                  I give Consent to Tula's Institute Dehradun , To send my
                  Degree by Post to the address shared with this form. I take
                  entire responsibility for lost or damages that may occur
                  during transit. The Management of Tula's Institute shall not
                  be responsible for the same.
                </label>
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                type="submit"
                className="w-fit px-14 py-1 md:px-44 md:py-2 bg-white text-[#760135] rounded-3xl text-[24px] md:hover:bg-[#59032f] md:hover:text-white transition duration-200"
              >
                {submitLoader ? (
                  <ThreeDots color="#007A83" height={30} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DegreeForm;
