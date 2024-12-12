import React from 'react'

const Connect = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center self-center' >
        <h1 className='text-[4rem] text-center md:text-[9rem] font-[heavitas]' >Lets <br className=' md:hidden' />Connect❗</h1>
        <br />
        <div className="flex justify-around items-center self-center w-[70vw]">
          <div className=""><img className='w-[100px]' src="/icons/github.png" alt="" /></div>
          <div className=""><img className='w-[100px]' src="/icons/insta.png" alt="" /></div>
          <div className=""><img className='w-[100px]' src="/icons/linkedin.png" alt="" /></div>
          <div className=""><img className='w-[100px]' src="/icons/x.png" alt="" /></div>
        </div>
    </div>
  )
}

export default Connect