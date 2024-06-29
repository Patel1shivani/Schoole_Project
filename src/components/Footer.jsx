import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F]">
      <div className="max-w-screen-lg px-4 py-5 sm:px-6 text-white sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto">

        <div className="p-5">
          <h3 className="font-bold text-5xl align-middle ">LOGO</h3>
        </div>

        <div className="p-5">
          <div className="text-lg uppercase font-bold mb-5">Adress</div>
          <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero similique doloribus magnam exercitationem odio quisquam dolorum cum maiores perferendis.</p>
         </div>

        <div className="p-5">
          <div className="text-lg uppercase font-bold mb-5">location</div>
          <img src="https://s3-alpha-sig.figma.com/img/477c/963d/1e50e960053457447dff078b5844dba7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBbTShgfi~~gi6mt1oDId8AmuDuyi6TVS1VKbcUGz4sVtKRBPxjoQBSmhkEDYlP-oSm5uxTV1bUuuw3PYFNCS9R8oEk7GJxReSWJSCK5F5Oc31-SHrZdqWbV3Mkuntnhgy9GAoMjNbGunDA5ldu2JYPlwNdVJ5qWH-Egg1vk3WUBLSIuIEi31wjPBPT6~aczg2IpiIp4oour7tUcoMZahxxPA1pcQt8VSl44aZVhGhcd-x66SyN8jM2A8yVdb2oar9h5~9vrRlUJqN18b5mthas1SJPnxYXEYK1woQ2D6ms25Hu3Dbc7rtuv9AHtO9zDSs3KvjD4ygQz59MLyo2LbA__" alt="" />
        </div>
        
      </div>


      <div className="bg-[#1F1F1F] pt-2">
        {/* <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
              </svg>
            </a>
            <a href="/#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
              </svg>
            </a>
            <a href="/#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <g id="Layer_1">
                  <circle id="Oval" cx="12" cy="12" r="12"></circle>
                  <path id="Shape" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.313 -0.188,1.125 -0.188,2.688v1.188c0,1.563 0.125,2.375 0.188,2.688c0,0.062 0,0.125 0.062,0.187l0,0.063c0.188,0.562 0.688,0.937 1.313,0.937l-0.125,0c0,0 2.438,0.375 5.75,0.375c3.312,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.937l0,-0.063c0.063,-0.062 0.063,-0.125 0.063,-0.187c0.062,-0.313 0.188,-1.125 0.188,-2.688v-1.188c0,-1.563 -0.126,-2.375 -0.188,-2.688Zm-9.63,5.438l0,-5.25l4.875,2.625l-4.875,2.625Z" style={{ fill: 'white' }}></path>
                </g>
              </svg>
            </a>
            <a href="/#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <path id="Shape" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-7.193,-0.625c0.004,0.087 0.004,0.175 0.004,0.263c0,2.684 -2.042,5.778 -5.778,5.778c-1.148,0 -2.215,-0.337 -3.114,-0.912c0.16,0.018 0.317,0.024 0.48,0.024c0.952,0 1.828,-0.323 2.524,-0.87c-0.889,-0.016 -1.639,-0.603 -1.897,-1.41c0.124,0.023 0.252,0.038 0.384,0.038c0.186,0 0.366,-0.024 0.537,-0.07c-0.929,-0.186 -1.63,-1.007 -1.63,-1.989l0,-0.024c0.274,0.152 0.588,0.243 0.92,0.254c-0.547,-0.365 -0.906,-0.987 -0.906,-1.692c0,-0.372 0.099,-0.72 0.274,-1.02c0.999,1.225 2.491,2.029 4.175,2.114c-0.034,-0.149 -0.051,-0.305 -0.051,-0.464c0,-1.125 0.912,-2.038 2.038,-2.038c0.586,0 1.115,0.248 1.486,0.646c0.464,-0.091 0.902,-0.26 1.297,-0.494c-0.152,0.476 -0.476,0.875 -0.897,1.127c0.413,-0.05 0.807,-0.159 1.174,-0.322c-0.274,0.412 -0.62,0.773 -1.017,1.062Z"></path>
              </svg>
            </a>
            <a href="/#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <path id="Shape" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-7.147,-1.618c0.048,0.682 0.048,1.364 0.048,2.045c0,4.199 -3.198,9.04 -9.04,9.04c-1.795,0 -3.446,-0.527 -4.844,-1.441c0.251,0.028 0.493,0.036 0.75,0.036c1.487,0 2.854,-0.502 3.952,-1.348c-1.392,-0.027 -2.562,-0.946 -2.969,-2.21c0.194,0.027 0.376,0.048 0.577,0.048c0.274,0 0.549,-0.036 0.803,-0.099c-1.455,-0.293 -2.549,-1.58 -2.549,-3.128l0,-0.041c0.423,0.235 0.91,0.376 1.429,0.4c-0.853,-0.57 -1.408,-1.544 -1.408,-2.641c0,-0.581 0.156,-1.121 0.424,-1.588c1.547,1.898 3.86,3.141 6.466,3.273c-0.054,-0.235 -0.08,-0.484 -0.08,-0.733c0,-1.786 1.444,-3.23 3.23,-3.23c0.928,0 1.77,0.391 2.362,1.018c0.735,-0.144 1.44,-0.413 2.064,-0.783c-0.242,0.75 -0.749,1.381 -1.415,1.781c0.656,-0.072 1.28,-0.252 1.861,-0.512c-0.434,0.652 -0.978,1.223 -1.606,1.68Z"></path>
              </svg>
            </a>
            <a href="/#" className="w-6 mx-1">
              <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                <path id="Shape" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-8.691,0c0,-1.694 -1.373,-3.067 -3.067,-3.067c-1.694,0 -3.066,1.373 -3.066,3.067c0,1.694 1.372,3.066 3.066,3.066c1.694,0 3.067,-1.372 3.067,-3.066Zm-10.022,8.058c0.337,-0.664 0.666,-1.339 0.993,-2.004c0.646,-1.287 1.276,-2.555 1.892,-3.81c1.33,-2.711 2.608,-5.188 4.114,-7.638c0.496,-0.809 0.981,-1.633 1.98,-2.079c0.253,-0.117 0.508,-0.233 0.764,-0.348c0.312,-0.138 0.799,-0.334 1.11,-0.189c0.377,0.172 0.51,0.801 0.614,1.148c0.103,0.344 0.199,0.691 0.291,1.037c0.14,0.522 0.28,1.047 0.426,1.568c0.037,0.129 0.075,0.26 0.112,0.388c0.077,0.263 0.156,0.52 0.234,0.779c0.137,0.461 0.275,0.921 0.417,1.383c0.049,0.159 0.098,0.318 0.148,0.476c0.145,0.467 0.281,0.939 0.432,1.402c0.046,0.138 0.093,0.275 0.14,0.413c0.243,0.722 0.497,1.438 0.731,2.163c0.183,0.547 0.348,1.1 0.481,1.66c0.028,0.117 0.056,0.233 0.084,0.35c-5.695,0 -11.063,0 -16.758,0Z"></path>
              </svg>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;

