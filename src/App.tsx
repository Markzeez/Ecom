import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Layouts
import RootLayout from './Layout/RootLayout';

// Pages and Components
import Page404 from './Page404';
import Home from './Pages/Home/Home';
import AdminDash from './Pages/Product/ProductInput';
import AnalyticsDashboard from './Pages/Product/ProductAnaylsis';
import CartPage from './Pages/Product/CartPage';
import AboutUs from './Pages/AboutUs/AboutUs';
// import Skeleton from './Component/Skeleton';
import Contactus from './Component/Contactus';
import CreateReview from './Component/CreateReview';
import ProductList from './Pages/Product/ProductList';
import ProductPage from './Pages/Product/ProductPage';
import FAQ from './Component/FAQ';
// import Logout from './Pages/Auth/Logout';
import OrderTracking from './Pages/OrderTracking.tsx/OrderTracking';
import ForgottenPassword from './Pages/Auth/ForgottenPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import OrderTrackingForm from './Pages/OrderTracking.tsx/OrderTrackingForm';
import AdminDashboard from './Pages/AdminDashboard/AdminDashbord';
import PostMessage from './Pages/EmailSubscription/PostMessage';
// import LoginModal from './Pages/Auth/LoginModal';
import SignupModal from './Pages/Auth/SignupModal';
import UnauthorizedPage from '../../Frontend/src/Component/UnauthorizedPage';
import ProtectedRoute from './Component/ProtectedRoute';

// Interfaces
interface Data {
  id?: number;
  name?: string;
}

// API Service
const fetchData = async (setData: (data: Data | null) => void) => {
  try {
    const serverUrl = import.meta.env.VITE_APP_SERVER_DOMAIN;
    const response = await axios.get<Data>(`${serverUrl}/Campaign`);
    setData(response.data);
    console.log('Fetched data:', response.data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

const App: React.FC = () => {
  const [, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetchData(setData);
  }, []);

  const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/contactus', element: <Contactus /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/create', element: <CreateReview /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/signup', element: <SignupModal isOpen={false} onClose={() => {}} /> },
    { path: '/order', element: <OrderTracking /> },
    { path: '/forget', element: <ForgottenPassword /> },
    { path: '/reset', element: <ResetPassword /> },
    { path: '/take', element: <OrderTrackingForm /> },
    { path: '/post', element: <PostMessage /> },
  ];

  const adminRoutes = [
    { path: '/admindashboard', element: <AdminDash /> },
    { path: '/analytics', element: <AnalyticsDashboard /> },
    { path: '/products', element: <ProductPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/productlist', element: <ProductList /> },
    { path: '/admin', element: <AdminDashboard /> },
  ];

  return (
    // <Router>
      <Routes>
        {/* Root Layout */}
        <Route path="/" element={<RootLayout />}>
          {/* Public Routes */}
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* Admin Routes */}
          {adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* Catch-All Route */}
          <Route path="*" element={<Page404 />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    // </Router>
  );
};

export default App;
