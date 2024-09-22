import React from "react";
import bg from "../assets/bg2.jpg"
import robot from "../assets/robo.png"

export default function About() {
    return (
        <>
        <section class="pb-10 px-6  md:px-20" id="about">
            <div class="container mx-auto ">
                <div class="flex flex-col items-center justify-center space-y-8">
                    <h2 class="text-4xl font-bold text-center text-primary">Who are we?</h2>
                    <p class="text-gray-600 text-md text-center max-w-2xl">Welcome to the heartbeat of innovation, the IEEE Robotics and Automation
                        Society at SLIIT — a community driven by passion, innovation, and the relentless
                        pursuit of excellence in robotics and automation.
                    </p>
                </div>
            </div>

            <div class="container mx-auto mt-16">
                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8">
                    <div class="flex flex-col items-center justify-center space-y-6 p-8 bg-gray-200 rounded-xl">
                        <h3 class="text-3xl font-bold text-secondary text-center"><span className="text-xl text-primary">We Are</span><br />Innovators</h3>
                        <p class="text-gray-600 text-md text-center">At our core, we are a diverse group of tech enthusiasts, from coding maestros to
                            robotics aficionados. Together, we are breaking barriers and pushing the limits of
                            what technology can achieve.


                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-8 bg-gray-200 rounded-xl">
                        <h3 class="text-3xl font-bold text-secondary text-center"><span className="text-xl text-primary">We Are</span><br />Visionaries</h3>
                        <p class="text-gray-600 text-md text-center">Our members aren't just followers; we are trailblazers in the world of robotics and
                            automation. We actively shape the future through cutting-edge projects that
                            redefine the landscape of technology.

                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-8 bg-gray-200 rounded-xl">
                        <h3 class="text-3xl font-bold text-secondary text-center"><span className="text-xl text-primary">We Are</span><br />Collaborators</h3>
                        <p class="text-gray-600 text-md text-center">In our community, collaboration isn't just encouraged; it's essential. We believe in
                            the power of teamwork, where collective efforts lead to groundbreaking
                            advancements.

                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-8 bg-gray-200 rounded-xl">
                        <h3 class="text-3xl font-bold text-secondary text-center"><span className="text-xl text-primary">We Are</span><br />Forward Thinkers</h3>
                        <p class="text-gray-600 text-md text-center">The future isn't a distant concept for us — it's something we actively code and
                            shape. Our forward-thinking approach aligns with the transformative power of
                            technology.

                        </p>
                    </div>
                </div>

            </div>
            </section>
            

            <div className="my-20 w-full mx-auto " id="join">
                <div className="relative flex-row lg:flex md:flex gap-20 md:px-40 sm:px-32  max-[640px]:px-14 bg-cover filter ">
                    <div className="absolute  inset-0 bg-gradient-to-r from-primary to-secondary "></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white text-center py-10">Why Join?</h3>
                        <p className="text-center pb-10 text-md text-white">
                            Immerse yourself in the boundless world of technology, where creativity knows no
                            bounds. Connect with visionaries, stay at the forefront of innovation, and actively
                            shape the future through groundbreaking projects.                        </p>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white text-center py-10">How to Join?</h3>
                        <p className="text-center pb-10 text-md text-white">
                            Dream big, be IEEE smart, and ignite your passion for technology and innovation.
                            Join the IEEE RAS SLIIT Chapter, where we not only dream of the future but
                            actively code it into existence                        </p>
                    </div>
                </div>
            </div>

            <section class="pb-10 px-6 md:px-20">

            <div class="container mx-auto  mt-16 bg-gray-100 rounded-2xl">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-end">
            
                    <img src={robot} className="w-[610px] mx-auto md:p-20 md:pb-0 lg:p-10 p-8 lg:pb-0 pb-0 bg-cover z-10" />

                    <div className="grid gap-6  mt-0 sm:mt-0 mx-8 mb-8 md:mt-0 lg:m-8 z-20">
                        <div class="flex flex-col items-start justify-center space-y-6 p-10 bg-gray-200 rounded-xl shadow-xl">
                            <h3 class="text-3xl font-bold text-secondary text-left">Vision</h3>
                            <p class="text-gray-600 text-md text-left">We envision SLIIT IEEE RAS as the driving force that propels SLIIT into the
                                forefront of technological innovation. Our vision is to foster an environment where
                                Robotics and Automation become synonymous with SLIIT, inspiring students to be
                                architects of groundbreaking technology that shapes the future.

                            </p>
                        </div>
                        <div class="flex flex-col  items-start justify-center space-y-6 p-10 bg-gray-200 rounded-xl shadow-xl">
                            <h3 class="text-3xl font-bold text-secondary text-left">Mission</h3>
                            <p class="text-gray-600 text-md text-left">Our mission is to cultivate a community of tech visionaries at SLIIT who are
                                proficient in Robotics and Automation. SLIIT IEEE RAS is committed to
                                providing a platform where students can explore, innovate, and apply cutting-edge
                                technology to solve real-world challenges. Through workshops, projects, and
                                collaborative initiatives, we aim to equip our members with the skills and
                                knowledge to lead in the ever-evolving field of robotics.

                            </p>
                        </div>

                    </div>



                </div>

            </div>

            <div class="container mx-auto  mt-20">
                <div class="flex flex-col items-center justify-center space-y-8">
                    <h2 class="text-4xl font-bold text-center text-primary">Strategic Focus</h2>
                    <p class="text-gray-600 text-md text-center max-w-2xl">SLIIT IEEE RAS is strategically positioned to elevate technological innovation at
                    SLIIT through a multi-faceted approach
                    </p>
                </div>
            </div>

            <div class="container mx-auto mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div class="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-200 rounded-xl">
                        <h3 class="text-xl font-bold text-secondary text-center">Technology Integration</h3>
                        <p class="text-gray-600 text-md text-center">Incorporate cutting-edge robotics and automation technologies into SLIIT's
                        academic and research endeavors.


                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-200 rounded-xl">
                        <h3 class="text-xl font-bold text-secondary text-center">Skill Development Programs</h3>
                        <p class="text-gray-600 text-md text-center">Provide diverse skill development opportunities through workshops, mentorship,
                        and certification programs.


                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-200 rounded-xl">
                        <h3 class="text-xl font-bold text-secondary text-center">Industry Collaboration</h3>
                        <p class="text-gray-600 text-md text-center">Strengthen partnerships with industry leaders, offering practical exposure through
                        internships and collaborative projects.

                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-200 rounded-xl">
                        <h3 class="text-xl font-bold text-secondary text-center">Community Engagement</h3>
                        <p class="text-gray-600 text-md text-center">Cultivate an active and collaborative community through student-led projects,
                        regular meet-ups, and tech talks.

                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-200 rounded-xl">
                        <h3 class="text-xl font-bold text-secondary text-center">Research and Innovation Hub</h3>
                        <p class="text-gray-600 text-md text-center">Establish SLIIT IEEE RAS as a center for robotics research, equipped with stateof-the-art facilities.

                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-200 rounded-xl">
                        <h3 class="text-xl font-bold text-secondary text-center">Visibility and Outreach</h3>
                        <p class="text-gray-600 text-md text-center">Enhance the society's visibility through a robust online presence, promotional
campaigns, and media collaborations.


                        </p>
                    </div>
                </div>

            </div>
            </section>


        
        </>
    )
}