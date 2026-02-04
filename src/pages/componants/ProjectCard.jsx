import React from "react";

function ProjectCard({ title, description, imageUrl, technologies, githubUrl, livedemoUrl }) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg 
                    hover:shadow-2xl transition-all duration-300 
                    hover:scale-105 max-w-md mx-auto my-5"
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover transition-all duration-300 
                    hover:scale-105"
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl text-gray-800 font-bold">{title}</h2>

        <p className="md:text-lg text-md text-gray-600 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:cursor-pointer hover:bg-gray-300 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex mt-4 justify-between items-center gap-3">
          <button
          onClick={()=> window.open(livedemoUrl, "_blank")}
           className="flex-4 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
            Live Demo
          </button>
          <button
          onClick={()=> window.open(githubUrl, "_blank")}
           className="flex-1  rounded-lg transition flex">
            <i className="fa-brands fa-square-github  text-4xl hover:scale-105 hover- transition-all duration-75"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
