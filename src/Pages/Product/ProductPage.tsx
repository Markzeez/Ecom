import React, { useState, useEffect } from 'react';
import Pagination from '../../Component/Pagination';
import { useCartStore } from '../../Store/Store';

// Product data interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  // Zustand cart store
  const { addToCart } = useCartStore();

  // Dummy data for demonstration purposes
  const allProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: parseFloat((Math.random() * 100).toFixed(2)),
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  }));

  // Effect to load products on page load
  useEffect(() => {
    setProducts(allProducts);
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our Products</h1>
      
      {/* Responsive Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="mb-4 w-full h-32 sm:h-40 object-cover rounded" 
            />
            <h2 className="text-lg sm:text-xl font-semibold">{product.name}</h2>
            <p className="text-sm sm:text-base text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-[100px] rounded bg-purple-400 p-2 mx-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Responsive Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductPage;
