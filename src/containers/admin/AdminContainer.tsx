import React, { useState } from 'react';
import { ProductCard } from '../../components/purchaser';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { WithRoleProtection } from '../../components/context/WithRoleProtection';
import { ProviderFilter } from '../../components/admin';

const AdminContainer: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const [data, setData] = useState(products);

  const uniqueUsersMap = new Map();
  products.forEach((item) => {
    const userId = item.user.id;
    if (!uniqueUsersMap.has(userId)) {
      uniqueUsersMap.set(userId, item.user);
    }
  });

  const uniqueUsers = Array.from(uniqueUsersMap.values());

  const providersData = uniqueUsers;

  const handleFilterChange = (selectedProviders: number[]) => {
    setData(products.filter((product) => selectedProviders.includes(product.user.id)));
    if (selectedProviders.length === 0) setData(products);
  };
  return (
    <div className="flex gap-4 p-4">
      {/* Columna izquierda */}
      <div className="w-1/4">
        <ProviderFilter providers={providersData} onFilterChange={handleFilterChange} />
      </div>

      {/* Columna derecha */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {data?.map((product) => (
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

export default WithRoleProtection(AdminContainer, 'administrador');
