import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { FaForward } from 'react-icons/fa6';
import { GiNextButton } from 'react-icons/gi';

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
        className="px-2 py-1 sm:px-4 sm:py-2 mx-1 bg-purple-200 text-white rounded hover:bg-purple-500 disabled:bg-gray-300"
      >
        <FaBackward/>
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-2 py-1 sm:px-4 sm:py-2 rounded ${
            number === currentPage ? 'bg-purple-400 text-white' : 'bg-purple-200 text-gray-700'
          } hover:bg-blue-500 hover:text-white`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 sm:px-4 sm:py-2 mx-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
      >
        <FaForward/>
      </button>
    </div>
  );
};

export default Pagination;
