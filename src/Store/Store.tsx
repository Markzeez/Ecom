import { create } from 'zustand';

// Define the CartItem interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  clearCart: number;
  product: number;
  // addItem: number;

  
}

// Define the CartState interface
interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  // addItem: () => void;
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
  itemCount: 0, // Initial cart item count
  // Function to add an item to the cart
  // addItem: () => set((state) => ({ itemCount: state.itemCount + 1 })),
  
  // Function to clear all items in the cart by setting itemCount to 0
  // clearsCart:()=> set({ itemCount: 0}),
}));


// store/cartStore.ts
// import { create } from 'zustand';

// interface CartItem {
//   id: number;
//   addItem: ()=>void;
//   removeItem: ()=>void;
// }




// stores/useFilterStore.ts


interface FilterState {
  category: string;
  SetCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: '',
  SetCategory:(category)=>set({category}),
  searchTerm: '',
  setSearchTerm: (searchTerm)=>set({searchTerm}),
}));


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

// import { create } from 'zustand';

type UserRole = 'admin' | 'user' | null;

interface AuthState {
  isAuthenticated: boolean;
  userRole: UserRole;
  setAuth: (authenticated: boolean, role: UserRole) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userRole: null,
  setAuth: (authenticated, role) => set({ isAuthenticated: authenticated, userRole: role }),
}));
