import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Bag1 from '../assets/Image/Bag1.png';
import Bag2 from '../assets/Image/Bag2.png';
import Bag3 from '../assets/Image/Bag3.png';
import { Link } from 'react-router-dom';

const SimpleSlider: React.FC = () => {
  // Custom Next Arrow
  const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-30px] right-4 transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowRight />
    </button>
  );

  // Custom Prev Arrow
  const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-30px] right-[50px] transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowLeft />
    </button>
  );

  // Slider settings
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
          <img src={Bag1} className="w-full h-full object-cover" alt="Bag 1" />
          <div className="absolute inset-0 flex flex-col justify-center space-y-2 px-6 sm:px-12 lg:px-20 lg:space-y-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-white">
              New Arrival Collection
            </h1>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-[90%] sm:w-[70%] lg:w-[50%] text-white">
              New Summer <br /> Collection 2025
            </h1>
            <p className="text-sm sm:text-base lg:text-lg w-[100%] sm:w-[70%]  lg:w-[40%] text-white">
              Discover the latest trends in summer fashion. From casual
              wear to exclusive pieces, redefine your wardrobe with us.
            </p>
         <Link to={'/products'}>   <button className="rounded-lg bg-green-700 hover:bg-green-800 text-white text-sm sm:text-base p-2 lg:p-3 w-[120px]">
              SHOP NOW
            </button> </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
          <img src={Bag2} className="w-full h-full object-cover" alt="Bag 2" />
          <div className="absolute inset-0 flex flex-col justify-center space-y-4 px-6 sm:px-12 lg:px-20 text-white">
            <h1 className="text-lg sm:text-xl lg:text-2xl">Women Collection</h1>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-[90%] sm:w-[70%] lg:w-[50%]">
              A Simple Guide to Minimalist Style
            </h1>
            <Link to={'/products'}><button className="rounded-lg bg-white text-black text-sm sm:text-base p-2 lg:p-3 w-[120px] hover:bg-gray-300">
              SHOP NOW
            </button></Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
          <img src={Bag3} className="w-full h-full object-cover" alt="Bag 3" />
          <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 text-center px-6">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white">
              UNIQUE SHOP
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white w-[90%] sm:w-[70%] lg:w-[50%]">
              Discover unique items that define your style. Shop from Teepha
              and turn up the volume on your fashion game!
            </p>
            <Link to={'/product'}><button className="rounded-lg bg-white text-black text-sm sm:text-base p-2 lg:p-3 w-[150px] hover:bg-gray-300">
              PURCHASE NOW
            </button></Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
