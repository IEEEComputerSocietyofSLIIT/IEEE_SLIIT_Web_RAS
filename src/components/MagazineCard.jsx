import joyBots2Image from "../assets/joyBoats_2.0.png"; 

export default function JoybotsMagazine() {
  const magazine = {
    name: "JOYBOTS 2.0",
    description:
      "Joybots 2.0 is the second edition of our very own online magazine by the IEEE Robotics and Automation Society of SLIIT. It brings you exciting student projects, industry insights, highlights from our events, and a sneak peek into future projects.",
    image: joyBots2Image,
    organizer: "IEEE Robotics and Automation Society Chapter, SLIIT",
    stayUpdatedLink: "https://tinyurl.com/mr2ek62z",
    stayUpdatedText: "Read Now",
  };

  return (
    <div id="magazine" className="container mx-auto px-4 mt-10">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center space-y-8 mb-10">
        <h2 className="text-4xl font-bold text-center text-primary">
          Explore Magazine
        </h2>
      </div>

      {/* Card */}
      <div className="flex justify-center items-center">
        <div
          className="max-w-lg w-full bg-white rounded-2xl shadow-lg overflow-hidden 
                     transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Full Magazine Image */}
          <img
            src={magazine.image}
            alt={magazine.name}
            className="w-full max-h-[350px] object-contain bg-black"
          />

          {/* Card Body */}
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {magazine.name}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {magazine.description}
            </p>
            <p className="text-xs text-gray-500 italic">
              Organized by {magazine.organizer}
            </p>

            {/* Button */}
            <a
              href={magazine.stayUpdatedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className="w-full py-2 px-4 rounded-xl text-white font-medium 
                           bg-gradient-to-r from-purple-600 to-pink-500 
                           hover:opacity-90 transition"
              >
                {magazine.stayUpdatedText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
