import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearToken } from '../../store/slice/loginSlice';

interface ToolbarProps {
  toggleMenu: () => void;
  children?: React.ReactNode;
}
const Toolbar: React.FC<ToolbarProps> = ({ toggleMenu }) => {
  const storeToken = useSelector((state: RootState) => state.auth.decode);
  const dispatch = useDispatch();

  const fabio = () => {
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
              <button onClick={fabio}>Salir</button>
            </div>
          ) : (
            <h1>Inicia sesión</h1>
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
