import { motion } from "framer-motion";
import ecgLogo from "../assets/ECG png (1) 4.png";
import osunLogo from "../assets/image 16643.png";

const Footer = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="bg-gray-50 py-10 px-6"
    >
      <motion.div
        variants={fadeUpVariant}
        className="max-w-7xl mx-auto"
      >
        {/* Top Section */}
        <motion.div
          variants={containerVariant}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Logo and Description */}
          <motion.div
            variants={itemVariant}
            className="flex items-center space-x-4 mb-6 md:mb-0"
          >
            <img
              src={osunLogo}
              alt="Osun State Logo"
              className="w-16 h-16"
            />
            <p className="text-sm md:text-base text-gray-600">
              The Osun Business Registration Portal simplifies the process of
              obtaining or renewing your business certificates.
            </p>
          </motion.div>

          {/* Supported By */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col items-center"
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Supported By:
            </h3>
            <img
              src={ecgLogo}
              alt="ECG Logo"
              className="w-32"
            />
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariant}
            className="flex space-x-4 mt-3"
          >
            <a
              href="#"
              className="text-[#A36A00] hover:text-[#843000] text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-[#A36A00] hover:text-[#843000] text-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-[#A36A00] hover:text-[#843000] text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-10 border-t border-gray-300 pt-6 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2024 Osun State Government. All Rights Reserved.</p>
            <p>Powered by ECG</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
