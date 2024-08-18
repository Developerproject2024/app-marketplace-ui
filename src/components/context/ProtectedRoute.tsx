import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { IProtectedRouteProps } from '../../interfaces';

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { userRole } = useAuth();

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
