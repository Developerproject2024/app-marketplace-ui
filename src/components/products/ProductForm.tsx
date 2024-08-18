import React from 'react';
import { IProductsForm } from '../../interfaces';

const ProductForm: React.FC<IProductsForm> = ({ formData, errors, onChange, onSubmit }) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Crear producto</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            className={`mt-1 p-2 border rounded w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={onChange}
            className={`mt-1 p-2 border rounded w-full ${errors.sku ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.sku && <p className="text-red-500 text-sm">{errors.sku}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Cantidad</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={onChange}
            className={`mt-1 p-2 border rounded w-full ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.amount}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={onChange}
            className={`mt-1 p-2 border rounded w-full ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
