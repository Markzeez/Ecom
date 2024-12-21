import { create } from 'zustand';

// Define the CartItem interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Define the CartState interface
interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

// Zustand store for managing cart state
export const useCartStore = create<CartState>((set) => ({
  cart: [],

  // Add item to cart or increase its quantity if it already exists
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity if item already exists in the cart
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      // Add new item to the cart
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  // Remove an item from the cart by its ID
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // Update the quantity of a specific cart item by its ID
  updateCartItemQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

  // Clear all items from the cart
  clearCart: () => set({ cart: [] }),
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

// import { create } from 'zustand';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
// }

// interface ProductStore {
//   products: Product[];
//   addProduct: (product: Product) => void;
//   editProduct: (updatedProduct: Product) => void;
//   deleteProduct: (id: string) => void;
// }

// export const useProductStore = create<ProductStore>((set) => ({
//   products: [],
//   addProduct: (product) =>
//     set((state) => ({
//       products: [...state.products, product],
//     })),
//   editProduct: (updatedProduct) =>
//     set((state) => ({
//       products: state.products.map((product) =>
//         product.id === updatedProduct.id ? updatedProduct : product
//       ),
//     })),
//   deleteProduct: (id) =>
//     set((state) => ({
//       products: state.products.filter((product) => product.id !== id),
//     })),
// }));


// import create from 'zustand';

// store/productStore.ts
// import create from 'zustand';
// import { Product, ProductStore } from '../types';

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);
      if (existingProduct) {
        return {
          products: state.products.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + 1 }
              : p
          ),
        };
      }
      return {
        products: [...state.products, { ...product, quantity: 1 }],
      };
    }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  increaseQuantity: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
  clearProducts: () =>
    set(() => ({
      products: [],
    })),
}));

// types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearProducts: () => void;
}


// import { create } from 'zustand';

interface Sale {
  amount: number;
  date: string; // Use ISO string format for dates
}

interface SalesState {
  sales: Sale[];
  addSale: (sale: Sale) => void;
  getSalesByPeriod: (period: 'day' | 'week' | 'month') => number;
}

const useSalesStore = create<SalesState>((set, get) => ({
  sales: [],
  addSale: (sale) =>
    set((state) => ({
      sales: [...state.sales, sale],
    })),
  getSalesByPeriod: (period) => {
    const now = new Date();
    const sales = get().sales;

    return sales.reduce((total, sale) => {
      const saleDate = new Date(sale.date);
      const isSamePeriod = {
        day: saleDate.toDateString() === now.toDateString(),
        week:
          now.getTime() - saleDate.getTime() <= 7 * 24 * 60 * 60 * 1000 &&
          saleDate.getDay() <= now.getDay(),
        month: saleDate.getMonth() === now.getMonth(),
      };

      return isSamePeriod[period] ? total + sale.amount : total;
    }, 0);
  },
}));

export default useSalesStore;
