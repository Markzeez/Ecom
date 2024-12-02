import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
// import axios from "axios";


const RootLayout = () => {
  
  return (
    <div className=" bg-[#ffffff]">
    <Navbar />
    <Outlet />
    </div>
  );
};

export default RootLayout;
