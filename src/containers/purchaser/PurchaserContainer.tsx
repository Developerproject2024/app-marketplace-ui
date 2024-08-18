import React from 'react';
import PriceFilter from '../../components/purchaser/PriceFilter';
import SearchComponent from '../../components/purchaser/SearchComponent';
import ProductCard from '../../components/purchaser/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const PurchaserContainer: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  console.log(products);
  return (
    <div className="flex gap-4 p-4">
      {/* Columna izquierda */}
      <div className="w-1/4">
        <PriceFilter />
      </div>

      {/* Columna derecha */}
      <div className="w-3/4">
        <SearchComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {products?.map((product) => (
            <ProductCard image="https://via.placeholder.com/150" name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaserContainer;
