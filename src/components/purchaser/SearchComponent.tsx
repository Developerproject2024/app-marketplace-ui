import React from 'react';

const SearchComponent: React.FC = () => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Buscar</h2>
      <input type="text" placeholder="Buscar producto..." className="p-2 border border-gray-300 rounded-md w-full" />
    </div>
  );
};

export default SearchComponent;
