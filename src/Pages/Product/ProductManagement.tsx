// // components/ProductManagement.tsx
// import React, { useState } from 'react';
// import { useProductStore } from '../../Store/Store';
// import Filters from './Filters';

// const ProductManagement = () => {
//   const { products, filteredProducts, addProduct, editProduct, deleteProduct } = useProductStore();
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState(0);
//   const [category, setCategory] = useState('');
//   const [rating, setRating] = useState(0);
//   const [editMode, setEditMode] = useState(false);
//   const [currentId, setCurrentId] = useState<number | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editMode && currentId !== null) {
//       editProduct(currentId, { id: currentId, name, price, category, rating });
//       setEditMode(false);
//     } else {
//       addProduct({ id: Date.now(), name, price, category, rating });
//     }
//     resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setPrice(0);
//     setCategory('');
//     setRating(0);
//     setCurrentId(null);
//     setEditMode(false);
//   };

//   const handleEdit = (product: { id: number; name: string; price: number; category: string; rating: number }) => {
//     setName(product.name);
//     setPrice(product.price);
//     setCategory(product.category);
//     setRating(product.rating);
//     setCurrentId(product.id);
//     setEditMode(true);
//   };

//   return (
//     <div>
//       <h1 className="text-xl font-bold">Product Management</h1>
//       <Filters />
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Product Name"
//           required
//           className="border p-2 mr-2"
//         />
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           placeholder="Product Price"
//           required
//           className="border p-2 mr-2"
//         />
//         <input
//           type="text"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           placeholder="Category"
//           className="border p-2 mr-2"
//         />
//         <input
//           type="number"
//           value={rating}
//           onChange={(e) => setRating(Number(e.target.value))}
//           placeholder="Rating"
//           className="border p-2 mr-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2">
//           {editMode ? 'Update Product' : 'Add Product'}
//         </button>
//       </form>

//       <ul>
//         {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
//           <li key={product.id} className="flex justify-between items-center">
//             <span>{product.name} - ${product.price.toFixed(2)} ({product.category}, {product.rating} Stars)</span>
//             <div>
//               <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white p-1 mr-2">
//                 Edit
//               </button>
//               <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white p-1">
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductManagement;