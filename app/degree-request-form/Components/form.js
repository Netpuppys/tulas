"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DegreeForm = ({ Degreeref, showForm }) => {
  const serviceId = "service_p0danx3";
  const templateId = "template_47k1cpk";
  const publicKey = "cZ_xcJGz4SpnoKOE8";

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
    paymentSlip: "",
    consent: "",
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
    if (formData.paid === "") {
      toast.error("Please Select your fees Paid status");
    }

    const {
      name,
      fatherName,
      enrollmentNumber,
      collegeID,
      branch,
      otherBranch,
      address,
      pinCode,
      mobile,
      email,
      paymentSlip,
      consent,
    } = formData;

    const templateParams = {
      name,
      fatherName,
      enrollmentNumber,
      collegeID,
      branch,
      otherBranch,
      address,
      pinCode,
      mobile,
      email,
      paymentSlip,
      consent,
    };
    if (formData.paid === "yes" || formData.paid === "no") {
      emailjs
        .send(serviceId, templateId, templateParams, {
          publicKey: publicKey,
        })

        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);

          // alert('Message sent successfully!');
          toast.success(
            "Thank you for showing interest. We shall get in touch soon."
          );

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
            paymentSlip: "",
            consent: "",
          });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Message failed to send.");
        });
    }
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Course</label>
                <select
                  value={formData.branch}
                  onChange={(e) => handleChange("branch", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                    className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none"
                />
              </div>
              <div>
                <label for="paid" className="block mb-2">
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
                      for="radio1"
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
                      for="radio2"
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
                  Handling and Posting Charges Receipt{" "}
                </label>
                <input
                  type="file"
                  required
                  className="focus:outline-none  py-2 rounded-lg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.size <= 500 * 1024) {
                      // 500 KB limit
                      handleChange("paymentSlip", file);
                    } else {
                      // Optionally clear the file input if file is too large
                      e.target.value = "";
                      alert("File size should be 500KB or less.");
                    }
                  }}
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <input
                  id="consent"
                  type="checkbox"
                  name="consent"
                  className=""
                  value="no"
                  required
                  selected={formData.consent === "yes"}
                  onChange={(e) => handleChange("consent", e.target.value)}
                />
                <label
                  for="consent"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DegreeForm;
