import React from 'react'
import Button from '@mui/material/Button';

const ProjectCard = (props) => {
  return (
    <div className="projectDiv flex flex-col md:flex-row justify-around">
        <div className="flex justify-center p-[30px] md:flex md:flex-col md:justify-center"><img className="rounded-xl w-[100%] border-black border-[2px]" src={`/assets/${props.image}`} alt="" /></div>
        <div className="flex flex-col w-[50vw] h-[70vh] text-center justify-around self-center items-center m-[30px] bg-p1">
            <div className=" text-5xl text-center font-[anzo4] text-[2rem]">{props.title}</div>
            <div className="md:w-96 text-justify text-l pt-2 font-[anzo2]">{props.text}</div>
            <a href={`${props.link}`}><Button className="w-fit" variant="contained" size="large">Learn More</Button></a>
        </div>
    </div>
  )
}

export default ProjectCard