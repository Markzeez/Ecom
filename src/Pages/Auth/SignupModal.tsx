import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { FaUserShield } from 'react-icons/fa';
import { FcAddImage } from 'react-icons/fc';
import { ImagetoBase64 } from '../../utils/ImagestoBase64';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
    placeholder={placeholder}
    required
  />
);

interface PasswordFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  placeholder: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ name, value, onChange, showPassword, togglePasswordVisibility, placeholder }) => (
  <div className="flex items-center border border-gray-300 rounded-2xl">
    <input
      type={showPassword ? 'text' : 'password'}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 outline-none"
      placeholder={placeholder}
      required
    />
    <div className="mr-3 cursor-pointer text-xl" onClick={togglePasswordVisibility}>
      {showPassword ? <BiShow size={20} /> : <BiHide size={20} />}
    </div>
  </div>
);

const AvatarUploader: React.FC<{ onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onUpload }) => (
  <div>
    <input
      id="file"
      type="file"
      className="hidden"
      onChange={onUpload}
    />
    <label
      htmlFor="file"
      className="flex justify-center items-center gap-2 text-blue-500 text-sm cursor-pointer"
    >
      <FcAddImage size={40} />
      <span>Add an avatar</span>
    </label>
  </div>
);

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

  const handleTogglePassword = () => setShowPassword(prev => !prev);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleUploadProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const base64Image = await ImagetoBase64(e.target.files[0]);
      setData(prev => ({ ...prev, image: base64Image }));
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
        onClose();
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
            <InputField
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
            <InputField
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
          </div>
          <InputField
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <PasswordField
            name="password"
            value={data.password}
            onChange={handleInputChange}
            showPassword={showPassword}
            togglePasswordVisibility={handleTogglePassword}
            placeholder="Password"
          />
          <PasswordField
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={handleInputChange}
            showPassword={showConfirmPassword}
            togglePasswordVisibility={handleToggleConfirmPassword}
            placeholder="Confirm Password"
          />
          <AvatarUploader onUpload={handleUploadProfileImage} />
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
          <Link to='/login'>
            <span className="text-blue-500 cursor-pointer hover:underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
