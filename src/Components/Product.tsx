import React, { useState } from 'react';
import { AiFillTool } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface ProductProps {
  image: string;
  title: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ image, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className={`relative w-full flex flex-col justify-center items-center md:w-1/2 lg:w-1/4 p-4 transition-all duration-300 transform border-[1px] border-r-0 border-gray-400`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="relative overflow-hidden p-10">
        <img src={image} alt={title} className="w-full object-cover " />
      </div>
      <div className='pb-5'>
      <div
        className={`mt-4 transition-all duration-300 transform flex flex-col items-center  ${
          isHovered ? 'hidden scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <h3 className="text-gray-800 font-light text-lg">{title}</h3>
        <p className="text-gray-600 pt-2 font-light">${price.toFixed(2)}</p>
      </div>
      <div
        className={` transition-all duration-300 transform flex flex-row ${
          isHovered ? 'opacity-100 scale-95' : 'hidden scale-100'
        }`}
      >
        <button className="bg-white flex flex-row whitespace-normal gap-2 items-center text-gray-800 font-light border-black text-lg hover:bg-gray-200 transition-colors duration-300 border-[1px] px-5 py-3" >
            <AiFillTool />
            Select Option
          </button>
          <button
            className={`text-lg ml-6 border-black transition-colors duration-300 border-[1px] px-4 py-4 border-black${
              isFavorited
                ? 'bg-red-500 text-white hover:bg-red-700'
                : 'bg-white text-gray-800 hover:bg-gray-200'
            }`}
            onClick={handleFavorite}
          >
            {isFavorited ? <FaHeart /> : <FaRegHeart />}
          </button>
      </div>
      </div>
      
    </div>
  );
};

export default Product;