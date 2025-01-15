import React, { useState } from 'react';

// Interfaces
interface Review {
  name: string;
  rating: number;
  comment: string;
}

// Components
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    ))}
  </div>
);

const ReviewForm: React.FC<{
  review: Review;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}> = ({ review, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
    <div>
      <label className="block text-sm font-semibold mb-2">Your Name</label>
      <input
        type="text"
        name="name"
        value={review.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-semibold mb-2">Rating</label>
      <select
        name="rating"
        value={review.rating}
        // onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        required
      >
        <option value="" disabled>
          Select a rating
        </option>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value} Star{value > 1 ? 's' : ''}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-semibold mb-2">Comment</label>
      <textarea
        name="comment"
        value={review.comment}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows={4}
        required
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      Submit Review
    </button>
  </form>
);

const ReviewsList: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
  <div className="space-y-4">
    {reviews.length > 0 ? (
      reviews.map((review, index) => (
        <div key={index} className="p-4 border rounded bg-white shadow">
          <h3 className="text-lg font-semibold">{review.name}</h3>
          <StarRating rating={review.rating} />
          <p className="text-gray-700 mt-2">{review.comment}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No reviews yet. Be the first to add one!</p>
    )}
  </div>
);

const ProductReview: React.FC = () => {
  const [review, setReview] = useState<Review>({ name: '', rating: 0, comment: '' });
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: name === 'rating' ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, review]);
    setReview({ name: '', rating: 0, comment: '' });
  };

  return (
    <div className="p-8 bg-gray-50 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Customer Reviews</h1>
      <ReviewForm review={review} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductReview;
