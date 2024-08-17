import LoginForm from './LoginForm';

const Modal = ({ showLogin, onCloseLogin }) => {
  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 p-5">
      <div className="bg-white rounded-lg shadow-lg lg:w-1/4 md:w-1/2 sm: w-full">
        <div className="bg-gray-400 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Iniciar sesión</h2>
        </div>
        <div className="p-4">
          <LoginForm onClose={() => onCloseLogin(showLogin)} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
