import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
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
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                company: "",
                email: "",
                message: ""
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} name="contact" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <fieldset className="grid grid-cols-1 gap-y-6">
                <legend className="sr-only">Contact Information</legend>
                <input type="hidden" name="contact" value="contact"/>

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
        </form>
    );
};

export default ContactForm;