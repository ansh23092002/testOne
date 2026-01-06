import React from 'react';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-24 mt-24 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-center min-h-[calc(100vh-96px)] px-4">
        <div className="text-center max-w-md mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
            <div className="w-32 h-32 mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-300">
                <path
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.978-5.708-2.525"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              <FiHome className="w-4 h-4" />
              Go to Dashboard
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <FiArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NotFound;