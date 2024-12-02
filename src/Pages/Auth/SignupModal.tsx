import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { FaUserShield } from 'react-icons/fa';
import { FcAddImage } from 'react-icons/fc';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
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
        <h2 className="text-2xl font-semibold text-start text-gray-800 mb-3">Sign up</h2>

        <form className="space-y-5">
          <div className='flex flex-row gap-2'>
            <input
              type="text"
              id="Firstname"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none "
              placeholder="FirstName"
              required
            />
             <input
              type="text"
              id="Lastname"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none "
              placeholder="LastName"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none "
              placeholder="Email"
              required
            />
          </div>
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
          <div className='flex flex-row items-center border border-gray-300 rounded-2xl focus:outline-none'>
            
            <input
              type={showPassword ? "text" : "Password"}
              id="confirm-password"
              className="w-full mt-1 px-4 py-2 outline-none "
              placeholder="Confirm Password"
              required
            />
            <div
                className="mr-[10px] text-xl cursor-pointer"
                onClick={handleshowPassword}
              >
                {showPassword ? <BiShow size={15} /> : <BiHide size={15} />}
              </div>
          </div>
          <div>
          <input style={{display:"none"}} className='p-[10px] w-[280px] border-b-2 border-[#a7bcff] ' id='file' type="file" />
                <label className='flex justify-center gap-2.5 text-[#8da4f1] text-xs cursor-pointer' htmlFor="file" >
                 <FcAddImage className='justify-start items-start ' size={40}/>
                  <span>Add an avatar</span>
                </label>
          </div>


          <div>
            <button
              type="submit"
              className="lg:w-full sm:w-[100px]   py-2 px-4 bg-red-300 text-white rounded-2xl hover:bg-red-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="w-[100%] text-black text-xs mt-2 mx-auto flex flex-row gap-1">
        <FaUserShield size={12}/>
          I Agree with <span className='text-red-400'>Term of Service</span> and <span className='text-red-400'>Privacy policy</span> 
        </div>
        <div className="text-black text-xs mt-10">
          Already have an Account? <span className='text-[#344647] hover:underline cursor-pointer'>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
