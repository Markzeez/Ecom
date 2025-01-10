import React from 'react';
import { useForgotPasswordStore } from '../../Store/useAuthStore';

const ForgotPassword: React.FC = () => {
  const {
    email,
    successMessage,
    errorMessage,
    setEmail,
    resetMessages,
    submitEmail,
  } = useForgotPasswordStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages(); // Clear previous messages
    submitEmail(email); // Submit the email
  };

  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-300 text-white rounded-2xl hover:bg-red-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        {successMessage && (
          <p className="mt-4 text-green-600 font-medium text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-600 font-medium text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;