import { FaCheckCircle } from "react-icons/fa";

const ParticipateSection = () => {
  return (
    <div
      className="bg-cover bg-center relative py-16 px-6 md:px-20"
      style={{
        backgroundImage: `url('../')`, // Replace this with your actual random image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Participate?</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaCheckCircle className="text-yellow-500 text-3xl" /> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Students</h3>
            <p className="text-sm text-center">
              Open to all students in registered private schools and all public and private schools across Osun State.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaCheckCircle className="text-yellow-500 text-3xl" /> {/* Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Schools & Teachers</h3>
            <p className="text-sm text-center">
              All teachers of the best students in each LGA, both private and public schools across Osun State.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateSection;
