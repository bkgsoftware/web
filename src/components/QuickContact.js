import React, { useState, useEffect } from 'react';

const QuickContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const labelClass = "text-sm text-black"
    const inputClass = `w-full rounded-3xl px-4 py-3 text-black ${errors.name ? '' : 'ring-orange'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange bg-white`

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
                    "form-name": "quick-contact",
                    ...formData
                })
            })
                .then(() => {
                    setSuccessMessage("Message has been sent!");
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
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
        <section className="flex justify-center items-center bg-white py-16 ml-auto mr-auto px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
            <div className="flex flex-col md:flex-row items-center justify-between w-[1200px] shadow-lg rounded-md p-16">
                <div className='flex flex-col w-2/3 bg-secondary'>
                    <h1 className="text-black text-3xl font-bold">Get in touch</h1>
                    <p className='text-black'>Need assistance or have a project in mind? Reach out and let's discuss how we can help.</p>
                    <form
                        onSubmit={handleSubmit}
                        name="quick-contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="flex flex-col space-y-4"
                    >
                        <input type="hidden" name="form-name" value="quick-contact"/>
                        <input type="hidden" name="bot-field"/>

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
                                placeholder='John Doe'
                                className={`${inputClass}`}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
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
                                placeholder='John.Doe@gmail.com'
                                className={`${inputClass}`}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
                                className={`${inputClass}`}
                            />
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-md bg-blue-500 hover:bg-blue-600 px-3.5 py-2.5 text-center text-white text-sm transition-all duration-500 hover:shadow-lg"
                        >
                            Send Message
                        </button>

                        {successMessage && (
                            <p className="text-success text-sm text-center mt-2">{successMessage}</p>
                        )}
                    </form>
                </div>
                <div className='flex flex-col bg-off-white w-1/3'>
                    <h1 className="text-black text-3xl font-extrabold">Get in touch</h1>
                    <p className="text-sm text-black mt-4">
                        Need assistance or have a project in mind? Reach out, and
                        let's discuss how we can help.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-black text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div
                                    className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                         viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 289.47H44.912V104.794h389.234v244.558z"/>
                                    </svg>
                                </div>
                                <a href="mailto:info@yourdomain.com" className="text-sm ml-4">
                                    <small className="block">Email Us</small>
                                    <strong>info@yourdomain.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-black text-base font-bold">Follow Us</h2>
                        <ul className="flex mt-4 space-x-4">
                            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://facebook.com/yourpage">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickContact;