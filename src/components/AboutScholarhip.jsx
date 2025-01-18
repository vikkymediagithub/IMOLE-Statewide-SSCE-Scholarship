const AboutScholarship = () => {
    return (
      <section className="px-6 py-12 bg-gray-50">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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
        </div>
  
        {/* Featuring Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Featuring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                Students
                <span className="text-[#843000]">
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
                      d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l-9-5m9 5l9-5"
                    />
                  </svg>
                </span>
              </h4>
              <p className="text-gray-600 mt-4">
                100,000 Naira Scholarship Award for the best male and female
                students in both private and public schools from each Local
                Government Area (LGA).
              </p>
              <p className="mt-2 text-gray-600 font-bold">
                1 Million Naira Scholarship Award for the overall best student in
                the state.
              </p>
            </div>
  
            {/* Schools */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                Schools
                <span className="text-[#843000]">
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
                      d="M3 10l6 6 7-7-4-4-7 7"
                    />
                  </svg>
                </span>
              </h4>
              <p className="text-gray-600 mt-4">
                500,000 Naira Educational Support for the private schools of each
                of the best students in their LGAs.
              </p>
            </div>
  
            {/* Educators */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                Educators
                <span className="text-[#843000]">
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
                      d="M4 16v1m4-1v1m4-4v5m4-4v5m4-12v11"
                    />
                  </svg>
                </span>
              </h4>
              <p className="text-gray-600 mt-4">
                Exciting Gifts For Principals of the public schools of the best
                students.
              </p>
              <p className="mt-2 text-gray-600">
                Exciting Gifts For Teachers for all teachers of the best students
                in each LGA, both private and public schools.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutScholarship;
  