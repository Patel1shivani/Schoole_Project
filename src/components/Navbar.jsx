import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="sticky ">

      <h1 className="bg-black text-white text-center py-2">Welcome to Our School</h1>

      <div class="bg-transparent p-4">
    <div class="container mx-auto flex flex-col md:flex-row md:w-[80%] justify-between items-center">

        <div class="text-red-700 font-bold text-4xl mb-0 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">LOGO</div>

    <div class="bg-red-800 md:flex min-[480px]:flex-row  md:flex-row lg:space-x-4 lg:mt-0 mt-0 flex  items-center  sm-text-xl">
        <div className="">
        <a href="/" class="text-white  px-4 py-1 hover:text-orange-600 ">Home</a>
        <a href="#Projects" class="text-white  px-4 py-1  hover:text-orange-600">Projects</a>
        </div>

        <div>
        <a href="/" class="text-white  px-4 py-1  hover:text-orange-600">About</a>
        <a href="/" class="text-white  px-4 py-1  hover:text-orange-600">Contact Me</a>
        </div>
    </div>

    </div>
 </div>

      </nav>
    </div>
  );
};

export default Navbar;
