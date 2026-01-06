import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import UnderDevelopment from './pages/UnderDevelopment';
import { SidebarProvider } from './contexts/SidebarContext';

const App: React.FC = () => {
  return (
    <SidebarProvider>
      <Toaster position="top-right" richColors />
      <div className="min-h-screen bg-white">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<UnderDevelopment pageName="Orders" />} />
            <Route path="/customers" element={<UnderDevelopment pageName="Customers" />} />
            <Route path="/analytics" element={<UnderDevelopment pageName="Analytics" />} />
            <Route path="/settings" element={<UnderDevelopment pageName="Settings" />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </SidebarProvider>
  );
};

export default App;
