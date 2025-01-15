import { create } from 'zustand';

// Define the User type for shared use across stores
interface User {
  id: string;
  email: string;
  firstName?: string | null;
  [key: string]: any; // Additional user properties
}

/**
 * Auth Store
 * Manages user authentication and session state.
 */
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (isAuthenticated: boolean, user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  setAuth: (isAuthenticated, user) =>
    set({ isAuthenticated, user }),

  logout: () =>
    set({ isAuthenticated: false, user: null }),
}));

/**
 * Forgot Password Store
 * Manages the state for forgot password flow.
 */
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
    if (email === "test@example.com") {
      set({ successMessage: "A reset link has been sent to your email!", errorMessage: '' });
    } else {
      set({ successMessage: '', errorMessage: "Email not found. Please try again." });
    }
  },
}));

/**
 * Reset Password Store
 * Manages the state for reset password flow.
 */
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

    set({
      successMessage: 'Password successfully reset!',
      errorMessage: '',
      newPassword: '',
      confirmPassword: '',
    });
  },
}));

/**
 * Cart Icon Store
 * Manages the state for the cart icon functionality.
 */
interface CartIconState {
  itemCount: number;
  addItem: () => void;
  clearCart: () => void;
}

export const useCartIconStore = create<CartIconState>((set) => ({
  itemCount: 0,

  addItem: () => set((state) => ({ itemCount: state.itemCount + 1 })),

  clearCart: () => set({ itemCount: 0 }),
}));

export default useAuthStore;
