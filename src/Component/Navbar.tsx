import { useState } from 'react';
import { IoCartOutline, IoCloseOutline } from 'react-icons/io5';
import { CiSearch, CiUser } from 'react-icons/ci';
import { BiCart } from 'react-icons/bi';
import useAuthStore from '../Store/useAuthStore';
import Logout from '../Pages/Auth/Logout';
import SignupModal from '../Pages/Auth/SignupModal';
import LoginModal from '../Pages/Auth/LoginModal';
// import CartModal from '../Pages/CartPage';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [modalState, setModalState] = useState({
    signup: false,
    login: false,
    cart: false,
    // logout: false,
  });

  const { isAuthenticated} = useAuthStore();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => setSearchOpen((prev) => !prev);

  const openModal = (modal: keyof typeof modalState) => {
    setModalState({
      signup: false,
      login: false,
      cart: false,
      [modal]: true,
    });
  };

  const closeModal = () => {
    setModalState({
      signup: false,
      login: false,
      cart: false,
    });
  };

  // const logout =  useAuthStore((state => state.logout))


  const renderSearchInput = () => (
    <div className="relative flex w-full items-center bg-white p-2 rounded-md shadow">
      <input
        type="text"
        className="pl-3 pr-8 py-1 w-full border border-gray-300 rounded-full outline-none"
        placeholder="Search..."
      />
      <button onClick={toggleSearch} className="absolute right-2 text-gray-600">
        <IoCloseOutline size={20} />
      </button>
    </div>
  );

  const renderMobileIcons = () => (
    <>
      <button
        onClick={() => openModal('login')}
        className="text-blue-600 rounded-md hover:bg-gray-100 transition duration-300"
      >
        <CiUser size={24} />
      </button>
      <CiSearch onClick={toggleSearch} size={24} className="text-gray-600" />
      <BiCart onClick={() => openModal('cart')} size={24} className="text-gray-600" />
    </>
  );

  return (
    <div className="flex w-full justify-between items-center h-[50px] px-4 text-black bg-white shadow">
      {/* Logo */}
      <Link to={'/'} className="cursor-pointer text-purple-400 text-xs font-bold">Shopfromteepha</Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-purple-400">
        <button
          onClick={() => openModal('signup')}
          className="py-2 px-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Sign Up
        </button>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex space-x-5 cursor-pointer ">
        <div className="relative ml-6 w-[400px]">
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-gray-300 bg-gray-300 rounded-full w-full outline-none"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CiSearch className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        {isAuthenticated ? (
          <Logout/>
        // <button
        // onClick={logout}
        // className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        // >
          
        // </button>
        ) : (<button
          onClick={() => openModal('login')}
          className="py-2 px-4 bg-white text-purple-400 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Login
        </button>)}
        
        
        {/* <Link to={'/cart'}><IoCartOutline className="mt-3 cursor-pointer" size={20} 
        onClick={() => openModal('cart')}
         /></Link> */}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3">
        {searchOpen ? renderSearchInput() : renderMobileIcons()}
      </div>

      {/* Modals */}
      {modalState.signup && <SignupModal onClose={closeModal} isOpen={true} />}
      {modalState.login && <LoginModal onClose={closeModal} isOpen={true} />}
      <Link to={'/cart'}><IoCartOutline className=" mt-3 cursor-pointer" size={20} 
        onClick={() => openModal('cart')}
         /></Link>
      {/* {modalState.cart && <CartModal onClose={closeModal} />} */}
    </div>
  );
};

export default Navbar;
