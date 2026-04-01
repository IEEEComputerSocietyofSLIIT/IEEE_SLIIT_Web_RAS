import React from "react";
import bhanuka from "../assets/Mr. Bhanuka Dayawansa.jpeg";
import achira from "../assets/RAS-26_27-Chairperson.jpg";
import sithum from "../assets/RAS-26_27-ViceChairperson.jpg";
import chamudi from "../assets/RAS-26_27-Secretary.jpg";
import rakhita from "../assets/RAS-26_27-AssistantSecretary.jpg";
import tharuka from "../assets/RAS-26_27-Treasurer.jpg";
import vidara from "../assets/RAS-26_27-Editor.jpg";

const MemberCard = ({ name, position, image, link }) => (
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
        <a href={link}>
            <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={image} alt={name} className="w-full" />
            </div>

            <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">{name}</h2>
                <p class="text-primary mt-1 text-md font-semibold ">{position}</p>
            </div>
        </a>
    </article>
);

const teamMembers = [
    {
        name: "Achira Karunarathne",
        position: "Chairperson",
        image: achira,
        link: "mailto:achirakaru2002@gmail.com",
    },
    {
        name: "Sithum Ekanayaka",
        position: "Vice Chairperson",
        image: sithum,
        link: "mailto:sithumsathsara111@gmail.com",
    },
    {
        name: "Chamudi Welikanna",
        position: "Secretary",
        image: chamudi,
        link: "mailto:chamudirashmikawelikanna@gmail.com",
    },
    {
        name: "Rakhita Gunasekara",
        position: "Assistant Secretary",
        image: rakhita,
        link: "mailto:rakithag100@gmail.com",
    },
    {
        name: "Tharuka Pathmasiri",
        position: "Treasurer",
        image: tharuka,
        link: "mailto:tharukathidas2002@gmail.com",
    },
    {
        name: "Vidara Karannagoda",
        position: "Editor",
        image: vidara,
        link: "mailto:ransiluni.2002@gmail.com",
    },
];

export default function Team() {
    return (
        <>
            <div class="container mx-auto px-4 mt-10" id="committee">
                <div class="flex flex-col items-center justify-center space-y-8">
                    <h2 class="text-4xl font-bold text-center text-primary">Our Community</h2>

                </div>
            </div>
            <section class="pb-10 px-6  md:px-20">
                <div class="container mx-auto  mt-16 bg-gray-200 rounded-2xl">
                    <div class="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="grid p-6  md:p-10">
                            <div class="flex flex-col  items-start justify-center space-y-6 ">
                                <h3 class="text-3xl font-bold text-secondary text-left">Meet the Visionaries: SLIIT IEEE RAS Chapter (2023)</h3>
                                <p class="text-gray-600 text-md text-left">In 2023, the blueprint for tomorrow's technological landscape was drawn by our visionary Founding Chairperson, Malika Amila Dayananda. Alongside, working in tandem, are our meticulous Secretary, Thedini Gamage, and dynamic Vice President, Udula Wijesinghe.

                                </p>
                            </div>
                            <div class="flex flex-col  items-start justify-start space-y-6 ">
                                <h3 class="text-xl font-bold text-secondary text-left">The Pioneering Team</h3>
                                <ul className="">
                                    <li className="text-gray-800 font-bold">Malika Amila Dayananda (Founding Chairperson)<br /><span className="text-gray-600 font-normal">A trailblazer with a fervor for advancing technology, leading the charge towards innovation.</span></li>
                                </ul>
                                <ul className="">
                                    <li className="text-gray-800 font-bold">Udula Wijesinghe (Vice Chairperson)<br /><span className="text-gray-600 font-normal">A creative force propelling us towards uncharted technological territories.</span></li>
                                </ul>
                                <ul className="">
                                    <li className="text-gray-800 font-bold">Thedini Gamage (Secretary)<br /><span className="text-gray-600 font-normal">An organizational maestro ensuring precision in every operation.</span></li>
                                </ul>
                            </div>
                        </div>


                        <div className="grid gap-6 md:my-10 my-4 mx-4  md:mx-10">
                            <div class="flex flex-col items-start justify-center space-y-6 p-10 bg-gradient-to-br from-primary to-secondary  rounded-xl shadow-xl">
                                <h3 class="text-2xl font-bold text-white text-left">Forging the Path to Excellence</h3>
                                <p class="text-white text-md text-left">Establishing SLIIT IEEE RAS was not a mere endeavor; it was a journey of resilience and commitment. Through challenges and triumphs, our chapter has evolved, setting the stage for technological excellence.

                                </p>
                            </div>
                            <div class="flex flex-col  items-start justify-center space-y-6 p-10 bg-gradient-to-br from-primary to-secondary  rounded-xl shadow-xl">
                                <h3 class="text-2xl font-bold text-white text-left">Uniting Dreams and Reality</h3>
                                <p class="text-white text-md text-left">SLIIT IEEE RAS is more than an organization; it's a convergence of dreams and reality. With Malika Amila Dayananda at the helm, we are the architects of the future, shaping the technological landscape at SLIIT through collaboration, innovation, and unwavering dedication.

                                </p>
                            </div>
                            <div class="flex flex-col  items-start justify-center space-y-6 p-10 bg-gradient-to-br from-primary to-secondary  rounded-xl shadow-xl">
                                <h3 class="text-2xl font-bold text-white text-left">Our Open Invitation</h3>
                                <p class="text-white text-md text-left">As we inaugurate the SLIIT IEEE RAS Chapter, we extend a warm invitation to all tech enthusiasts, dreamers, and innovators. Join us on this visionary journey, where technology knows no bounds, and the legacy of innovation is our shared pursuit.



                                </p>
                            </div>

                        </div>



                    </div>

                </div>
            </section>

            <section class="max-w-screen-lg px-10 mx-auto my-10  md:my-20">
                <section class="max-w-screen-2xl  mx-auto mb-20">
                    <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">Chapter Advisor<span class="text-black">.</span></h1>
                    {/* <p class=" text-gray-600 text-md text-center max-w mb-10"></p> */}
                    <div class="mx-auto flex align-middle justify-center">
                        <article class="w-full md:w-[800px] md:items-center md:flex grid rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                            <div class="relative  flex items-end overflow-hidden rounded-xl">
                                <img src={bhanuka} alt="Mr. Bhanuka Dayawansa" className="w-[300px]" />

                            </div>

                            <div class="mt-1 p-2 md:p-10">
                                <h2 class="text-gray-900 font-semibold text-lg">Mr. Bhanuka Dayawansa</h2>
                                <p class="text-primary mt-1 text-sm font-semibold ">Instructor, Faculty of Engineering | Mechanical Engineering</p>


                            </div>
                        </article>
                    </div>
                </section>


                <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">Current executive board<span class="text-black">.</span></h1>
                <p class=" text-gray-600 text-md text-center max-w mb-10">The Executive Board of IEEE RAS of SLIIT.</p>

                <div class="mx-auto px-0 justify-items-center grid max-w-screen-lg grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">

                    {teamMembers.map((member, index) => (
                        <MemberCard
                            key={index}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            link={member.link}
                        />
                    ))}

                </div>
            </section>

        </>

    )
}