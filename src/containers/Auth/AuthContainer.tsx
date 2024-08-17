import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthPresentation from '../../components/Auth/AuthPresentation';
import { Layout } from '../../components/layout';

// Define la estructura del payload del JWT
interface JwtPayload {
  username: string;
  role: 'admin' | 'seller' | 'user'; // Define los roles posibles según tu aplicación
  exp: number; // Timestamp de expiración
}

const AuthContainer: React.FC = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Supongamos que el token JWT se guarda en el localStorage después de iniciar sesión
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInJvbGUiOiJ2ZW5kZWRvciIsImlhdCI6MTcyMzkzMDMwMCwiZXhwIjoxNzIzOTMzOTAwfQ.K-ru9S0IlThOtQ5Qeec2YCfIkIA1wVemcDhFn61_Ma0';

    if (token) {
      try {
        const decodedToken = jwtDecode<JwtPayload>(token);

        // Aquí puedes acceder a las propiedades del payload, como el rol del usuario
        setUserRole(decodedToken.role);

        console.log('User Role:', decodedToken.role);
        console.log('Token Expires At:', new Date(decodedToken.exp * 1000));
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <Layout toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}>
      <AuthPresentation userRole={userRole} />
    </Layout>
  );
};

export default AuthContainer;
