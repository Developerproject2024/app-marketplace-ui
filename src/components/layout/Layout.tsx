import { ToolBar, Nav, Main } from './index';

interface LayoutProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ toggleMenu, isMenuOpen, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <ToolBar toggleMenu={toggleMenu}> {children}</ToolBar>

      <div className="flex flex-1">
        <Nav isOpen={isMenuOpen} />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
