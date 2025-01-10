// stores/authStore.ts
// Import Zustand for state management
import { create } from 'zustand';

// Define the state and actions interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// Define the user structure (customize as needed)
interface User {
  id: string;
  email: string;
  [key: string]: any; // Add other user properties as needed
}

// Create the auth store
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  // Login action to set user data and authentication status
  login: (user: User) =>
    set(() => ({
      user,
      isAuthenticated: true,
    })),

  // Logout action to clear user data and authentication status
  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),
}));

// export default useAuthStore;


// import { create } from 'zustand';

interface ForgotPasswordState {
  email: string;
  successMessage: string;
  errorMessage: string;
  setEmail: (email: string) => void;
  resetMessages: () => void;
  submitEmail: (email: string) => void;
}

export const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
  email: '',
  successMessage: '',
  errorMessage: '',
  setEmail: (email) => set({ email }),
  resetMessages: () => set({ successMessage: '', errorMessage: '' }),
  submitEmail: (email) => {
    // Simulate API call
    if (email === "test@example.com") {
      set({
        successMessage: "A reset link has been sent to your email!",
        errorMessage: '',
      });
    } else {
      set({
        successMessage: '',
        errorMessage: "Email not found. Please try again.",
      });
    }
  },
}));


// import { create } from 'zustand';

interface ResetPasswordState {
  newPassword: string;
  confirmPassword: string;
  successMessage: string;
  errorMessage: string;
  setNewPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  resetMessages: () => void;
  resetPassword: () => void;
}

export const useResetPasswordStore = create<ResetPasswordState>((set, get) => ({
  newPassword: '',
  confirmPassword: '',
  successMessage: '',
  errorMessage: '',
  setNewPassword: (password) => set({ newPassword: password }),
  setConfirmPassword: (password) => set({ confirmPassword: password }),
  resetMessages: () => set({ successMessage: '', errorMessage: '' }),
  resetPassword: () => {
    const { newPassword, confirmPassword } = get();
    if (!newPassword || !confirmPassword) {
      set({ errorMessage: 'Both fields are required.', successMessage: '' });
      return;
    }
    if (newPassword !== confirmPassword) {
      set({ errorMessage: 'Passwords do not match.', successMessage: '' });
      return;
    }
    if (newPassword.length < 8) {
      set({ errorMessage: 'Password must be at least 8 characters long.', successMessage: '' });
      return;
    }

    // Simulate API call
    set({
      successMessage: 'Password successfully reset!',
      errorMessage: '',
      newPassword: '',
      confirmPassword: '',
    });
  },
}));

export default useAuthStore;

// import create from 'zustand';
type CartIconState = {
  itemCount: number; // Number of items in the cart
  addItem: () => void; // Function to add items
  clearsCart:() => void; // Function to clear the cart
  resetItemCount:() => void;
};

export const useCartIconStore = create<CartIconState>((set) => ({
  itemCount: 0,

  // Function to add an item to the cart
  addItem: () => set((state) => ({ itemCount: state.itemCount + 1 })),

  // Function to clear all items in the cart
  clearsCart: () => {
    set({ itemCount: 0 }); // Reset item count to 0
  },

  // Function to reset the cart item count explicitly (if needed separately)
  resetItemCount: () => set({ itemCount: 0 }),
}));


