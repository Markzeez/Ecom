import React, { useState } from 'react'
import StarRating from './StarRating'

interface Review {
    description: string;
  }

function CreateReview() {

    const [review, setReview] = useState<Review>({
        // StarRating: '',
        description: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
      };
    
      
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit product data to the server or database
        console.log(review);
        // Reset form after submission
        setReview({ description: '' });
      };
  return (
    <div className="p-6 bg-gray-50 sm:w-[400px] lg:w-[500px] mx-auto mt-2">
      <h1 className="text-2xl font-semibold text-center mb-2">Write a Review</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-semibold ">Score</label>
          
         <StarRating />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-1">Review:</label>
          <textarea
            name="description"
            placeholder='Excellent Service'
            value={review.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none "
            rows={4}
            maxLength={400}
            required
          />
        </div>

      
       <div className='flex flex-row gap-2'>
       <button
          type="submit"
          className="w-[100px] py-2 bg-white text-blue-400 hover:text-white font-semibold rounded-lg border border-blue-300 hover:bg-blue-700 focus:outline-none"
        >
          Post
        </button>
        <button
          
          className="w-[100px] py-2 bg-blue-600 hover:text-blue-400 text-white font-semibold rounded-lg border border-blue-300 hover:bg-white focus:outline-none "
        >
          Cancel
        </button>
       </div>
        
       
      </form>
    </div>
  )
}

export default CreateReview