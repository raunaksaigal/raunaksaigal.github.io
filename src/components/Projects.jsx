import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
    let sections = gsap.utils.toArray(".projectDiv");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".projContainer",
            // trigger: ".mainProjectContainer",
            start: "top 10%",
            pin: true,
            scrub: 0.6,
            // snap: 1 / (sections.length - 1),
            end: () => "+=" + containerRef.current.offsetWidth
            }
        });
    })

    const info = [
        {
            image:"EarlyPredictionAlzheimersAccuracy.png", 
            title:"Early Prediction of Alzheimer's Disease",
            link:"",
            text:"An ongoing research work to architecture a Deep Learning model Experimenting with different models and even building my own 3D-RNN to make the model learn the patterns"
        },
        {
            image:"circuit_diagram.jpg", 
            title:"Silo Monitoring System",
            link:"https://github.com/raunaksaigal/Silo-Monitoring-System",
            text:"To monitor the quality and quantity of grains in storage"
        },
        {
            image:"amazonml.png", 
            title:"Amazon ML Challenge",
            link:"https://www.linkedin.com/feed/update/urn:li:activity:7249476827616833537/",
            text:" Our team secured a rank of 232 among more than 70000 participant.  Based on OCR, we were required to process more than 200k images for text."
        },
        {
            image:"nirmiti2024.jpg", 
            title:"Nirmiti - A Start-Up Conclave",
            link:"https://www.linkedin.com/feed/update/urn:li:activity:7249476827616833537/",
            text:"Our team consisting of Saikat Bandopadhyay, Debrup Sengupta, Ayaan Ray, Soumita Das, Asmita Chatterjee and me Raunak Saigal as the founding members of our startup Dishastra, we secure First Place with a prize money of 15000 Rs. in Nirmiti Startup Conclave! "
        },
    ]

  return (
    <div className="mainProjectContainer mt-14">
        <h1 className='projHead text-center font-Russo text-[2rem] underline ' >Some Projects and Achievements</h1>
        <div className="projContainer mt-10 " ref={containerRef}>
            {info.map((i) => (<ProjectCard image={i.image} link={i.link} title={i.title} text={i.text} />))}
        </div>
    </div>
    
  );
};

export default Projects;
