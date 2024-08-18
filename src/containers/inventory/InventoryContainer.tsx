import React, { useState } from 'react';
import { InventoryPresentacion } from '../../components/inventory';
import Session from '../../components/users/Session';
import { Login } from '../../components/users';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// Define la estructura del payload del JWT

const InventoryContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const storeToken = useSelector((state: RootState) => state.auth.decode);

  console.log(storeToken);
  const register = (data: true) => {
    console.log('entro', data);
    setShowModal(data);
  };
  return (
    <>
      <InventoryPresentacion show={showModal} onCloseInventory={register} />;
      <Session show={showModal} onClose={() => setShowModal(false)} />
      <Login showLogin={showModalLogin} onCloseLogin={() => setShowModalLogin(false)} />
    </>
  );
};

export default InventoryContainer;
