import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../Store/useAuthStore.tsx';

const Logout: React.FC = () => {
  const { logout, user, setAuth } = useAuthStore(); // Consolidated Zustand store usage
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false, null); // Reset Zustand store
    logout(); // Call logout logic
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <p className="text-xs">
        Logged in as: <span className="font-bold">{user?.firstName || 'Guest'}</span>
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
