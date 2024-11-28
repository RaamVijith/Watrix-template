import React from "react";

type Props = {
  leftImage: string;
  rightImage: string;
};

const GenderSelection: React.FC<Props> = ({ leftImage, rightImage }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white">
      {/* Left Section */}
      <div className="relative flex flex-col items-center text-center lg:w-1/2 border-gray-400 border-[1px] ">
        <img src={leftImage} alt="For Her" className="w-full rounded-lg" />
        <div className="absolute flex flex-col items-end justify-center pr-[5vw] w-full h-full">
          <div className="flex flex-row items-baseline gap-3">
            <h2 className="text-3xl mt-4 italic font-thin text-gray-800">for</h2>
            <h2 className="text-gray-800 font-normal text-5xl">HER</h2>
          </div>

          <a
            href="#"
            className="mt-2 text-gray-600 hover:text-black transition-all underline"
          >
            SHOP NOW →
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className=" relative flex flex-col items-center text-center lg:w-1/2 border-gray-400 border-[1px] border-l-0">
        <img src={rightImage} alt="For Him" className="w-full rounded-lg" />
        <div className="absolute flex flex-col items-start justify-center pl-[5vw] w-full h-full">
          <div className="flex flex-row items-baseline gap-3">
            <h2 className="text-3xl mt-4 italic font-thin text-gray-800">for</h2>
            <h2 className="text-gray-800 font-normal text-5xl">HIM</h2>
          </div>

          <a
            href="#"
            className="mt-2 text-gray-600 hover:text-black transition-all underline"
          >
            SHOP NOW →
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
