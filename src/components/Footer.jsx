import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import map1 from '../assets/map1.png'

const Footer = () => {
  const data = [
    "Home",
    "About Us",
    "CBSE Mandatory Public Disclosure",
    "Faculty",
    "Academics",
    "Admissions",
    "Mock Test",
    "Life At Ais",
    "Gallery",
    "Careers",
    "Contact Us"
  ];

  return (
    <div className="bg-[#1F1F1F] mt-[50px]">
      <div className="max-w-screen-lg px-4 py-5 sm:px-6 text-white sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-5xl text-center  align-middle">LOGO</h3>
        </div>

        <div className="p-5">
          <div className="text-lg text-center uppercase font-bold mb-5">Address</div>
          <p className='text-gray-300 text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero similique doloribus magnam exercitationem odio quisquam dolorum cum maiores perferendis.</p>
        </div>

        <div className="p-5">
          <div className="text-lg uppercase font-bold ">Location</div>
          <img src={map1} alt="Location" />
        </div>
      </div>

      <div className="bg-[#1F1F1F] pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row mt-2 flex-row flex">
            <p className='mx-3 p-2 text-lg text-white border border-white rounded-full'><FaFacebookF /></p>
            <p className='mx-3 p-2 text-lg text-white border border-white rounded-full'><FaInstagram /></p>
            <p className='mx-3 p-2 text-lg text-white border border-white rounded-full'><FaXTwitter /></p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center text-white">
          {data.map((item, index) => (
            <h2 key={index} className='m-2 text-xs mb-5 hover:cursor-pointer'>{item}</h2>
          ))}
        </div>

        <div className="flex pb-5 px-3 m-auto pt- border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center"> 
          <p className='text-white text text-xs my-3'>My School. Copyright 2019-2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
