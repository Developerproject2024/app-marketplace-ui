export interface ITokenState {
  token: string;
  decode: IJwtPayload;
}

export interface IJwtPayload {
  userId: number;
  username: string;
  role: 'administrador' | 'vendedor' | 'comprador';
  exp: number;
}

export interface IAuthContextType {
  userRole: 'administrador' | 'vendedor' | 'comprador';
}

export interface IProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ('administrador' | 'vendedor' | 'comprador')[];
}

export interface IProducts {
  items: IProduct[];
}
export interface IProduct {
  amount: number;
  id: number;
  name: string;
  price: number;
  sku: string;
  user: IUser;
}

export interface IUser {
  email: string;
  id: number;
  password: string;
}

export interface IProductTable {
  name: string;
  sku: string;
  amount: number;
}

export interface IProductsData {
  data: IProductTable[];
}

export interface IProductsForm {
  formData: {
    name: string;
    sku: string;
    amount: number;
    price: number;
  };
  errors: {
    name?: string;
    sku?: string;
    amount?: string;
    price?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export interface IProvider {
  id: number;
  email: string;
}
export interface IProviderFilterProps {
  providers: IProvider[];
  onFilterChange: (selectedProviders: number[]) => void;
}
