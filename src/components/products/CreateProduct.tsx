interface CreateProductProps {
  onchange: () => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({ onchange }) => {
  const create = () => {
    onchange();
  };
  return (
    <div className="flex justify-end mb-2">
      <button className="flex justify-endmb-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={create}>
        Crear Producto
      </button>
    </div>
  );
};

export default CreateProduct;
