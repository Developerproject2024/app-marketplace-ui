import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthPresentation from '../../components/Auth/AuthPresentation';
import { Layout } from '../../components/layout';
import { IJwtPayload } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { decode } from '../../store/slice/loginSlice';
import { RootState } from '../../store/store';

// Define la estructura del payload del JWT

const AuthContainer: React.FC = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dispatch = useDispatch();
  const storeToken = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    // Supongamos que el token JWT se guarda en el localStorage después de iniciar sesión
    const token = storeToken;

    if (token) {
      try {
        const decodedToken = jwtDecode<IJwtPayload>(token);

        // Aquí puedes acceder a las propiedades del payload, como el rol del usuario
        setUserRole(decodedToken.role);

        dispatch(decode(decodedToken));

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
