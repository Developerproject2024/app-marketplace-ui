import React, { useState } from 'react';
import { IProvider } from '../../interfaces';

interface ProviderFilterProps {
  providers: IProvider[]; // Lista de proveedores
  onFilterChange: (selectedProviders: number[]) => void; // Callback para manejar los cambios en el filtro
}

const ProviderFilter: React.FC<ProviderFilterProps> = ({ providers, onFilterChange }) => {
  const [selectedProviders, setSelectedProviders] = useState<number[]>([]);

  // Manejar cambios en la checklist
  const handleCheckboxChange = (id: number) => {
    const newSelectedProviders = selectedProviders.includes(id)
      ? selectedProviders.filter((providerId) => providerId !== id)
      : [...selectedProviders, id];

    setSelectedProviders(newSelectedProviders);
    onFilterChange(newSelectedProviders);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white">
      <h2 className="text-lg font-semibold mb-2">Filtrar por Proveedor</h2>
      {providers.map((provider) => (
        <div key={provider.id} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedProviders.includes(provider.id)}
              onChange={() => handleCheckboxChange(provider.id)}
            />
            <span className="ml-2">{provider.email}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProviderFilter;
