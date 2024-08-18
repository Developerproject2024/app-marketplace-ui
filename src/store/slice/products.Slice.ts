import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from '../../interfaces';

const initialState: IProducts = {
  items: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    items: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Exporta las acciones generadas
export const { items } = productsSlice.actions;

// Exporta el reducer por defecto del slice
export default productsSlice.reducer;
