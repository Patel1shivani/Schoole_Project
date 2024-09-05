import React from 'react';

function Cate() {
  return (
    <div className='bg-[#7B1113] h-[400px] lg:h-[250px] lg:w-[100%] lg:mt-[60px] lg:flex'>
      <div className='ml-[150px] mt-[30px] pt-[30px] lg:ml-[150px] lg:mt-[90px]'>
        <h1 className='text-white text-3xl'>1000+</h1>
        <p className='text-white text-xs'>STUDENT</p>
      </div>
      <div className='lg:border-l lg:border-white lg:h-[150px] lg:mt-[50px] lg:flex lg:flex-col lg:justify-center lg:ml-[150px]'>
        <div className='ml-[150px] mt-[40px] lg:ml-[150px] lg:mt-0'>
          <h1 className='text-white text-3xl'>20+</h1>
          <p className='text-white text-xs'>TEACHERS</p>
        </div>
      </div>
      <div className='lg:border-l lg:h-[150px] lg:mt-[50px] lg:border-white  lg:flex lg:flex-col lg:justify-center lg:ml-[150px]'>
        <div className='ml-[150px] mt-[40px] lg:ml-[150px] lg:mt-0'>
          <h1 className='text-white text-3xl'>35+</h1>
          <p className='text-white text-xs'>ACTIVITIES</p>
        </div>
      </div>
      <div className='lg:border-l lg:h-[150px] lg:mt-[50px] lg:border-white  lg:flex lg:flex-col lg:justify-center lg:ml-[150px]'>
        <div className='ml-[150px] mt-[40px] lg:ml-[150px] lg:mt-0'>
          <h1 className='text-white text-3xl'>2+</h1>
          <p className='text-white text-xs'>ACRES AREA</p>
        </div>
      </div>
    </div>
  );
}

export default Cate;
