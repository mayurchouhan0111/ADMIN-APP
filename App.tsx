import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Restaurants from './pages/Restaurants';
import Orders from './pages/Orders';
import Menu from './pages/Menu';
import Settings from './pages/Settings';
import Support from './pages/Support';

// Placeholder components for routes we haven't fully implemented to prevent crashes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-background p-8 ml-0 md:ml-64">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <p className="text-gray-500">This feature is under development.</p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/users" element={<Placeholder title="Users Management" />} />
            <Route path="/delivery-partners" element={<Placeholder title="Delivery Partners" />} />
            <Route path="/payouts" element={<Placeholder title="Payouts" />} />
            <Route path="/coupons" element={<Placeholder title="Coupons & Offers" />} />
            <Route path="/reports" element={<Placeholder title="Reports & Analytics" />} />
            <Route path="/notifications" element={<Placeholder title="Notifications" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;