"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ contactRef }) => {
  const serviceId = "service_p0danx3";
  const templateId = "template_47k1cpk";
  const publicKey = "cZ_xcJGz4SpnoKOE8";

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
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

    const { firstName, email, phoneNumber, subject, message } = formData;

    const templateParams = {
      firstName,
      email,
      phoneNumber,
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
          firstName: "",
          lastName: "",
          phoneNumber: "",
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
      className="w-full bg-[#3D001B] py-28 px-[13%]"
    >
      <ToastContainer closeButton closeOnClick={true} />
      <h3 className="text-white font-[CarotSlab] text-[40px] text-center">
        CONTACT US
      </h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" h-fit w-full py-10 font-[TTChocolates] text-[16px] border-b-[1px] border-white"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg text-black"
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
              className="w-full px-4 py-2 border rounded-lg text-black"
            />
          </div>
          <div>
            <label className="block mb-2">Mobile No.</label>
            <input
              type="number"
              placeholder="Phone"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg text-black"
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
              className="w-full px-4 py-2 border rounded-lg text-black"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2">Message</label>
          <textarea
            type="text"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-black"
            placeholder="(Optional)"
            rows="3"
          />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            type="submit"
            className="w-fit px-44 py-2 bg-white text-[#760135] rounded-3xl text-[24px] hover:bg-[#59032f] hover:text-white transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const errors = {};
//     if (!formData.name) errors.name = "Name is required";
//     if (!formData.email) errors.email = "Email is required";
//     if (!formData.mobile) errors.mobile = "Mobile number is required";
//     if (!formData.subject) errors.subject = "Subject is required";
//     return errors;
//   };
//   const serviceId = service_p0danx3;
//   const templateId = template_47k1cpk;
//   const publicKey = cZ_xcJGz4SpnoKOE8;
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoader(true);
//     const { firstName, lastName, phoneNumber, email, message } = formData;

//     const templateParams = {
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       message,
//     };

//     emailjs
//       .send(serviceId, templateId, templateParams, {
//         publicKey: publicKey,
//       })

//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         setIsLoader(false);
//         // alert('Message sent successfully!');
//         toast("Thank you for showing interest. We shall get in touch soon.");
//         setDone(true);
//         setFormData({
//           firstName: "",
//           lastName: "",
//           phoneNumber: "",
//           email: "",
//           message: "",
//         });
//       })
//       .catch((error) => {
//         console.log("FAILED...", error);
//         setIsLoader(false);
//         alert("Message failed to send.");
//       });
//   };
//   return (
//     <div className="bg-[#3D001B] py-40 px-[13%]">
//
//       <form
//         className="bg-[#3b021f] h-fit w-full py-10 font-[TTChocolates] text-[16px] border-b-[1px] border-white"
//         onSubmit={handleSubmit}
//       >
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter your Name..."
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs italic">{errors.name}</p>
//             )}
//           </div>
//           <div>
//             <label className="block mb-2">Your Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter your email id..."
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs italic">{errors.email}</p>
//             )}
//           </div>
//           <div>
//             <label className="block mb-2">Mobile No.</label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter your Mobile Number..."
//             />
//             {errors.mobile && (
//               <p className="text-red-500 text-xs italic">{errors.mobile}</p>
//             )}
//           </div>
//           <div>
//             <label className="block mb-2">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter your Subject..."
//             />
//             {errors.subject && (
//               <p className="text-red-500 text-xs italic">{errors.subject}</p>
//             )}
//           </div>
//         </div>
//         <div className="mt-4">
//           <label className="block mb-2">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg"
//             placeholder="(Optional)"
//             rows="3"
//           ></textarea>
//         </div>
//         <div className="mt-4 flex justify-center items-center">
//           <button
//             type="submit"
//             className="w-fit px-44 py-2 bg-white text-[#760135] rounded-3xl text-[24px] hover:bg-[#59032f] hover:text-white transition duration-200"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
