const Toolbar = ({ toggleMenu }) => {
  return (
    <header className="bg-gray-400 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Company Name</div>
      <nav className="hidden md:flex space-x-4">
        <a href="#home" className="hover:bg-gray-700 p-2 rounded">
          Inicia sesión
        </a>
      </nav>
      <button className="md:hidden block" onClick={toggleMenu}>
        Menu
      </button>
    </header>
  );
};

export default Toolbar;
