import { useState } from 'react';
import { Login, Modal } from '../users';

const Session = ({ show, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex flex-row justify-between bg-gray-400 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Crea una cuenta</h2>
          <button className=" text-2xl top-2 right-2 text-gray-600 hover:text-gray-900" onClick={() => onClose(false)}>
            ×
          </button>
        </div>

        <div className="p-4">
          <p className="mb-4">registrate o inicia una sesión para empezar a agregar productos a tu inventario</p>
          <div className="flex justify-end space-x-2 mt-20">
            <button
              className="bg-white text-black py-2 px-4 rounded  hover:bg-gray-400"
              onClick={() => setShowModalLogin(true)}
            >
              INICIA SESION
            </button>
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-700"
              onClick={() => setShowModal(true)}
            >
              REGISTRATE
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <Login showLogin={showModalLogin} onCloseLogin={() => setShowModalLogin(false)} />
    </div>
  );
};

export default Session;
