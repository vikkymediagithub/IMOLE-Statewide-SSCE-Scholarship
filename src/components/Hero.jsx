import heroImage from "../assets/Gov whitee 1.png";
import heroBg from "../assets/bbbg.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../components/animation";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-black overflow-hidden">
      {/* Background Overlay with Transparent Black */}
      <div
        className="absolute inset-0 bg-black opacity-10 pointer-events-none "
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Text Section */}
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start space-y-4 max-w-l relative z-10 text-white mb-6 md:mb-0  mt-10 px-6 md:px-10"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          IMOLE Statewide SSCE Scholarship
        </motion.h1>
        <p className="text-lg md:text-xl leading-relaxed">
          A groundbreaking initiative aimed at rewarding academic excellence and
          supporting education across Osun State.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="px-6 py-3 bg-[#843000] text-white rounded-md hover:bg-[#6c2600] mt-6"
        >
          Contact us
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <div className="flex justify-center w-full md:w-1/2 relative z-10 mt-6 md:mt-0">
        <motion.img
          variants={zoomInVariants}
          initial="hidden"
          whileInView="visible"
          src={heroImage}
          alt="Hero Illustration"
          className="object-contain h-[350px] md:h-[500px] lg:h-[650px] xl:h-[700px] w-auto lg:mb-[-30px] mb-10"
        />
      </div>
    </section>
  );
};

export default Hero;
