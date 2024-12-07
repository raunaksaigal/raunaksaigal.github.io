import React, {useRef, useEffect} from 'react'

const Landing = () => {

    return (
    <div>
        <div className="w-full h-screen flex flex-col justify-center p-[10rem] font-[anzo1] absolute">
            <img src="/assets/yinyang.jpg" alt="" className='w-[400px]' />
           <div className="text-[5rem]"> RAUNAK SAIGAL</div>
           <div className="font-mono text-[3rem]">BACKEND DEVELOPER AND MACHINE LEARNING ENTHUSIAST</div>
           <div className="text-[2rem] mt-[2rem]">BASED IN KOLKATA</div>
        </div>

    </div>
  )
}

export default Landing