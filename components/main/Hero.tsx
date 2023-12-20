/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Hero() {
  return (
    <div className='md:flex '>
        <div className='md:ml-16 pt-36 md:w-1/2'>
            <h1 className='text-4xl font-bold'>Hi, I am a <span className='text-cyan-600 mb-8'>MERN </span><br /> stack Developer</h1>
            <h1 className="text-xl font-semibold text-center mt-4">Elevating Digital Experiences: Crafting Tomorrows Web Today.</h1>
            <div className='flex'>
            <button className='mt-20 bg-cyan-600 p-2 pl-3 pr-3 rounded-xl flex items-center text-2xl mr-10 hover:bg-cyan-700 duration-500'><span>Project</span><span className='ml-2 text-3xl'><MdArrowOutward /></span></button>
            <button className='mt-20 bg-purple-600 p-2 pl-3 pr-3 rounded-xl flex items-center text-2xl hover:bg-purple-700 duration-500'><span>Contact</span><span className='ml-2 text-3xl'><MdArrowOutward /></span></button>
            
            </div>
        </div>
        <div className='mt-20 md:w-1/2 md:m-6'>
            <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-2005x2048-fal2biag.png" alt="developer image" />
        </div>
    </div>
  )
}

export default Hero