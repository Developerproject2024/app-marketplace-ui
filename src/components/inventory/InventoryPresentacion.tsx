interface InventoryPresentacionProps {
  show: boolean;
  onCloseInventory: (data: boolean) => void;
}

const InventoryPresentacion: React.FC<InventoryPresentacionProps> = ({ show, onCloseInventory }) => {
  const createdProduct = () => {
    onCloseInventory(true);
  };
  return (
    <>
      {!show && (
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center  bg-gray-100 p-6">
            <div className="w-96 md:w-1/4 p-4">
              <img
                src="https://via.placeholder.com/400"
                alt="Placeholder"
                className="w-[820px] h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
              <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">Crea tu producto</h1>
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center md:text-left">
                Organiza de manera profesional tu inventario
              </h2>
              <div className="flex space-x-4">
                <button className=" text-blue-400 py-2 px-4 rounded underline">Conoce más</button>
                <button
                  className="bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-200"
                  onClick={() => createdProduct()}
                >
                  CREAR PRODUCTO
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center text-blue-400 underline">Inicia sesión para poder ver tu inventario</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default InventoryPresentacion;
