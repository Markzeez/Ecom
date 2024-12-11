import { create } from 'zustand'


interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
}

// interface FilterState {
//   filters: {
//     category: string;
//     priceNumber: [number, number];
//   };
//   setFilter: (key: keyof FilterState['filters'], value: string | [number, number]) => void;
//   resetFilters: () => void;
// }



export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  updateCartItemQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

    clearCart: () => set({ cart: [] }), // Clear all items
}));





// stores/useFilterStore.ts
// import { create } from "zustand";

interface FilterState {
  title: string;
  priceRange: [number, number];
  color: string;
  brand: string;
  sortBy: "newest" | "oldest" | null;
  setTitle: (title: string) => void;
  setPriceRange: (priceRange: [number, number]) => void;
  setColor: (color: string) => void;
  setBrand: (brand: string) => void;
  setSortBy: (sortBy: "newest" | "oldest" | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  title: "",
  priceRange: [0, 1000],
  color: "",
  brand: "",
  sortBy: null,
  setTitle: (title) => set({ title }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setColor: (color) => set({ color }),
  setBrand: (brand) => set({ brand }),
  setSortBy: (sortBy) => set({ sortBy }),
}));


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

