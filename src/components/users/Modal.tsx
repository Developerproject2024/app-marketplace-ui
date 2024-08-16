import React from 'react';
import SignUpForm from './SignUpForm';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/4">
        {/* Título del Modal */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Crea una cuenta</h2>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-4">
          <SignUpForm />
          <div className="flex justify-end space-x-2">
            {/* Botón para Iniciar Sesión */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">REGISTRARSE</button>
            {/* Botón para Registrar */}
            <button className="text-blue-400 py-2 px-4 rounded hover:bg-blue-100">Inicia sesión</button>
          </div>
        </div>

        {/* Botón para Cerrar el Modal */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
