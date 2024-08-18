import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface ToolbarProps {
  toggleMenu: () => void;
  children?: React.ReactNode;
}
const Toolbar: React.FC<ToolbarProps> = ({ toggleMenu }) => {
  const storeToken = useSelector((state: RootState) => state.auth.decode);
  return (
    <header className="bg-gray-400 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Company Name</div>
      <nav className="hidden md:flex space-x-4">{storeToken.role}Inicio</nav>
      <button className="md:hidden block" onClick={toggleMenu}>
        Menu
      </button>
    </header>
  );
};

export default Toolbar;
