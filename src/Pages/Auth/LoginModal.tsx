import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}



const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [showPassword, SetShowPassword] = useState(false);

  const handleshowPassword = () => {
  SetShowPassword((preve) => !preve);
};

  


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm p-8 bg-white rounded-lg shadow-lg mx-4 sm:mx-0">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-start text-gray-800 mb-3">Log In</h2>

        <form className="space-y-5">
          <div>
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> */}
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none "
              placeholder="Email"
              required
            />
          </div>

          {/* <label htmlFor="password" 
          className="block text-sm font-medium text-gray-700">Password</label> */}
          <div className='flex flex-row items-center border border-gray-300 rounded-2xl focus:outline-none'>
            
            <input
              type={showPassword ? "text" : "Password"}
              id="password"
              className="w-full mt-1 px-4 py-2 outline-none "
              placeholder="Password"
              required
            />
            <div
                className="mr-[10px] text-xl cursor-pointer"
                onClick={handleshowPassword}
              >
                {showPassword ? <BiShow size={15} /> : <BiHide size={15} />}
              </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-xs text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-xs text-red-400 hover:underline">Forgot password</a>
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
        <p className='text-xs text-center mt-4'>Or Sign in with</p>

        <div className="flex flex-row items-center justify-center gap-2 mt-2 ">
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png" alt="" className='w-3 h-3 rounded-full bg-white ' />
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/facebook_f_qzf7wk.png" alt="" className='w-3 h-3 rounded-full bg-white'/>
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794709/apple_vk0a9c.png" alt="" className='w-3 h-3 rounded-full bg-white'/>
        </div>

        <span className="ml-[100px] text-black text-xs mt-1.5">
          Already have an Account? <span className='text-[#344647] hover:underline cursor-pointer'>Sign up</span>
        </span>

      </div>
    </div>
  );
};

export default LoginModal;
