import React from 'react'

function SkillCard({ iconCode, cardHeading, skills, iconColor }) {
  return (
    <div className="
      bg-white/70 backdrop-blur-xl
      border border-gray-200
      shadow-lg hover:shadow-2xl
      p-6 w-full rounded-2xl
      transition-all duration-300
      hover:-translate-y-1
    ">
      <button className={`
        ${iconColor}
        w-12 h-12 rounded-xl
        flex items-center justify-center
        shadow-md
      `}>
        <i className={`${iconCode} text-white text-xl`}></i>
      </button>

      <h2 className="text-xl font-semibold text-gray-800 my-4">
        {cardHeading}
      </h2>

      <div className="flex flex-col gap-2 space-y-5">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="
              text-sm font-medium
              text-indigo-600
              bg-slate-100
              border border-slate-200
              rounded-full
              px-4 py-1.5
              hover:bg-indigo-50 hover:text-indigo-900 hover:cursor-pointer
              transition
            "
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
