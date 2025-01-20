import { motion } from "framer-motion";
import heroBg from "../assets/bbbg.jpg";
import studentImg from "../assets/ph_seal-check-fill.png";
import teacherImg from "../assets/ph_seal-check-fill.png";

const ParticipateSection = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const headingVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      id="participate"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="bg-cover bg-center relative py-16 px-6 md:px-20 mt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Transparent Black Background */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative text-center text-white mt-9">
        {/* Section Heading */}
        <motion.h2
          variants={headingVariant}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Who Can Participate?
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
          variants={containerVariant}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            className="bg-white text-black rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={studentImg}
                alt="Student Icon"
                className="h-12 w-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Students</h3>
            <p className="text-sm text-center">
              Open to all students in registered private schools and all public and private schools across Osun State.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            className="bg-white text-black rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={teacherImg}
                alt="Teacher Icon"
                className="h-12 w-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">
              Schools & Teachers
            </h3>
            <p className="text-sm text-center">
              All teachers of the best students in each LGA, both private and
              public schools across Osun State.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ParticipateSection;
