import { useState } from 'react';
import { makeRequest } from '../../services/api';

interface NewUser {
  email: string;
  password_confirmation: string;
  password_new: string;
}

interface SignUpFormProps {
  onClose: (data: boolean) => void;
}

export interface IUser {
  email: string;
  password: string;
  role: Role;
  id: number;
}

export interface Role {
  id: number;
  name: string;
}

interface ErrorMessage {
  message: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose }) => {
  const [data, setData] = useState<ErrorMessage>();
  const [errors, setErrors] = useState<NewUser>({ email: '', password_confirmation: '', password_new: '' });
  const [formData, setFormData] = useState({
    email: '',
    password_new: '',
    password_confirmation: '',
  });

  const validateForm = () => {
    const newErrors = {
      email: '',
      password_new: '',
      password_confirmation: '',
    };

    // Validar correo electrónico
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Validar contraseña
    if (!formData.password_new) {
      newErrors.password_new = 'Password is required';
    } else if (formData.password_new.length < 6) {
      newErrors.password_new = 'Password must be at least 6 characters long';
    }

    // Validar confirmación de contraseña
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = 'Please confirm your password';
    } else if (formData.password_confirmation !== formData.password_new) {
      newErrors.password_confirmation = 'Verifique las contraseña son diferentes';
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      makeRequest<NewUser>('http://localhost:3000/api/marketplace/users', 'POST', formData, '')
        .then((user: any) => {
          console.log('datos user', user);
          setData(user);
          onClose(false);
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg ">
      {/* Campo de Email */}
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
        {data?.message && <p className="text-red-500 text-sm mt-1">{data?.message}</p>}
      </div>

      {/* Campo de Contraseña */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Contraseña
        </label>
        <input
          type="password"
          id="password_new"
          name="password_new"
          value={formData.password_new}
          onChange={(e) => handleChange(e)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.password_new && <p className="text-red-500 text-sm mt-1">{errors.password_new}</p>}
      </div>

      {/* Campo de Confirmar Contraseña */}
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={(e) => handleChange(e)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>}
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <button type="submit" className="w-32 bg-gray-300 text-gray-500 py-2 px-4 rounded hover:bg-blue-700">
          REGISTRARSE
        </button>
        <button type="submit" className="w-32  text-blue-400 py-2 px-4 rounded hover:bg-blue-700 mt-1">
          Inicia sesión
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
