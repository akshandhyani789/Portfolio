import React from "react";
import ProjectCard from "./componants/ProjectCard"; 

function Projects() {

  const ProjectDetail = [
    {
      title: "Github Users search",
      description:
        "React-based web application that allows users to search GitHub profiles in real time using the GitHub REST API. ",
      imageUrl:
        "https://repository-images.githubusercontent.com/496705465/b8c259d0-7177-492a-b285-f0599d31ac90",
      technologies: ["React", "Tailwind", "Javascript"],
      githubUrl: "https://github.com/akshandhyani789/GithubUserSearch-Reactjs",
      livedemoUrl: "https://github-user-search-reactjs-3571.vercel.app/"
    },{
      title: "Expense Tracker",
      description:
        "A React expense tracking application that enables users to record and manage expenses.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedch_2ecliNl5opcklePx8Ts1C7gM-OTexg&s",
      technologies: ["React", "Tailwind", "Javascript"],
      githubUrl: "https://github.com/akshandhyani789/ExpenseTracker",
      livedemoUrl: "https://expense-tracker-eight-gray-72.vercel.app/",
    },{
      title: "MoodCraft webapp",
      description:
        "A mood-based task recommendation web application that suggests task based on users' current moods.",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOU2LzZt8A1G6AfhAl81dsMnLEn7U3pPNjRTkqy1O6zrqLsM1W",
      technologies: ["Html", "Css", "Javascript"],
      githubUrl: "https://github.com/akshandhyani789/moodcraft-webapp",
      livedemoUrl: "https://akshandhyani789.github.io/moodcraft-webapp/",
    }
  ]

  return (
    <section id="projects" className="my-10 p-5 bg-gray-50">
      <h1 className="text-2xl font-bold text-center my-5 md:text-4xl ">Featured Projects</h1>
      <span className=" block h-1 w-30 bg-blue-800 border-b-blue-800 mx-auto mb-5"></span>

      <p className="text-lg text-center mb-10">
        Here are some of my recent projects that showcase my skills and
        experience
      </p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center px-10 md:px-2">
        {ProjectDetail.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            livedemoUrl={project.livedemoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
