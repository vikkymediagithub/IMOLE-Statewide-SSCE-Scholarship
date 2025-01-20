import { motion } from "framer-motion";
import studentImg from "../assets/ph_student-light.png";
import schoolImg from "../assets/la_school.png";
import teacherImg from "../assets/hugeicons_teacher.png";

const ResponsiveCards = () => {
  const cardData = [
    {
      title: "Students",
      img: studentImg,
      content: [
        {
          heading: "100,000 Naira Scholarship Award",
          description:
            "for the best male and female students in both private and public schools from each Local Government Area (LGA).",
        },
        {
          heading: "1 Million Naira Scholarship Award",
          description: "for the overall best student in the state.",
        },
      ],
    },
    {
      title: "Schools",
      img: schoolImg,
      content: [
        {
          heading: "500,000 Naira Educational Support",
          description:
            "for the private schools of each of the best students in their LGAs.",
        },
      ],
    },
    {
      title: "Educators",
      img: teacherImg,
      content: [
        {
          heading: "Exciting Gifts",
          description:
            "for Principals of the public schools of the best students.",
        },
        {
          heading: "Teacher Rewards",
          description:
            "Exciting gifts for all teachers of the best students in each LGA, both private and public schools.",
        },
      ],
    },
  ];

  // Animation variants
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

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      className="px-7 py-12"
    >
      {/* Title and Description */}
      <motion.div
        variants={cardVariant}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-10">
          About the Scholarship
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          This groundbreaking initiative aims at rewarding academic excellence
          and supporting education across Osun State. This scholarship is
          designed to inspire students, empower schools, and celebrate
          educators. It fosters a culture of excellence and encourages
          outstanding academic performance among secondary school students in
          Osun State. It’s more than a scholarship—it’s a celebration of hard
          work and dedication.
        </p>
      </motion.div>

      {/* Featuring Section */}
      <motion.h2
        variants={cardVariant}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center"
      >
        Featuring
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariant}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Title and Icon */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              <img
                src={card.img}
                alt={`${card.title} Icon`}
                className="h-12 w-12 object-contain"
              />
            </div>
            {/* Content */}
            <div className="space-y-4">
              {card.content.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-base font-semibold text-gray-800">
                    {item.heading}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ResponsiveCards;
