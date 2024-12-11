import React from 'react';
import { useResetPasswordStore } from '../../Store/useAuthStore';

const ResetPassword: React.FC = () => {
  const {
    newPassword,
    confirmPassword,
    successMessage,
    errorMessage,
    setNewPassword,
    setConfirmPassword,
    resetMessages,
    resetPassword,
  } = useResetPasswordStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages(); // Clear previous messages
    resetPassword(); // Validate and reset password
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new password"
            required
          />

          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mt-4 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm new password"
            required
          />

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            Reset Password
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

export default ResetPassword;