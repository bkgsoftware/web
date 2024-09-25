import React from 'react';

const ContactForm = () => {
    return (
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form class="space-y-6" data-netlify="true" action="POST">
                        <div>
                            <label class="sr-only" for="name">Name</label>
                            <input placeholder="Name *" class="form-input w-full bg-gray-800 border border-gray-700 py-4 px-4 text-white rounded-lg" name="name" id="name" type="text" required />
                        </div>
                        <div>
                            <label class="sr-only" for="email">Email</label>
                            <input placeholder="Email *" class="form-input w-full bg-gray-800 border border-gray-700 py-4 px-4 text-white rounded-lg" name="email" id="email" type="email" required />
                        </div>
                        <div>
                            <label class="sr-only" for="subject">Subject</label>
                            <input placeholder="Subject *" class="form-input w-full bg-gray-800 border border-gray-700 py-4 px-4 text-white rounded-lg" name="subject" id="subject" type="text" required />
                        </div>
                        <div>
                            <label class="sr-only" for="message">Message</label>
                            <textarea placeholder="Message *" class="form-textarea w-full bg-gray-800 border border-gray-700 py-4 px-4 text-white rounded-lg" name="message" id="message" required></textarea>
                        </div>
                        <input type="hidden" name="form-name" value="contact" />
                        <div class="flex justify-start">
                            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm py-4 px-6 flex items-center rounded-lg">
                                Send Message
                                <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="flex flex-col justify-center">
                    <h2 class="text-3xl font-bold mb-4">Unlock Your Business Potential</h2>
                    <p class="leading-loose text-gray-400">
                        BKG Software crafts tailored web solutions that streamline your operations and drive growth. Let's turn your vision into a tool that works for you.
                    </p>
                </div>

            </div>
        </div>

    )
}

export default ContactForm;