import React, { useState, useEffect } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
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
        setSuccessMessage("Please recheck the form.")
        return Object.keys(newErrors).length === 0;
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    ...formData
                })
            })
                .then(() => {
                    setSuccessMessage("Message has been sent!");
                    setFormData({
                        name: "",
                        company: "",
                        email: "",
                        message: ""
                    });
                })
                .catch(error => {
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
        <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <fieldset className="grid grid-cols-1 gap-y-6">
                <legend className="sr-only">Contact Information</legend>

                <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="given-name"
                        className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.name ? 'ring-red-500' : 'ring-orange'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                        Company *
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-orange placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-orange'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.message ? 'ring-red-500' : 'ring-orange'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6`}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
            </fieldset>

            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md shadow-sm bg-orange px-3.5 py-2.5 text-center text-white text-md hover:bg-dark-blue transition-all duration-500 hover:shadow-lg"
                >
                    Send
                </button>
            </div>
            <p className="text-success text-sm text-center m-2">{successMessage}</p>
        </form>
    );
};

export default ContactForm;