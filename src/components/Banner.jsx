import React from 'react';
import img1 from '../assets/img1.jpg';

const Banner = () => {
  return (
    <div className="bg-[#F2E8E8]">
      <section className="flex mx-auto text-gray-600 body-font w-[80%] sm:w-full">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-full sm:w-full w-full">
            <img className="object-cover object-center rounded" alt="hero" src={img1} />
          </div>
          <div className=" md:w-full lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 sm:ml-10 items-center text-center">
            <h1 className="title-font text-3xl sm:text-4xl md:text-md mb-4 font-medium text-gray-900">
              At vero eos et accusamus iusto odio dignissimos
            </h1>
            <p className="mb-8 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
           
            <div className="flex justify-center">
              <button className="inline-flex text-[#7B1113] border border-[#7B1113] py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
