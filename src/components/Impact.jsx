import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'



const Impact = () => {
    const impactRef1 = useRef(null)
    const impactRef2 = useRef(null)
    const impactRef3 = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    

    // useEffect(() => {
    //     const impact1 = impactRef1.current
    //     const impact2 = impactRef2.current
    //     const impact3 = impactRef3.current
    //     gsap.to(function(){impact1, {
    //         rotateX: 0,
    //         // translateX:'-100px',
    //         scrollTrigger: {
    //             trigger: impact1,
    //             start: 'top center',
    //             end: 'bottom top',
    //             markers: true,
    //             // scrub: 1,
    //         }

    //     }})
    // }, [])

    useGSAP(()=>{
        gsap.from('.impact', {
            transform: 'rotateX(90deg)',
            stagger:0.5,
            // translateX:'-100px',
            scrollTrigger: {
                trigger: '.impact',
                start: 'top 60%',
                end: 'top -80%',
                markers: true,
                scrub: 0.5,
            }
        })
    })
    
    
  return (
    <div>
        <div className="h-[200vh] w-full font-[anzo3] justify-evenly text-center text-[25rem] md:text-[20rem] leading-[30rem] " >
            <div className="impact perspective-1000">BACKEND VIRTUOSO</div>
            <div className="impact perspective-1000"> FRONTEND SEEKER</div>
            <div className="impact perspective-1000"> ML TRAILBLAZER</div>

        </div>
    </div>
  )
}

export default Impact