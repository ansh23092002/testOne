import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FiPackage,
  FiHome,
  FiBarChart,
  FiSettings,
  FiUsers,
  FiShoppingCart
} from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FiPackage, label: 'Products', path: '/products' },
    { icon: FiShoppingCart, label: 'Orders', path: '/orders' },
    { icon: FiUsers, label: 'Customers', path: '/customers' },
    { icon: FiBarChart, label: 'Analytics', path: '/analytics' },
  ];

  return (
    <div className="hidden lg:flex fixed left-4 top-24 bottom-4 w-16 lg:w-20 flex-col items-center justify-between py-4 lg:py-6 z-50">
      {/* Menu Icons */}
      <div className="flex-1 flex flex-col justify-center space-y-1 lg:space-y-2">
        <div className="bg-white p-1.5 lg:p-2 rounded-3xl shadow-lg">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="group relative"
            >
              <div
                className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gray-900 text-white'
                    : 'hover:bg-gray-200'
                }`}
              >
                <item.icon
                  className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110 ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-500'
                  }`}
                />
              </div>
              {/* Tooltip on hover */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Icons (Settings) */}
      <div className="bg-white p-1.5 lg:p-2 rounded-3xl shadow-lg">
        <button
          onClick={() => navigate('/settings')}
          className="group relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          <FiSettings
            className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110 ${
              location.pathname === '/settings' ? 'text-gray-900' : 'text-gray-500'
            }`}
          />
          {/* Tooltip on hover */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50">
            Settings
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
