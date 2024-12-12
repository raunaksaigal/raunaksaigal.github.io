import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import 'swiper/css';

// import required modules
import { EffectCards } from 'swiper/modules';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Mentors = () => {
    
  useGSAP(()=>{
    gsap.to(".mentorHead",{
      scrollTrigger:{
        trigger:".mentorHead",
        start:"top 80%",
        end: "top -100%",
        scrub: true
      },
      x:"-250vw",
    })
  })

    return (
        <div className='w-full h-[200vh] mt-60 pt-20 flex flex-col justify-center' >
          <h1 className='mentorHead font-Russo text-[10rem] underline mb-[30vw] translate-x-[200vw] w-[2500%]' >What my mentors say about me</h1>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="h-[100%] flex flex-col p-2 justify-around self-center text-center items-center align-middle">
                <h1 className="mt-11 font-[anzo1] text-[1.3rem] ">Saikat Bandyopadhyay <br /> <h2 className='font-mono text-[0.8rem]' ><br />Assistant Professor, Netaji Subhash Engineering College</h2></h1>
                <div className="font-[anzo2] text-[0.9rem]">Lorem ipsum dolor0 sit amet consectetur adipisicing elit. Dignissimos quaerat eum aliquam? Ipsum natus, pariatur neque corporis tempora quidem ut ab adipisci asperiores iste assumenda debitis minima rerum voluptatibus molestias.</div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="flex justify-center items-center align-middle"></div></SwiperSlide>
            
          </Swiper>
        </div  >
      );
}

export default Mentors