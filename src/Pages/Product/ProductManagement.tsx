// App.tsx
import React, { useState } from 'react';
import { useProductStore } from '../../Store/Store';

const ProductManagement: React.FC = () => {
  const {
    products,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearProducts,
  } = useProductStore();

  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: '',
    price: 0,
    image: '',
    quantity: 0,
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0) {
      addProduct({ ...newProduct, id: Date.now() });
      setNewProduct({ id: 0, name: '', price: 0, image: '', quantity: 0 });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Product Management</h1>

      {/* Add Product Form */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-4">Add New Product</h2>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: +e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="p-2 border rounded"
          />
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Product List</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products available.</p>
        ) : (
          <div className="grid gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 border rounded"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-gray-500">${product.price}</p>
                    <p className="text-gray-500">Quantity: {product.quantity}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={clearProducts}
          className="mt-4 bg-red-700 text-white py-2 rounded hover:bg-red-800"
        >
          Clear All Products
        </button>
      </div>
    </div>
  );
};

export default ProductManagement;