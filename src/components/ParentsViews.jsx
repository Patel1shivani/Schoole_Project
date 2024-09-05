import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa";
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';

const ParentsViews = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const toppers = [
    {
      name: "Katherine Darsie",
      image: img9,
    },
    {
      name: "Hayden Wood",
      image: img10,
    },
    {
      name: "Katherine Darsie",
      image: img11,
    },
    {
      name: "David Nguyen",
      image: img12,
    },
  ];

  return (
    <div>
      <h1 className='text-center text-4xl md:text-4xl font-bold mt-[30px]'>Parents Views</h1>
      
      <div className="ml-[20px] lg:ml-[auto] scroll flex overflow-x-auto sm:flex lg:mt-[20px] mx-auto sm:w-[350px] md:w-[90%] lg:w-[100%]">
        {toppers.map((student, index) => (
          <div key={index} className=" ml-[20px] lg:h-[380px] lg:w-[350px] flex mx-4 mt-[30px]">
            <div 
              className="w-80 border-2 border-grey shadow-xl rounded-md grid justify-items-center m-3"
              data-aos="flip-left"
              data-aos-offset="300"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="m-3 lg:h-[380px] lg:w-[300px] mt-5">
                <div className="flex flex-row mt-8">
                  <div>
                    <img className="rounded-full w-14 h-14" src={student.image} alt={student.name} />
                  </div>
                  <div className="flex flex-col ml-5">
                    <h1 className="font-bold text-sm">{student.name}</h1>
                    <h2 className="flex flex-row text-xs text-orange-600">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 lg:mt-[10px] text-sm">
                    Henderson played two years of college soccer at UCLA, where he
                    helped the team win a national championship his sophomore season.
                    Upon graduating from college, Henderson played for 2. Bundesliga
                    club FSV Frankfurt during and new Seattle SeaDogs to play
                    overseas. After the end of that season, he moved to the Norwegian
                    league, where he trained with Stabæk during the winter. He was
                    inducted into the UCLA Athletics Hall of Fame in 2016.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentsViews;
