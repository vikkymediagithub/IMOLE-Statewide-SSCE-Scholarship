import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/image 16643.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Observe sections and update active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "participate", "how-to-win", "contact-us"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu on mobile after clicking
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 md:px-28 py-4">
    <div className="flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 md:h-12 md:w-12 object-contain"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center flex-grow space-x-6">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "participate", label: "Participate" },
          { id: "how-to-win", label: "How to Win" },
        ].map(({ id, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection(id)}
            className={`text-gray-800 hover:text-[#843000] ${
              activeSection === id ? "font-bold text-[#843000]" : ""
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Contact Us Button */}
      <motion.div className="hidden md:flex" whileHover={{ scale: 1.1 }}>
        <button
          onClick={() => scrollToSection("contact-us")}
          className={`px-4 py-2 rounded-md text-white ${
            activeSection === "contact-us"
              ? "bg-[#6c2600]"
              : "bg-[#843000] hover:bg-[#6c2600]"
          }`}
        >
          Contact Us
        </button>
      </motion.div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden absolute top-full left-0 w-full bg-white shadow-md z-10"
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "participate", label: "Participate" },
          { id: "how-to-win", label: "How to Win" },
        ].map(({ id, label }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection(id)}
            className={`text-gray-800 hover:text-[#843000] ${
              activeSection === id ? "font-bold text-[#843000]" : ""
            }`}
          >
            {label}
          </motion.button>
        ))}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("contact-us")}
          className={`px-4 py-2 rounded-md text-white ${
            activeSection === "contact-us"
              ? "bg-[#6c2600]"
              : "bg-[#843000] hover:bg-[#6c2600]"
          }`}
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  </nav>
);
};

export default NavBar;

