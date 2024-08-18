// import React, { createContext, useContext, ReactNode } from 'react';
// import { IAuthContextType } from '../../interfaces';

// const AuthContext = createContext<IAuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const userRole: 'administrador' | 'vendedor' | 'comprador' = 'comprador';
//   return <AuthContext.Provider value={{ userRole }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

import React, { createContext, useContext, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface AuthContextProps {
  user: { role: string } | null;
  // Añade más campos según tu necesidad
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storeToken = useSelector((state: RootState) => state.auth.decode);
  const user = { role: storeToken.role }; // Ejemplo: reemplaza con la lógica real

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
