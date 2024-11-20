import React, { useState, useEffect } from "react";
import LocationIcon from "../assets/location";
import PaperPlane from "../assets/paper-plane";
import EmailIcon from "../assets/email";
import LinkedInIcon from "../assets/linkedin";

const QuickContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const labelClass = "text-md text-black px-2";
  const inputClass = `w-full rounded-3xl px-4 py-3 mt-1 text-black ${errors.name ? "" : "ring-orange"} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange bg-off-white bg-opacity-20`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "quick-contact",
          ...formData,
        }),
      })
        .then(() => {
          setSuccessMessage("Message has been sent!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((error) => {
          setSuccessMessage("Oops! There was an error. Please try again.");
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <section className="flex justify-center items-center bg-light-gray py-16 ml-auto mr-auto px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
      <div className="flex flex-col lg:flex-row items-center justify-between w-[1200px] shadow-lg rounded-md lg:p-8 bg-white">
        <div className="flex flex-col w-full lg:w-2/3 bg-white py-8 px-4 sm:p-8 gap-y-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-orange">
            Get in touch
          </h1>
          <p className="text-black text-md lg:text-lg">
            Have a project in mind? Reach out and let's discuss how we can help.
          </p>
          <form
            onSubmit={handleSubmit}
            name="quick-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col space-y-4"
          >
            <input type="hidden" name="form-name" value="quick-contact" />
            <input type="hidden" name="bot-field" />

            <div>
              <label htmlFor="name" className={`${labelClass}`}>
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`${inputClass}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={`${labelClass}`}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="John.Doe@gmail.com"
                className={`${inputClass}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className={`${labelClass}`}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let's connect"
                className={`${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="message" className={`${labelClass}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className={`${inputClass}`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-orange hover:saturate-150 text-white rounded-md px-3.5 py-2.5 font-medium transition-all duration-150 shadow-md hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600 hover:scale-105 max-w-[200px] self-center"
            >
              Send Message
            </button>

            {successMessage && (
              <p className="text-success text-sm text-center mt-2">
                {successMessage}
              </p>
            )}
          </form>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col self-stretch justify-center lg:justify-between items-center bg-white text-black w-full lg:w-1/3 lg:pb-8">
          <div className="w-full hidden lg:block">
            <PaperPlane />
          </div>
          <div className="flex justify-center text-md lg:text-sm xl:text-lg lg:transform lg:-translate-y-16">
            <ul className="flex flex-col gap-y-8">
              <li className="flex gap-6">
                <LocationIcon className="size-8" />
                <div>Waterloo, Ontario</div>
              </li>
              <li className="flex gap-6">
                <EmailIcon className="size-8" />
                <div>consulting@bkgsoftware.com</div>
              </li>
              <li className="flex justify-center pb-6 lg:pb-0">
                <LinkedInIcon className="size-16" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
