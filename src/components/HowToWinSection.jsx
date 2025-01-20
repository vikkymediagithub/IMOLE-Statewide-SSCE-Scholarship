import { motion } from "framer-motion";

const HowToWinSection = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const headingVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      id="how-to-win"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="bg-gray-50 py-16 px-6 md:px-20 mt-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <motion.h2
          variants={headingVariant}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          How to Win
        </motion.h2>
        <motion.p
          variants={itemVariant}
          className="text-gray-600 text-sm md:text-base mb-12"
        >
          It’s quite simple! No application, no payment!
        </motion.p>

        {/* Steps Section */}
        <motion.div
          variants={containerVariant}
          className="flex flex-col md:flex-row items-start justify-between gap-8"
        >
          {/* Step 1 */}
          <motion.div
            variants={itemVariant}
            className="flex-1 text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              As a Student:
            </h4>
            <p className="text-gray-600 text-sm">
              Study diligently and aim to become the best-performing student in
              the WAEC SSCE 2025 in your Local Government or overall best in the
              State.
            </p>
          </motion.div>

          {/* Divider for Desktop */}
          <motion.div
            variants={itemVariant}
            className="hidden md:block w-px bg-gray-300"
          ></motion.div>

          {/* Step 2 */}
          <motion.div
            variants={itemVariant}
            className="flex-1 text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Announcement of Winners:
            </h4>
            <p className="text-gray-600 text-sm">
              Winners will be selected and announced after the release of the
              WAEC SSCE 2025 results.
            </p>
          </motion.div>

          {/* Divider for Desktop */}
          <motion.div
            variants={itemVariant}
            className="hidden md:block w-px bg-gray-300"
          ></motion.div>

          {/* Step 3 */}
          <motion.div
            variants={itemVariant}
            className="flex-1 text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              As a Teacher/School:
            </h4>
            <p className="text-gray-600 text-sm">
              Prepare and guide your students to excel in their academics and
              the upcoming WAEC SSCE 2025.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariant}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join the Movement!
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Prepare, participate, and win amazing rewards! Together, we can
            build a brighter future for Osun State through the power of
            education.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowToWinSection;
