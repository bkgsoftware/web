import React from "react";
import ContactForm from "../forms/ContactForm";

const ContactPage = () => {
    return (
        <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Thinking about your next project? Connect with us to learn more about how we can help you and your business. Get in touch via the contact form, or send us an email directly to <a href="mailto:consulting@bkgsoftware.com" className="text-red-orange">consulting@bkgsoftware.come</a>
                </p>


            </div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
