// src/components/Hero.jsx
import heroImage from "../assets/Gov whitee 1.png"; 

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-gray-50">
      {/* Text Section */}
      <div className="flex flex-col items-start md:items-start space-y-4 max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover the best solutions to enhance your business and life. We’re here to deliver exceptional results and help you succeed.
        </p>
        <button className="px-6 py-3 bg-[#843000] text-white rounded-md hover:bg-[#6c2600]">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-6 md:mt-0 md:ml-8 flex justify-center w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="object-cover w-full max-w-md md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
