import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef();

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
  
  const closeModel=(e)=>{
   if (navLinksRef.current === e.target){
    onMenuToggle()
    console.log("Arvind")
   }
  
  }

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const buttons = [
    { id: 0, label: "Home" },
    { id: 1, label: "About Us" },
    { id: 2, label: "Admission" },
    { id: 3, label: "Academic" }
  ];


  return (
    <div className="">
      <header className="relative shadow-lg bg-[url('https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg')] h-[40vh] md:h-[70vh] lg:h-[100vh] bg-cover bg-center">
      <h1 className="bg-black text-white text-center py-2">Welcome to Our School</h1> 
        <nav className="flex justify-between md:justify-around">
      <div className="w-[130px] md:w-[200px] flex items-center px-3 py-2">
            {/* <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" srcSet="" /> */}
              <h1 className='text-4xl text-[#7B1113] font-bold '>LOGO</h1>
          </div>
          <div className="flex items-center gap-3">

            <button ref={navLinksRef} onClick={closeModel} className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-auto text-[#7B1113] md:text-white bg-white md:bg-[#7B1113] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5">
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
              
             </button>

            <div className="flex items-center gap-2 mr-5">
              {/* <button type="button" className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 rounded-full"> Login</button> */}
              <div onClick={onMenuToggle} className="text-[30px] text-[#7B1113] cursor-pointer  md:hidden">
                {isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
              </div>
            </div>
          </div>
        </nav>
        <h1 class="mt-[110px] ml-5 text-white text-1xl lg:w-[550px] font-bold lg:text-5xl lg:mt-[500px]">
  Inspiring a Passion for <br/>Intellectual Pursuits
</h1>

      </header>
    </div>
  );
};

export default Navbar;


// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="bg-[url('https://t3.ftcdn.net/jpg/05/92/45/74/360_F_592457481_U9HwJCzC5zvYApnE0UMpzroqqVsUjocF.jpg')] h-64 bg-cover bg-center">
//       {/* Add your navbar content here */}
//     </div>
//   );
// };

// export default Navbar;


