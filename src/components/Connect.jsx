// import React from 'react'

// const Connect = () => {
//   return (
//     <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center self-center' >
//         <h1 className='text-[4rem] text-center md:text-[9rem] font-[heavitas]' >Lets <br className=' md:hidden' />Connect</h1>
//         <br />
//         <div className="flex justify-around items-center self-center w-[70vw]">
//           <div className=""><img className='w-[100px]' src="/icons/github.png" alt="" /></div>
//           <div className=""><img className='w-[100px]' src="/icons/insta.png" alt="" /></div>
//           <div className=""><img className='w-[100px]' src="/icons/linkedin.png" alt="" /></div>
//           <div className=""><img className='w-[100px]' src="/icons/x.png" alt="" /></div>
//         </div>
//         <img className="absolute w-[120vw] left-[0px]" src="/assets/waves.svg" alt="" />
//     </div>
//   )
// }

// export default Connect

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Connect = () => {

  
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

 
  let xPercent = 0;


useGSAP(()=>{
  // gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
  // requestAnimationFrame(animate);
  animate()
})

const animate = () => {
  if(xPercent <= -100){
    xPercent = 0;
  }

  gsap.set(firstText.current, {xPercent: xPercent})
  gsap.set(secondText.current, {xPercent: xPercent})
  requestAnimationFrame(animate);

  xPercent -= 0.1;
}


  return (
    <div className='relative h-[100vh] w-[100vw] flex flex-col justify-center items-center self-center' >
        <div className="flex justify-around -translate-y-full border-t-8 border-b-8" ref={slider} >
          <p className='text-[4rem] md:text-[9rem] font-[heavitas] text-nowrap' ref={firstText} >|Reach Out, Let's Connect|</p>
          <p className='text-[4rem] md:text-[9rem] font-[heavitas] absolute text-nowrap left-full' ref={secondText} >|Reach Out, Let's Connect|</p>


        </div>
        <br />
        <div className="flex justify-around items-center self-center w-[70vw]">
          
          
          
          
          <div className=""><a href="https://github.com/raunaksaigal"><img className='w-[6vw]' src="/icons/github.png" alt="" /></a></div>
          {/* <div className=""><a href=""><img className='w-[6vw]' src="/icons/insta.png" alt="" /></a></div> */}
          <div className=""><a href="https://www.linkedin.com/in/raunaksaigal/"><img className='w-[6vw]' src="/icons/linkedin.png" alt="" /></a></div>
          <div className=""><a href="https://x.com/bl4ck_81rd"><img className='w-[6vw]' src="/icons/x.png" alt="" /></a></div>
        </div>
        <img className="absolute top-full -translate-y-full w-[100vw] left-[0px] -z-10" src="/assets/waves.svg" alt="" />
    </div>
  )
}

export default Connect





 