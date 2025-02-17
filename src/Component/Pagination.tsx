import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8 space-x-2 sm:space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 sm:px-3 sm:py-2 mx-1 bg-gray-200/100 text-black rounded-full hover:bg-slate-100/50 disabled:bg-gray-300"
      >
        <FaArrowLeft/>
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full ${
            number === currentPage ? 'bg-slate-200 text-white' : 'bg-slate-400 text-black'
          } hover:bg-slate-500 hover:text-black`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 sm:px-3 sm:py-2 mx-1 bg-gray-200/100 text-black rounded-full hover:bg-purple-100/50 disabled:bg-gray-300"
      >
        <FaArrowRight/>
      </button>
    </div>
  );
};

export default Pagination;
