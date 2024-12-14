import React, { useRef, useEffect} from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Aboutme = () => {
  const aboutTextRef = useRef(null)
  
  // console.log(text.chars)

  useEffect(() => {
    // const text = new SplitType(aboutTextRef.current)
    
  
  }, [])
  
  useGSAP(()=>{
    
    const text = new SplitType('.aboutText',{ types: 'chars' })

    gsap.from(text.chars, {
      scrollTrigger:{
        trigger:".aboutText",
        start:'top 20%',
        end:"top -400%",
        scrub:true,
        pin:true,
      },
      opacity:0.2,
      // y:-100,
      stagger:0.1
    } )

  })

// mainProjectContainer

  return (
    <div className='aboutMe flex justify-center h-[500vh]'>
        <div className="aboutText text-[0.8rem] w-[70vw] md:w-[70vw] font-[anzo1] md:text-[2rem] text-left " ref={aboutTextRef}>
            Hello There 👋 I am Raunak Saigal, a passionate technologist specializing in backend development and research in Artificial Intelligence and Machine Learning. As a B.Tech student at Netaji Subhash Engineering College, pursuing a degree in Artificial Intelligence and Machine Learning, I strive to bridge the gap between theoretical advancements and practical applications in the AI/ML domain. While backend development is my forte, I also have working experience with frontend technologies, complementing my holistic understanding of software engineering.
        </div>
    </div>
  )
}

export default Aboutme