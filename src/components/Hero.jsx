// src/components/HeroSection.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-4xl px-6 mx-auto text-white">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
          IMOLE Statewide SSCE Scholarship,
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          A groundbreaking initiative aimed at rewarding academic excellence and supporting education across Osun State.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#843000] text-white font-medium rounded-md hover:bg-[#6c2600]">
          Contact us
        </button>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 right-0 h-[60%] sm:h-[80%] w-auto">
        <img
          src="/src/assets/Gov whitee 1.png" // Replace with the image path
          alt="Person"
          className="h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
