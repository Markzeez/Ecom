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
        <form onSubmit={handleSubmit} className='space-y-4'>
         
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
            placeholder="New Password"
            required
          />

         
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none"
            placeholder="Confirm New Password"
            required
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-300 text-white rounded-2xl hover:bg-red-700 transition duration-300"
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