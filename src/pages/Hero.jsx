import React from 'react'
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section id='home' className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900  flex items-center justify-center">
    <div>
      <div>
        <p className='text-center text-purple-500 sm:text-2xl'>Hello, I'm</p>
        <h1 className="text-4xl font-bold text-white text-center py-2 sm:text-6xl ">Akshan Dhyani</h1>
        <h2 className='text-neutral-300 text-2xl font-bold text-center sm:text-4xl'>Frontend Devloper</h2>
        <p className='text-md text-gray-400 py-4 text-center sm:text-xl px-2'>Creating clean, interactive, and intuitive web interfaces Passionate about responsive design and user experience</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <button
        onClick={()=>{document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" })}}
         className=" group flex gap-2 mt-4 px-6 py-3 bg-blue-700 text-white rounded-md hover:px-7  transition-colors duration-300">
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
        onClick={()=>{
          document.getElementById("contact")
          ?.scrollIntoView({behavior: "smooth"})
        }}
        className='bg-none px-5 py-4 border-2 border-blue-700 text-white mt-4 rounded-md hover:bg-indigo-950 hover:text-white transition-colors duration-300'>
            Contact me
        </button>
      </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2" />
    </div>
  </div>
    </section>
  )
}

export default Hero
