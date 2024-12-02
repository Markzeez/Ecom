import React from 'react';
import Slider, { Settings } from 'react-slick'; // Import the type for Settings
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Bag1 from '../assets/Image/Bag1.png';
import Bag2 from '../assets/Image/Bag2.png';
import Bag3 from '../assets/Image/Bag3.png';

const SimpleSlider: React.FC = () => {
  const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-30px] right-4 transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowRight />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-30px] right-[50px] transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowLeft />
    </button>
  );
  // Define slider settings with the `Settings` type
  const settings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    dotsClass: 'custom-dots',
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className=" w-full sm:h-[300px] lg:h-[500px] ">
          <img src={Bag1} className="relative w-[100%]   " alt="" />
          <div className="flex flex-col absolute z-10 top-1 space-y-2 lg:mt-[100px] ml-[50px]">
            <h1 className="text-2xl">New Arrival Collection</h1>
            <h1 className="text-6xl w-[50%]">
              New Summer <br />
              Collection 2025
            </h1>
            <p className="text-sm w-[40%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              omnis in enim maxime. Asperiores hic sed quaerat quasi molestiae
              quisquam, at nemo eligendi nesciunt ipsa placeat expedita sapiente
              aspernatur soluta!
            </p>
            <button className="rounded-lg bg-[#345325] hover:bg-[#4c4e4b] text-white text-sm p-3 w-[100px]">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className=" w-full sm:h-fit lg:h-[500px] bg-cover bg-center ">
          <div className="flex flex-col absolute z-10 top-1 space-y-4 lg:mt-[100px] ml-[50px]">
            <h1 className="text-xl">Women Collection</h1>
            <h1 className="text-6xl text-white w-[50%]">
              A simple guide to Minimalist style
            </h1>
            <button className="rounded bg-[#2d312c] hover:bg-white hover:text-black text-sm p-2 w-[100px] text-white">
              SHOP NOW
            </button>
          </div>
          <img src={Bag2} className="relative w-[100%] object-fill  " alt="" />
        </div>
        <div className="  w-full h-[180px] sm:h-[180px] lg:h-[500px]   ">
          <img src={Bag3} className="relative w-[100%] object-fill " alt="" />
          <div className="flex flex-col justify-center absolute top-5 z-10 text-center items-center space-y-4 ml-[500px] lg:mt-[250px] ">
            <h1 className="text-6xl text-white">UNIQUE SHOP</h1>
            <h1 className="text-xl text-white w-[100%]">
              Shopfromteepha, TURN UP THE VOLUME
            </h1>
            <button className="rounded bg-white text-sm p-4 w-[150px] hover:bg-gray-300 text-black">
              PURCHASE NOW
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
