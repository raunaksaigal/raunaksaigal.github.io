import React, {useEffect, useRef } from 'react'
import Landing from './components/Landing'
import Impact from './components/Impact'
import Scene from './components/Scene'
import Aboutme from './components/Aboutme'
import Stack from './components/Stack'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Mentors from './components/Mentors'
import Connect from './components/Connect'
import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)


const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
  }, [])

  useGSAP(()=>{
    gsap.to("body",{
      backgroundColor:"#F07167",
      scrollTrigger:{
        trigger:".mentorHead",
        start:"top top",
        end:"top -50%",
        scrub:1
      }
    })

   
  })
  
  return (
    <div className="w-screen overflow-x-hidden">
      <Landing/>
      <Scene/>
      <Impact />
      <Aboutme />
      <Stack />
      <Projects />
      <WorkExperience />
      <Mentors />
      <Connect />
    </div>
    
  
  )
}

export default App