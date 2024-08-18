import React, { useState } from 'react';
import { WithRoleProtection } from '../../components/context/WithRoleProtection';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CreateProduct, Modal, ProductForm, ProductsPresentation } from '../../components/products';
import { IProduct } from '../../interfaces';
import { makeRequest } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const ProductsContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const products = useSelector((state: RootState) => state.products.items);
  const user = useSelector((state: RootState) => state.auth.decode);
  const filteredProducts: IProduct[] = products.filter((product) => product.user.id == user.userId);

  const storeToken = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    amount: 0,
    price: 0,
  });

  const [errors, setErrors] = useState({
    name: '',
    sku: '',
    amount: '',
    price: '',
  });

  const validate = () => {
    const newErrors = { name: '', sku: '', amount: '', price: '' };
    let isValid = true;

    // Definir las reglas de validación
    const validationRules = {
      name: {
        validate: (value: string) => value.trim() !== '',
        message: 'Nombre es requerido',
      },
      sku: {
        validate: (value: string) => value.trim() !== '',
        message: 'SKU es requerido',
      },
      amount: {
        validate: (value: number) => value > 0,
        message: 'Cantidad debe ser mayor que 0',
      },
      price: {
        validate: (value: number) => value > 0,
        message: 'Precio debe ser mayor que 0',
      },
    };

    // Iterar sobre las reglas de validación
    Object.keys(validationRules).forEach((field) => {
      const { validate, message } = validationRules[field as keyof typeof validationRules];
      const value = formData[field as keyof typeof formData];

      if (!validate(value)) {
        newErrors[field as keyof typeof newErrors] = message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amount' || name === 'price' ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData);
      const data = {
        ...formData,
        userId: 4,
      };
      makeRequest('http://localhost:3000/api/marketplace/products', 'POST', data, storeToken)
        .then((product: any) => {
          setIsModalOpen(false);
          // setData(item);
          // onClose(false);
          // dispatch(token(item));
          // decodeToken(item.access_token);
          navigate('/products');
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return (
    <>
      {!isModalOpen ? (
        <>
          <CreateProduct onchange={openModal} />
          <ProductsPresentation data={filteredProducts} />
        </>
      ) : (
        <div>
          <h1>regresar</h1>
          <ProductForm formData={formData} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      )}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} title="Mi Modal">
        <p>Contenido del modal aquí.</p>
        <button onClick={closeModal} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4">
          Cerrar
        </button>
      </Modal> */}
    </>
  );
};

export default WithRoleProtection(ProductsContainer, 'vendedor');
