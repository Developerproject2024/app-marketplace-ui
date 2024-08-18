import React, { useState } from 'react';

interface PriceFilterProps {
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState<number>(100);
  const [maxPrice, setMaxPrice] = useState<number>(5000);

  // Maneja los cambios en el slider
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(e.target.value);
    // Asegúrate de que minPrice no sea mayor que maxPrice
    if (newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
      onPriceChange(newMinPrice, maxPrice);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(e.target.value);
    // Asegúrate de que maxPrice no sea menor que minPrice
    if (newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
      onPriceChange(minPrice, newMaxPrice);
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filtro por Rango de Precio</h2>

      {/* Slider */}
      <div className="relative">
        {/* Slider para minPrice */}
        <input
          type="range"
          min="0"
          max="5000"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-lg"
          style={{ zIndex: 1 }}
        />
        {/* Slider para maxPrice */}
        <input
          type="range"
          min="0"
          max="5000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="absolute top-0 left-0 w-full h-2 bg-blue-500 rounded-lg"
          style={{ zIndex: 2 }}
        />
        <div className="flex justify-between mt-2">
          <span className="mt-2">${minPrice}</span>
          <span className="mt-2">${maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
