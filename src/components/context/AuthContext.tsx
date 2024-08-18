import React, { createContext, useContext, ReactNode } from 'react';
import { IAuthContextType } from '../../interfaces';

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userRole: 'administrador' | 'vendedor' | 'comprador' = 'comprador';

  return <AuthContext.Provider value={{ userRole }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
