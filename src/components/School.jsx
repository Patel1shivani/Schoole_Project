// import React from 'react';
// import shivi1 from '../assets/35218bd288e6eb81c235236cf9e41bec.jpeg';
// import shivi2 from '../assets/shivi1.jpeg';
// import shivi3 from '../assets/shivi2.jpeg';
// import shivi4 from '../assets/shivi3.jpeg';
// import shivi5 from '../assets/shivi4.jpeg';
// import shivi6 from '../assets/shivi5.jpeg';
// import shivi7 from '../assets/shivi6.jpeg';

// const Topper = () => {
//   const toppers = [
//     {
//       name: "Extra-Curricular",
//       image: shivi1,
//     },
//     {
//       name: "Social Service",
//       image: shivi2,
//     },
//     {
//       name: "Sports",
//       image: shivi3,
//     },
//     {
//       name: "Houses & Clubs",
//       image: shivi4,
//     },
//     {
//       name: "Residential(Hostel)",
//       image: shivi5,
//     },
//     {
//       name: "Infra",
//       image: shivi6,
//     },
//     {
//       name: "Student Name",
//       image: shivi7,
//     },
//   ];

//   return (
//     <div>
//       <h1 className="text-center text-4xl md:text-4xl lg:mt-[90px] font-bold">Life At School</h1>
//       <div className="grid grid-cols-3 gap-2 mt-5 mx-auto w-[250px] lg:w-[80%]">
//         {toppers.slice(0, 2).map((student, index) => (
//           <div key={index} className="col-span-1 bg-[#7B1113] shadow-md m-3 p-3 text-white">
//             <img className="w-[230px] lg:w-[250px] lg:h-auto" src={student.image} alt="profile-picture" />
//             <div className="p-6 text-center">
//               <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
//                 {student.name}
//               </h4>
//               <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-200">
//                 {student.className}
//               </p>
//             </div>
//           </div>
//         ))}
//         {toppers.slice(2, 4).map((student, index) => (
//           <div key={index} className="col-span-1 bg-[#7B1113] shadow-md m-3 p-3 text-white">
//             <img className="w-[230px] lg:w-[250px] lg:h-auto" src={student.image} alt="profile-picture" />
//             <div className="p-6 text-center">
//               <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
//                 {student.name}
//               </h4>
//               <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-200">
//                 {student.className}
//               </p>
//             </div>
//           </div>
//         ))}
//         {toppers.slice(4, 7).map((student, index) => (
//           <div key={index} className="col-span-1 bg-[#7B1113] shadow-md m-3 p-3 text-white">
//             <img className="w-[230px] lg:w-[250px] lg:h-auto" src={student.image} alt="profile-picture" />
//             <div className="p-6 text-center">
//               <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
//                 {student.name}
//               </h4>
//               <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-200">
//                 {student.className}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Topper;

import React from 'react';

function School() {
  return (
    <div className='lg:mt-[60px]'>
    <h1 className='ml-[120px] lg:ml-[700px] font-bold text-2xl'>Life At School</h1>
    <div className='scroll flex overflow'>
    <div className=' scroll flex overflow-x-auto lg:grid lg:grid-cols-3 lg:ml-[50px]'>
      <div>
      <div className='bg-shivi0 h-[300px] w-[415px] pt-[265px] mt-[20px] lg:h-[240px] lg:w-[380px] bg-cover lg:pt-[220px] lg:mt-[20px] lg:ml-[90px]'>
       <h1 className='pl-[155px] lg:pl-[155px] h-[35px] lg:h-[25px] text-1xl bg-customRed text-white'>Extra-Curricular</h1> 
      </div>
      <div className='bg-shivi3 h-[400px] w-[415px] pt-[365px] mt-[20px] lg:h-[200px] lg:w-[380px] bg-cover lg:mt-[20px] lg:pt-[423px] lg:ml-[90px]'>
      <h1 class="pl-[150px]  lg:pl-[140px] h-[35px] lg:h-[25px] text-1xl bg-customRed text-white">Social Service</h1>
      </div>
    </div>

    <div>
      <div className='bg-shivi2 h-[300px] w-[415px] pt-[280px] mt-[20px]  lg:h-[345px] lg:w-[488px] bg-cover lg:pt-[325px] lg:mt-[20px] '>
      <h1 className='pl-[170px]  lg:pl-[225px] h-[35px] lg:h-[25px] text-1xl bg-customRed font-roboto text-white'>Sports</h1> 
      </div>
      <div className='bg-shivi4 h-[300px] w-[415px] pt-[280px] mt-[20px] lg:h-[345px] lg:w-[488px] bg-cover lg:pt-[320px] lg:mt-[20px]'>
       <h1 className='pl-[140px]  lg:pl-[185px] h-[35px] lg:h-[25px] text-1xl bg-customRed font-roboto text-white'>Residential (Hostel)</h1> 
      </div>
    </div>

    <div className='lg:ml-[20px]'>
      <div className='bg-shivi5 h-[300px] w-[415px] pt-[280px] mt-[20px]  lg:h-[250px] lg:w-[292px] bg-cover lg:pt-[230px] lg:mt-[20px]'>
      <h1 className='pl-[145px]  lg:pl-[90px] h-[35px] lg:h-[25px] text-1xl bg-customRed font-roboto text-white'>Houses & Clubs</h1> 
      </div>
      <div className='bg-shivi6 h-[300px] w-[415px] pt-[280px] mt-[20px] lg:h-[205px] lg:w-[292px] bg-cover lg:pt-[185px] lg:mt-[20px]'>
       <h1 className='pl-[120px]  lg:pl-[60px] h-[35px] lg:h-[25px] text-1xl bg-customRed font-roboto text-white'>Infrastructure & Facilities</h1> 
      </div>
      <div className='bg-shivi7 h-[300px] w-[415px] pt-[280px] mt-[20px] lg:h-[205px] lg:w-[292px]  bg-cover lg:pt-[185px] lg:mt-[20px]'>
       <h1 className='pl-[170px]  lg:pl-[120px] h-[35px] lg:h-[25px] text-1xl bg-customRed font-roboto text-white'>Gallery</h1> 
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default School;


