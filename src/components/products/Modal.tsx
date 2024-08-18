import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex flex-row justify-between bg-gray-400 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button className=" text-2xl top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="flex justify-end space-x-2 mt-20">
            {children}
            {/* <button className="bg-white text-black py-2 px-4 rounded  hover:bg-gray-400">INICIA SESION</button>
            <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-700">REGISTRATE</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
