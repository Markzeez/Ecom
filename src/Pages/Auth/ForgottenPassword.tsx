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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
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