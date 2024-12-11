// components/Filter.tsx
// import React from "react";
import { useFilterStore } from "../Store/Store.tsx";

const Filter = () => {
  const { title, priceRange, color, brand, sortBy, setTitle, setPriceRange, setColor, setBrand, setSortBy } =
    useFilterStore();

  return (
    <div className="p-4 bg-gray-100 rounded-md flex flex-row justify-around ">
      {/* Title Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[200px] px-4 py-2 border rounded-md"
        />
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-[200px] px-4 py-2 border rounded-md"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-[200px] px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-[200px] px-4 py-2 border rounded-md"
        />
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-[200px] px-4 py-2 border rounded-md"
        />
      </div>

      {/* Sort By Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Sort By</label>
        <select
          value={sortBy || ""}
          onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | null)}
          className="w-[200px] px-4 py-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;