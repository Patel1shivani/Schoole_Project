import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  const onMenuToggle = () => {
    const navlinks = navLinksRef.current;
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      navlinks.classList.remove("left-[0%]");
      navlinks.classList.add("left-[-100%]");
    } else {
      navlinks.classList.remove("left-[-100%]");
      navlinks.classList.add("left-[0%]");
    }
  };
  
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const buttons = [
    { id: 0, label: "Home" },
    { id: 1, label: "About Us" },
    { id: 2, label: "Admission" },
    { id: 3, label: "Academic" }
  ];


  return (
    <div>
      <header className="relative shadow-lg ">
      <h1 className="bg-black text-white text-center py-2">Welcome to Our School</h1>
         
        <nav className="flex justify-between md:justify-around">
      <div className="w-[130px] md:w-[200px] flex items-center px-3 py-2">
            {/* <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" srcSet="" /> */}
              <h1 className='text-4xl text-[#7B1113] font-bold '>LOGO</h1>
          </div>
          <div className="flex items-center gap-3">

            <div ref={navLinksRef} className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-auto text-[#7B1113] md:text-white bg-white md:bg-[#7B1113] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {buttons.map((button) => (
        <li
          key={button.id}
          className={` m-1 flex flex-col ${activeButtonIndex === button.id ? "bg-gray-300 sm:bg-[#732325] text-[#7B1113]" : "bg-white sm:bg-[#732325] text-[#732325] sm:text-white"}`}
          onClick={() => {setActiveButtonIndex(button.id)
            onMenuToggle()
          }}
        >
          {button.label}
        </li>
      ))}
              </ul>
              
             </div>

            <div className="flex items-center gap-2 mr-5">
              {/* <button type="button" className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 rounded-full"> Login</button> */}
              <div onClick={onMenuToggle} className="text-[30px] text-[#7B1113] cursor-pointer  md:hidden">
                {isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
