import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Bike, 
  Receipt, 
  UtensilsCrossed, 
  Wallet, 
  Tag, 
  BarChart3, 
  Bell, 
  HeadphonesIcon, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Store, label: 'Restaurants', path: '/restaurants' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Bike, label: 'Delivery Partners', path: '/delivery-partners' },
    { icon: Receipt, label: 'Orders', path: '/orders' },
    { icon: UtensilsCrossed, label: 'Menu Items', path: '/menu' },
    { icon: Wallet, label: 'Payouts', path: '/payouts' },
    { icon: Tag, label: 'Coupons & Offers', path: '/coupons' },
    { icon: BarChart3, label: 'Reports & Analytics', path: '/reports' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: HeadphonesIcon, label: 'Support Tickets', path: '/support' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-20 hidden md:block">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          Z
        </div>
        <h1 className="text-xl font-bold text-gray-800">Zomato Admin</h1>
      </div>

      <nav className="px-4 pb-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100 mt-auto">
        <div className="flex items-center gap-3 px-2">
          <img 
            src="https://picsum.photos/100/100" 
            alt="Admin" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">Admin Name</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;