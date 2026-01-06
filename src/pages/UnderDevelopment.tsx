import React from 'react';
import { FiTool, FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface UnderDevelopmentProps {
  pageName?: string;
}

const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({ pageName = "This page" }) => {
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
          {/* Construction Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-orange-400">
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
            Under Development
          </h1>
          <p className="text-gray-600 mb-2 leading-relaxed">
            {pageName} is currently under development.
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            We're working hard to bring you this feature soon!
          </p>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-orange-400 h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-xs text-gray-500">75% Complete</p>
          </div>

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
              <FiTool className="w-4 h-4" />
              Check Other Features
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;