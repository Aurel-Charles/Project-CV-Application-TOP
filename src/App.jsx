import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GeneralInfoComponent from './components/general-info'
import EducationalInfoComponent from './components/educational-info'
import ExperienceInfoComponent from './components/experience-info'


function App() {


  return (
    <>
      <section id="center">
        <GeneralInfoComponent/>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <EducationalInfoComponent/>

        <ExperienceInfoComponent/>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
