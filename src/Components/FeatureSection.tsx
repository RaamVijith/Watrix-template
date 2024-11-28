import React from 'react';
import { FaTruck, FaMoneyBillAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-[#242729]">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center space-x-4 border-r-[0.5px] border-gray-500 py-14">
          <FaTruck className="text-white text-5xl" />
          <div>
            <h3 className="text-[#C5B093] text-xl">Free Shipping</h3>
            <p className="text-gray-400 font-thin">Don't pay for delivery</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 border-r-[0.5px] border-gray-500 py-10">
          <FaMoneyBillAlt className="text-white text-5xl" />
          <div>
            <h3 className="text-[#C5B093] text-xl">Money Guarantee</h3>
            <p className="text-gray-400 font-thin">Money back option</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 border-r-[0.5px] border-gray-500 py-10">
          <FaShieldAlt className="text-white text-5xl" />
          <div>
            <h3 className="text-[#C5B093] text-xl">Safe Shopping</h3>
            <p className="text-gray-400 font-thin">Privacy policy guarantee</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
          <FaHeadset className="text-white text-5xl" />
          <div>
            <h3 className="text-[#C5B093] text-xl">Online Support</h3>
            <p className="text-gray-400 font-thin">Consult with our supporters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;