import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
