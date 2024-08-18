import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  sku: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, sku }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg flex flex-col items-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-2 rounded-md" />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <h3 className="text-lg font-semibold mb-1">{sku}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default ProductCard;
