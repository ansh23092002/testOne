import React from 'react';
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';

interface HeaderProps {
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
}

const Header: React.FC<HeaderProps> = ({ searchTerm = '', onSearchChange, placeholder = 'Search...' }) => {
  return (
    <header className="fixed top-4 left-4 right-4 z-30 bg-gray-200 p-2 rounded-3xl">
      <div className="flex items-center gap-2 md:gap-4">
        {/* Logo Text - Hidden on small screens */}
        <div className="hidden md:block bg-white px-4 py-2 rounded-3xl">
          <div className="w-20 md:w-28 h-12 md:h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-xl">LOGO</span>
          </div>
        </div>

        {/* Centered Search */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white p-2 rounded-3xl">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <input
                  type="text"
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="w-full pl-8 md:pl-10 pr-2 md:pr-4 py-1.5 md:py-2 text-sm md:text-base border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-1.5 md:p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <FiBell className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (user) - Simplified on mobile */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 bg-white p-2 rounded-3xl">
            <div className="text-right hidden sm:block">
              <p className="text-xs md:text-sm font-semibold text-gray-900">Super Admin</p>
              <p className="text-xs text-gray-500 hidden md:block">admin@example.com</p>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <FiUser className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;