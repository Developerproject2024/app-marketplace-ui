import { decode } from '../store/slice/loginSlice';
import { AppDispatch, store } from '../store/store'; // Ajusta la ruta según la ubicación de tu store
import { jwtDecode } from 'jwt-decode'; // Ajusta la ruta según la ubicación de tu slice

interface JwtPayload {
  exp: number;
  iat: number;
  sub: string;
  role: string;
  // Añade otros campos que esperes en el payload
}

const decodeToken = (token: string) => {
  const dispatch: AppDispatch = store.dispatch;

  try {
    console.log('Decodificando token...');
    const decoded = jwtDecode<JwtPayload>(token);
    dispatch(decode(decoded));
    return decoded;
  } catch (error) {
    console.error('Error al decodificar el token:', error);
  }
};

export default decodeToken;
