import React from 'react'
import img7 from '../assets/7f36ef8871b96627732587f70242cb05.jpeg'
import img8 from '../assets/35218bd288e6eb81c235236cf9e41bec.jpeg'

function message() {
  return (
    <div>
          <h1 className='ml-[60px] text-2xl font-bold lg:text-4xl mt-10 lg:ml-[600px] '>Message From The Board</h1>
          
    <div className='ml-[30px] lg:flex lg:ml-[100px]'>
      <div className='flex mt-[25px] ml-[10px]'>
            <img className="h-[300px] w-[170px] object-cover object-center lg:h-[350px] lg:w-[250px] lg:mt-[50px] lg:ml-[140px]" alt="hero" src={img7} />
            <div className='bg-[#7B1113] h-[300px] w-[170px] lg:h-[350px] lg:w-[250px] lg:mt-[50px] '>
            <p className=' mt-[40px] ml-[10px] font-roboto text-xs lg:text-1xl font-light leading-[20px] lg:leading-[30px] lg:mt-[60px] lg:ml-[20px] text-left  text-white'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            <h1 className='mt-[50px] font-bold'>-USE NAME</h1></p>
            </div>
            </div>
            <div className='flex mt-[25px] ml-[10px] '>
            <img className="h-[300px] w-[170px] object-cover object-center lg:h-[350px] lg:w-[250px] lg:mb-[100px] lg:mt-[50px] lg:ml-[40px]" alt="hero" src={img8} />
            <div className='bg-[#7B1113] h-[300px] w-[170px] lg:h-[350px] lg:w-[250px] lg:mt-[50px] '>
            <p className='ml-[10px] mt-[50px] font-roboto text-xs lg:text-1xl font-light leading-[20px] lg:leading-[30px] lg:mt-[60px] lg:ml-[20px] text-left  text-white'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            <h1 className='mt-[50px] font-bold'>-USE NAME</h1> </p>
            </div>
            </div>
           </div>
           </div>
    // </div>
   
   
  )
}

export default message