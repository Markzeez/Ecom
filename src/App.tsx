import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Page404 from './Page404';
import RootLayout from './Layout/RootLayout';
import axios from 'axios';
import Home from './Pages/Home/Home';
import AdminDash from './Pages/AdminDashboard/AdminDash';
import AnalyticsDashboard from './Pages/AdminDashboard/AnalyticsDashboard';
import CartPage from './Pages/CartPage';
import AboutUs from './Pages/AboutUs/AboutUs';
// import ProductManagement from './Pages/Product/ProductManagement';

interface Data {
  id?: number;
  name?: string;
}

const App: React.FC = () => {
  const [, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const serverUrl = import.meta.env.VITE_APP_SERVER_DOMAIN;
      console.log('Fetching data from:', serverUrl);

      const response = await axios.get<Data>(`${serverUrl}/Campaign`);
      setData(response.data);
      console.log('Fetched data:', response.data); // Log the fetched data
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err); // Log detailed error
        setError(err.message);
      } else {
        console.error('Unknown error:', err); // Log any unknown errors
        setError('An unknown error occurred');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="/admindashboard" element={<AdminDash/>} />
        <Route path="/analytics" element={<AnalyticsDashboard/>} />
        <Route path="/admindashboard" element={<AdminDash/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        {/* <Route path='/Productmanagements' element={<ProductManagement/>} /> */}
        <Route path='/admin' element={<AdminDash/>} />
        <Route path='AnalyticsDashboard' element={<AnalyticsDashboard/>} />
        <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
