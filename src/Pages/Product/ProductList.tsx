// src/components/ProductList.tsx
import React from 'react';
import { useFilterStore } from '../../Store/Store';

const products = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Jeans', category: 'fashion' },
  { id: 3, name: 'Sofa', category: 'home' },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  const { category, searchTerm } = useFilterStore();
  const filteredProducts = products.filter((product) => 
    (category ? product.category === category : true) &&
    (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <div className="space-y-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
          </div>
        ))
      ) : (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">No products found</h3>
        </div>
      )}
    </div>
  );
};

export default ProductList;


