import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { FaUserShield } from 'react-icons/fa';
import { FcAddImage } from 'react-icons/fc';
import { ImagetoBase64 } from '../../utils/ImagestoBase64';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
    image: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const base64Image = await ImagetoBase64(e.target.files[0]);
      setData((prev) => ({ ...prev, image: base64Image }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmpassword } = data;

    if (!firstName || !lastName || !email || !password || !confirmpassword) {
      toast.error('Please fill out all required fields.');
      return;
    }

    if (password !== confirmpassword) {
      toast.error('Password and confirm password do not match.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_SERVER_DOMAIN}signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      toast(result.message);

      if (result.alert) {
        onClose(); // Optionally redirect to login here
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
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
        <h2 className="text-2xl font-semibold text-start text-gray-800 mb-3">Sign up</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
            placeholder="Email"
            required
          />
          <div className="flex items-center border border-gray-300 rounded-2xl">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={data.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 outline-none"
              placeholder="Password"
              required
            />
            <div className="mr-3 cursor-pointer text-xl" onClick={handleTogglePassword}>
              {showPassword ? <BiShow size={15} /> : <BiHide size={15} />}
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-2xl">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 outline-none"
              placeholder="Confirm Password"
              required
            />
            <div className="mr-3 cursor-pointer text-xl" onClick={handleToggleConfirmPassword}>
              {showConfirmPassword ? <BiShow size={15} /> : <BiHide size={15} />}
            </div>
          </div>
          <div>
            <input
              id="file"
              type="file"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
            <label
              htmlFor="file"
              className="flex justify-center items-center gap-2 text-blue-500 text-sm cursor-pointer"
            >
              <FcAddImage size={40} />
              <span>Add an avatar</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-300 text-white rounded-2xl hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center gap-1 text-sm mt-3">
          <FaUserShield size={12} />
          <span>
            I agree with <span className="text-red-400">Terms of Service</span> and{' '}
            <span className="text-red-400">Privacy Policy</span>.
          </span>
        </div>
        <div className="text-sm mt-4">
          Already have an account?{' '}
          <span className="text-blue-500 cursor-pointer hover:underline">Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
