import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProductAnaylsis from '../Product/ProductAnaylsis';
import SalesCalculator from '../AdminDashboard/SalesCalculator';

const AdminHolder: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <Link to="/admindashboard" className="p-2 hover:bg-gray-700 rounded">
            AdminDashboard          </Link>
          <Link to="/admin/users" className="p-2 hover:bg-gray-700 rounded">
            OrderTracking
          </Link>
          <Link to="/order" className="p-2 hover:bg-gray-700 rounded">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ">
        <Outlet />
        <ProductAnaylsis/>
        <SalesCalculator/>
        
      </main>
    </div>
  );
};

export default AdminHolder;