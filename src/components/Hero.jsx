import React from "react";
import hero from "../assets/hero-3.jpg"
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <div>
            <main id="home">
                <section className="relative text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${hero})` }}
                ></div>


                    <div className="container max-w-screen-2xl relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-primary from-10%">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 p-6 lg:p-20 md:p-10 ">
                                <h1 className="text-5xl text-white md:text-6xl font-bold mb-6 leading-tight">
                                    Welcome to the Future with IEEE RAS at SLIIT
                                </h1>
                                <p className="text-xl mb-8 text-white">
                                    Join us in advancing robotics and automation with cutting-edge technology and limitless creativity.
                                </p>
                                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="contact" smooth={true} duration={1000}>
                                    <a href="#contact" className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Join Us</a>
                                </Link>
                                </div>
                            </div>

                            <div className="w-full mx-auto md:w-1/3 px-6 pb-14 md:pb-0 md:px-0">
                                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                                    <h2 className="text-2xl font-semibold mb-6">Why IEEE RAS at SLIIT?</h2>
                                    <ul className="space-y-4">
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                                                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                                                <path d="M9 18h6"/>
                                                <path d="M10 22h4"/>
                                            </svg>
                                            <span className="pl-2">Innovative Projects</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route">
                                                <circle cx="6" cy="19" r="3"/>
                                                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                                                <circle cx="18" cy="5" r="3"/>
                                            </svg>
                                            <span className="pl-2">Expert Guidance</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00beff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round">
                                                <path d="M18 21a8 8 0 0 0-16 0"/>
                                                <circle cx="10" cy="8" r="5"/>
                                                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
                                            </svg>
                                            <span className="pl-2">Collaborative Community</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute z-20 bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                        </svg>
                    </div>
                </section>
            </main>
        </div>
    );
}
