import { useState } from 'react';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 cursor-pointer ${filled ? 'text-yellow-400' : 'text-gray-400'}`}
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.184 6.736h7.127c.969 0 1.371 1.24.588 1.81l-5.822 4.268 2.184 6.736c.3.921-.755 1.688-1.54 1.168L12 18.412l-5.823 4.268c-.784.52-1.838-.247-1.539-1.168l2.184-6.736-5.822-4.268c-.784-.57-.381-1.81.588-1.81h7.127l2.184-6.736z" />
  </svg>
);

export default StarRating;
