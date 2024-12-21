import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { CiSearch, CiUser } from 'react-icons/ci';
import { BiCart } from 'react-icons/bi';
import useAuthStore from '../Store/useAuthStore';
import Logout from '../Pages/Auth/Logout';
import SignupModal from '../Pages/Auth/SignupModal';
import LoginModal from '../Pages/Auth/LoginModal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated } = useAuthStore();
  const [searchOpen, setSearchOpen] = useState(false);

  const [modalState, setModalState] = useState({
    signup: false,
    login: false,
    cart: false,
  });

  const toggleSearch = () => setSearchOpen((prev) => !prev);

  const openModal = (modal: keyof typeof modalState) => {
    setModalState({ signup: false, login: false, cart: false, [modal]: true });
  };

  const closeModal = () => setModalState({ signup: false, login: false, cart: false });

  return (
    <div className="flex w-full justify-between items-center h-[50px] px-4 text-black bg-white shadow">
      {/* Logo */}
      <Link to="/" className="cursor-pointer text-purple-400 text-xs font-bold">
        Shopfromteepha
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 text-purple-400">
        {/* About, Contact, and other Links */}
        <ul className="flex space-x-4">
          <li>About us</li>
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Bags</li>
        </ul>

        {/* Search Bar */}
        <div className="relative mx-4">
          {searchOpen ? (
            <div className="relative flex items-center bg-white p-2 rounded-md">
              <input
                type="text"
                className="pl-3 pr-8 py-1 w-[400px] border border-gray-300 bg-slate-300 rounded-full outline-none"
                placeholder="Search..."
              />
              <button onClick={toggleSearch} className="absolute right-2 text-gray-600">
                <IoCloseOutline size={20} />
              </button>
            </div>
          ) : (
            <button onClick={toggleSearch} className="text-gray-600">
              <CiSearch size={24} />
            </button>
          )}
        </div>

        {/* Authentication and Cart Icons */}
        <div className="flex items-center space-x-5">
          {isAuthenticated ? (
            <Logout />
          ) : (
            <div className="flex space-x-4">
              <CiUser onClick={() => openModal('login')} size={24} className="text-blue-600" />
              <CiUser onClick={() => openModal('signup')} size={24} className="text-purple-400" />
            </div>
          )}
          <Link to="/cart">
            <BiCart onClick={() => openModal('cart')} size={24} className="text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3">
        {searchOpen ? (
          <div className="relative flex items-center bg-white p-2 rounded-md w-full">
            <input
              type="text"
              className="pl-3 pr-8 py-1 w-full border border-gray-300 bg-slate-300 rounded-full outline-none"
              placeholder="Search..."
            />
            <button onClick={toggleSearch} className="absolute right-2 text-gray-600">
              <IoCloseOutline size={20} />
            </button>
          </div>
        ) : (
          <CiSearch onClick={toggleSearch} size={24} className="text-gray-600" />
        )}
        <CiUser onClick={() => openModal('login')} size={24} className="text-blue-600" />
        <CiUser onClick={() => openModal('signup')} size={24} className="text-purple-400" />
        <BiCart onClick={() => openModal('cart')} size={24} className="text-gray-600" />
      </div>

      {/* Modals */}
      {modalState.signup && <SignupModal onClose={closeModal} isOpen />}
      {modalState.login && <LoginModal onClose={closeModal} isOpen />}
    </div>
  );
};

export default Navbar;
