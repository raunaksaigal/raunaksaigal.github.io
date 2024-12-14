// import React, { useEffect, useRef } from 'react'
// import useWindow from './window'

// export default function Scene() {
//   const { dimension } = useWindow();
//   const canvas = useRef();
//   const prevPosition = useRef(null)

//   useEffect( () => {
//     dimension.width > 0 && init();
//   }, [dimension])

//   const init = () => {
//     const ctx = canvas.current.getContext("2d");
//     ctx.fillStyle = "black";
//     ctx.fillRect(0, 0, dimension.width, dimension.height); 
//     ctx.font = "8rem samakaran";
//     ctx.fillStyle = "white";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("namaste नमस्ते",canvas.current.width/2, canvas.current.height/2);

    
//     ctx.globalCompositeOperation = "destination-out";
//   }

//   const lerp = (x, y, a) => x * (1 - a) + y * a;

//   const manageMouseMove = (e) => {
//     const { clientX, clientY, movementX, movementY } = e;

//     const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

//     if(prevPosition.current != null){
//       const { x, y } = prevPosition.current;
//       for(let i = 0 ; i < nbOfCircles ; i++){
//         const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
//         const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);
//         draw(targetX, targetY, 50)
//       }
//     }

//     prevPosition.current = {
//       x: clientX,
//       y: clientY
//     }
//   }

//   const draw = (x, y, radius) => {
//     const ctx = canvas.current.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, 2 * Math.PI);
//     ctx.fill();
//   }

//   return (
//     <div className='relative w-screen h-full overflow-hidden'>
//       {dimension.width == 0 && <div className='w-0 md:w-full z-50 h-full'/>}
//       <canvas className='w-0 md:w-[100vw]' ref={canvas} onMouseMove={manageMouseMove} onTouchMove={manageMouseMove} height={dimension.height} width={dimension.width}/>
//     </div>
//   )
// }

import React, { useEffect, useRef } from 'react'
import useWindow from './window'
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef();
  const prevPosition = useRef(null)
  const [c, setc] = useState(0)
  
  useEffect( () => {
    dimension.width > 0 && init();
  }, [dimension])

    useGSAP(()=>{
      
    })



  
  const init = () => {
    // const img = new Image(); // Create new img element
    // img.src = "/assets/mandala.jpg"; // Set source path
    // const ctx = canvas.current.getContext("2d");
    // // ctx.fillStyle = "rgb(0 129 167)";
    // ctx.fillRect(0, 0, dimension.width, dimension.height); 
    // img.addEventListener("load", () => {
    //   ctx.drawImage(img, 0, 0, dimension.width, dimension.height);
    // });

    // ctx.font = "8rem samakaran";
    // ctx.fillStyle = "white";
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // // ctx.fillText("namaste नमस्ते",canvas.current.width/2, canvas.current.height/2);

    
    // ctx.globalCompositeOperation = "destination-out";
    const img = new Image(); // Create new img element
img.src = "/assets/land.jpg"; // Set source path

const ctx = canvas.current.getContext("2d");

// const dimension = { width: canvas.width, height: canvas.height };

// Fill canvas with a solid color
// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, dimension.width, dimension.height);

// Draw the image once loaded
  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, dimension.width, dimension.height);

    // Set custom font properties
    ctx.font = "10rem samakaran";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add text in the middle of the canvas
    ctx.fillText("नमस्ते", dimension.width / 2, dimension.height / 2);

    ctx.save();

    ctx.font="1.5rem arial";
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillText("Scratch to continue...",(dimension.width) / 2, (dimension.height+800) / 2);
    ctx.restore();

    // Apply a composite effect for visual blending
    ctx.globalCompositeOperation = "destination-out";
  });
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    setc(c+1)
    console.log(c)
    if(c>100){
      setc(0)
      console.log("greater")
    gsap.to(canvas.current,{
      // translateY:"-100%",
      ease:"expo.out",
      opacity:0,
      duration:4,
    })}
    const { clientX, clientY, movementX, movementY } = e;

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if(prevPosition.current != null){
      const { x, y } = prevPosition.current;
      for(let i = 0 ; i < nbOfCircles ; i++){
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);
        draw(targetX, targetY, 50)
      }
    }

    prevPosition.current = {
      x: clientX,
      y: clientY
    }
  }

  const draw = (x, y, radius) => {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className='relative w-screen h-full overflow-hidden bg-[#66393900]'>
      {dimension.width == 0 && <div className='w-0 md:w-full z-50 h-full'/>}
      <canvas className='w-0 md:w-[100vw] ' ref={canvas} onMouseMove={manageMouseMove} height={dimension.height} width={dimension.width}/>
    </div>
  )
}