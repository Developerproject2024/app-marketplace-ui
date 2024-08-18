import { createSlice } from '@reduxjs/toolkit';
import { ITokenState } from '../../interfaces';

const initialState: ITokenState = {
  token: '',
  decode: {
    username: '',
    role: 'comprador',
    exp: 0,
  },
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    token: (state, action) => {
      state.token = action.payload.access_token;
    },
    decode: (state, action) => {
      state.decode = action.payload;
    },
    clearToken: (state) => {
      state.decode = {
        username: '',
        role: 'comprador',
        exp: 0,
      };
      state.token = '';
    },
  },
});

// Exporta las acciones generadas
export const { token, decode, clearToken } = loginSlice.actions;

// Exporta el reducer por defecto del slice
export default loginSlice.reducer;
