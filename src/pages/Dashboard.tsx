import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiPackage, FiShoppingCart, FiUsers, FiDollarSign, FiStar } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { fetchProducts } from '../services/productService';
import type { Product } from '../services/productService';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Error loading products');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Calculate stats
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + product.price, 0);
  const avgRating = products.length > 0 
    ? products.reduce((sum, product) => sum + (product.rating?.rate || 0), 0) / products.length 
    : 0;
  const topProducts = products.slice(0, 5);

  const stats = [
    {
      icon: FiPackage,
      label: 'Total Products',
      value: totalProducts,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      icon: FiDollarSign,
      label: 'Total Value',
      value: `$${totalValue.toFixed(2)}`,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: FiShoppingCart,
      label: 'Total Orders',
      value: '156',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: FiUsers,
      label: 'Total Customers',
      value: '892',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading products: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-24 mt-24 transition-all duration-300 ease-in-out">
        {/* Page Title */}
        <div className="px-4 md:px-6 py-4 md:py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
        </div>

        {/* Main Content */}
        <main className="p-4 md:p-6 bg-white">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-purple-600 transition-colors shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`text-2xl ${stat.textColor}`} />
                  </div>
                  <FiTrendingUp className="text-green-500 text-xl" />
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Sales Overview */}
            <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                <FiTrendingUp className="text-purple-500" />
                Sales Overview
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">This Month</span>
                    <span className="text-green-500 font-semibold">+12.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Last Month</span>
                    <span className="text-gray-500 font-semibold">+8.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Rating */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                <FiStar className="text-yellow-500" />
                Product Performance
              </h2>
              <div className="flex items-center justify-center flex-col">
                <div className="text-6xl font-bold text-purple-500 mb-2">{avgRating.toFixed(1)}</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`text-2xl ${i < Math.floor(avgRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">Average Product Rating</p>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
              <FiPackage className="text-purple-500" />
              Top Products
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Product</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Category</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Price</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-medium">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {topProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.title} className="w-12 h-12 object-contain rounded bg-white p-1 border border-gray-200" />
                          <span className="font-medium text-gray-900 line-clamp-1">{product.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-green-600">${product.price}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <FiStar className="text-yellow-500 fill-yellow-500" />
                          <span className="text-gray-700">{product.rating?.rate || 'N/A'}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;