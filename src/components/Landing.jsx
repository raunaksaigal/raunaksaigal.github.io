import React, {useRef, useEffect} from 'react'

const Landing = () => {

    return (
    <div>
        <div className="w-full h-screen flex flex-col justify-center p-[4rem] lg:p-[10rem] font-[anzo1] md:absolute">
            <img src="/assets/yinyang.png" alt="" className='w-[100px] md:w-[400px]' />
           <div className="text=[10rem] md:text-[5rem]"> RAUNAK SAIGAL</div>
           <div className="text=[10rem] font-mono md:text-[3rem]">BACKEND DEVELOPER AND MACHINE LEARNING ENTHUSIAST</div>
           <div className="text=[10rem] md:text-[2rem] mt-[2rem]">BASED IN KOLKATA</div>
        </div>

    </div>
  )
}

export default Landing