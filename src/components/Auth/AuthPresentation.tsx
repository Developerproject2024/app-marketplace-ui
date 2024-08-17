import React from 'react';

interface AuthPresentationProps {
  userRole: string | null;
}

const AuthPresentation: React.FC<AuthPresentationProps> = ({ userRole }) => {
  return <div>{userRole ? <h1>Rol: {userRole}</h1> : <h1>Inicia sesión</h1>}</div>;
};

export default AuthPresentation;
