import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';



const RootLayout = () => {
  return (
    <div className=" bg-[#ffffff]">
        <Navbar />
        <Outlet />
    </div>
  );
};

export default RootLayout;
