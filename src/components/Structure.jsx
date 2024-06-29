import React from "react";
// import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.jpg';
const Structure = () => {
  const menuItems = [
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img2,
    },
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img3,
    },
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img4,
    },
    {
      text: "Dignissimos Ducimus",
      subtitle: "Pre-Primary",
      image: img3,
    },
  ];

  return (
    <div>
      <div className="max-w-[1340px] w-[95%] mx-auto p-4 py-5 grid min-[480px]:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Cards */}
        {menuItems.map((data, index) => (
          <div key={index} className="flex mx-auto group my-2 w-full max-w-xs flex-col overflow-hidden bg-[#F2E8E8]">
            <div className="relative">
              <img className="w-full h-auto p-2" src={data.image} alt="Product" />
            </div>
            <h3 className="text-sm text-center font-medium mb-2">{data.text}</h3>
            <p className="text-gray-600 text-sm text-center mb-2">{data.subtitle}</p>
          </div>
        ))}
      </div>
      {/* Card-2 */}
      <section className="flex mx-auto text-gray-600 body-font  sm:w-full">
        <div className="container w-[80%] mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:w-full sm:w-full w-full">
            <img className="object-cover object-center rounded" alt="hero" src={img6} />
          </div>
          <div className="bg-[#7B1113] md:w-full  flex flex-col mx-auto md:items-start md:text-left text-center text-white mb-16 md:mb-0 sm:ml-10 items-center">
            <h1 className="title-font text-3xl sm:text-4xl md:text-md mb-4 font-medium text-center">Accusamus iusto dignissimos </h1>
            <p className="mb-8 leading-relaxed text-center ">
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
};

export default Structure;
