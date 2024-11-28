import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-gray-800 font-bold text-xl">
          My Website
        </Link>
        <div className="md:flex hidden space-x-4">
          <Link to="/woman" className="text-gray-600 hover:text-gray-800">
            Woman
          </Link>
          <Link to="/man" className="text-gray-600 hover:text-gray-800">
            Man
          </Link>
          <Link to="/kids" className="text-gray-600 hover:text-gray-800">
            Kids
          </Link>
          <Link to="/brands" className="text-gray-600 hover:text-gray-800">
            Brands
          </Link>
          <Link to="/offers" className="text-gray-600 hover:text-gray-800">
            Offers
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-gray-800 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link to="/woman" className="text-gray-600 hover:text-gray-800">
              Woman
            </Link>
            <Link to="/man" className="text-gray-600 hover:text-gray-800">
              Man
            </Link>
            <Link to="/kids" className="text-gray-600 hover:text-gray-800">
              Kids
            </Link>
            <Link to="/brands" className="text-gray-600 hover:text-gray-800">
              Brands
            </Link>
            <Link to="/offers" className="text-gray-600 hover:text-gray-800">
              Offers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;