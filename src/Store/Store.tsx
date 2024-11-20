// store/productStore.ts
import { create } from 'zustand'






// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   rating: number; // Add rating property
// }

// interface ProductStore {
//   products: Product[];
//   filteredProducts: Product[];
//   filters: {
//     category: string;
//     priceRange: [number, number];
//     rating: number;
//   };
//   addProduct: (product: Product) => void;
//   editProduct: (id: number, updatedProduct: Product) => void;
//   deleteProduct: (id: number) => void;
//   setFilters: (filters: Partial<ProductStore['filters']>) => void; // Function to set filters
// }

// export const useProductStore = create<ProductStore>((set) => ({
//   products: [],
//   filteredProducts: [],
//   filters: {
//     category: '',
//     priceRange: [0, 1000], // Default price range
//     rating: 0,
//   },
//   addProduct: (product) => set((state) => ({
//     products: [...state.products, product],
//     filteredProducts: [...state.filteredProducts, product], // Keep filtered products updated
//   })),
//   editProduct: (id, updatedProduct) => set((state) => ({
//     products: state.products.map((product) => (product.id === id ? updatedProduct : product)),
//     filteredProducts: state.filteredProducts.map((product) => (product.id === id ? updatedProduct : product)),
//   })),
//   deleteProduct: (id) => set((state) => ({
//     products: state.products.filter((product) => product.id !== id),
//     filteredProducts: state.filteredProducts.filter((product) => product.id !== id),
//   })),
//   setFilters: (filters) => set((state) => {
//     const updatedFilters = { ...state.filters, ...filters };
//     const filteredProducts = state.products.filter((product) => {
//       const matchesCategory = updatedFilters.category ? product.category === updatedFilters.category : true;
//       const matchesPrice = product.price >= updatedFilters.priceRange[0] && product.price <= updatedFilters.priceRange[1];
//       const matchesRating = product.rating >= updatedFilters.rating;

//       return matchesCategory && matchesPrice && matchesRating;
//     });
//     return {
//       filters: updatedFilters,
//       filteredProducts,
//     };
//   }),
// }));

  

// // stores/cartStore.ts
// import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
