import React, { useState } from 'react';
import PriceFilter from '../../components/purchaser/PriceFilter';
import SearchComponent from '../../components/purchaser/SearchComponent';
import ProductCard from '../../components/purchaser/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const PurchaserContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(100);
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const products = useSelector((state: RootState) => state.products.items);
  const filteredProducts = products.filter(
    (product) =>
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase())) &&
      product.price >= minPrice &&
      product.price <= maxPrice,
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const handlePriceChange = (newMinPrice: number, newMaxPrice: number) => {
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  };
  return (
    <div className="flex gap-4 p-4">
      {/* Columna izquierda */}
      <div className="w-1/4">
        <PriceFilter onPriceChange={handlePriceChange} />
      </div>

      {/* Columna derecha */}
      <div className="w-3/4">
        <SearchComponent onSearch={handleSearch} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredProducts?.map((product) => (
            <ProductCard
              image="https://via.placeholder.com/150"
              name={product.name}
              price={product.price}
              sku={product.sku}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaserContainer;
