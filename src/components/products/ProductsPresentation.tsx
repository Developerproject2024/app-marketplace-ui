import React from 'react';
import { IProductsData } from '../../interfaces';

const ProductsPresentation: React.FC<IProductsData> = ({ data }) => {
  return (
    <div className="p-4 ">
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Nombre</th>
            <th className="px-4 py-2 border-b text-left">SKU</th>
            <th className="px-4 py-2 border-b text-left">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-left">{product.name}</td>
              <td className="px-4 py-2 border-b text-left">{product.sku}</td>
              <td className="px-4 py-2 border-b text-left">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPresentation;
