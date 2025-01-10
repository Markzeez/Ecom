import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
// import axios from "axios";


const RootLayout = () => {
  
  return (
    <div className=" bg-[#ffffff]">
    <Navbar />
    <Outlet />
    <Footer/>
    </div>
  );
};

export default RootLayout;
