import React from 'react';
import ContactForm from '../forms/ContactForm'

const ContactPage = () => {
    return (
        <section>
            <div className=''>
                <h1 className='text-3xl'>Get in touch with us</h1>
                <div class="bg-blue-500 w-12 mt-2 h-2 rounded-lg"></div>
                <br></br>
                <div className=''>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactPage;