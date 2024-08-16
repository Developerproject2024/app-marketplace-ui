const Nav = ({ isOpen }) => {
  return (
    <aside className={`bg-white text-black w-64 mt-10 p-4 space-y-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <ul>
        <li className="hover:bg-gray-400 p-2 rounded disabled">Dashboard</li>
        <li className="hover:bg-gray-400 p-2 rounded">Cotizaciones</li>
        <li className="hover:bg-gray-400 p-2 rounded">Ordenes</li>
        <li className="hover:bg-gray-400 p-2 rounded">Inventario</li>
      </ul>
    </aside>
  );
};

export default Nav;
