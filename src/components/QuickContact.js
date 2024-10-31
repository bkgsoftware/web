import React from 'react';

function QuickContact() {
    return (
        <div className="bg-white">

        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl font-[sans-serif]">
            <div>
                <h1 className="text-black text-3xl font-extrabold">Contact Us</h1>
                <p className="text-sm text-black mt-4">Need assistance or have a project in mind? Reach out, and
                    let's discuss how we can help.</p>

                <div className="mt-12">
                    <h2 className="text-black text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div
                                className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                     viewBox="0 0 479.058 479.058">
                                    <path d="..."/>
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
                        <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://facebook.com/yourpage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                     viewBox="0 0 24 24">
                                    <path d="..."/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <form className="ml-auto space-y-4" method="POST" action="/submit-form">
                <input type='text' name="name" placeholder='Name' required
                       className="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-blue-500 focus:bg-transparent"/>
                <input type='email' name="email" placeholder='Email' required
                       className="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-blue-500 focus:bg-transparent"/>
                <input type='text' name="subject" placeholder='Subject'
                       className="w-full rounded-md py-3 px-4 bg-gray-100 text-black text-sm outline-blue-500 focus:bg-transparent"/>
                <textarea name="message" placeholder='Message' rows="6" required
                          className="w-full rounded-md px-4 bg-gray-100 text-black text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                <button type='submit'
                        className="black bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send
                    Message
                </button>
            </form>
        </div>
    </div>

    );
}

export default QuickContact;
