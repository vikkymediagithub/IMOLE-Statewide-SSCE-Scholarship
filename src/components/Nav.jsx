// src/components/NavBar.jsx
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/src/assets/image 16643.png"
          alt="Logo"
          className="h-10 w-10"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="px-4 py-2 bg-[#843000] text-white rounded-md hover:bg-[#6c2600]">
          Contact Us
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md z-10 flex flex-col items-center py-4 space-y-4">
          <button className="px-4 py-2 bg-[#843000] text-white rounded-md hover:bg-[#6c2600]">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;