import { useState } from 'react';
import { ToolBar, Nav, Main } from './index';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Toolbar */}
      <ToolBar toggleMenu={toggleMenu} />

      <div className="flex flex-1">
        {/* Menú de Navegación */}
        <Nav isOpen={isMenuOpen} />

        {/* Contenido Principal */}
        <Main />
      </div>
    </div>
  );
};

export default Layout;
