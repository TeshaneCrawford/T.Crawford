import React from 'react'
import Projects from './projectSection'
import About from './aboutSection'
import Skills from './skillSection'
import Services from './serviceSection'

const Landing: React.FC = () => {
  return (
    <>
      <About />
      <Skills />
      <Services />
      <Projects />
    </>
  )
}

export default Landing