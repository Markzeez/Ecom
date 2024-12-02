import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Amazing product! Highly recommend it.",
    rating: 5,
    avatar: "https://via.placeholder.com/100", // replace with actual avatar URL
  },
  {
    id: 2,
    name: "John Doe",
    review: "Great quality and fast shipping.",
    rating: 4,
    avatar: "https://via.placeholder.com/100", // replace with actual avatar URL
  },
  {
    id: 3,
    name: "Azeez Ibrahim",
    review: "Great quality and fast shipping.",
    rating: 4,
    avatar: "https://via.placeholder.com/100", // replace with actual avatar URL
  },
  {
    id: 4,
    name: "Azeez Ibrahim",
    review: "Great quality and fast shipping.",
    rating: 4,
    avatar: "https://via.placeholder.com/100", // replace with actual avatar URL
  },
  {
    id: 5,
    name: "Azeez Ibrahim",
    review: "Great quality and fast shipping.",
    rating: 4,
    avatar: "https://via.placeholder.com/100", // replace with actual avatar URL
  },
  {
    id: 6,
    name: "Azeez Ibrahim",
    review: "Great quality and fast shipping.",
    rating: 4,
    avatar: "https://via.placeholder.com/100", // replace with actual avatar URL
  },

  // Add more reviews here
];

const Review: React.FC = () => {

  const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-40px] right-4 transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowRight />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-40px] right-[50px] transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowLeft />
    </button>
  );

  const settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    dotsClass: "custom-dots",
    draggable: false,
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="review-slider max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-thin text-center mb-6">Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-sm font-semibold">{review.name}</h3>
              <p className="text-gray-600 text-xs">{review.review}</p>
              <div className="text-yellow-500">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;