import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearToken } from '../../store/slice/loginSlice';
import { Link } from 'react-router-dom';

interface ToolbarProps {
  toggleMenu: () => void;
  children?: React.ReactNode;
}
const Toolbar: React.FC<ToolbarProps> = ({ toggleMenu }) => {
  const storeToken = useSelector((state: RootState) => state.auth.decode);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearToken());
  };
  return (
    <header className="bg-gray-400 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Company Name</div>
      <nav className="hidden md:flex space-x-4">
        {' '}
        <div>
          {storeToken.role != 'comprador' ? (
            <div>
              <h1>Rol: {storeToken.role}</h1>
              <button onClick={logout}>Salir</button>
            </div>
          ) : (
            <h1>
              <Link to="login">Inicia sesión</Link>
            </h1>
          )}
        </div>
      </nav>
      <button className="md:hidden block" onClick={toggleMenu}>
        Menu
      </button>
    </header>
  );
};

export default Toolbar;
