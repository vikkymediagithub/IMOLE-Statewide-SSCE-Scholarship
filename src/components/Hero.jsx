import heroImage from "../assets/Gov whitee 1.png";
import heroBg from "../assets/bbbg.jpg";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-black">
      {/* Background Overlay with Transparent Black */}
      <div
        className="absolute inset-0 bg-black opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Text Section */}
      <div className="flex flex-col items-start md:items-start space-y-4 max-w-lg relative z-10 text-white mb-6 md:mb-0 md:mr-8">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          IMOLE Statewide SSCE Scholarship,
        </h1>
        <p className="text-lg md:text-xl">
          A groundbreaking initiative aimed at rewarding academic excellence and supporting education across Osun State.
        </p>
        <button className="px-6 py-3 bg-[#843000] text-white rounded-md hover:bg-[#6c2600]">
          Contact us
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-6 md:mt-0 md:ml-8 flex justify-center w-full md:w-1/2 relative z-10">
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
