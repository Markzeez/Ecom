import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import useAuthStore from '../../Store/useAuthStore.tsx';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLogin = (role?: 'admin' | 'user') => {
    if (role) {
      setAuth(true, role); // Update Zustand store with role
      navigate(role === 'admin' ? '/admin' : '/dashboard');
    } else {
      // Simulate login logic (e.g., API call)
      const user = { id: '1', email, password }; // Replace with actual logic
      console.log('Login user:', user);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm p-8 bg-white rounded-lg shadow-lg mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-start text-gray-800 mb-3">Log In</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(); // Default login without role
          }}
          className="space-y-5"
        >
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-2xl focus:outline-none">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 outline-none"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mr-3 text-xl cursor-pointer"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <BiShow size={15} /> : <BiHide size={15} />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-xs text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-xs text-red-400 hover:underline">
              Forgot password
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-300 text-white rounded-full hover:bg-red-700 transition duration-300"
            >
              Login
            </button>
          </div>

          <div className="flex gap-2 mt-3">
            <button
              type="button"
              onClick={() => handleLogin('user')}
              className="flex-1 py-2 px-4 bg-blue-300 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              Login as User
            </button>
            <button
              type="button"
              onClick={() => handleLogin('admin')}
              className="flex-1 py-2 px-4 bg-green-300 text-white rounded-full hover:bg-green-700 transition duration-300"
            >
              Login as Admin
            </button>
          </div>
        </form>

        <div className="text-black text-xs mt-3 flex items-center justify-center">
          Don't have an account?{' '}
          <span className="text-[#344647] hover:underline cursor-pointer ml-1">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
