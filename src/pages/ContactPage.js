import React from "react";
import ContactForm from "../forms/ContactForm";
import {Link} from "react-router-dom";
import QuickContact from "../components/QuickContact";

const ContactPage = () => {
    return (
        <div className="isolate  px-6 py-24 sm:py-32 lg:px-8 ">
            <QuickContact />
        </div>
    );
};

export default ContactPage;
