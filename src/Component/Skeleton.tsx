import React from "react";

interface ProductSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({
  width = "280px",
  height = "200px",
  className = "",
  count = 8,
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`} role="status" aria-label="Loading product skeletons">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse space-y-4 p-4 border w-fit rounded-md"
        >
          <div
            className="bg-gray-300 shadow-sm rounded"
            style={{ width, height }}
          ></div>
          <div className="space-y-2">
            <div className="bg-gray-300 h-6 w-[100px] rounded"></div>
            <div className="bg-gray-300 h-4 w-[100px] rounded"></div>
            <div className="bg-gray-300 h-4 w-[100px] rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
