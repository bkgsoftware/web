import React from 'react';
import BraydenHeadshot from "../assets/image-not-found.png";
import KarlHeadshot from "../assets/image-not-found.png";
import GavinHeadshot from "../assets/image-not-found.png";
import { Github, Linkedin, Globe } from "lucide-react"
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-left w-full">
            <div className="bg-white w-full md:w-1/3 p-6 md:p-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> About the team </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    We're an enthusiastic team of engineers with fresh perspectives on software development.
                    We grew up watching software evolve. Now, we help contribute to that evolution on a daily basis.
                </p>
            </div>
            <div className="flex flex-col bg-white w-full md:w-2/3 p-6 md:p-8 gap-4">
                <div className="flex flex-row gap-2">
                    <div>
                        <img src={BraydenHeadshot} alt="Brayden headshot" className="rounded-md shadow saturate-0 hover:saturate-100"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="text-lg leading-8 text-black font-bold">
                                Brayden Bowler
                            </div>
                            <div className="text-lg leading-8 text-black italic">
                                Founder
                            </div>
                        </div>
                        <div>
                            <div className="text-lg leading-8 text-black">
                                description
                            </div>
                            <div className="flex flex-row text-lg leading-8 text-black">
                                <Link to="https://github.com/braybowler">
                                    <Github color='black' className="transition duration-350 hover:scale-110"></Github>
                                </Link>
                                <Link to="https://linkedin.com/in/brayden-bowler/">
                                    <Linkedin color='black' className="transition duration-350 hover:scale-110"></Linkedin>
                                </Link>
                                <Link to="https://8bitsmakeabray.ca">
                                    <Globe color='black' className="transition duration-350 hover:scale-110"></Globe>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full">
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent"/>
                </div>

                <div className="flex flex-row gap-2">
                    <div>
                        <img src={KarlHeadshot} alt="Karl headshot" className="rounded-md shadow saturate-0 hover:saturate-100"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="text-lg leading-8 text-black font-bold">
                                Karl Stencell
                            </div>
                            <div className="text-lg leading-8 text-black italic">
                                Founder
                            </div>
                        </div>
                        <div>
                            <div className="text-lg leading-8 text-black">
                                description
                            </div>
                            <div className="flex flex-row text-lg leading-8 text-black">
                                <Link to="https://github.com/kstencell">
                                    <Github color='black' className="transition duration-350 hover:scale-110"></Github>
                                </Link>
                                <Link to="https://linkedin.com">
                                    <Linkedin color='black' className="transition duration-350 hover:scale-110"></Linkedin>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full">
                    <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent"/>
                </div>

                <div className="flex flex-row gap-2">
                    <div>
                        <img src={GavinHeadshot} alt="Gavin headshot" className="rounded-md shadow saturate-0 hover:saturate-100"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="text-lg leading-8 text-black font-bold">
                                Gavin Abeele
                            </div>
                            <div className="text-lg leading-8 text-black italic">
                                Founder
                            </div>
                        </div>
                        <div>
                            <div className="text-lg leading-8 text-black">
                                description
                            </div>
                            <div className="flex flex-row text-lg leading-8 text-black">
                                <Link to="https://github.com/gabeele">
                                    <Github color='black' className="transition duration-350 hover:scale-110"></Github>
                                </Link>
                                <Link to="https://linkedin.com">
                                    <Linkedin color='black'
                                              className="transition duration-350 hover:scale-110"></Linkedin>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;