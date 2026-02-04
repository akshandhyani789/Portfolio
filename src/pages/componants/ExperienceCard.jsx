import React from "react";

function ExperienceCard({ WorkTitle, Orgname, WorkDuration, WorkDesc, Technologies }) {
  return (
    <div className="w-full max-w-3xl p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        <span className="w-10 h-10 flex justify-center items-center bg-blue-600 text-white rounded-full mr-4">
          <i className="fa-solid fa-briefcase w-full"></i>
        </span>
        <span>
          <h2 className="text-xl font-bold">{WorkTitle}</h2>
          <p className="text-blue-600 text-md">{Orgname}</p>
        </span>
      </div>

      <div>
        <i className="fa-regular fa-calendar"></i>
        <span>{WorkDuration}</span>
        <ul>
            <li>{WorkDesc}</li>
        </ul>
        <span>Technologies: <span>{Technologies}</span></span>
      </div>
    </div>
  );
}

export default ExperienceCard;
