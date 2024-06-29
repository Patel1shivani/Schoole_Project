import React from 'react';
import topper1 from '../assets/topper1.jpg';
import topper2 from '../assets/topper2.jpg';
import topper3 from '../assets/topper3.jpg';
import topper4 from '../assets/topper4.jpg';

const Topper = () => {
  const toppers = [
    {
      name: "Student Name",
      className: "Class Name",
      image: topper1,
    },
    {
      name: "Student Name",
      className: "Class Name",
      image: topper2,
    },
    {
      name: "Student Name",
      className: "Class Name",
      image: topper3,
    },
    {
      name: "Student Name",
      className: "Class Name",
      image: topper4,
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl md:text-4xl font-bold">Topper</h1>
      <div className="sm:flex mx-auto w-[70%] md:w-full">
        {toppers.map((student, index) => (
          <div key={index} className="relative flex flex-col text-white bg-[#7B1113] shadow-md w-auto m-3 p-3">
            <img className="w-full h-auto" src={student.image} alt="profile-picture" />
            <div className="p-6 text-center">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                {student.name}
              </h4>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-200">
                {student.className}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topper;
