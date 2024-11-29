import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const NewsletterSubscription: React.FC = () => {
  return (
    <div className="bg-[#F7F7F7] py-16 px-6 lg:px-[10vw] flex flex-col lg:flex-row items-center justify-between gap-6 border-b-[1px] border-gray-400">
      {/* Left Text Section */}
      <div className="text-center lg:text-left">
        <h3 className="text-xl text-gray-800">BE THE FIRST TO KNOW</h3>
        <p className="text-gray-500 font-extralight pt-4">Get all the latest information on Events, Sales, and Offers.</p>
      </div>

      {/* Subscription Input Section */}
      <div className="flex items-center w-full lg:w-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-grow lg:flex-grow-0 lg:w-[25vw] px-4 py-5 focus:outline-none focus:ring focus:ring-gray-200"
        />
        <button className="bg-black text-white px-10 py-5 hover:bg-gray-800 transition-all">
          SUBSCRIBE
        </button>
      </div>

      {/* Social Media Section */}
      <div className="flex gap-4">
        <a href="#" className="p-4 border-gray-800 border-[1px] hover:bg-gray-100 transition-all">
          <FaFacebookF className="text-gray-800" size={20} />
        </a>
        <a href="#" className="p-4 border-gray-800 border-[1px] hover:bg-gray-100 transition-all">
          <FaInstagram className="text-gray-800" size={22} />
        </a>
        <a href="#" className="p-4 border-gray-800 border-[1px] hover:bg-gray-100 transition-all">
          <FaTwitter className="text-gray-800" size={16} />
        </a>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
