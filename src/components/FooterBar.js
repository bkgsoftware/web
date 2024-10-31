import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import QuickContact from "./QuickContact";

const FooterBar = () => {
    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-black text-white">
        <QuickContact />
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-white text-lg font-semibold">BKG Software</h3>
                    <p className="text-sm">Business Tooling Software Consultancy</p>
                    <div className="flex items-center space-x-4">
                        <Linkedin className="w-5 h-5 hover:text-dark-gray cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">Meet the Team</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white text-lg font-semibold">Contact Us</h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm">123 Business Ave, Suite 100<br />New York, NY 10001</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5" />
                            <span className="text-sm">+1 (226) 929-5717</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5" />
                            <span className="text-sm">consulting@bkgsoftware.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm">&copy; {currentYear} BKG Software. All rights reserved.</p>
                        <div className="flex space-x-6">
                            {/* TODO Can be a quick generation of privacy and stuff. Esp since we do collected emails */}
                            <a href="#" className="text-sm hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-sm hover:text-white">Terms of Use</a>
                            <a href="#" className="text-sm hover:text-white">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBar;