import React from 'react';
import { useAuth } from './AuthContext'; // Ajusta la ruta según la ubicación del archivo
import { Navigate } from 'react-router-dom';

export const WithRoleProtection = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole: string,
) => {
  const ComponentWithRoleProtection: React.FC<P> = (props) => {
    const { user } = useAuth();

    if (user?.role !== requiredRole) {
      // Puedes redirigir a otra página o mostrar un mensaje de acceso denegado
      return <Navigate to="/unauthorized" replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithRoleProtection;
};
