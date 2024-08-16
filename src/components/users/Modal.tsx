import React from 'react';
import SignUpForm from './SignUpForm';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 p-5">
      <div className="bg-white rounded-lg shadow-lg lg:w-1/4 md:w-1/2 sm: w-full">
        {/* Título del Modal */}
        <div className="bg-gray-400 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Crea una cuenta</h2>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-4">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
