import { useState } from 'react';
import { makeRequest } from '../../services/api';
import { useDispatch } from 'react-redux';
import { token } from '../../store/slice/loginSlice';
import { useNavigate } from 'react-router-dom';
import decodeToken from '../../utils/jwt-decode';

interface NewUser {
  email: string;
  password: string;
}

interface ILoginFormProps {
  onClose: (data: boolean) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onClose }) => {
  const [errors, setErrors] = useState<NewUser>({ email: '', password: '' });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    // Validar correo electrónico
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 0) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((value) => value === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      makeRequest<NewUser | { access_token: string } | null>(
        'http://localhost:3000/api/marketplace/auth/authentication',
        'POST',
        formData,
        '',
      )
        .then((item) => {
          onClose(false);
          dispatch(token(item));
          if (item != null && 'access_token' in item) {
            const decoded = decodeToken(item.access_token);
            if (decoded && decoded.role === 'vendedor') {
              navigate('/products');
            } else {
              navigate('/admin');
            }
          } else {
            // De lo contrario, es de tipo NewUser
            console.log('NewUser received:', item);
          }
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg ">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <button
          type="submit"
          className="w-32 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-200 hover:text-black"
        >
          Inicia sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
