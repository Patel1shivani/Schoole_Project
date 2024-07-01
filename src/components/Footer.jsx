import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
    <div className="bg-[#1F1F1F]">
      <div className="max-w-screen-lg px-4 py-5 sm:px-6 text-white sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-5xl text-center  align-middle">LOGO</h3>
        </div>

        <div className="p-5">
          <div className="text-lg text-center uppercase font-bold mb-5">Address</div>
          <p className='text-gray-300 text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero similique doloribus magnam exercitationem odio quisquam dolorum cum maiores perferendis.</p>
        </div>

        <div className="p-5">
          <div className="text-lg text-center uppercase font-bold mb-5">Location</div>
          <img src="https://s3-alpha-sig.figma.com/img/477c/963d/1e50e960053457447dff078b5844dba7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBbTShgfi~~gi6mt1oDId8AmuDuyi6TVS1VKbcUGz4sVtKRBPxjoQBSmhkEDYlP-oSm5uxTV1bUuuw3PYFNCS9R8oEk7GJxReSWJSCK5F5Oc31-SHrZdqWbV3Mkuntnhgy9GAoMjNbGunDA5ldu2JYPlwNdVJ5qWH-Egg1vk3WUBLSIuIEi31wjPBPT6~aczg2IpiIp4oour7tUcoMZahxxPA1pcQt8VSl44aZVhGhcd-x66SyN8jM2A8yVdb2oar9h5~9vrRlUJqN18b5mthas1SJPnxYXEYK1woQ2D6ms25Hu3Dbc7rtuv9AHtO9zDSs3KvjD4ygQz59MLyo2LbA__" alt="Location" />
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
