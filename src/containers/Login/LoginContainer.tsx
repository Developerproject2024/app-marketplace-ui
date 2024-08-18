import React, { useState } from 'react';
import Session from '../../components/users/Session';
import { Login } from '../../components/users';

const LoginContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [showModalLogin, setShowModalLogin] = useState(false);
  return (
    <>
      <Session show={showModal} onClose={() => setShowModal(false)} />
      <Login showLogin={showModalLogin} onCloseLogin={() => setShowModalLogin(false)} />
    </>
  );
};

export default LoginContainer;
