// import React from "react";
// // import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
// import img6 from '../assets/img6.jpg';
// import "../components/Scroll.css"
// const Structure = () => {
//   const menuItems = [
//     {
//       text: "Dignissimos Ducimus",
//       subtitle: "Pre-Primary",
//       image: img2,
//     },
//     {
//       text: "Dignissimos Ducimus",
//       subtitle: "Pre-Primary",
//       image: img3,
//     },
//     {
//       text: "Dignissimos Ducimus",
//       subtitle: "Pre-Primary",
//       image: img4,
//     },
//     {
//       text: "Dignissimos Ducimus",
//       subtitle: "Pre-Primary",
//       image: img3,
//     },
//   ];

//   return (
//     <div>
//       <div className="scroll  w-full p-4 py-5 lg:grid min-[480px]:grid-cols-2 md:grid-cols-4 lg:gap-6 flex overflow-x-auto">
//         {/* Cards */}
//         {menuItems.map((data, index) => (
//           <div key={index} className="flex-none mx-3 group my-2 w-[300px] h-[330px] lg:w-[360px] lg:h-[350px]  bg-[#F2E8E8]">
//             <div className="relative">
//               <img className="h-[250px] w-[400px] lg:w-[368px]  lg:h-[280px]  p-2" src={data.image} alt="Product" />
//             </div>
//             <h3 className="text-sm text-center font-medium mb-2">{data.text}</h3>
//             <p className="text-gray-600 text-sm text-center mb-2">{data.subtitle}</p>
//           </div>
//         ))}
//       </div>
//       {/* Card-2 */}
//       <section className="flex mx-auto text-gray-600 body-font  sm:w-full">
//         <div className="container w-[80%] mx-auto flex  px-5 py-5 md:flex-row flex-col items-center">
//           <div className="lg:w-[900px] sm:w-full w-full">
//          <div
//     data-aos="fade-up"
//     data-aos-offset="200"
//     data-aos-delay="50"
//     data-aos-duration="1000"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="true"
//     data-aos-once="false"
//     data-aos-anchor-placement="top-center"
//   >
//   </div>
//             <img className="object-cover object-center rounded" alt="hero" src={img6} />
//           </div>
//           <div className="bg-[#7B1113] h-[550px] md:w-full  flex flex-col mx-auto md:items-start md:text-left text-center text-white mb-16 md:mb-0 sm:ml-10 items-center">
//             <h1 className="mt-5 ml-5 text-1xl">ABOUT US</h1>
//             <h1 className="title-font text-2xl mt-1 ml-5 sm:text-4xl md:text-md mb-4 font-medium text-center">Accusamus iusto dignissimos </h1>
//             <p class="mt-2 mx-4 text-lg leading-relaxed text-white sm:text-base sm:mx-2 ">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//               At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
//             </p><br/>
//             <p class="mt-4 mx-4 text-lg leading-relaxed text-white sm:text-base sm:mx-2 sm:mt-2">
//               At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio
//             </p>

//             <div className="flex justify-center">
//               <button className="inline-flex text-white border border-white lg:ml-[5px] lg:mt-[10px] py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Learn more
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Structure;




import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.jpg';
import "../components/Scroll.css";

const Structure = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img2,
    },
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img3,
    },
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img4,
    },
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img3,
    },
  ];

  return (
    <div>
      <div className="scroll w-full  p-4 py-5 lg:ml-[70px] min-[480px]:grid-cols-2 md:grid-cols-4 lg:w-[90%] lg:gap-2 flex overflow-x-auto">
        
        {/* Cards */}
        {menuItems.map((data, index) => (
          <div key={index} className="flex-none mx-3 group my-2 w-[300px] h-[330px] lg:ml-[20px] lg:w-[300px] lg:h-[350px] bg-[#F2E8E8]">
            <div className="relative">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <img className="h-[250px] w-[400px] lg:w-[350px] lg:h-[280px] p-2" src={data.image} alt="Product" />
            </div>
            <h3 className="text-sm text-center font-medium mb-2">{data.text}</h3>
            <p className="text-gray-600 text-sm text-center mb-2">{data.subtitle}</p>
          </div>
          </div>
        ))}
      </div>
      
      {/* Card-2 */}
      <section className="flex mx-auto text-gray-600 lg:mt-[10px] body-font h-[1600px] lg:h-[600px] sm:w-full">
        <div className="container w-[80%] mx-auto flex px-0 py-5 md:flex-row flex-col items-center">
          <div className="lg:w-[900px]  sm:w-full ">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="zoom-in"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <img className="object-cover  object-center rounded" alt="hero" src={img6} />
            </div>
          </div>
          <div className="bg-[#7B1113] h-[1230px] lg:h-[550px] lg:mt-[10px] md:w-full flex flex-col mx-auto md:items-start md:text-left text-center text-white mb-16 md:mb-0 items-center">
            <h1 className="mt-5 ml-[3px] text-1xl">ABOUT US</h1>
            <h1 className="title-font text-2xl mt-1 ml-5 sm:text-4xl md:text-md mb-4 font-medium text-center">Accusamus iusto dignissimos</h1>
            <p className="mt-2 mx-4 text-lg leading-relaxed text-white sm:text-base sm:mx-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <p className="mt-4 mx-4 text-lg leading-relaxed text-white sm:text-base sm:mx-2 sm:mt-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border border-white lg:ml-[5px] lg:mt-[10px] py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Structure;

