import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './slice/loginSlice';
import productsSlice from './slice/products.Slice';

export const store = configureStore({
  reducer: {
    auth: loginSlice,
    products: productsSlice,
    // otros reducers
  },
});

// Tipos derivados del store para usar en todo el proyecto
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
