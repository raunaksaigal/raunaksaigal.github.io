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
            link:"#",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt unde ea hic ipsum. Quasi, recusandae doloribus tempora harum ducimus sequi atque facilis, hic vel rem pariatur impedit ipsum voluptatibus."
        },
        {
            image:"circuit_diagram.jpg", 
            title:"Silo Monitoring System",
            link:"https://github.com/raunaksaigal/Silo-Monitoring-System",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt unde ea hic ipsum. Quasi, recusandae doloribus tempora harum ducimus sequi atque facilis, hic vel rem pariatur impedit ipsum voluptatibus."
        },
        {
            image:"amazonml.png", 
            title:"Amazon ML Challenge",
            link:"https://www.linkedin.com/feed/update/urn:li:activity:7249476827616833537/",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt unde ea hic ipsum. Quasi, recusandae doloribus tempora harum ducimus sequi atque facilis, hic vel rem pariatur impedit ipsum voluptatibus."
        },
        {
            image:"nirmiti2024.jpg", 
            title:"Nirmiti - A Start-Up Conclave",
            link:"https://www.linkedin.com/feed/update/urn:li:activity:7249476827616833537/",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt unde ea hic ipsum. Quasi, recusandae doloribus tempora harum ducimus sequi atque facilis, hic vel rem pariatur impedit ipsum voluptatibus."
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
