export interface ITokenState {
  token: string;
  decode: IJwtPayload;
}

export interface IJwtPayload {
  username: string;
  role: 'administrador' | 'vendedor' | 'comprador';
  exp: number; // Timestamp de expiración
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
  amount: string;
  id: number;
  name: string;
  price: string;
  sku: ISku;
}

export interface ISku {
  email: string;
  id: number;
  password: string;
}
