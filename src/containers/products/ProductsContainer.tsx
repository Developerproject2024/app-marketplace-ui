import React, { useState } from 'react';
import { WithRoleProtection } from '../../components/context/WithRoleProtection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CreateProduct, ProductForm, ProductsPresentation } from '../../components/products';
import { makeRequest } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { items } from '../../store/slice/products.Slice';
import { IProduct } from '../../interfaces';

type FormData = {
  name: string;
  sku: string;
  amount: number;
  price: number;
};

const ProductsContainer: React.FC = () => {
  const apiUrl = 'http://52.15.66.81:3000/api/marketplace';
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const products = useSelector((state: RootState) => state.products.items);
  const user = useSelector((state: RootState) => state.auth.decode);
  const filteredProducts: IProduct[] = products.filter((product) => product.user.id == user.userId);

  const storeToken = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        validate1: (value: string) => value.trim() !== '',
        message: 'Nombre es requerido',
      },
      sku: {
        validate1: (value: string) => value.trim() !== '',
        message: 'SKU es requerido',
      },
      amount: {
        validate1: (value: number) => value > 0,
        message: 'Cantidad debe ser mayor que 0',
      },
      price: {
        validate1: (value: number) => value > 0,
        message: 'Precio debe ser mayor que 0',
      },
    };

    // Iterar sobre las reglas de validación
    Object.keys(validationRules).forEach((field) => {
      const validateRule = validationRules[field as keyof typeof validationRules];
      const value = formData[field as keyof FormData];

      if (!validateRule.validate1(value as never)) {
        newErrors[field as keyof FormData] = validateRule.message;
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
      const data = {
        ...formData,
        userId: 4,
      };
      makeRequest(`${apiUrl}/products`, 'POST', data, storeToken)
        .then((product) => {
          setIsModalOpen(false);
          dispatch(items(product));
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
          <div className="flex flex-row items-center  ">
            <button onClick={closeModal}>
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
              regresar
            </button>
          </div>
          <ProductForm formData={formData} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      )}
    </>
  );
};

export default WithRoleProtection(ProductsContainer, 'vendedor');
