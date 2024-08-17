import React, { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  userRole: 'admin' | 'seller' | 'guest';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userRole: 'admin' | 'seller' | 'guest' = 'admin'; // Ejemplo de rol (esto debe venir de tu lógica de autenticación)

  return <AuthContext.Provider value={{ userRole }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
