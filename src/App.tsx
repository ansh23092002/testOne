import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import { SidebarProvider } from './contexts/SidebarContext';

const App: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-white">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </div>
    </SidebarProvider>
  );
};

export default App;
