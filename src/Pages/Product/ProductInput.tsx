import React, { useState } from 'react';

interface Product {
  name: string;
  description: string;
  price: number;
  discount?: number; // Made discount optional
  color: string;
  image: string;
}

const AdminDash: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    color: '',
    image: '',
  });

  const [submittedProduct, setSubmittedProduct] = useState<Product | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' || name === 'discount' ? parseFloat(value) : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate product submission
    setSubmittedProduct(product);
    // Reset form after submission
    setProduct({ name: '', description: '', price: 0, color: '', image: '', discount: undefined });
  };

  const calculateDiscountedPrice = (price: number, discount?: number) => {
    return discount ? price - (price * discount) / 100 : price;
  };

  return (
    <div className="p-6 bg-gray-50 w-[400px] lg:w-[500px] mx-auto mt-2">
      <h1 className="text-2xl font-semibold text-center mb-2">Add a Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Product Name</label>
          <p className="text-xs">Name of the product visible to customer</p>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Description</label>
          <p className="text-xs">Appear at checkout on the customer portal and in quotes</p>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Price (₦)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            min={0}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={product.discount || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            min={0}
            max={100}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Color</label>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Image</label>
          <p className="text-xs">Appear at checkout JPEG or PNG under 2MB</p>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            accept="image/*"
            required
          />
        </div>

        {product.image && (
          <div className="mt-4">
            <img src={product.image} alt="Product Preview" className="w-full h-48 object-cover rounded" />
          </div>
        )}

        <div className="flex flex-row gap-3">
          <button
            type="submit"
            className="w-[100px] py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Add Product
          </button>
          <button
            className="w-[100px] py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Cancel
          </button>
        </div>
      </form>

      {submittedProduct && (
        <div className="mt-6 bg-green-100 p-4 rounded">
          <h2 className="text-lg font-semibold text-green-800">Product Added Successfully!</h2>
          <p>
            <strong>Name:</strong> {submittedProduct.name}
          </p>
          <p>
            <strong>Description:</strong> {submittedProduct.description}
          </p>
          <p>
            <strong>Price:</strong> ₦{submittedProduct.price.toFixed(2)}
          </p>
          {submittedProduct.discount && (
            <>
              <p>
                <strong>Discount:</strong> {submittedProduct.discount}%
              </p>
              <p>
                <strong>Discounted Price:</strong> ₦
                {calculateDiscountedPrice(submittedProduct.price, submittedProduct.discount).toFixed(2)}
              </p>
            </>
          )}
          <p>
            <strong>Color:</strong> {submittedProduct.color}
          </p>
          {submittedProduct.image && (
            <img
              src={submittedProduct.image}
              alt="Product"
              className="w-full h-48 object-cover rounded mt-2"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDash;
