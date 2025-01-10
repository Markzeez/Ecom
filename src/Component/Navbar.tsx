import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { CiSearch, CiUser } from 'react-icons/ci';
import { BiCart } from 'react-icons/bi';
import useAuthStore from '../Store/useAuthStore';
import Logout from '../Pages/Auth/Logout';
import SignupModal from '../Pages/Auth/SignupModal';
import LoginModal from '../Pages/Auth/LoginModal';
import { Link } from 'react-router-dom';
import { useCartIconStore } from '../Store/useAuthStore';
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  const { isAuthenticated } = useAuthStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSignUp] = useState(false);

  const [modalState, setModalState] = useState({
    signup: false,
    login: false,
    cart: false,
  });

  const toggleSearch = () => setSearchOpen((prev) => !prev);

  const openModal = (modal: keyof typeof modalState) => {
    setModalState({ signup: false, login: false, cart: false, [modal]: true });
  };

  const closeModal = () =>
    setModalState({ signup: false, login: false, cart: false });

  const { itemCount } = useCartIconStore();

  return (
    <div className="fixed top-0 z-20 flex w-full justify-between items-center h-[50px] px-4 text-black bg-white shadow">
      {/* Logo */}
      <Link
        to="/"
        className="cursor-pointer text-purple-400 text-xs font-bold "
      >
        Shopfromteepha
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 text-purple-400">
        {/* About, Contact, and other Links */}
        <ul className="flex space-x-4">
          <Link to={'/about'}>
            {' '}
            <li>About us</li>
          </Link>
         <Link to={'/contactus'}> <li>Contact us</li></Link>
          <Link to={'/faq'}><li>FAQ</li></Link>
          {/* <li>Bags</li> */}
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
              <button
                onClick={toggleSearch}
                className="absolute right-2 text-gray-600"
              >
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
              {/* <button onClick={()=> setIsSignUp(!isSignUp)}>
                  {isSignUp ? "Switch to Sign In" : "Switch to Sign Up" }
                </button> */}
              {isSignUp ? (
                <CiUser
                  onClick={() => openModal('login')}
                  size={24}
                  className="text-blue-600"
                />
              ) : (
                <FaCircleUser
                  onClick={() => openModal('signup')}
                  size={24}
                  className="text-purple-400"
                />
              )}
            </div>
          )}
          <div className="relative">
            <Link to="/cart">
              {itemCount > 0 && (
                <span className="absolute w-5 h-5 top-[-12px] right-[-10px] px-1 py-1  text-xs text-center text-white bg-red-600 rounded-full mx-auto ">
                  {itemCount}
                </span>
              )}

              <BiCart
                onClick={() => openModal('cart')}
                size={24}
                className="text-gray-600"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3">
        {searchOpen ? (
          <div className="relative flex items-center bg-white p-2 rounded-md w-full">
            <input
              type="text"
              className="pl-3 pr-8 py-1 w-full border border-gray-300 bg-slate-200 rounded-full outline-none"
              placeholder="Search..."
            />
            <button
              onClick={toggleSearch}
              className="absolute right-2 text-gray-600"
            >
              <IoCloseOutline size={20} />
            </button>
          </div>
        ) : (
          <CiSearch
            onClick={toggleSearch}
            size={24}
            className="text-gray-600"
          />
        )}
        <CiUser
          onClick={() => openModal('login')}
          size={24}
          className="text-blue-600"
        />
        <FaCircleUser
          onClick={() => openModal('signup')}
          size={24}
          className="text-purple-400"
        />
        <BiCart
          onClick={() => openModal('cart')}
          size={24}
          className="text-gray-600"
        />
      </div>

      {/* Modals */}
      {modalState.signup && <SignupModal onClose={closeModal} isOpen />}
      {modalState.login && <LoginModal onClose={closeModal} isOpen />}
    </div>
  );
};

export default Navbar;
