import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaSearch, FaTwitter } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b-[1px] border-gray-400 ">
        {/* Mobile menu toggle button */}
        <button
          className="lg:hidden text-gray-700 border-r-[1px] border-gray-400 py-4 pr-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-8 border-r-[1px] border-gray-400 py-4 pr-10">
          <ul className="flex space-x-4 flex-row gap-2 uppercase ">
            <li className="text-[#9B834D]">home</li>
            <li className="text-gray-400 hover:text-[#9B834D]">about</li>
            <li className="text-gray-400 hover:text-[#9B834D]">delivery</li>

            <li className="text-gray-400 hover:text-[#9B834D]">contacts</li>
          </ul>
        </div>
        <div className="flex flex-row justify-center lg:justify-between w-full">
          <div className="space-x-4 text-gray-600 py-4 pl-5">
            <a
              href="#"
              className="hover:text-gray-900 whitespace-nowrap text-gray-400 uppercase flex flex-row gap-4 items-center"
            >
              <FaMobileScreen className="text-gray-800" size={28} />
              +1 800 123-45-57
            </a>
          </div>
          {/* Logo */}
          <img
            className="hidden lg:flex"
            src="https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/05/watrix-logo.svg"
          />

          <div className="space-x-4 text-gray-600 hidden lg:flex border-r-[1px] border-gray-400 py-4 pr-10">
            <a
              href="#"
              className="hover:text-gray-900 whitespace-nowrap text-gray-400 uppercase"
            >
              Login / Register
            </a>
          </div>
        </div>

        {/* Social and Login */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-400 pl-5 whitespace-nowrap">
          <div>GET SOCIAL:</div>
          <div className="flex space-x-3">
            <a href="#" className=" hover:text-gray-900">
              <FaFacebookF className="" size={16} />
            </a>
            <a href="#" className=" hover:text-gray-900">
              <FaInstagram className="" size={22} />
            </a>
            <a href="#" className=" hover:text-gray-900">
              <FaTwitter className="" size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ////////////////////// */}
      <div className="flex lg:hidden flex-row border-b-[1px] border-gray-400">
        <div className="space-x-4 text-gray-600 border-r-[1px] w-[50vw] justify-center flex border-gray-400 py-4 pr-10">
          <a
            href="#"
            className="hover:text-gray-900 whitespace-nowrap text-gray-400 uppercase"
          >
            Login / Register
          </a>
        </div>

        {/* Social and Login */}
        <div className=" items-center space-x-6 text-gray-400 pl-5 whitespace-nowrap w-[50vw] justify-center flex">
          <div>GET SOCIAL:</div>
          <div className="flex space-x-3">
            <a href="#" className=" hover:text-gray-900">
              <FaFacebookF className="" size={16} />
            </a>
            <a href="#" className=" hover:text-gray-900">
              <FaInstagram className="" size={22} />
            </a>
            <a href="#" className=" hover:text-gray-900">
              <FaTwitter className="" size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ////////////////////// */}
      {/* Logo */}
      <div className="flex lg:hidden flex-row border-b-[1px] border-gray-400 py-5 w-full justify-center">
        <img
          className="flex lg:hidden"
          src="https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/05/watrix-logo.svg"
        />
      </div>

      {/* SECOND COLUMN */}
      <div className="flex items-center justify-between w-full px-4 md:px-8 border-b-[1px] border-gray-400 ">
        <div className="flex flex-row justify-center lg:justify-between">
          <div className="space-x-4 text-gray-600 border-r-[1px] border-gray-400 py-4 pr-10">
            <a
              href="#"
              className="hover:text-gray-900 whitespace-nowrap text-gray-800 uppercase flex flex-row gap-2 items-center"
            >
              <FaSearch className="text-gray-800" size={20} />
              SEARCH
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center w-full ml-0 lg:ml-72">
          <div className="flex items-center py-4">
            <ul className="flex space-x-4 flex-row gap-2 uppercase text-xl cursor-pointer">
              <li className="text-gray-800 hover:text-[#9B834D] ">WOMAN</li>
              <li className="text-gray-800 hover:text-[#9B834D]">MAN</li>
              <li className="text-gray-800 hover:text-[#9B834D]">KIDS</li>
              <li className="text-gray-800 hover:text-[#9B834D]">BRANDS</li>
              <li className="text-gray-800 hover:text-[#9B834D]">OFFERS</li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex flex-row">
          <div className="flex flex-row justify-center lg:justify-between">
            <div className="space-x-4 text-gray-600 border-l-[1px] border-gray-400 py-4 px-10">
              <a
                href="#"
                className="hover:text-gray-900 whitespace-nowrap text-gray-800 uppercase flex flex-row gap-2 items-center"
              >
                <GrFavorite className="text-gray-800" size={22} />
                my favourite
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-center lg:justify-between">
            <div className="space-x-4 text-gray-600 border-l-[1px] border-gray-400 py-4 pl-10">
              <a
                href="#"
                className="hover:text-gray-900 whitespace-nowrap text-gray-800 uppercase flex flex-row gap-2 items-center"
              >
                MY CART
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////// */}
      <div className="flex lg:hidden flex-row border-b-[1px] border-gray-400">
        <div className="space-x-4 text-gray-600 border-r-[1px] w-[50vw] justify-center flex border-gray-400 py-4 pr-10">
          <a
            href="#"
            className="hover:text-gray-900 whitespace-nowrap text-gray-800 uppercase FLEX flex-row flex gap-2"
          >
            <GrFavorite className="text-gray-800" size={22} />
            MY FAVORITE
          </a>
        </div>

        {/* Social and Login */}
        <div className=" items-center space-x-6 text-gray-800 pl-5 whitespace-nowrap w-[50vw] justify-center flex">
          <div>MY CART</div>
        </div>
      </div>

      {/* ////////////////////// */}
    </>
  );
};

export default Navbar;
