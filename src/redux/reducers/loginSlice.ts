import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoginState = {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

const initialState: LoginState = {
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setErrors: (state, action: PayloadAction<LoginState['errors']>) => {
      state.errors = action.payload;
    },
  },
});

export const {setEmail, setPassword, setErrors } = loginSlice.actions;
export default loginSlice.reducer;
