// stores/authStore.ts
import { create } from 'zustand';

interface User {
  id: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  image : string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) =>
    set(() => ({
      user,
      isAuthenticated: true,
    })),
  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),
}));

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