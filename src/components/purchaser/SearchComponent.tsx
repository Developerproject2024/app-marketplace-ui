import React, { ChangeEvent } from 'react';

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Buscar</h2>
      <input
        type="text"
        placeholder="Buscar por nombre y/o SKU"
        className="p-2 border border-gray-300 rounded-md w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchComponent;
