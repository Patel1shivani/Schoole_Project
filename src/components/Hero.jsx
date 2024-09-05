import React from 'react'
import img from '../assets/img.jpg';

const Hero = () => {
  return (
    <div>
      <article class="relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-8 pt-40 max-w-full h-[100vh] mx-auto mt-[-55px]">
    <img src={img} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
    <div class="absolute "></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>
    </div>
  )
}

export default Hero
