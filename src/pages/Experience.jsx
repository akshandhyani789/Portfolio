import React from "react";
import ExperienceCard from "./componants/ExperienceCard";

function Experience() {
  const ExperienceDetails = [
    {
      WorkTitle: "Frontend Developer Intern",
      Orgname: "CodeVeda Technologies",
      WorkDuration: "Dec 2025 - Jan 2026",
      WorkDesc:
        "Developed and optimized frontend components using React and Tailwind. Improved application performance by 20% through code optimization and best practices. Assisted in converting design mockups into functional web pages, Improved UI consistency and usability across multiple screens",
      Technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
  ];

  return (
    <div id="experiences" className="p-5 my-10">
      <h1 className=" text-2xl md:text-4xl font-bold text-center py-5">Experience</h1>
      <span className=" block h-1 w-30 bg-blue-800 border-b-blue-800 mx-auto mb-5"></span>
      <p className="text-lg font-medium text-center ">
        My professnol jurney and intership experience
      </p>
      <div className="flex flex-col gap-6 mt-10 justify-center items-center">
        {ExperienceDetails.map((experience, index) => (
          <ExperienceCard
            key={index}
            WorkTitle={experience.WorkTitle}
            Orgname={experience.Orgname}
            WorkDuration={experience.WorkDuration}
            WorkDesc={experience.WorkDesc}
            Technologies={experience.Technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
