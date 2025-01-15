import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Locations from '../Component/Locations';
// import axios from "axios";


const RootLayout = () => {
  
  return (
    <div className=" bg-[#ffffff]">
    <Navbar />
    <Outlet />
    <Locations center={[6.8559, 3.7266]} 
zoom={3} 
markerPosition={[6.8559, 3.7266]} 
markerPopupText={'Ikenne, Remo'}
/>
    <Footer/>
    </div>
  );
};

export default RootLayout;
