import React, { useState } from 'react';
import { WithRoleProtection } from '../../components/context/withRoleProtection';

// Define la interfaz para un producto
interface Product {
  name: string;
  sku: string;
  quantity: number;
}

const ProductsContainer: React.FC = () => {
  // Estado para manejar la lista de productos
  const [products, setProducts] = useState<Product[]>([]);

  // Maneja el evento de clic en el botón "Crear"
  const handleCreateProduct = () => {
    const newProduct: Product = {
      name: 'Producto Nuevo',
      sku: `SKU-${Math.floor(Math.random() * 10000)}`, // Genera un SKU aleatorio
      quantity: Math.floor(Math.random() * 100) + 1, // Genera una cantidad aleatoria entre 1 y 100
    };

    setProducts([...products, newProduct]); // Agrega el nuevo producto a la lista
  };

  return (
    <div className="p-4">
      <button onClick={handleCreateProduct} className="mb-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Crear Producto
      </button>

      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">SKU</th>
            <th className="px-4 py-2 border-b">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">{product.sku}</td>
              <td className="px-4 py-2 border-b">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WithRoleProtection(ProductsContainer, 'vendedor');
