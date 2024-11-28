import React from "react";

const SpecialOffer: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row items-center justify-between bg-white">
      {/* Left Section */}
      <div className="bg-[#F7F7F7] text-center w-full h-[50vh] lg:h-[95vh] flex items-center justify-center flex-col lg:text-center lg:w-1/2 space-y-4">
        <h4 className=" text-lg uppercase text-[#9B834D]">Special offer</h4>
        <h1 className="text-4xl lg:text-7xl text-gray-800 uppercase font-semibold py-2">
          Watches <br/> with <span className="text-[#9B834D]">12% off</span>
        </h1>
        <p className="text-gray-500 ">
          Find your perfectly suited watch and get it with a discount
        </p>
        <a
          href="#"
          className="inline-block text-gray-800 px-6 py-3 mt-4 rounded-md hover:bg-gray-800"
        >
          Get a discount →
        </a>
      </div>

      {/* Right Section */}
      <div className="w-full h-[50vh] lg:h-[95vh] lg:w-1/2 flex justify-center  bg-black">
        <img
          src="https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/05/Rectangle.jpg"
          alt="Watch"
          className="h-full w-full object-fill"
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
