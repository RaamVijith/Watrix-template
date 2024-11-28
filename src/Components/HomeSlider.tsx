import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/slide-1-1.jpg'
import img2 from '../assets/slide-2.jpg'
import img3 from '../assets/slide-3.jpg'
interface SlideData {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  index: number;
  total: number;
}

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      image: img1,
      subtitle: 'consectetuer adipiscing elit',
      title: 'Great watch from the watrix',
      description: 'Highlight your status and style',
      index: 1,
      total: 3
    },
    {
      image: img2,
      subtitle: 'consectetuer adipiscing elit',
      title: 'Great watch from the watrix',
      description: 'Highlight your status and style',
      index: 2,
      total: 3
    },
    {
      image: img3,
      subtitle: 'consectetuer adipiscing elit',
      title: 'Great watch from the watrix',
      description: 'Highlight your status and style',
      index: 3,
      total: 3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="min-w-full h-full relative bg-[#f5f5f5]"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center left-[5vw] lg:-left-[7vw]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[70vw] lg:max-w-[30vw]">    
                  <p className="text-lg tracking-widest uppercase mb-2 text-[#9B834D]">{slide.subtitle}</p>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal uppercase text-gray-800 mb-4">{slide.title}</h2>
                  <p className="text-lg sm:text-2xl text-gray-500 font-extralight py-12">{slide.description}</p>
                  <button className="bg-[#9B834D] text-white px-7 py-3 uppercase text-lg tracking-wider hover:bg-gray-900 transition-colors">
                    SHOP NOW!
                  </button>
                </div>
              </div>
            </div>
            
            {/* Slide Counter */}
            <div className="absolute bottom-8 right-8 text-sm">
              {slide.index} / {slide.total}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default HomeSlider;