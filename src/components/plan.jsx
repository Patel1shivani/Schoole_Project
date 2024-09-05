
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from '../components/Data';
// import '../Component/main.css';
import { RiCheckboxCircleFill } from "react-icons/ri";

function FirstBox(){
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='mr-[20px] py-8 sm:w-auto w-[350px]'>'
    <h1 className='text-4xl lg:py-8 text-center font-bold'>Select your plans</h1>

    
          <div className='flex overflow-x-auto scroll sm:flex-row sm:justify-center pb-8'>
            {/* {/ Box 1 /} */}
            <div
              className='flex flex-col text-center lg:ml-[50px] lg:w-[300px] border-2 border-[#7B1113] justify-center sm:px-4 px-8 pb-8 pt-16 sm:mx-8 mx-20 my-8 rounded-2xl flex-none w-72 sm:w-60'
              data-aos="flip-left"
              data-aos-offset="10"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-out" 
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className='border-[#00000066] mb-4 border-b-[1px] space-y-3'>
                <h1 className='font-semibold text-3xl my-2'>{data.eighthbox.heading2}</h1>
                <h1 className='font-semibold text-2xl my-2 text-[#7B1113] pb-6'>{data.eighthbox.heading3}</h1>
              </div>
              <div className='text-center'>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p1}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p2}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p3}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p4}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p5}
                </div>
              </div>
              <button className='text-center text-[#7B1113] border-2 border-[#7B1113] w-40 h-10 mx-8 my-4'>{data.eighthbox.button}</button>
            </div>

            {/* {/ Box 2 /} */}
            <div
              className='flex flex-col lg:w-[300px] text-center bg-gradient-to-t from-[#932628] to-[#7B1113] text-white border-2 border-[#7B1113] justify-center px-4 py-8 mx-8 my-8 rounded-2xl w-72'
              data-aos="fade-down"
              data-aos-offset="10"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className='border-[#00000066] mb-8 border-b-[1px]'>
                <h1 className='font-semibold text-4xl pb-6'>{data.eighthbox.heading4}</h1>
                <h1 className='font-semibold text-3xl pb-6'>{data.eighthbox.heading5}</h1>
              </div>
              <div className='text-center pl-4 my-2 space-y-2'>
                <div className='flex flex-row'>
                  <RiCheckboxCircleFill className='mr-2 mt-1' />
                  {data.eighthbox.p1}
                </div>
                <div className='flex flex-row'>
                  <RiCheckboxCircleFill className='mr-2 mt-1' />
                  {data.eighthbox.p2}
                </div>
                <div className='flex flex-row'>
                  <RiCheckboxCircleFill className='mr-2 mt-1' />
                  {data.eighthbox.p3}
                </div>
                <div className='flex flex-row'>
                  <RiCheckboxCircleFill className='mr-2 mt-1' />
                  {data.eighthbox.p4}
                </div>
                <div className='flex flex-row'>
                  <RiCheckboxCircleFill className='mr-2 mt-1' />
                  {data.eighthbox.p5}
                </div>
              </div>
              <button className='text-center text-[#7B1113] bg-white border-2 w-40 h-10 mx-12 my-4'>{data.eighthbox.button}</button>
            </div>

            {/* {/ Box 3 /} */}
            <div
              className='flex flex-col text-center lg:w-[300px] border-2 border-[#7B1113] justify-center sm:px-4 px-8 pb-8 pt-16 sm:mx-8 mx-20 my-8 rounded-2xl flex-none w-72 sm:w-60'
              data-aos="flip-left"
              data-aos-offset="10"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className='border-[#00000066] mb-4 border-b-[1px] space-y-3'>
                <h1 className='font-semibold text-3xl my-2'>{data.eighthbox.heading6}</h1>
                <h1 className='font-semibold text-2xl my-2 text-[#7B1113] pb-6'>{data.eighthbox.heading7}</h1>
              </div>
              <div className='text-center'>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p1}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p2}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p3}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p4}
                </div>
                <div className='flex flex-row my-2'>
                  <RiCheckboxCircleFill className='text-[#7B1113] mr-2 mt-1' />
                  {data.eighthbox.p5}
                </div>
              </div>
              <button className='text-center lg:ml-[50px] text-[#7B1113] border-2 border-[#7B1113] w-40 h-10 mx-8 my-4'>{data.eighthbox.button}</button>
            </div>
          </div>
    </div>
  );
}

export default FirstBox;

