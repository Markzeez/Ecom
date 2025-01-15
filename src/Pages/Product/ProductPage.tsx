import React, { useState, useEffect } from "react";
import Pagination from "../../Component/Pagination";
import { useCartStore } from "../../Store/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Skeleton from "../../Component/Skeleton";
import { useCartIconStore } from "../../Store/useAuthStore";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const addToCart = useCartStore((state) => state.addToCart);
  const { addItem } = useCartIconStore();

  useEffect(() => {
    // Simulate API call and initialize product list
    const fetchProducts = async () => {
      setLoading(true);
      setTimeout(() => {
        const allProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
          id: i + 1,
          name: `Product ${i + 1}`,
          price: parseFloat((Math.random() * 100).toFixed(2)),
          image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
        }));
        setProducts(allProducts);
        setLoading(false);
      }, 2000);
    };
    fetchProducts();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleAddToCart = async (product: Product) => {
    try {
      await addToCart(product); // Wait for the async operation to complete
      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      toast.error(`Failed to add ${product.name} to cart.`);
    }
  };
  

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="p-4 border rounded-lg shadow-md">
      <Zoom>
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 w-full h-32 sm:h-40 object-cover rounded"
        />
      </Zoom>
      <h2 className="text-lg sm:text-xl font-semibold">{product.name}</h2>
      <p className="text-sm sm:text-base text-gray-600">${product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-[80px] rounded-lg text-white bg-slate-400 text-xs p-2 mx-auto hover:bg-slate-500 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <Skeleton />
      ) : (
        <div className="p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-thin mb-6 text-center">
            Popular Products
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
