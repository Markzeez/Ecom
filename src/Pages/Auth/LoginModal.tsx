import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import useAuthStore from '../../Store/useAuthStore.tsx';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}




const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      id: '1', // Replace with actual user ID logic if needed
      email,
      password,
    };
    login(user);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm p-8 bg-white rounded-lg shadow-lg mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-start text-gray-800 mb-3">Log In</h2>

        <form onSubmit={handleLogin} className="space-y-5">
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

          <div className="flex flex-row items-center border border-gray-300 rounded-2xl focus:outline-none">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 outline-none"
              placeholder="Password"
              required
            />
            <div
              className="mr-[10px] text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow size={15} /> : <BiHide size={15} />}
            </div>
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
        </form>

        <div className="text-black text-xs mt-0.5 flex items-center justify-center">
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
