// components/ProductList.tsx
// import React from "react";
import { useFilterStore } from "../../Store/Store.tsx";

interface Product {
  id: number;
  title: string;
  price: number;
  color: string;
  brand: string;
  createdAt: string;
}

const products: Product[] = [
  { id: 1, title: "Red Bag", price: 100, color: "Red", brand: "Brand A", createdAt: "2024-12-10" },
  { id: 2, title: "Blue Shoes", price: 200, color: "Blue", brand: "Brand B", createdAt: "2024-12-08" },
  // Add more products
];

const ProductList = () => {
  const { title, priceRange, color, brand, sortBy } = useFilterStore();

  const filteredProducts = products
    .filter((product) =>
      title ? product.title.toLowerCase().includes(title.toLowerCase()) : true
    )
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .filter((product) => (color ? product.color.toLowerCase() === color.toLowerCase() : true))
    .filter((product) => (brand ? product.brand.toLowerCase() === brand.toLowerCase() : true))
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return 0;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <div key={product.id} className="p-4 border rounded-md">
          <h3 className="text-lg font-medium">{product.title}</h3>
          <p className="text-sm">Price: ${product.price}</p>
          <p className="text-sm">Color: {product.color}</p>
          <p className="text-sm">Brand: {product.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;