import { motion } from "framer-motion";

const ContactSection = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      id="contact-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="bg-gray-50 py-10 px-6"
    >
      <motion.div variants={headingVariant} className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Have questions? Contact us
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariant}
        className="flex justify-center items-center space-x-6"
      >
        {/* WhatsApp */}
        <motion.div
          variants={itemVariant}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-md bg-[#A36A00] text-white shadow-md hover:bg-[#843000] cursor-pointer"
        >
          <i className="fab fa-whatsapp text-2xl md:text-3xl lg:text-4xl"></i>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={itemVariant}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-md border-2 border-[#A36A00] text-[#A36A00] hover:bg-[#A36A00] hover:text-white cursor-pointer"
        >
          <i className="fas fa-envelope text-2xl md:text-3xl lg:text-4xl"></i>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={itemVariant}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-md border-2 border-[#A36A00] text-[#A36A00] hover:bg-[#A36A00] hover:text-white cursor-pointer"
        >
          <i className="fas fa-phone text-2xl md:text-3xl lg:text-4xl"></i>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
