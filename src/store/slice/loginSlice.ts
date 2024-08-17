import { createSlice } from '@reduxjs/toolkit';

interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: '',
};

export const loginSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    token: (state, action) => {
      state.token = action.payload.access_token;
    },
  },
});

// Exporta las acciones generadas
export const { token } = loginSlice.actions;

// Exporta el reducer por defecto del slice
export default loginSlice.reducer;
