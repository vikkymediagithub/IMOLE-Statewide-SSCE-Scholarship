// import React from "react";

const HowToWinSection = () => {
    return (
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How to Win
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-12">
            It’s quite simple! No application, no payment!
          </p>
  
          {/* Steps Section */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                As a Student:
              </h4>
              <p className="text-gray-600 text-sm">
                Study diligently and aim to become the best-performing student in
                the WAEC SSCE 2025 in your Local Government or overall best in the
                State.
              </p>
            </div>
  
            {/* Divider for Desktop */}
            <div className="hidden md:block border-l border-gray-300"></div>
  
            {/* Step 2 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                As a Teacher/School:
              </h4>
              <p className="text-gray-600 text-sm">
                Prepare and guide your students to excel in their academics and
                the upcoming WAEC SSCE 2025.
              </p>
            </div>
  
            {/* Divider for Desktop */}
            <div className="hidden md:block border-l border-gray-300"></div>
  
            {/* Step 3 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Announcement of Winners:
              </h4>
              <p className="text-gray-600 text-sm">
                Winners will be selected and announced after the release of the
                WAEC SSCE 2025 results.
              </p>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join the Movement!
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Prepare, participate, and win amazing rewards! Together, we can
              build a brighter future for Osun State through the power of
              education.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowToWinSection;
  