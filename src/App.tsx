import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Page404 from './Page404';
import RootLayout from './Layout/RootLayout';
import axios from 'axios';
import Home from './Pages/Home/Home';
import AdminDash from './Pages/Product/ProductInput';
import AnalyticsDashboard from './Pages/Product/ProductAnaylsis';
import CartPage from './Pages/Product/CartPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Skeleton from './Component/Skeleton';
import Contactus from './Component/Contactus';
import CreateReview from './Component/CreateReview';
import ProductList from './Pages/Product/ProductList';
import ProductPage from './Pages/Product/ProductPage';
import FAQ from './Component/FAQ';
import Logout from './Pages/Auth/Logout';
import OrderTracking from './Pages/OrderTracking.tsx/OrderTracking';
import ForgottenPassword from './Pages/Auth/ForgottenPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import OrderTrackingForm from './Pages/OrderTracking.tsx/OrderTrackingForm';
// import Geolocation from './Component/Geolocation';
import AdminDashboard from '../src/Pages/AdminDashboard/AdminDashbord';
import PUBLIC_ROUTES from './utils/PublicRoutes';
import PostMessage from './Pages/EmailSubscription/PostMessage';

interface Data {
  id?: number;
  name?: string;
}

const App: React.FC = () => {
  const [, setData] = useState<Data | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const serverUrl = import.meta.env.VITE_APP_SERVER_DOMAIN;
      // console.log('Fetching data from:', serverUrl);

      const response = await axios.get<Data>(`${serverUrl}/Campaign`);
      setData(response.data);
      console.log('Fetched data:', response.data); // Log the fetched data
      // setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err); // Log detailed error
        // setError(err.message);
      } else {
        console.error('Unknown error:', err); // Log any unknown errors
        // setError('An unknown error occurred');
      }
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <>
      <Routes>
        <Route path={PUBLIC_ROUTES.LANDINGPAGE} element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="/admindashboard" element={<AdminDash/>} />
        <Route path="/analytics" element={<AnalyticsDashboard/>} />
        <Route path="/Contactus" element={<Contactus/>} /> 
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        {/* <Route path='/productmanagement' element={<ProductManagement/>} /> */}
        <Route path='/admin' element={<AdminDash/>} />
        <Route path='Analytic' element={<AnalyticsDashboard/>} />
        <Route path='/skeleton' element={<Skeleton/>} />
        <Route path='/create' element={<CreateReview/>} />
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/order' element={<OrderTracking/>} />
        {/* <Route path='/emoji' element={<Emoji emoji={''} label={''}/>} /> */}
        <Route path='/forget' element={<ForgottenPassword/>}/>
        <Route path='/reset' element={<ResetPassword/>} />
        {/* <Route path='/productform' element={<ProductForm/>} /> */}
        <Route path='/take' element={<OrderTrackingForm/>} />
        {/* <Route path='/location' element={<Geolocation/>} /> */}
        <Route path='/holder' element={<AdminDashboard/>} />
        <Route path='/post' element={<PostMessage/>} />
        
        <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
