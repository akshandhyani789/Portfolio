import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full text-center my-10">
        <h1 className="text-center text-3xl font-bold py-5 md:text-4xl">
          About Me
        </h1>
      <span className=" block h-1 w-30 bg-blue-800 border-b-blue-800 mx-auto"></span>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-5">
          
          {/* Image Section */}
          <div className="w-full p-15">
            <img
              src="src\assets\myImage.jpg"
              alt="About"
              className="w-full max-h-150 rounded-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4 ">
              Hi, I'm Akshan Dhyani
            </h2>

            <p className="mb-4 text-gray-700 text-lg">
              I am a Frontend Developer with a strong foundation in HTML, CSS,
              and JavaScript, and hands-on experience using Tailwind CSS and
              Bootstrap to build responsive and user-friendly interfaces.
            </p>

            <p className="mb-6 text-gray-700 text-lg">
              I also have a basic understanding of React, Git, GitHub, and Java,
              which helps me collaborate effectively and understand full project
              workflows. I’m passionate about creating clean, efficient, and
              visually appealing web experiences while continuously learning new
              technologies.
            </p>

            {/* Features */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <span className="flex items-center gap-2 hover:bg-indigo-300 p-4 rounded-2xl transition-colors">
                <i className="fa-solid fa-code text-indigo-500"></i>
                Clean Code
              </span>
              <span className="flex items-center gap-2 hover:bg-blue-300 p-4 rounded-2xl transition-colors">
                <i className="fa-solid fa-rocket text-blue-900"></i>
                Fast Performance
              </span>
              <span className="flex items-center gap-2 hover:bg-pink-300 p-4 rounded-2xl transition-colors">
                <i className="fa-regular fa-heart text-pink-600"></i>
                Passionate
              </span>
            </div>

            {/* Button */}
            <a 
            href="./AkshanDhyani_Resume.pdf"
            download
            className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition hover:scale-105">
              <i className="fa-solid fa-download mr-2"></i>
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
