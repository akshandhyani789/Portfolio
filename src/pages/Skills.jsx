import React from 'react'
import SkillCard from './componants/SkillCard'

function Skills() {
    const skillContainer=[
        {
            category:"Languages",
            Icon:"fa-solid fa-code",
            color:"bg-indigo-500",
            skills:[
                {name:"HTML"},
                {name:"JavaScript"},
                {name:"CSS"},
                {name:"C"},
                {name:"Java"}
            ]
        },
         {
            category:"Frameworks & Libraries",
            Icon:"fa-solid fa-boxes-stacked",
            color:"bg-blue-900",
            skills:[
                {name:"React"},
                {name:"Tailwind"},
                {name:"Bootstrap"}
            ]
        },
         {
            category:"Tools",
            Icon:"fa-solid fa-code-branch",
            color:"bg-pink-600",
            skills:[
                {name:"Git"},
                {name:"GitHub"}
            ]
        }
    ]

  return (
    <section id='skills' className='p-5'>
            <h1 className='text-4xl font-bold text-center my-5 pt-5'>Skills & Technologies</h1>
      <span className=" block h-1 w-30 bg-blue-800 border-b-blue-800 mx-auto mb-10"></span>

            <div className='grid lg:grid-cols-3 gap-8 mb-16 px-10'>
                <SkillCard iconCode={skillContainer[0].Icon} cardHeading={skillContainer[0].category} skills={skillContainer[0].skills} iconColor={skillContainer[0].color}/>
                <SkillCard iconCode={skillContainer[1].Icon} cardHeading={skillContainer[1].category} skills={skillContainer[1].skills} iconColor={skillContainer[1].color}/>
                <SkillCard iconCode={skillContainer[2].Icon} cardHeading={skillContainer[2].category} skills={skillContainer[2].skills} iconColor={skillContainer[2].color}/>
            </div>
    </section>
  )
}

export default Skills
