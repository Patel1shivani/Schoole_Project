import React from 'react';
import { FaStar } from "react-icons/fa";
import topper1 from '../assets/topper1.jpg';
import topper2 from '../assets/topper2.jpg';
import topper3 from '../assets/topper3.jpg';

const ParentsViews = () => {
  const toppers = [
    {
      name: "Parent Name",
     image: topper1,
    },
    {
      name: "Parent Name",
     image: topper2,
    },
    {
      name: "Parent Name",
     image: topper3,
    },
  ];

  return (
    <div>
        <h1 className='text-center text-4xl md:text-4xl font-bold'>Parents Views</h1>
     <div  className="sm:flex mx-auto w-[70%] md:w-[90%]">
     {toppers.map((student, index) => (
        <div key={index} className=" m-5 flex mx-auto">
          <div className="w-80 border-2 border-grey shadow-xl rounded-md grid justify-items-center m-3">
            <div className="m-3 mt-5">
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
                <p className="text-gray-500 text-sm">
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
