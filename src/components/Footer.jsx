// import React from "react";
import logoImg from "../assets/ECG png (1) 4.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 md:flex md:justify-between md:items-center">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img
              src={logoImg}
              alt="Osun State Logo"
              className="h-10 w-10"
            />
            <p className="text-sm text-gray-600">
              The Osun Business Registration Portal simplifies the process of
              obtaining or renewing your business certificates.
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            © 2024 Osun State Government. All Rights Reserved.
          </p>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p className="text-sm font-semibold text-gray-600">
            Supported By:
          </p>
          <img
            src="ecg-logo.png"
            alt="ECG Logo"
            className="h-8 mx-auto md:mx-0"
          />
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="mt-4 space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
