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
        trigger:".mentorDiv",
        start:"top 80%",
        end: "top -200%",
        scrub: true
      },
      x:"-250vw",
    })
  })

    return (
        <div className='mentorDiv w-full h-[200vh] mt-60 pt-20 flex flex-col justify-center' >
          <h1 className='mentorHead font-Russo text-[3rem] md:text-[8rem] underline mb-[30vw] translate-x-[200vw] w-[2500%]' >What my mentors say about me</h1>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="h-[100%] flex flex-col p-2 justify-around self-center text-center items-center align-middle">
                <h1 className="mt-11 font-[anzo1] md:text-[1.3rem] text-[1rem] ">Saikat Bandyopadhyay <br /> <span className='font-mono md:text-[0.8rem] text-[0.6rem]' ><br />Assistant Professor, Netaji Subhash Engineering College</span></h1>
                <div className="font-[anzo2] md:text-[0.9rem] text-[0.6rem] ">I am delighted to write this recommendation for Raunak, who has been an outstanding colleague and a valuable asset to our team. Over the course of our collaboration on various mini projects, Raunak has consistently shown exceptional dedication, strong analytical abilities, and a keen attention to detail.

Raunak possesses an impressive capacity to understand complex tasks quickly and applies his skills effectively to achieve excellent results. He approaches each project with a proactive mindset and maintains a focus on both quality and efficiency, ensuring that all deadlines are met while exceeding expectations.

His adaptability, collaborative spirit, and problem-solving skills have been pivotal in overcoming challenges and driving success across different projects. Raunak's positive attitude, commitment to continuous learning, and ability to contribute to team efforts make him an asset in any setting.

I have full confidence that Raunak will continue to thrive and excel in whatever he pursues, and I wholeheartedly recommend him for any future opportunities.</div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="flex justify-center items-center align-middle"></div></SwiperSlide>
            
          </Swiper>
        </div  >
      );
}

export default Mentors