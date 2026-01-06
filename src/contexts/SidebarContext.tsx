import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface SidebarContextType {
  sidebarWidth: number;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const sidebarWidth = 64; // Fixed width for compact sidebar

  return (
    <SidebarContext.Provider value={{ sidebarWidth }}>
      {children}
    </SidebarContext.Provider>
  );
};